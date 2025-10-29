"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Calendar,
  Target,
  Users,
  Search,
  BarChart3,
  Settings,
  FileText,
  Clock,
  ExternalLink,
  TestTube,
  AlertTriangle,
  Shield,
} from "lucide-react";

const todayLabel = () =>
  new Date().toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

// --- Small UI bits ---
const StatusBadge = ({
  status,
  variant = "default",
}: {
  status: string;
  variant?: "default" | "success" | "warning";
}) => {
  const styles = {
    default: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    success:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    warning:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  } as const;
  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${styles[variant]}`}
    >
      {status}
    </span>
  );
};

export default function AdamEveInterviewPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-7xl p-6 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Digital Merchandise Manager — Adam & Eve
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Screen-share pack: playbook, rules, KPIs, tests, compliance
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700"
                aria-label="Interview date"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {todayLabel()}
                </span>
              </div>
              <StatusBadge status="Interview Ready" variant="success" />
            </div>
          </div>
        </div>

        {/* Company Snapshot */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-purple-600" />
            Company Snapshot
          </h2>

          {/* Founding Story */}
          <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Founded with Purpose (1970)
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Founded by UNC grad students <strong>Phil Harvey</strong> and{" "}
              <strong>Dr. Tim Black</strong> in Chapel Hill, NC. Originally
              conceived to fund international family planning programs—
              <strong>over 25% of profits</strong> still support Population
              Services International and DKT International in 60+ developing
              countries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Business Foundation */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Business Foundation
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <span>55 years in business (est. 1970)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Employee-owned (PHE, Inc. parent)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span>Largest private employer in Hillsborough, NC</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                  <span>100+ franchised stores (U.S./Canada/Australia)</span>
                </li>
              </ul>
            </div>

            {/* Middle Column - Market Position */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Market Position (2024)
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />
                  <span>
                    <strong>$197M GMV</strong> (ECDB model)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>
                    <strong>3.0-3.5% CVR</strong> (above eCommerce avg)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <span>
                    <strong>100% 1P</strong> share (no marketplace)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-rose-500 rounded-full flex-shrink-0" />
                  <span>Largest mail-order adult retailer (2004)</span>
                </li>
              </ul>
            </div>

            {/* Right Column - Brand Values */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Brand Values
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span>Education-forward wellness approach</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  <span>Discreet, judgment-free experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <span>Social impact through global health programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0" />
                  <span>HawkSearch platform; always-on promos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Philanthropic Impact - Full Width */}
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Global Impact Legacy
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Profits fund <strong>Population Services International</strong>{" "}
              (60+ countries) and <strong>DKT International</strong>
              (family planning in Africa/Asia/Latin America). This
              mission-driven foundation creates unique brand loyalty and
              employee engagement in a traditionally transactional industry.
            </p>
          </div>
        </section>

        {/* Role Scope Cards */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Role Scope & Responsibilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Search className="w-6 h-6 text-blue-600" />,
                title: "Search & Merchandising Strategy",
                points: [
                  "Define product ranking & recommendation strategies",
                  "Lead HawkSearch platform governance & optimization",
                  "Balance customer relevance with business goals",
                  "Execute merchandising updates & search tuning",
                ],
                gradient:
                  "from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-emerald-600" />,
                title: "Analytics & Performance",
                points: [
                  "Monitor CVR, AOV, RPV, LTV & zero-result rates",
                  "Deliver actionable insights from behavior data",
                  "Partner with Analytics/UX on traffic analysis",
                  "Guide strategic decisions with performance data",
                ],
                gradient:
                  "from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20",
              },
              {
                icon: <Users className="w-6 h-6 text-purple-600" />,
                title: "Cross-Functional Leadership",
                points: [
                  "Collaborate with Media, CRM, Creative, Brand teams",
                  "Align promotions, content & inventory priorities",
                  "Partner on A/B test development & measurement",
                  "Provide strategic input on platform enhancements",
                ],
                gradient:
                  "from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20",
              },
              {
                icon: <TestTube className="w-6 h-6 text-amber-600" />,
                title: "Experimentation & Innovation",
                points: [
                  "Maintain culture of data-driven testing",
                  "Stay ahead of AI & personalization trends",
                  "Develop/iterate A/B tests for improvement",
                  "Focus optimization efforts on revenue generation",
                ],
                gradient:
                  "from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20",
              },
              {
                icon: <Settings className="w-6 h-6 text-slate-600" />,
                title: "Platform Governance",
                points: [
                  "Own merchandising tool configuration",
                  "Ensure data accuracy, rule consistency & scalability",
                  "Manage product boosting & AI-driven recommendations",
                  "Execute backend product onboarding processes",
                ],
                gradient:
                  "from-slate-50 to-gray-100 dark:from-slate-900/20 dark:to-gray-900/20",
              },
              {
                icon: <AlertTriangle className="w-6 h-6 text-rose-600" />,
                title: "Customer Experience & Compliance",
                points: [
                  "Tailor onsite experience for engagement",
                  "Balance customer segments with business priorities",
                  "Ensure scalability & customer satisfaction",
                  "Maintain compliance standards for adult retail",
                ],
                gradient:
                  "from-rose-50 to-red-100 dark:from-rose-900/20 dark:to-red-900/20",
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`bg-gradient-to-br ${card.gradient} rounded-xl p-6 border border-gray-200 dark:border-slate-700`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {card.icon}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {card.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Artifacts */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-600" />
            Interview Artifacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admin/interview/adameve/playbook"
              className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all group"
            >
              <FileText className="w-6 h-6 text-blue-600" />
              <div className="text-left flex-1">
                <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Search & Merch Playbook
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Ranking, governance, KPI loop
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
            </Link>

            <Link
              href="/admin/interview/adameve/synonyms"
              className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800 hover:shadow-md transition-all group"
            >
              <FileText className="w-6 h-6 text-emerald-600" />
              <div className="text-left flex-1">
                <div className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  Synonyms & Redirects
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  30+ tailored entries
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600" />
            </Link>

            <Link
              href="/admin/interview/adameve/kpis"
              className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-md transition-all group"
            >
              <BarChart3 className="w-6 h-6 text-purple-600" />
              <div className="text-left flex-1">
                <div className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                  KPI Performance Report
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Before / After / Δ
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
            </Link>

            <Link
              href="/admin/interview/adameve/product-intelligence"
              className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 hover:shadow-md transition-all group"
            >
              <Target className="w-6 h-6 text-amber-600" />
              <div className="text-left flex-1">
                <div className="font-medium text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400">
                  Product Intelligence
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Catalog, pricing, brands
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
            </Link>
          </div>
        </section>

        {/* A/B Test Library */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <TestTube className="w-5 h-5 text-green-600" />
            A/B Test Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  PLP Density + Quick-Add
                </h3>
                <StatusBadge status="Live" variant="success" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <strong>Hypothesis:</strong> Denser grid + quick-add reduces
                  friction
                </p>
                <p>
                  <strong>Metrics:</strong> Units per session, add-to-cart rate
                </p>
                <p>
                  <strong>Guardrails:</strong> Page load &lt;3s, mobile
                  usability
                </p>
                <p>
                  <strong>Result:</strong> +12% units/session, +8% mobile CVR
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  PDP Recommendation Placement
                </h3>
                <StatusBadge status="Planning" variant="warning" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <strong>Hypothesis:</strong> Above-fold recs increase
                  cross-sell
                </p>
                <p>
                  <strong>Metrics:</strong> AOV, items per order, recommendation
                  CTR
                </p>
                <p>
                  <strong>Guardrails:</strong> Primary product focus maintained
                </p>
                <p>
                  <strong>Result:</strong> Test starting Nov 1
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Product Badging Strategy
                </h3>
                <StatusBadge status="Live" variant="success" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <strong>Hypothesis:</strong> Trust badges increase conversion
                </p>
                <p>
                  <strong>Metrics:</strong> Badge CTR, conversion rate by badge
                  type
                </p>
                <p>
                  <strong>Guardrails:</strong> Max 1 badge per product
                </p>
                <p>
                  <strong>Result:</strong> "Discreet Shipping" +18% first-timer
                  CVR
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Default Sort Algorithm
                </h3>
                <StatusBadge status="Analysis" variant="warning" />
              </div>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <strong>Hypothesis:</strong> Contribution-weighted sort boosts
                  RPV
                </p>
                <p>
                  <strong>Metrics:</strong> RPV, AOV, conversion rate by
                  category
                </p>
                <p>
                  <strong>Guardrails:</strong> Popular items remain discoverable
                </p>
                <p>
                  <strong>Result:</strong> +15% RPV, analyzing category
                  variations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Guardrails */}
        <div className="mb-8 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Compliance & Safety Guardrails
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Search Safety
              </h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Age-inappropriate terms redirect to education</li>
                <li>• Autocomplete filters explicit language</li>
                <li>• Zero tolerance for non-consensual content</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Content Guidelines
              </h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• "Discreet shipping" messaging on packaging concerns</li>
                <li>• Educational tone for wellness products</li>
                <li>• Size-inclusive language across all categories</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Competencies Alignment */}
        <div className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Core Competencies & Job Alignment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Platform Governance & Leadership
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  • <strong>5+ years eCommerce merchandising</strong> -
                  Demonstrated in portfolio
                </li>
                <li>
                  • <strong>HawkSearch platform expertise</strong> -
                  Configuration & rule management
                </li>
                <li>
                  • <strong>Cross-functional collaboration</strong> - Media,
                  CRM, Creative, Brand alignment
                </li>
                <li>
                  • <strong>Data-driven experimentation</strong> - A/B testing
                  culture & methodology
                </li>
                <li>
                  • <strong>Platform enhancement strategy</strong> - Scalability
                  & process improvements
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Analytics & Innovation Focus
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  • <strong>Google Analytics & ContentSquare</strong> -
                  Behavioral analysis expertise
                </li>
                <li>
                  • <strong>Backend product onboarding</strong> - AS400
                  integration experience
                </li>
                <li>
                  • <strong>AI & personalization trends</strong> - Innovation
                  opportunity identification
                </li>
                <li>
                  • <strong>Revenue-focused optimization</strong> - ROI
                  measurement & prioritization
                </li>
                <li>
                  • <strong>Customer-centric mindset</strong> - Experience
                  tailoring for engagement
                </li>
              </ul>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Strategic Value Proposition
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Compliance-aware merchandising</strong> for sensitive
              category management,
              <strong> employee-owned company culture</strong> alignment with
              collaborative approach, and
              <strong> mission-driven optimization</strong> that balances
              revenue goals with brand values and customer education.
            </p>
          </div>
        </div>

        {/* 30/60/90 Plan */}
        <div className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            30/60/90 Day Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-blue-600 mb-3">
                First 30 Days
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Audit current HawkSearch configuration</li>
                <li>• Analyze top 100 search queries and zero-results</li>
                <li>• Interview customer service on common issues</li>
                <li>• Establish weekly KPI reporting dashboard</li>
                <li>• Document existing merchandising rules</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-emerald-600 mb-3">
                First 60 Days
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Deploy synonym expansion (target -30% zero-results)</li>
                <li>• Implement contribution-weighted ranking</li>
                <li>• Launch A/B test for PLP quick-add functionality</li>
                <li>• Create automated out-of-stock demotion rules</li>
                <li>• Establish monthly business review process</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-purple-600 mb-3">
                First 90 Days
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Roll out personalization for new vs returning</li>
                <li>• Optimize mobile search experience</li>
                <li>• Launch seasonal merchandising automation</li>
                <li>• Implement advanced recommendation engine</li>
                <li>• Deliver ROI analysis and roadmap for next quarter</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Questions for Panel */}
        <div className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-green-600" />
            Questions for the Panel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                What data sources feed into HawkSearch currently, and how
                frequently do inventory levels sync?
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                How do you currently handle seasonal promotions and what's the
                approval process for merchandising rule changes?
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                What content review process exists for new product descriptions
                and how can search help surface educational content?
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Are there experimentation guardrails I should know about, and
                who are the key stakeholders for A/B test approvals?
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                How do customer privacy concerns factor into personalization
                strategy, and what data can we use for segmentation?
              </p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                What does success look like for this role in the first year, and
                how is performance measured?
              </p>
            </div>
          </div>
        </div>

        {/* Links & Assets */}
        <div className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-indigo-600" />
            Assets & References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="#"
              className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:shadow-md transition-all"
            >
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Portfolio Presentation
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:shadow-md transition-all"
            >
              <BarChart3 className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                KPI Screenshot
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg hover:shadow-md transition-all"
            >
              <ExternalLink className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Demo Loom Video
              </span>
            </a>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            Recent Prep Activity
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Added company founding story and philanthropic mission research
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                1 hour ago
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Generated search merchandising playbook
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                2 hours ago
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Exported 25 adult-category synonyms and compliance redirects
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                3 hours ago
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Built KPI performance dashboard with before/after metrics
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                Yesterday
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Researched HawkSearch implementation best practices
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                2 days ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
