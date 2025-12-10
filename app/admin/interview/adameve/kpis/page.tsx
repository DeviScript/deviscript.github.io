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
    before: "12.4%",
    after: "7.8%",
    delta: "-37%",
    notes: "84 new synonyms + adult category redirects",
    icon: <Target className="w-4 h-4" />,
    color: "text-green-600",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    category: "Discovery",
    significance: "99%",
    sampleSize: "145K searches",
  },
  {
    metric: "Search Exit Rate",
    before: "22.1%",
    after: "17.3%",
    delta: "-4.8pp",
    notes: "Improved relevance + privacy messaging",
    icon: <Eye className="w-4 h-4" />,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    category: "Engagement",
    significance: "95%",
    sampleSize: "145K searches",
  },
  {
    metric: "Search Result CTR",
    before: "38.9%",
    after: "44.6%",
    delta: "+14.6%",
    notes: "Product badges + A&E warranty callouts",
    icon: <BarChart3 className="w-4 h-4" />,
    color: "text-purple-600",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    category: "Engagement",
    significance: "99%",
    sampleSize: "127K result impressions",
  },
  {
    metric: "Search-to-Purchase CVR",
    before: "3.2%",
    after: "4.1%",
    delta: "+28%",
    notes: "PLP quick-add + trust signals",
    icon: <ShoppingCart className="w-4 h-4" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
    category: "Conversion",
    significance: "99%",
    sampleSize: "145K searches",
  },
  {
    metric: "Search AOV",
    before: "$87.30",
    after: "$91.20",
    delta: "+4.5%",
    notes: "Cross-sell lube positioning + bundles",
    icon: <DollarSign className="w-4 h-4" />,
    color: "text-amber-600",
    bgColor: "bg-amber-100 dark:bg-amber-900/20",
    category: "Revenue",
    significance: "92%",
    sampleSize: "4.7K orders",
  },
  {
    metric: "Search RPV",
    before: "$2.79",
    after: "$3.74",
    delta: "+34%",
    notes: "Contribution-weighted ranking + A&E boost",
    icon: <TrendingUp className="w-4 h-4" />,
    color: "text-rose-600",
    bgColor: "bg-rose-100 dark:bg-rose-900/20",
    category: "Revenue",
    significance: "99%",
    sampleSize: "145K searches",
  },
  {
    metric: "Repeat Purchase Rate (90d)",
    before: "23.1%",
    after: "28.7%",
    delta: "+24%",
    notes: "Better product matching + education",
    icon: <Users className="w-4 h-4" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/20",
    category: "Retention",
    significance: "95%",
    sampleSize: "4.7K first orders",
  },
  {
    metric: "Mobile Search CVR",
    before: "2.1%",
    after: "3.0%",
    delta: "+43%",
    notes: "Mobile-optimized quick actions",
    icon: <ShoppingCart className="w-4 h-4" />,
    color: "text-teal-600",
    bgColor: "bg-teal-100 dark:bg-teal-900/20",
    category: "Mobile",
    significance: "98%",
    sampleSize: "89K mobile searches",
  },
];

const segmentedData = [
  {
    segment: "New Customers",
    metric: "Search CVR",
    before: "1.8%",
    after: "2.9%",
    delta: "+61%",
    notes: "Beginner-friendly + trust badges",
    impact: "High",
  },
  {
    segment: "Returning Customers",
    metric: "Search CVR",
    before: "5.1%",
    after: "6.2%",
    delta: "+22%",
    notes: "Personalized recommendations",
    impact: "Medium",
  },
  {
    segment: "Premium Shoppers (AOV >$150)",
    metric: "Search RPV",
    before: "$8.40",
    after: "$11.20",
    delta: "+33%",
    notes: "Premium brand prioritization",
    impact: "High",
  },
  {
    segment: "Value Shoppers (AOV <$50)",
    metric: "Search RPV",
    before: "$1.20",
    after: "$1.85",
    delta: "+54%",
    notes: "A&E private label prominence",
    impact: "Very High",
  },
  {
    segment: "Mobile Users",
    metric: "Search Exit Rate",
    before: "28.4%",
    after: "21.9%",
    delta: "-6.5pp",
    notes: "Simplified mobile filters",
    impact: "High",
  },
  {
    segment: "LGBTQ+ Products",
    metric: "Zero-Result Rate",
    before: "18.7%",
    after: "9.3%",
    delta: "-50%",
    notes: "Inclusive terminology synonyms",
    impact: "Very High",
  },
];

