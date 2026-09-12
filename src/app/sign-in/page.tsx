'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Shield, 
  Lock, 
  Mail, 
  ArrowRight, 
  KeyRound, 
  Terminal, 
  CheckCircle2, 
  Activity, 
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('analyst@shield-ai.soc');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push('/');
    }, 400);
  };

  return (
    <div className="min-h-screen flex w-full bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-white transition-colors duration-200">
      {/* Left side (Branding & SOC Telemetry Stat Block) */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-[#0B0F19] p-12 text-white relative overflow-hidden border-r border-white/5">
        {/* Background Subtle Gradient Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#EECC8C]/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#A36361]/10 blur-3xl pointer-events-none" />

        {/* Top: Sleek Shield-AI Logo */}
        <div className="relative z-10 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#1A1F2B] border border-[#EECC8C]/40 flex items-center justify-center shadow-glow group-hover:border-[#EECC8C] transition-colors">
              <Shield className="w-5 h-5 text-[#EECC8C]" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-xl tracking-tight text-white">Shield</span>
                <span className="text-[#EECC8C] font-bold text-xl tracking-tight">AI</span>
              </div>
              <p className="text-[10px] uppercase font-semibold tracking-wider text-gray-400">
                Cyber Threat Defense Platform
              </p>
            </div>
          </Link>

          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#BDD1C5]">
            SOC Portal v2.4
          </span>
        </div>

        {/* Middle: Brief stat block / testimonial */}
        <div className="relative z-10 space-y-6 max-w-lg my-auto py-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EECC8C]/15 border border-[#EECC8C]/30 text-[#EECC8C] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous AI Pipeline Active</span>
          </div>

          <blockquote className="text-2xl font-bold leading-snug tracking-tight text-white/95">
            &ldquo;Securing over 100GB of daily telemetry with hybrid ML detection.&rdquo;
          </blockquote>

          <p className="text-xs text-gray-400 leading-relaxed">
            Supervised XGBoost classification paired with Isolation Forest unsupervised anomaly scores and SHAP explainability trees for zero-day threat defense.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div>
              <p className="text-xl font-bold font-mono text-[#EECC8C]">96.8%</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">Recall Rate</p>
            </div>
            <div>
              <p className="text-xl font-bold font-mono text-[#BDD1C5]">&lt;25ms</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">AI Inference</p>
            </div>
            <div>
              <p className="text-xl font-bold font-mono text-white">48.2k</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">Pkts / Sec</p>
            </div>
          </div>
        </div>

        {/* Bottom: Mock Terminal Window */}
        <div className="relative z-10">
          <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 font-mono text-xs text-[#9EABA2] shadow-2xl space-y-1.5">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-[#EECC8C]" />
                <span>shield-ai-daemon.sys</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9EABA2] animate-pulse" />
                <span>ONLINE</span>
              </span>
            </div>
            <p className="text-gray-400">[12:00:01] Initializing XGBoost Engine... <span className="text-[#BDD1C5]">OK</span></p>
            <p className="text-gray-400">[12:00:02] Loading SHAP Explainability module... <span className="text-[#BDD1C5]">OK</span></p>
            <p className="text-gray-400">[12:00:03] Binding BGP Flowspec auto-mitigation daemon... <span className="text-[#EECC8C]">READY</span></p>
            <p className="text-gray-400">[12:00:04] CIC-IDS Telemetry Stream connected [10 Gbps]</p>
          </div>
        </div>
      </div>

      {/* Right side (Auth Form) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between bg-white dark:bg-[#1A1F2B] px-6 sm:px-12 py-8 min-h-screen">
        {/* Top Right Header with Theme Toggle */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto">
          <div className="lg:hidden flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#EECC8C]" />
            <span className="font-bold text-base text-gray-900 dark:text-white">Shield-AI</span>
          </div>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>

        {/* Center: The Form Card */}
        <div className="max-w-md w-full mx-auto my-auto py-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome back, Analyst
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Sign in to access the SOC Dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label 
                htmlFor="email-input" 
                className="block text-xs font-semibold text-gray-700 dark:text-gray-300"
              >
                Analyst Email Address
              </label>
              <div className="relative">
                <input
                  id="email-input"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="analyst@shield-ai.soc"
                  className="bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-white/10 rounded-md p-3 w-full mt-2 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#EECC8C]/50 focus:border-[#EECC8C] transition"
                />
                <Mail className="w-4 h-4 text-gray-400 absolute right-3 top-5" />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between">
                <label 
                  htmlFor="password-input" 
                  className="block text-xs font-semibold text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <a 
                  href="#forgot" 
                  onClick={(e) => { e.preventDefault(); alert('Please contact your SOC security administrator to reset your credentials.'); }}
                  className="text-[11px] text-yellow-700 dark:text-[#EECC8C] hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-white/10 rounded-md p-3 w-full mt-2 text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#EECC8C]/50 focus:border-[#EECC8C] transition pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 text-gray-600 dark:text-gray-400 cursor-pointer">
                <input 
                  type="checkbox" 
                  defaultChecked 
                  className="rounded border-gray-300 text-[#EECC8C] focus:ring-[#EECC8C]/40"
                />
                <span>Remember this terminal session</span>
              </label>
            </div>

            {/* Primary Sign In Button wrapped in Link / Submit */}
            <Link href="/" className="block w-full">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-6 bg-[#EECC8C] text-black font-semibold py-3 rounded-md hover:opacity-90 transition shadow-sm flex items-center justify-center gap-2 text-xs"
              >
                {isLoading ? (
                  <span>Authenticating...</span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </Link>

            {/* Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-white/10" />
              </div>
              <span className="relative bg-white dark:bg-[#1A1F2B] px-3 text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                Or continue with
              </span>
            </div>

            {/* Secondary Enterprise SSO Button */}
            <Link href="/" className="block w-full">
              <button
                type="button"
                className="w-full mt-4 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-md hover:bg-gray-50 dark:hover:bg-[#0B0F19] transition flex items-center justify-center gap-2.5 font-medium text-xs shadow-sm"
              >
                <KeyRound className="w-4 h-4 text-yellow-700 dark:text-[#EECC8C]" />
                <span>Enterprise SSO (Okta / SAML)</span>
              </button>
            </Link>
          </form>
        </div>

        {/* Bottom Footer Note */}
        <div className="text-center text-[11px] text-gray-400 dark:text-gray-500 max-w-md mx-auto">
          Protected by Shield-AI Zero-Trust SOC Guardian • AES-256 Encrypted
        </div>
      </div>
    </div>
  );
}
