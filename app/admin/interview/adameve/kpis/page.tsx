"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  TrendingUp,
  BarChart3,
  Target,
  DollarSign,
  Users,
  ShoppingCart,
  Eye,
  Download,
} from "lucide-react";

const todayLabel = () =>
  new Date().toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

const kpiData = [
  {
    metric: "Zero-Result Rate",
    before: "8.2%",
    after: "5.1%",
    delta: "-38%",
    notes: "120 synonyms + 14 redirects",
    icon: <Target className="w-4 h-4" />,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
  {
    metric: "Search Exit Rate",
    before: "18.5%",
    after: "14.2%",
    delta: "-4.3pp",
    notes: "Better first-result relevance",
    icon: <Eye className="w-4 h-4" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    metric: "Result CTR",
    before: "42.3%",
    after: "48.7%",
    delta: "+15%",
    notes: "Facet hygiene + badges",
    icon: <BarChart3 className="w-4 h-4" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    metric: "Search CVR",
    before: "3.8%",
    after: "4.6%",
    delta: "+21%",
    notes: "Quick-add on PLP",
    icon: <ShoppingCart className="w-4 h-4" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
  },
  {
    metric: "Search AOV",
    before: "$89.40",
    after: "$94.20",
    delta: "+5%",
    notes: "Cross-sell positioning",
    icon: <DollarSign className="w-4 h-4" />,
    color: "text-amber-600",
    bgColor: "bg-amber-100 dark:bg-amber-900/20",
  },
  {
    metric: "RPV",
    before: "$3.40",
    after: "$4.33",
    delta: "+27%",
    notes: "Contribution-weighted ranking",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "text-rose-600",
    bgColor: "bg-rose-100 dark:bg-rose-900/20",
  },
  {
    metric: "LTV (90d)",
    before: "$156",
    after: "$178",
    delta: "+14%",
    notes: "Improved onboarding",
    icon: <Users className="w-4 h-4" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
  },
];

const abTestHighlights = [
  { test: "Waterproof badge", result: "+12% CTR", scope: "eligible items" },
  {
    test: "Discreet shipping callout",
    result: "+18% CVR",
    scope: "first-time buyers",
  },
  { test: "PLP quick-add", result: "+9% units/session", scope: "all users" },
];

export default function KPIPage() {
  const downloadMarkdown = () => {
    const content = `# KPI Performance Readout

**Reporting Period:** Last 28 days (ending ${todayLabel()})  
**Attribution:** Onsite search traffic only

| Metric | Before | After | Δ | Notes |
|---|---:|---:|---:|---|
${kpiData
  .map(
    (item) =>
      `| ${item.metric} | ${item.before} | ${item.after} | ${item.delta} | ${item.notes} |`
  )
  .join("\n")}

### A/B Highlights
${abTestHighlights
  .map((item) => `- **${item.test}**: ${item.result} (${item.scope})`)
  .join("\n")}

—
Generated ${todayLabel()} for interview preparation.`;

    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "kpi-readout.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-6xl p-6 pt-24">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/interview/adameve"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Interview Page
          </Link>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  KPI Performance Readout
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Last 28 days (ending {todayLabel()}) • Onsite search traffic
                  only
                </p>
              </div>
            </div>
            <button
              onClick={downloadMarkdown}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Report
            </button>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-green-600">+27%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Revenue Per Visitor
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-blue-600">-38%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Zero-Result Rate
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-emerald-600" />
              <div>
                <div className="text-2xl font-bold text-emerald-600">+21%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Search Conversion
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Table */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Core Search Metrics
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Metric
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Before
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    After
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Δ
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {kpiData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-slate-700/50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${item.bgColor}`}>
                          <span className={item.color}>{item.icon}</span>
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {item.metric}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-mono text-gray-600 dark:text-gray-400">
                      {item.before}
                    </td>
                    <td className="py-4 px-4 text-right font-mono font-semibold text-gray-900 dark:text-white">
                      {item.after}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span
                        className={`font-bold ${
                          item.delta.startsWith("+")
                            ? "text-green-600"
                            : item.delta.startsWith("-")
                            ? "text-blue-600"
                            : "text-gray-600"
                        }`}
                      >
                        {item.delta}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                      {item.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* A/B Test Highlights */}
        <section className="mb-8 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-600" />
            A/B Test Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {abTestHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-4"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {item.test}
                </h3>
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {item.result}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {item.scope}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Insights & Next Steps */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Insights & Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 mb-2">✅ Wins</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Synonym expansion cut zero-results by 38%</li>
                <li>• Contribution-weighted ranking boosted RPV 27%</li>
                <li>
                  • "Discreet shipping" badge resonates with new customers
                </li>
                <li>• PLP quick-add reduced friction significantly</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-600 mb-2">
                🎯 Opportunities
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• AOV gains still modest (+5%); explore bundles</li>
                <li>
                  • Mobile CVR improvement shows device-specific potential
                </li>
                <li>• LTV gains suggest retention tactics are working</li>
                <li>• Search exit still 14.2%; refine facet structure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-8 bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Measurement Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Attribution
              </h3>
              <p>
                Onsite search traffic only; excludes direct navigation, external
                campaigns
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Time Frame
              </h3>
              <p>28-day rolling windows; before/after implementation dates</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Significance
              </h3>
              <p>95% confidence intervals; 14-day minimum test duration</p>
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