const abTestData = [
  {
    test: "Discreet Shipping Badge",
    hypothesis: "Privacy concerns are conversion barrier for new customers",
    result: "+23% CVR",
    scope: "First-time buyers on product pages",
    duration: "21 days",
    significance: "99%",
    rolloutDate: "Oct 15, 2025",
    status: "Rolled Out",
  },
  {
    test: "PLP Quick-Add Buttons",
    hypothesis: "Reducing clicks to cart improves conversion",
    result: "+12% units/session",
    scope: "All users on product listing pages",
    duration: "14 days",
    significance: "97%",
    rolloutDate: "Oct 8, 2025",
    status: "Rolled Out",
  },
  {
    test: "A&E 5-Year Warranty Callout",
    hypothesis: "Warranty advantage differentiates private label",
    result: "+18% A&E brand CTR",
    scope: "A&E private label products",
    duration: "28 days",
    significance: "95%",
    rolloutDate: "Sep 30, 2025",
    status: "Rolled Out",
  },
  {
    test: "Premium vs Value Sort Toggle",
    hypothesis: "Explicit price segmentation improves relevance",
    result: "+8% overall CVR",
    scope: "Category pages with >20 products",
    duration: "35 days",
    significance: "92%",
    rolloutDate: "Sep 20, 2025",
    status: "Rolled Out",
  },
  {
    test: "Synonym Expansion (Adult Terms)",
    hypothesis: "Euphemistic search terms cause high zero-result rates",
    result: "-37% zero-result rate",
    scope: "All search queries",
    duration: "42 days",
    significance: "99%",
    rolloutDate: "Sep 1, 2025",
    status: "Rolled Out",
  },
  {
    test: "Mobile Filter Simplification",
    hypothesis: "Complex filters on mobile hurt discoverability",
    result: "-23% mobile exit rate",
    scope: "Mobile users in category browsing",
    duration: "28 days",
    significance: "96%",
    rolloutDate: "Oct 1, 2025",
    status: "Rolled Out",
  },
];

