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
  AlertTriangle,
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
            Ranking Framework (HawkSearch Implementation)
          </h2>

          <div className="mb-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Framework Rationale:</strong> Weights derived from A&E's
              high CVR (3.0-3.5%) and premium margin requirements.
              Contribution-heavy weighting reflects adult retail's customer
              lifetime value patterns and discrete purchase behaviors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  {
                    weight: "35%",
                    title: "Relevance & Query Intent",
                    description:
                      "title match > attribute facets > description; synonym expansion for adult terminology",
                    color:
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                    implementation:
                      "HawkSearch: Field boosting (title=3.0x, attributes=2.0x), custom synonym dictionary",
                  },
                  {
                    weight: "30%",
                    title: "Contribution Margin",
                    description:
                      "(margin × CVR) - return_rate_penalty; A&E private label boost +0.3x",
                    color:
                      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
                    implementation:
                      "HawkSearch: Custom scoring field 'profit_score' updated nightly from ERP",
                  },
                  {
                    weight: "20%",
                    title: "Inventory Intelligence",
                    description:
                      "in-stock=1.0x, low-stock=1.2x urgency, OOS=0.1x (for education/restock alerts)",
                    color:
                      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
                    implementation:
                      "HawkSearch: Inventory boost rules with 4-hour sync from AS400",
                  },
                  {
                    weight: "10%",
                    title: "Freshness & Seasonality",
                    description:
                      "new arrivals +0.5x for 30 days; Valentine's/holiday multipliers; decay curve",
                    color:
                      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                    implementation:
                      "HawkSearch: Time-based boost rules with automated decay functions",
                  },
                  {
                    weight: "5%",
                    title: "Quality & Trust Signals",
                    description:
                      "avg_rating>4.0=+0.2x; review_count>50=+0.1x; complaint_rate>5%=-0.3x",
                    color:
                      "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400",
                    implementation:
                      "HawkSearch: Custom fields from review aggregation and CS ticket analysis",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4 border-l-4 border-gray-300 dark:border-slate-600"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${item.color}`}
                      >
                        {item.weight}
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded">
                      <strong>Tech Implementation:</strong>{" "}
                      {item.implementation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  A&E Business Context
                </h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>$197M GMV target</strong> requires margin
                      optimization over popularity
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>3.0-3.5% CVR baseline</strong> allows for
                      experimental ranking changes
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Always-on promos</strong> require dynamic margin
                      calculations
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>A&E private label priority</strong> (5yr warranty
                      differentiator)
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Edge Cases & Challenges
                </h3>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                  <li>
                    • <strong>Batch stockouts:</strong> Auto-promote
                    alternatives in same category
                  </li>
                  <li>
                    • <strong>Regulatory blocks:</strong> Geo-restricted SKUs
                    need graceful handling
                  </li>
                  <li>
                    • <strong>High return rates:</strong> Lingerie/sizing issues
                    get ranking penalties
                  </li>
                  <li>
                    • <strong>Seasonal demand spikes:</strong> Valentine's Day
                    traffic 300% increase
                  </li>
                  <li>
                    • <strong>Payment failures:</strong> High-value items need
                    trust signal boosts
                  </li>
                </ul>
              </div>
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
            Merchandising Strategy: Product Positioning & Search Optimization
          </h2>

          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              🎯 Strategic Approach: Premium Brand Halo + Private Label Capture
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Use premium brands (We-Vibe, LELO, Magic Wand) to establish
              category credibility and justify higher price points, then
              leverage search merchandising to surface A&E private label
              alternatives that capture higher margins while maintaining
              customer satisfaction through 5-year warranty differentiation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Premium Tier (Category Anchors)
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded border-l-4 border-purple-500">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-sm">We-Vibe Chorus</strong>
                    <span className="text-xs text-purple-600">$219</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    App-controlled couples wearable • Search terms: "couples
                    vibrator", "app controlled", "wearable"
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Merchandising: Boost for "premium couples" searches →
                    cross-sell A&E Couples Ring ($29.99)
                  </p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded border-l-4 border-purple-500">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-sm">LELO Tiani Harmony</strong>
                    <span className="text-xs text-purple-600">$159</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Luxury couples massager • Search terms: "luxury vibrator",
                    "couples massage", "premium"
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Merchandising: Position as aspirational → funnel to A&E
                    Signature Series ($59.99)
                  </p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded border-l-4 border-purple-500">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-sm">Magic Wand Rechargeable</strong>
                    <span className="text-xs text-purple-600">$159.99</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Flagship cordless wand • Search terms: "magic wand",
                    "hitachi", "powerful vibrator"
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Merchandising: Category leader → recommend A&E Mighty Mini
                    ($9.98) as travel alternative
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                A&E Private Label (Margin Capture)
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded border-l-4 border-emerald-500">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-sm">A&E Mighty Mini Wand</strong>
                    <span className="text-xs text-emerald-600">
                      $9.98 <s className="text-gray-400">$49.99</s>
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    80% off promo • Search boost for "wand massager", "mini
                    wand", "travel size"
                  </p>
                  <p className="text-xs text-emerald-600 mt-1">
                    Margin: ~70% vs 20% on Magic Wand • 5yr warranty beats Magic
                    Wand's 1yr
                  </p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded border-l-4 border-emerald-500">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-sm">A&E Thrusting Rabbit</strong>
                    <span className="text-xs text-emerald-600">
                      $37.98 <s className="text-gray-400">$77.99</s>
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    51% off • Search terms: "rabbit vibrator", "thrusting",
                    "dual stimulation"
                  </p>
                  <p className="text-xs text-emerald-600 mt-1">
                    Counter to $200+ premium rabbits • emphasize warranty +
                    satisfaction guarantee
                  </p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded border-l-4 border-emerald-500">
                  <div className="flex justify-between items-start mb-1">
                    <strong className="text-sm">A&E Personal Lube</strong>
                    <span className="text-xs text-emerald-600">
                      $12.50 <s className="text-gray-400">$24.99</s>
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    50% off attach item • Auto-suggest for all toy purchases
                  </p>
                  <p className="text-xs text-emerald-600 mt-1">
                    AOV booster: +$12.50 pure margin on ~80% of toy orders
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Search Merchandising Tactics
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  • <strong>Query Intent Matching:</strong> "Best vibrator" →
                  Show premium brands first, A&E alternatives 2nd
                </li>
                <li>
                  • <strong>Price-Sensitive Queries:</strong> "Cheap vibrator" →
                  Lead with A&E discounted items
                </li>
                <li>
                  • <strong>Category Education:</strong> "First time toy" →
                  Curated beginner bundle with A&E starter items
                </li>
                <li>
                  • <strong>Cross-Category Boost:</strong> Lube auto-suggests
                  with 95% of toy searches
                </li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Competitive Intelligence
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  • <strong>Lovehoney:</strong> Heavy PPC on brand terms → boost
                  A&E alternatives in organic
                </li>
                <li>
                  • <strong>Spencer's:</strong> Novelty focus → emphasize A&E
                  quality/warranty in serious toy searches
                </li>
                <li>
                  • <strong>PinkCherry:</strong> Canadian competitor → promote
                  discreet US shipping advantage
                </li>
                <li>
                  • <strong>Amazon:</strong> Limited adult selection → highlight
                  A&E's specialized expertise
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seasonal & Promotional Strategy */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-pink-600" />
            Seasonal Merchandising Calendar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <h3 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                Valentine's Day (Jan 15 - Feb 14)
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Couples categories boosted 3x</li>
                <li>• "Romantic" search synonyms activated</li>
                <li>• Gift sets promoted in top 3 results</li>
                <li>• Expected traffic: +300%, CVR: +1.2%</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">
                Summer/Pride (Jun 1 - Jul 31)
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• LGBTQ+ friendly products featured</li>
                <li>• Waterproof categories prioritized</li>
                <li>• Travel-size items auto-suggested</li>
                <li>• Pride month: +85% new customer acquisition</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">
                Black Friday (Nov 1 - Dec 1)
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• A&E private label deals prominent</li>
                <li>• Bundle configurations optimized</li>
                <li>• Gift card promotions highlighted</li>
                <li>• Inventory clearance algorithms activated</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-8 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-600" />
            Compliance & Risk Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Search Safety Protocols
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Age-inappropriate terms redirect to education/safety content
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Autocomplete filters explicit slang and offensive language
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Zero tolerance for non-consensual or illegal content keywords
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Discreet shipping messaging on all packaging-related searches
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Content & Messaging Guidelines
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Educational tone for wellness and health products
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Size-inclusive and body-positive language across categories
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Privacy-first messaging (no judgment, complete discretion)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Medical accuracy for health and wellness product descriptions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting & Failure Scenarios */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Troubleshooting Playbook & Failure Recovery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-red-600 dark:text-red-400">
                🚨 Critical Failure Scenarios
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border-l-4 border-red-500">
                  <strong className="text-sm text-red-700 dark:text-red-400">
                    Zero-Result Rate Spike (&gt;15%)
                  </strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <strong>Causes:</strong> Synonym corruption, inventory sync
                    failure, HawkSearch index issues
                    <br />
                    <strong>Response:</strong> Rollback last rule changes,
                    emergency synonym deployment, escalate to HawkSearch support
                  </p>
                </div>

                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border-l-4 border-red-500">
                  <strong className="text-sm text-red-700 dark:text-red-400">
                    CVR Drop &gt;0.5% Week-over-Week
                  </strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <strong>Causes:</strong> Poor relevance changes, inventory
                    mismatches, mobile experience issues
                    <br />
                    <strong>Response:</strong> A/B test immediate rollback,
                    segment analysis (mobile vs desktop), emergency rule audit
                  </p>
                </div>

                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border-l-4 border-red-500">
                  <strong className="text-sm text-red-700 dark:text-red-400">
                    Compliance Violation Alert
                  </strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <strong>Causes:</strong> Inappropriate autocomplete
                    suggestions, age-restricted content surfacing
                    <br />
                    <strong>Response:</strong> Immediate content removal,
                    synonym blacklist update, legal team notification
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-amber-600 dark:text-amber-400">
                ⚠️ Performance Degradation Responses
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded border-l-4 border-amber-500">
                  <strong className="text-sm text-amber-700 dark:text-amber-400">
                    Search Exit Rate &gt;25%
                  </strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <strong>Investigation:</strong> Query intent analysis,
                    result relevance audit, mobile UX review
                    <br />
                    <strong>Fixes:</strong> Synonym expansion, category redirect
                    rules, facet optimization
                  </p>
                </div>

                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded border-l-4 border-amber-500">
                  <strong className="text-sm text-amber-700 dark:text-amber-400">
                    AOV Decline Despite Traffic Growth
                  </strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <strong>Investigation:</strong> Premium vs value product
                    mix, cross-sell effectiveness, promotion cannibalization
                    <br />
                    <strong>Fixes:</strong> Rebalance ranking weights, optimize
                    recommendation placement, adjust promotional strategy
                  </p>
                </div>

                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded border-l-4 border-amber-500">
                  <strong className="text-sm text-amber-700 dark:text-amber-400">
                    Mobile CVR Lagging Desktop &gt;1%
                  </strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <strong>Investigation:</strong> Mobile search UX, page load
                    times, thumb-friendly navigation
                    <br />
                    <strong>Fixes:</strong> Mobile-specific ranking rules,
                    simplified filters, larger tap targets
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              🛠️ Emergency Response Protocol
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <strong className="text-blue-600">1. Detect (5 min)</strong>
                <br />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Automated alerting, dashboard monitoring
                </span>
              </div>
              <div className="text-center">
                <strong className="text-blue-600">2. Assess (10 min)</strong>
                <br />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Impact scope, user segments affected
                </span>
              </div>
              <div className="text-center">
                <strong className="text-blue-600">3. Mitigate (15 min)</strong>
                <br />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Emergency rollback, traffic diversion
                </span>
              </div>
              <div className="text-center">
                <strong className="text-blue-600">4. Resolve (2 hours)</strong>
                <br />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Root cause fix, testing, re-deployment
                </span>
              </div>
            </div>
          </div>
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
