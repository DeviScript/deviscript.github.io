"use client";

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  BrainCircuit,
  Code2,
  FileText,
  GraduationCap,
  Lightbulb,
  MessageSquare,
  PieChart,
  Rocket,
  Settings,
  Target,
  Users,
  Zap,
  Calendar,
  Clock,
  TrendingUp,
} from "lucide-react";

type AdminCard = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  color: string;
  bgGradient: string;
  status?: "Active" | "Coming Soon" | "Beta";
  lastUpdated?: string;
};

const ADMIN_SECTIONS: AdminCard[] = [
  {
    id: "interview-prep",
    title: "Interview Questions",
    description:
      "Practice technical and behavioral interview questions with STAR method examples",
    icon: MessageSquare,
    href: "/admin/interview-questions",
    color: "text-blue-600",
    bgGradient:
      "from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20",
    status: "Active",
    lastUpdated: "Today",
  },
  {
    id: "learning-tracker",
    title: "Learning Tracker",
    description:
      "Track courses, certifications, and skill development progress",
    icon: GraduationCap,
    href: "/admin/learning",
    color: "text-emerald-600",
    bgGradient:
      "from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20",
    status: "Beta",
    lastUpdated: "2 days ago",
  },
  {
    id: "project-ideas",
    title: "Project Ideas",
    description:
      "Brainstorm and manage upcoming development projects and features",
    icon: Lightbulb,
    href: "/admin/projects",
    color: "text-amber-600",
    bgGradient:
      "from-amber-50 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20",
    status: "Active",
    lastUpdated: "Yesterday",
  },
  {
    id: "code-snippets",
    title: "Code Snippets",
    description:
      "Save and organize reusable code snippets and development patterns",
    icon: Code2,
    href: "/admin/snippets",
    color: "text-purple-600",
    bgGradient:
      "from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20",
    status: "Active",
    lastUpdated: "3 days ago",
  },
  {
    id: "outerwave-notes",
    title: "OuterWave Development",
    description:
      "Track OuterWave app development, features, and business strategy",
    icon: Rocket,
    href: "/admin/outerwave",
    color: "text-cyan-600",
    bgGradient:
      "from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20",
    status: "Active",
    lastUpdated: "Today",
  },
  {
    id: "research-notes",
    title: "Research & Trends",
    description:
      "Industry research, technology trends, and competitive analysis",
    icon: TrendingUp,
    href: "/admin/research",
    color: "text-rose-600",
    bgGradient:
      "from-rose-50 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20",
    status: "Active",
    lastUpdated: "1 week ago",
  },
  {
    id: "career-goals",
    title: "Career Planning",
    description:
      "Professional goals, networking contacts, and career development",
    icon: Target,
    href: "/admin/career",
    color: "text-indigo-600",
    bgGradient:
      "from-indigo-50 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20",
    status: "Active",
    lastUpdated: "5 days ago",
  },
  {
    id: "analytics",
    title: "Analytics Dashboard",
    description:
      "Track portfolio performance, visitor analytics, and growth metrics",
    icon: PieChart,
    href: "/admin/analytics",
    color: "text-orange-600",
    bgGradient:
      "from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20",
    status: "Coming Soon",
    lastUpdated: "—",
  },
  {
    id: "interview-adameve",
    title: "Interview: Adam & Eve",
    description:
      "Digital Merchandise Manager interview prep with artifacts and demo materials",
    icon: BrainCircuit,
    href: "/admin/interview/adameve",
    color: "text-pink-600",
    bgGradient:
      "from-pink-50 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20",
    status: "Active",
    lastUpdated: "Today",
  },
];

const QUICK_STATS = [
  {
    label: "Active Projects",
    value: "3",
    icon: Rocket,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    label: "Learning Goals",
    value: "7",
    icon: Target,
    color: "text-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-900/20",
  },
  {
    label: "Code Snippets",
    value: "24",
    icon: Code2,
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    label: "Interview Q&A",
    value: "15",
    icon: MessageSquare,
    color: "text-amber-600",
    bg: "bg-amber-100 dark:bg-amber-900/20",
  },
];

function StatusBadge({ status }: { status: string }) {
  const styles = {
    Active:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    Beta: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    "Coming Soon":
      "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status}
    </span>
  );
}

export default function AdminPortal() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-7xl p-6 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Admin Portal
            </h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Your personal command center for development, learning, and growth
            tracking. Manage projects, practice interviews, and organize your
            professional journey.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {QUICK_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Admin Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADMIN_SECTIONS.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="group block transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <div
                className={`bg-gradient-to-br ${section.bgGradient} rounded-xl p-6 border border-gray-200 dark:border-slate-700 h-full`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-white dark:bg-slate-800 shadow-sm`}
                  >
                    <section.icon className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <StatusBadge status={section.status || "Active"} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {section.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {section.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {section.lastUpdated}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Open →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            Recent Activity
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Updated OuterWave development notes
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                2 hours ago
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Added new interview questions for React hooks
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                Yesterday
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Created TypeScript utility function snippet
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">
                3 days ago
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium">
            + Add New Note
          </button>
          <button className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 rounded-lg hover:shadow-md transition-all duration-200 text-sm font-medium">
            📊 View Analytics
          </button>
          <button className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 rounded-lg hover:shadow-md transition-all duration-200 text-sm font-medium">
            ⚙️ Settings
          </button>
        </div>
      </div>
    </main>
  );
}
