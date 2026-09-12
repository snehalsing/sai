# 🛡️ Shield-AI | Cyber Threat Detection & SOC Defense Platform

> **Architectural & UI Design System Manual**  
> *Problem Statement:* **PS-006: AI-Powered Real-Time Cyber Threat Detection & SOC Intelligence**  
> *Target Framework:* Next.js 14+ (App Router), TypeScript, Tailwind CSS, Lucide React, Recharts.

---

## 1. Project Overview & Architecture

**Shield-AI** is a high-performance Security Operations Center (SOC) dashboard engineered for real-time telemetry stream ingestion (CIC-IDS2017 dataset baseline), zero-day anomaly detection via unsupervised **Isolation Forest**, supervised threat classification via **XGBoost**, and transparent **SHAP (Shapley Additive Explanations)** feature attribution trees.

### 🧰 Tech Stack
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom pastel SOC design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Visualization**: [Recharts](https://recharts.org/) (ResponsiveContainer, LineChart, BarChart, PieChart)
- **Theme Management**: `next-themes` (Dark/Light mode support with zero layout shift)

---

## 2. Design System & Theme Tokens

Shield-AI implements a curated **"SOC Pastel"** palette specifically designed to reduce visual fatigue for security analysts during 24/7 monitoring while clearly differentiating alert severities.

### 🎨 SOC Pastel Color Palette

| Token Name | Hex Code | Opacity Variant | SOC Context / Usage |
| :--- | :--- | :--- | :--- |
| **Muted Red (Critical)** | `#A36361` | `rgba(163, 99, 97, 0.2)` | Critical Intrusions, False Negatives, SYN Floods, Risk $\ge 80$ |
| **Peach / Coral (High)** | `#E8B298` | `rgba(232, 178, 152, 0.2)` | High Severity, Port Scans, Secondary decision drivers |
| **Dusty Pink (Medium)** | `#D3A29D` | `rgba(211, 162, 157, 0.2)` | Medium Severity, Botnet C2, Advisory mitigations |
| **Accent Gold (Highlight)** | `#EECC8C` | `rgba(238, 204, 140, 0.15)` | Primary interactive accents, Most Popular tier, SHAP top driver |
| **Sage Green (Safe / Low)** | `#9EABA2` | `rgba(158, 171, 162, 0.2)` | Benign / Normal baseline, Active stream pulses, Low risk |
| **Mint / Ice (Resolved)** | `#BDD1C5` | `rgba(189, 209, 197, 0.2)` | Mitigated alerts, EDR healthy indicators, Live text |

### 🌗 Dark & Light Surface Backgrounds

```css
/* Light Mode */
--background-light: #F9FAFB;
--surface-light:    #FFFFFF;
--surface-hover:    #F3F4F6;
--border-light:     rgba(0, 0, 0, 0.08);
--text-primary:     #111827;
--text-muted:       #6B7280;

/* Dark Mode (Default) */
--background-dark:  #0B0F19;
--surface-dark:     #1A1F2B;
--surface-hover:    #1E2532;
--border-dark:      rgba(255, 255, 255, 0.07);
--text-primary:     #FFFFFF;
--text-muted:       #9CA3AF;
```

### 📐 Standard Layout Constraints & Anti-Overflow Rules
1. **Outer Frame**: `flex h-screen w-full overflow-hidden bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-white`
2. **Left Sidebar**: `md:static md:translate-x-0 md:h-screen md:shrink-0 md:w-20 lg:w-64`
3. **Right Content Wrapper**: `flex flex-col flex-1 w-full h-full min-w-0 overflow-hidden`
4. **TopBar**: `h-16 shrink-0 w-full z-30 bg-white dark:bg-[#0B0F19] border-b border-gray-200 dark:border-white/5`
5. **Scrollable Viewport**: `<main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 w-full min-w-0">`
6. **Card Heights & Buttons**: Cards use `h-full flex flex-col justify-between` with `mt-auto` on button containers.

---

## 3. Folder Structure & Information Architecture

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root Next.js layout with font & AppLayout wrapper
│   │   ├── page.tsx                      # Route: / (Main Threat Matrix Overview)
│   │   ├── globals.css                   # Tailwind directives & custom scrollbar utilities
│   │   ├── providers.tsx                 # next-themes ThemeProvider client wrapper
│   │   ├── alerts/
│   │   │   └── page.tsx                  # Route: /alerts (Live telemetry triage table)
│   │   ├── analytics/
│   │   │   └── page.tsx                  # Route: /analytics (MITRE ATT&CK & SHAP trees)
│   │   ├── model-performance/
│   │   │   └── page.tsx                  # Route: /model-performance (Confusion matrix & metrics)
│   │   ├── settings/
│   │   │   └── page.tsx                  # Route: /settings (AI engine toggles & thresholds)
│   │   ├── subscription/
│   │   │   └── page.tsx                  # Route: /subscription (4-Tier capacity pricing grid)
│   │   ├── sign-in/
│   │   │   └── page.tsx                  # Route: /sign-in (Enterprise split-screen auth)
│   │   └── sign-out/
│   │       └── page.tsx                  # Route: /sign-out (Session terminated confirmation)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppLayout.tsx             # Root layout orchestrator & auth route bypass
│   │   │   ├── Sidebar.tsx               # Primary navigation & detection modules shortcuts
│   │   │   └── TopBar.tsx                # Search, live stream toggle, notifications, profile
│   │   ├── ui/
│   │   │   ├── Card.tsx                  # Reusable surface card container
│   │   │   ├── SeverityBadge.tsx         # Standardized pastel severity pill
│   │   │   └── ThemeToggle.tsx           # Sun/Moon dark-mode switcher
│   │   └── widgets/
│   │       ├── AsciiDashboard.tsx        # Terminal retro ASCII view
│   │       ├── AsciiModal.tsx            # Overlay modal displaying ASCII SOC telemetry
│   │       ├── ClassificationDonutChart.tsx # Recharts Pie/Donut attack breakdown
│   │       ├── ExplanationModal.tsx      # XAI SHAP explainability drawer on row click
│   │       ├── KPIRow.tsx                # 6-Card KPI telemetry grid
│   │       ├── TargetedDevicesList.tsx   # Top-down scrollable endpoint list (10 items)
│   │       ├── ThreatTable.tsx           # Interactive live threat detections table
│   │       └── TrafficTimelineChart.tsx  # Recharts 24h normal vs malicious line chart
│   ├── lib/
│   │   └── mock-data.ts                  # Centralized data contracts & 15 security records
│   ├── mock-data/
│   │   └── threats.ts                    # Timeline, classifications & 10 targeted endpoints
│   └── types/
│       └── threat.ts                     # TypeScript interface definitions
├── next.config.mjs                       # Webpack polling enabled for live HMR
├── tailwind.config.ts                    # Extended theme tokens & pastel colors
└── tsconfig.json                         # TypeScript compiler options
```

---

## 4. Routes Breakdown

| Route | View Name | Key Features & Layout Composition |
| :--- | :--- | :--- |
| **`/`** | **Overview Dashboard** | • AI Pipeline Header (`XGBoost + Isolation Forest + SHAP`)<br>• 6-Card KPI Grid (`Total Events`, `Threats`, `Critical`, `High`, `AI Latency`, `Threat Level`)<br>• Traffic Timeline (2/3) + Attack Donut (1/3)<br>• Live Threat Table (2/3) + Targeted Endpoints (1/3 with custom scrollbar)<br>• Interactive XAI Drawer Modal |
| **`/alerts`** | **Live Alert Triage** | • Search filter & multi-select severity dropdowns<br>• Expandable inline accordion panels<br>• Isolation Forest anomaly score gauges (0.000 - 1.000)<br>• Human-readable root-cause explanations<br>• Actionable mitigation playbooks with 1-click clipboard copy |
| **`/analytics`** | **Threat Analytics & XAI** | • MITRE ATT&CK signature inspector list<br>• Horizontal Recharts SHAP Attribution BarChart with custom tooltips<br>• Primary decision driver highlights (`⭐ Primary Decision Driver`)<br>• BGP Flowspec & iptables defensive code snippets |
| **`/model-performance`** | **Model Performance** | • 4 Stat Cards: Precision (`94.2%`), Recall (`96.8%` prioritized), F1 (`95.4%`), ROC-AUC (`0.98`)<br>• 2x2 Confusion Matrix highlighting False Negatives (`FN = 12`)<br>• Grouped BarChart for Precision vs. Recall across 4 attack categories<br>• FPR vs. FNR security trade-off callout |
| **`/settings`** | **AI Engine Config** | • Detection module toggle switches (Isolation Forest, XGBoost, SHAP)<br>• Range sliders for Auto-Mitigate (`0-100%`) & Anomaly Sensitivity<br>• Elasticsearch & Edge Firewall API Key credential forms<br>• AES-256 GCM encrypted sync toast |
| **`/subscription`** | **Capacity Pricing** | • 4-Column responsive grid (`grid-cols-1 md:grid-cols-2 xl:grid-cols-4`)<br>• **Community ($0 Free forever)**, Starter ($199/mo), Professional ($699/mo, Most Popular), Enterprise (Custom)<br>• Monthly / Annual billing toggle (Save 20%)<br>• Uniform card height with `mt-auto` button alignment |
| **`/sign-in`** | **Enterprise Auth** | • Full-screen split layout (`hidden lg:flex lg:w-1/2` branding + `w-full lg:w-1/2` auth form)<br>• Mock system terminal showing daemon boot sequence<br>• Email/password fields + Enterprise SSO (Okta / SAML) |
| **`/sign-out`** | **Session Terminated** | • Centered full-screen card with green CheckCircle (`#9EABA2`)<br>• Token invalidation notice + "Return to Sign In" button |

---

## 5. Core Components & Logic

### 1. `TopBar.tsx`
- **State Variables**:
  - `isLive` (boolean): Toggles stream ingestion status between `LIVE STREAM` (pulsing `#9EABA2` dot) and `PAUSED` (`#A36361` dot).
  - `isNotifOpen` (boolean): Controls recent alert dropdown.
  - `isProfileOpen` (boolean): Controls SOC Analyst profile dropdown with direct links to `/settings` and `/sign-out`.
- **Search Bar**: Debounced text search with keyboard shortcut badge (`⌘K`).

### 2. `Sidebar.tsx`
- **Active Route Highlighting**: Uses `usePathname()` to highlight active links with `bg-gray-100 dark:bg-[#1A1F2B]` and `#EECC8C` accent borders.
- **Detection Modules Section**: Quick-access shortcuts to `/settings` with animated status dots for Isolation Forest (`#9EABA2`), SHAP (`#9EABA2`), and Flowspec (`#EECC8C`).
- **Footer Status**: "AI Engine Online" badge with 12ms latency indicator.

### 3. `KPIRow.tsx` (6-Card Grid)
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
  {/* Card 1: Total Events -> 18,390 (Activity icon) */}
  {/* Card 2: Threats -> 330 (AlertTriangle icon) */}
  {/* Card 3: Critical -> 20 (Zap icon) */}
  {/* Card 4: High -> 73 (TrendingUp icon) */}
  {/* Card 5: AI Latency -> 23.2ms (Clock icon) */}
  {/* Card 6: Threat Level -> CRITICAL (text-[#A36361], Shield icon) */}
</div>
```

### 4. `AsciiModal.tsx`
Renders a high-impact retro terminal overlay (`z-[100]`, backdrop blur, `#0B0F19` background) containing the formatted ASCII matrix:

```text
╔══════════════════════════════════════╗
║       CYBER THREAT DASHBOARD         ║
╠══════════════════════════════════════╣
║                                      ║
║  Total Events       12,450           ║
║  Threats              327            ║
║  Critical              18            ║
║  High                  72            ║
║                                      ║
╠══════════════════════════════════════╣
║                                      ║
║ Attack Distribution                  ║
║                                      ║
║ DDoS           ██████████            ║
║ Port Scan      ███████               ║
║ Botnet         █████                 ║
║ Exploit        ████                  ║
║                                      ║
╠══════════════════════════════════════╣
║ Recent Alerts                        ║
║                                      ║
║ DDoS     HIGH      94%               ║
║ Scan     MEDIUM    87%               ║
║ Botnet   CRITICAL  96%               ║
╚══════════════════════════════════════╝
```

### 5. `SeverityBadge.tsx`
Standardizes severity mapping:
- **`CRITICAL` / `HIGH`**: `bg-[#A36361]/20 text-[#A36361] border-[#A36361]/30`
- **`MEDIUM` / `WARNING`**: `bg-[#E8B298]/20 text-[#C47B5E] dark:text-[#E8B298] border-[#E8B298]/30`
- **`LOW` / `SAFE` / `NORMAL`**: `bg-[#9EABA2]/20 text-[#5F6F65] dark:text-[#BDD1C5] border-[#9EABA2]/30`

---

## 6. Mock Data Contracts (`src/lib/mock-data.ts`)

```typescript
export interface SecurityAlertRecord {
  id: string;
  timestamp: string;
  src_ip: string;
  dst_ip: string;
  is_attack: boolean;
  attack_type: string;
  confidence: number;            // 0.0 - 100.0
  risk_score: number;            // 0 - 100
  severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  anomaly_score: number;         // 0.000 - 1.000 (Isolation Forest)
  human_explanation: string;     // XAI Root Cause summary
  recommended_actions: string[]; // Automated mitigation playbooks
}

export interface TargetedDevice {
  id: string;
  name: string;
  ip: string;
  type: 'Server' | 'Firewall' | 'Database' | 'Workstation' | 'Gateway';
  threatCount: number;
  status: 'Critical' | 'Warning' | 'Healthy';
  lastPing: string;
}

export interface ThreatVector {
  id: string;
  name: string;
  category: string;
  frequency: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  description: string;
  shapFeatures: { feature: string; impact: number }[];
  mitigationPlaybook: { action: string; codeSnippet: string };
}
```

---

## 7. Step-by-Step Recreation Guide (From Scratch)

To recreate this exact dashboard in a clean environment:

1. **Scaffold Next.js Project**:
   ```bash
   npx create-next-app@latest shield-ai-frontend --typescript --tailwind --app --src-dir --no-eslint
   cd shield-ai-frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install lucide-react recharts clsx tailwind-merge next-themes
   ```

3. **Configure Tailwind Tokens (`tailwind.config.ts`)**:
   Add the pastel severity colors (`#A36361`, `#E8B298`, `#9EABA2`, `#EECC8C`) and custom surface colors (`#0B0F19`, `#1A1F2B`).

4. **Add Scrollbar Utilities (`src/app/globals.css`)**:
   Include `.scrollbar-thin`, `::-webkit-scrollbar` rules, and custom thumb colors for `#2E364A`.

5. **Configure Webpack Polling (`next.config.mjs`)**:
   Enable `watchOptions.poll = 1000` to prevent Windows/OneDrive file-locking issues during dev mode.

6. **Build Components in Order**:
   - `src/components/ui/Card.tsx` & `SeverityBadge.tsx`
   - `src/components/ui/ThemeToggle.tsx` & `ThemeProvider.tsx`
   - `src/components/layout/Sidebar.tsx` & `TopBar.tsx`
   - `src/components/layout/AppLayout.tsx` (with `/sign-in` & `/sign-out` full-screen bypass)
   - `src/components/widgets/` (KPIRow, TargetedDevicesList, ThreatTable, Charts, Modals)

7. **Assemble App Router Pages**:
   - Main Overview: `src/app/page.tsx`
   - Telemetry Triage: `src/app/alerts/page.tsx`
   - Explainable AI: `src/app/analytics/page.tsx`
   - Model Metrics: `src/app/model-performance/page.tsx`
   - Settings & Thresholds: `src/app/settings/page.tsx`
   - Capacity Plans: `src/app/subscription/page.tsx`
   - Authentication: `src/app/sign-in/page.tsx` & `src/app/sign-out/page.tsx`

8. **Start Dev Server**:
   ```bash
   npm run dev
   ```
   Open **`http://localhost:3000`** in your browser.

---

## 📄 License & Attribution
Designed and built for **Shield-AI Cybersecurity Defense**.  
Compliant with CIC-IDS2017 intrusion benchmark specifications and MITRE ATT&CK matrix standards.
