"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Target,
  Settings,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

const todayLabel = () =>
  new Date().toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

export default function PlaybookPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-4xl p-6 pt-24">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/interview/adameve"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Interview Page
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Search & Merchandising Playbook
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Adam & Eve Digital Merchandise Manager
              </p>
            </div>
          </div>
        </div>

        {/* Purpose */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Purpose
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Turn intent into revenue while upholding compliance and customer
            trust.
          </p>
        </section>

        {/* Ranking Framework */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
            Ranking Framework (HawkSearch-friendly)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  {
                    weight: "35%",
                    title: "Relevance",
                    description:
                      "title, attributes/facets, typo tolerance, synonyms",
                    color:
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  },
                  {
                    weight: "30%",
                    title: "Contribution",
                    description: "margin × CVR; demote high return-rate SKUs",
                    color:
                      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
                  },
                  {
                    weight: "20%",
                    title: "Inventory",
                    description:
                      "in-stock priority; low-stock urgency; OOS demotion",
                    color:
                      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
                  },
                  {
                    weight: "10%",
                    title: "Novelty & Seasonality",
                    description: "launch boost; decay after 30 days",
                    color:
                      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                  },
                  {
                    weight: "5%",
                    title: "Quality",
                    description: "rating, complaints, CSAT",
                    color:
                      "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${item.color}`}
                    >
                      {item.weight}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                A&E Context
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>$197M GMV</strong> requires profit-optimized ranking
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>3.0-3.5% CVR</strong> above eCommerce average
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Always-on promos</strong> affect margin calculations
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>A&E private label</strong> priority (5yr warranty)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Governance */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-purple-600" />
            Governance
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Rule Naming Convention
              </h3>
              <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4">
                <code className="text-sm text-blue-600 dark:text-blue-400">
                  [YYYY-MM-DD] area:rule-name (owner)
                </code>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Example: [2024-10-29] search:boost-waterproof-winter
                  (brian.lockhart)
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Rule Lifecycle
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Create</span>
                <span>→</span>
                <span>QA Top 50 (desktop/mobile)</span>
                <span>→</span>
                <span>Deploy</span>
                <span>→</span>
                <span>Measure</span>
                <span>→</span>
                <span>Sunset</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  OOS Handling
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Auto-demote & unpin within 24h</li>
                  <li>• Nightly feed QA</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Change Tracking
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Link each rule to KPI readout</li>
                  <li>• Document hypothesis & results</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* KPI Loop */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-600" />
            KPI Loop (Weekly)
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
            <div className="flex items-center justify-between text-sm font-medium">
              <span className="text-blue-600 dark:text-blue-400">
                Zero-result
              </span>
              <span>→</span>
              <span className="text-indigo-600 dark:text-indigo-400">
                Search exit
              </span>
              <span>→</span>
              <span className="text-purple-600 dark:text-purple-400">
                Result CTR
              </span>
              <span>→</span>
              <span className="text-pink-600 dark:text-pink-400">CVR</span>
              <span>→</span>
              <span className="text-rose-600 dark:text-rose-400">AOV</span>
              <span>→</span>
              <span className="text-orange-600 dark:text-orange-400">RPV</span>
              <span>→</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                LTV
              </span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              + feed freshness SLA monitoring
            </p>
          </div>
        </section>

        {/* Weekly Cadence */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-600" />
            Weekly Cadence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-blue-600 mb-2">Monday</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Query audit (gainers/losers, zero-result). Build fix list.
                </p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-emerald-600 mb-2">Wednesday</h3>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ship synonyms/redirects/boosts. QA Top 50.
                </p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-purple-600 mb-2">Friday</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  KPI pulse + A/B readout. Document shipped changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Adam & Eve Product Examples */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600" />
            Concrete Product Examples (A&E Catalog)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Premium Tier Examples
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  • <strong>We-Vibe Chorus ($219)</strong> - App couples
                  wearable, dual-motor
                </li>
                <li>
                  • <strong>Magic Wand Rechargeable ($159.99)</strong> -
                  Flagship cordless wand
                </li>
                <li>
                  • <strong>LELO Tiani Harmony ($159)</strong> - Premium couples
                  massager
                </li>
                <li>
                  • <strong>We-Vibe Sync O ($179)</strong> - Premium wearable
                  vibrator
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Value Tier (A&E Brand)
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  • <strong>A&E Mighty Mini Wand ($9.98 → $49.99)</strong> - 80%
                  off promo
                </li>
                <li>
                  • <strong>A&E Thrusting Rabbit ($37.98 → $77.99)</strong> -
                  51% off
                </li>
                <li>
                  • <strong>A&E Personal Lube ($12.50 → $24.99)</strong> - 50%
                  attach item
                </li>
                <li>
                  • <strong>A&E Silver Bullet ($8.98)</strong> - Entry-level
                  with 5yr warranty
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Merchandising Insight:</strong> Premium brands (We-Vibe,
              Magic Wand, LELO) establish category credibility, while A&E
              private label captures margin share through aggressive promotional
              pricing and 5-year warranty advantage.
            </p>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-8 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-600" />
            Compliance
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Age-gated and restricted terms redirect to education/safety
              content
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Safe autocomplete; tasteful copy; discreet-shipping messaging
            </li>
          </ul>
        </section>

        {/* Change Log Template */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Change Log Template
          </h2>
          <div className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Metadata:</strong> Date | Owner | Change
              </div>
              <div>
                <strong>Planning:</strong> Hypothesis | KPIs
              </div>
              <div>
                <strong>Tracking:</strong> Status | Link
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-slate-700">
          Generated {todayLabel()} for Adam & Eve interview preparation
        </div>
      </div>
    </main>
  );
}