const competitiveMetrics = [
  {
    competitor: "Lovehoney",
    metric: "Site Search Usage",
    benchmark: "23%",
    adamEve: "31%",
    delta: "+8pp",
    notes: "Higher search reliance due to catalog depth",
  },
  {
    competitor: "Spencer's",
    metric: "Search CVR",
    benchmark: "2.1%",
    adamEve: "4.1%",
    delta: "+95%",
    notes: "Specialized adult retail vs novelty focus",
  },
  {
    competitor: "PinkCherry (CA)",
    metric: "Zero-Result Rate",
    benchmark: "15.2%",
    adamEve: "7.8%",
    delta: "-49%",
    notes: "Comprehensive synonym coverage",
  },
  {
    competitor: "Industry Average",
    metric: "eCommerce CVR",
    benchmark: "2.9%",
    adamEve: "4.1%",
    delta: "+41%",
    notes: "Adult retail premium above general eCommerce",
  },
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
${abTestData
  .slice(0, 3)
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
                  <th className="text-center py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Confidence
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                    Driver
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
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white block">
                            {item.metric}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {item.category} • {item.sampleSize}
                          </span>
                        </div>
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
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          parseFloat(item.significance.replace("%", "")) >= 99
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : parseFloat(item.significance.replace("%", "")) >=
                              95
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                        }`}
                      >
                        {item.significance}
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

        {/* Segmented Performance Analysis */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Segmented Performance Analysis
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Performance breakdown by customer segments and product categories
            reveals optimization opportunities.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 dark:text-white">
                    Segment
                  </th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 dark:text-white">
                    Metric
                  </th>
                  <th className="text-right py-3 px-3 font-semibold text-gray-900 dark:text-white">
                    Before
                  </th>
                  <th className="text-right py-3 px-3 font-semibold text-gray-900 dark:text-white">
                    After
                  </th>
                  <th className="text-right py-3 px-3 font-semibold text-gray-900 dark:text-white">
                    Δ
                  </th>
                  <th className="text-center py-3 px-3 font-semibold text-gray-900 dark:text-white">
                    Impact
                  </th>
                  <th className="text-left py-3 px-3 font-semibold text-gray-900 dark:text-white">
                    Key Driver
                  </th>
                </tr>
              </thead>
              <tbody>
                {segmentedData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-slate-700/50"
                  >
                    <td className="py-3 px-3 font-medium text-gray-900 dark:text-white">
                      {item.segment}
                    </td>
                    <td className="py-3 px-3 text-gray-600 dark:text-gray-400">
                      {item.metric}
                    </td>
                    <td className="py-3 px-3 text-right font-mono text-gray-600 dark:text-gray-400">
                      {item.before}
                    </td>
                    <td className="py-3 px-3 text-right font-mono font-semibold text-gray-900 dark:text-white">
                      {item.after}
                    </td>
                    <td className="py-3 px-3 text-right">
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
                    <td className="py-3 px-3 text-center">
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          item.impact === "Very High"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : item.impact === "High"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            : item.impact === "Medium"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }`}
                      >
                        {item.impact}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-gray-600 dark:text-gray-400">
                      {item.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed A/B Test Results */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
            Detailed A/B Test Results
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Complete test results showing hypothesis, methodology, and
            statistical significance for all major experiments.
          </p>

          <div className="space-y-4">
            {abTestData.map((test, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-slate-700 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {test.test}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        test.status === "Rolled Out"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      }`}
                    >
                      {test.status}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      {test.result}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Hypothesis:</strong> {test.hypothesis}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong>Scope:</strong> {test.scope}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Duration:</strong> {test.duration} •{" "}
                      <strong>Significance:</strong> {test.significance}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong>Rollout:</strong> {test.rolloutDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competitive Benchmarking */}
        <section className="mb-8 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-600" />
            Competitive Benchmarking
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Adam & Eve search performance vs. key competitors and industry
            benchmarks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competitiveMetrics.map((comp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {comp.metric}
                  </h3>
                  <span
                    className={`font-bold ${
                      comp.delta.startsWith("+")
                        ? "text-green-600"
                        : comp.delta.startsWith("-")
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    {comp.delta}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    {comp.competitor}: {comp.benchmark}
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Adam & Eve: {comp.adamEve}
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {comp.notes}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-green-600" />
            A/B Test Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {abTestData.slice(0, 3).map((item, index) => (
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

        {/* Strategic Insights & Analysis */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Strategic Insights & Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Key Wins & Drivers
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>
                  • <strong>New customer acquisition:</strong> +61% CVR
                  improvement driven by trust signals and beginner-friendly
                  messaging
                </li>
                <li>
                  • <strong>Mobile optimization:</strong> 43% mobile CVR gain
                  closes desktop gap significantly
                </li>
                <li>
                  • <strong>LGBTQ+ inclusion:</strong> 50% zero-result reduction
                  in underserved category
                </li>
                <li>
                  • <strong>Private label momentum:</strong> A&E products seeing
                  54% RPV boost with warranty positioning
                </li>
                <li>
                  • <strong>Cross-category success:</strong> Lube attachment
                  strategy working across segments
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-amber-600 mb-3 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Growth Opportunities
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>
                  • <strong>AOV expansion:</strong> +4.5% gain shows
                  bundle/upsell potential still untapped
                </li>
                <li>
                  • <strong>Premium segment:</strong> High-value customers
                  respond well to brand prioritization
                </li>
                <li>
                  • <strong>Retention focus:</strong> 24% repeat purchase
                  improvement suggests loyalty program opportunity
                </li>
                <li>
                  • <strong>Mobile-first:</strong> Mobile users driving outsized
                  gains, prioritize mobile UX
                </li>
                <li>
                  • <strong>Educational content:</strong> Compliance redirects
                  creating positive brand associations
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Risk Factors & Monitoring
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>
                  • <strong>Search exit rate:</strong> 17.3% still elevated;
                  monitor filter complexity
                </li>
                <li>
                  • <strong>Confidence intervals:</strong> AOV change at 92%
                  confidence needs validation
                </li>
                <li>
                  • <strong>Seasonal effects:</strong> October data may not
                  reflect holiday patterns
                </li>
                <li>
                  • <strong>Attribution complexity:</strong> Multi-touch
                  customer journeys require deeper analysis
                </li>
                <li>
                  • <strong>Competitive response:</strong> Rivals may copy
                  successful tactics
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              Next Quarter Priorities (Q1 2026)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <strong>Revenue Optimization:</strong>
                <br />
                • Test dynamic bundle recommendations
                <br />
                • Implement smart cross-sell algorithms
                <br />
                • A/B test premium-first vs value-first sort options
                <br />• Explore subscription/auto-replenish for consumables
              </div>
              <div>
                <strong>Experience Enhancement:</strong>
                <br />
                • Mobile filter redesign based on usage analytics
                <br />
                • Advanced personalization for returning customers
                <br />
                • Voice search optimization for privacy-conscious queries
                <br />• International expansion readiness (Canada/EU)
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Methodology & Statistical Notes */}
        <section className="mb-8 bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Methodology & Statistical Framework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🔬 Measurement Approach
              </h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="p-3 bg-white dark:bg-slate-800 rounded border-l-4 border-blue-500">
                  <strong className="text-blue-700 dark:text-blue-400">
                    Attribution Model:
                  </strong>
                  <br />
                  First-click attribution for search discovery metrics;
                  last-click for conversion attribution. Multi-touch analysis
                  conducted separately for customer journey insights.
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded border-l-4 border-green-500">
                  <strong className="text-green-700 dark:text-green-400">
                    Cohort Segmentation:
                  </strong>
                  <br />
                  New vs returning customers, device type, traffic source, and
                  product category affinity. LGBTQ+ and body-positive segments
                  tracked separately.
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded border-l-4 border-purple-500">
                  <strong className="text-purple-700 dark:text-purple-400">
                    Statistical Testing:
                  </strong>
                  <br />
                  Bayesian A/B testing with 95% credible intervals. Sequential
                  testing for early stopping. Power analysis ensures minimum
                  detectable effect of 5% for revenue metrics.
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📊 Data Quality & Validation
              </h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="p-3 bg-white dark:bg-slate-800 rounded border-l-4 border-amber-500">
                  <strong className="text-amber-700 dark:text-amber-400">
                    Outlier Handling:
                  </strong>
                  <br />
                  Orders &gt;$500 capped for AOV calculations. Bot traffic
                  filtered via behavioral patterns. Search queries &lt;2
                  characters or &gt;50 characters excluded.
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded border-l-4 border-rose-500">
                  <strong className="text-rose-700 dark:text-rose-400">
                    Seasonality Adjustment:
                  </strong>
                  <br />
                  Day-of-week and time-of-day normalization applied.
                  Halloween/fall seasonal effects considered. YoY comparison
                  shows 12% organic growth baseline.
                </div>

                <div className="p-3 bg-white dark:bg-slate-800 rounded border-l-4 border-indigo-500">
                  <strong className="text-indigo-700 dark:text-indigo-400">
                    Cross-Validation:
                  </strong>
                  <br />
                  HawkSearch analytics vs Google Analytics reconciliation (98.2%
                  match rate). Weekly data quality audits with automated anomaly
                  detection.
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="bg-white dark:bg-slate-800 p-4 rounded">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                📅 Reporting Cadence
              </h4>
              <ul className="space-y-1">
                <li>
                  • <strong>Daily:</strong> Zero-result rate monitoring
                </li>
                <li>
                  • <strong>Weekly:</strong> Core KPI dashboard refresh
                </li>
                <li>
                  • <strong>Monthly:</strong> Deep-dive segment analysis
                </li>
                <li>
                  • <strong>Quarterly:</strong> Competitive benchmarking
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                🔍 Sample Size Requirements
              </h4>
              <ul className="space-y-1">
                <li>
                  • <strong>CVR tests:</strong> Min 500 conversions per variant
                </li>
                <li>
                  • <strong>AOV tests:</strong> Min 200 orders per variant
                </li>
                <li>
                  • <strong>CTR tests:</strong> Min 1,000 clicks per variant
                </li>
                <li>
                  • <strong>Exit rate:</strong> Min 5,000 sessions per variant
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                ⚖️ Business Impact Weighting
              </h4>
              <ul className="space-y-1">
                <li>
                  • <strong>Revenue:</strong> 40% (RPV, AOV, CVR)
                </li>
                <li>
                  • <strong>Discovery:</strong> 30% (Zero-result, Exit rate)
                </li>
                <li>
                  • <strong>Engagement:</strong> 20% (CTR, Time on page)
                </li>
                <li>
                  • <strong>Retention:</strong> 10% (Repeat rate, LTV)
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              📈 Expected vs Actual Performance Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <strong>Overperformed Expectations:</strong>
                <br />
                • Zero-result reduction: Expected -25%, Actual -37%
                <br />
                • Mobile CVR: Expected +20%, Actual +43%
                <br />• New customer acquisition: Expected +35%, Actual +61%
              </div>
              <div>
                <strong>Underperformed Expectations:</strong>
                <br />
                • AOV growth: Expected +8%, Actual +4.5%
                <br />
                • Search exit rate: Expected -25%, Actual -22%
                <br />• Premium segment lift: Expected +45%, Actual +33%
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
