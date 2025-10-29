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
  ExternalLink,
  TestTube,
  AlertTriangle,
  MessageSquare,
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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-2 leading-tight">
                  Digital Merchandise Manager
                </h1>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Adam & Eve
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold rounded-full">
                    PHE, Inc.
                  </span>
                </div>
                <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl">
                  Comprehensive interview preparation: playbook, merchandising
                  rules, KPI frameworks, A/B testing methodology, and compliance
                  strategy
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3">
              <div
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm"
                aria-label="Interview date"
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {todayLabel()}
                </span>
              </div>
              <StatusBadge status="Interview Ready" variant="success" />
            </div>
          </div>
        </div>

        {/* Research Methodology Disclaimer */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Research Methodology & Data Disclaimer
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                This presentation demonstrates research depth and analytical
                approach to the role. All company data, market metrics, and
                financial figures are
                <strong>
                  {" "}
                  estimates based on publicly available sources
                </strong>{" "}
                including corporate websites, industry databases (eCommerce
                Database, IBISWorld, Statista), LinkedIn profiles, and news
                articles. These figures are used to showcase strategic thinking
                and are <strong>subject to correction</strong> during the
                interview process.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white dark:bg-slate-800 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-slate-600">
                  Public Research
                </span>
                <span className="px-3 py-1 bg-white dark:bg-slate-800 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-slate-600">
                  Industry Estimates
                </span>
                <span className="px-3 py-1 bg-white dark:bg-slate-800 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-slate-600">
                  Pending Validation
                </span>
                <span className="px-3 py-1 bg-white dark:bg-slate-800 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-slate-600">
                  Strategic Context
                </span>
              </div>
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

          {/* Research Disclosure */}
          <div className="mt-4 p-3 bg-gray-50 dark:bg-slate-700/30 rounded-lg border border-gray-200 dark:border-slate-600">
            <p className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
              <Shield className="w-3 h-3 flex-shrink-0 mt-0.5 text-gray-500" />
              <span>
                <strong>Research Sources:</strong> Company snapshot based on
                publicly available information including Adam & Eve corporate
                site, PHE Inc. career pages, eCommerce Database estimates
                (2024), LinkedIn company profiles, industry reports (IBISWorld,
                Statista), and news articles (News & Observer, Triangle Business
                Journal). All financial figures are estimates pending interview
                validation.
              </span>
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

        {/* Candidate Assessment Profile */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-900/20 dark:via-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                <MessageSquare className="w-10 h-10 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  🎯 Candidate Deep Dive: Comprehensive Q&A Profile
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Detailed assessment covering experience, approach,
                  problem-solving, and cultural alignment
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-white dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <div className="text-3xl font-bold text-indigo-600 mb-1">
                  40+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Scenarios Covered
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <div className="text-3xl font-bold text-blue-600 mb-1">6</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Competency Areas
                </div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Adam & Eve Context
                </div>
              </div>
            </div>

            <Link
              href="/admin/interview/adameve/qa-preparation"
              className="inline-flex items-center gap-3 px-6 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg group"
            >
              <span className="font-medium">
                View Complete Candidate Assessment
              </span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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
                  • <strong>Technical Systems Architecture</strong> - Data
                  pipelines, ETL automation, and backend integration expertise
                </li>
                <li>
                  • <strong>HawkSearch Platform (Learning Path)</strong> -
                  API-level understanding, configuration study, vendor
                  partnership
                </li>
                <li>
                  • <strong>Cross-functional Project Leadership</strong> - 7-lab
                  coordination, stakeholder alignment, deadline management
                </li>
                <li>
                  • <strong>Data-driven Methodology</strong> - A/B testing
                  frameworks, statistical analysis, automated reporting
                </li>
                <li>
                  • <strong>AI/ML Innovation Implementation</strong> - LLM/RAG
                  systems, personalization algorithms, automation tools
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Analytics & Innovation Focus
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  • <strong>Advanced Analytics Implementation</strong> -
                  Python/SQL automation, custom dashboards, behavioral analysis
                </li>
                <li>
                  • <strong>Backend Systems Integration</strong> - Product data
                  processing, API development, database optimization
                </li>
                <li>
                  • <strong>Emerging Technology Adoption</strong> -
                  AI/personalization research, innovation opportunity
                  identification
                </li>
                <li>
                  • <strong>Performance Optimization Focus</strong> - 62% error
                  reduction, 70% cycle time improvement, ROI measurement
                </li>
                <li>
                  • <strong>Customer-centric Technical Solutions</strong> - User
                  experience through data architecture and automation
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

        {/* Skills Translation & Gap Mitigation */}
        <div className="mb-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-600" />
            Skills Translation & Experience Gap Strategy
          </h2>

          <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-lg border border-amber-200 dark:border-slate-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-amber-700 dark:text-amber-400">
              📋 Honest Assessment: Experience Gaps vs. Transferable Strengths
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <strong>Gap:</strong> 2-3 years short of traditional 5+ years
              eCommerce merchandising requirement. However, my technical
              foundation provides accelerated learning capacity and unique
              analytical advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🔄 Direct Experience Translation
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <strong>
                    Data Pipeline Architecture → Search Optimization:
                  </strong>
                  <br />
                  Built ETL systems processing payment/shipping events =
                  understanding of product data flow for search indexing
                </li>
                <li>
                  <strong>ML Anomaly Detection → Performance Analytics:</strong>
                  <br />
                  Automated classification of data outliers = identifying search
                  query patterns and conversion anomalies
                </li>
                <li>
                  <strong>
                    Multi-lab Workflow Consolidation → Cross-functional
                    Leadership:
                  </strong>
                  <br />
                  Reduced 7-lab reporting cycle from 10→3 days = orchestrating
                  merchandising updates across teams
                </li>
                <li>
                  <strong>
                    LLM/RAG Pipeline Development → AI-driven Recommendations:
                  </strong>
                  <br />
                  Built narrative-to-content automation = implementing
                  personalization algorithms
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                ⚡ Accelerated Learning Advantages
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  <strong>Technical Deep-dive Capability:</strong>
                  <br />
                  Can read HawkSearch API documentation, understand backend
                  systems, debug complex integrations independently
                </li>
                <li>
                  <strong>Data-first Approach:</strong>
                  <br />
                  Won't rely on intuition—will instrument everything, A/B test
                  systematically, measure statistical significance
                </li>
                <li>
                  <strong>Automation & Efficiency:</strong>
                  <br />
                  Will build dashboards, automate reporting, create SQL queries
                  for custom analysis beyond standard tools
                </li>
                <li>
                  <strong>AI/Personalization Innovation:</strong>
                  <br />
                  Can implement cutting-edge recommendation systems, not just
                  configure existing tools
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              90-Day Competency Bridge Plan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <strong>Days 1-30: Foundation</strong>
                <br />
                Audit current HawkSearch setup, analyze merchandising team
                workflows and pain points, complete Baymard Institute courses on
                eCommerce search UX
              </div>
              <div>
                <strong>Days 31-60: Application</strong>
                <br />
                Implement first optimization (synonym expansion), build
                automated KPI dashboard, establish A/B testing framework
              </div>
              <div>
                <strong>Days 61-90: Innovation</strong>
                <br />
                Deploy AI-enhanced personalization, deliver measurable lift in
                key metrics, propose roadmap for advanced features
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Why Technical Background Is Actually an Asset
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Most merchandising managers rely on vendor support for complex
              implementations. I can <strong>build custom solutions</strong>,
              <strong>debug integration issues</strong>, and{" "}
              <strong>innovate beyond platform limitations</strong>. This
              technical depth means faster problem-solving and the ability to
              implement advanced features that typical merchandising teams can't
              handle in-house.
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

          {/* Core 5 Questions */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              Core 5 Questions
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  Why is this role open, and who would I report to?
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  What are the top priorities you'd want tackled in the first 90
                  days?
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  When someone really excels in this role, what are they doing
                  day-to-day? Which skills or traits are non-negotiable?
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  Which teams would I work with most, and what does good
                  collaboration look like here?
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  How would you describe the team culture and how decisions get
                  made?
                </p>
              </div>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Optional Add-ons (use 1–2 if time allows)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  What are the biggest challenges you expect this hire to tackle
                  in the first quarter?
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  What tools or processes does the team use today for planning
                  and execution (e.g., calendars, approvals, asset flow)?
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  What are the next steps and expected timeline for the process?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
