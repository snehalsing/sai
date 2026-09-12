'use client';

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, Shield, ArrowRight, Lock } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function SignOutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB] dark:bg-[#0B0F19] text-[#111827] dark:text-white p-4 relative transition-colors duration-200">
      {/* Top Controls */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-[#1A1F2B] border border-gray-200 dark:border-white/[0.08] rounded-2xl p-8 text-center shadow-xl relative overflow-hidden">
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#9EABA2]" />

          {/* Green CheckCircle Icon */}
          <div className="w-16 h-16 rounded-full bg-[#9EABA2]/20 border border-[#9EABA2]/40 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8 text-[#5F6F65] dark:text-[#BDD1C5]" />
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Session Terminated
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
            You have been securely logged out of Shield-AI.
          </p>

          {/* Security Telemetry Note */}
          <div className="my-6 p-3 rounded-xl bg-gray-50 dark:bg-[#0B0F19] border border-gray-200 dark:border-white/5 text-left text-[11px] text-gray-500 dark:text-gray-400 space-y-1.5 font-mono">
            <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-[#9EABA2]" />
                <span>Zero-Trust Token:</span>
              </span>
              <span className="text-[#5F6F65] dark:text-[#BDD1C5] font-semibold">REVOKED</span>
            </div>
            <p className="text-[10px] text-gray-400">
              Local telemetry cache purged and active SOC session key invalidation confirmed.
            </p>
          </div>

          {/* Return to Sign In Button */}
          <Link href="/sign-in" className="block w-full">
            <button
              type="button"
              className="w-full py-3 px-4 rounded-xl bg-[#EECC8C] text-black font-semibold text-xs transition-all duration-200 hover:opacity-90 shadow-sm flex items-center justify-center gap-2"
            >
              <span>Return to Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          {/* Quick Back to Main Dashboard link */}
          <div className="mt-4">
            <Link 
              href="/"
              className="text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition inline-flex items-center gap-1"
            >
              <Shield className="w-3.5 h-3.5 text-[#EECC8C]" />
              <span>Back to Live Dashboard (Demo Mode)</span>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-[11px] text-gray-400 dark:text-gray-500 mt-6">
          Shield-AI SOC Operations • Defense-in-Depth
        </p>
      </div>
    </div>
  );
}
