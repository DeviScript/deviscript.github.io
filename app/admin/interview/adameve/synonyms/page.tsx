"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Database,
  Search,
  RotateCcw,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const todayLabel = () =>
  new Date().toLocaleDateString(undefined, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

const synonymData = [
  {
    type: "synonym",
    query: "vib",
    target: "vibrator",
    note: "Common abbreviation",
  },
  {
    type: "synonym",
    query: "bullet",
    target: "bullet vibrator",
    note: "Specific product type",
  },
  {
    type: "synonym",
    query: "wand",
    target: "wand massager",
    note: "Massage category",
  },
  {
    type: "synonym",
    query: "rabbit",
    target: "rabbit vibrator",
    note: "Dual-stimulation alias",
  },
  {
    type: "synonym",
    query: "couples toy",
    target: "couples vibrator",
    note: "Relationship-focused",
  },
  {
    type: "synonym",
    query: "discreet",
    target: "quiet vibrator",
    note: "Privacy concern",
  },
  {
    type: "synonym",
    query: "waterproof",
    target: "waterproof vibrator",
    note: "Feature-based",
  },
  {
    type: "synonym",
    query: "app controlled",
    target: "remote vibrator",
    note: "Tech feature",
  },
  {
    type: "synonym",
    query: "beginner",
    target: "beginner vibrator",
    note: "Experience level",
  },
  {
    type: "synonym",
    query: "travel size",
    target: "compact vibrator",
    note: "Size preference",
  },
  {
    type: "synonym",
    query: "cock ring",
    target: "penis ring",
    note: "Alternative term",
  },
  {
    type: "synonym",
    query: "strap on",
    target: "strap-on",
    note: "Spelling variant",
  },
  {
    type: "synonym",
    query: "anal toy",
    target: "anal plug",
    note: "Category expansion",
  },
  {
    type: "synonym",
    query: "prostate",
    target: "prostate massager",
    note: "Anatomical reference",
  },
  {
    type: "synonym",
    query: "bondage gear",
    target: "bondage",
    note: "Category simplification",
  },
  {
    type: "synonym",
    query: "plus size",
    target: "plus-size lingerie",
    note: "Size-inclusive",
  },
  {
    type: "synonym",
    query: "water based",
    target: "water-based lube",
    note: "Chemistry preference",
  },
  {
    type: "synonym",
    query: "silicone safe",
    target: "silicone-safe lube",
    note: "Material compatibility",
  },
  {
    type: "synonym",
    query: "cleaner",
    target: "toy cleaner",
    note: "Maintenance product",
  },
  {
    type: "synonym",
    query: "quiet",
    target: "whisper quiet",
    note: "Noise level",
  },
  {
    type: "synonym",
    query: "remote",
    target: "app controlled",
    note: "Feature alias",
  },
  {
    type: "synonym",
    query: "usb",
    target: "usb rechargeable",
    note: "Power feature",
  },
  {
    type: "synonym",
    query: "glass",
    target: "glass toy",
    note: "Material alias",
  },
  {
    type: "synonym",
    query: "silicone",
    target: "silicone toy",
    note: "Material alias",
  },
];

const redirectData = [
  {
    type: "redirect",
    query: "18+",
    target: "/education/age-verification",
    note: "Age compliance",
  },
  {
    type: "redirect",
    query: "porn",
    target: "/education/sexual-wellness",
    note: "Educational redirect",
  },
  {
    type: "redirect",
    query: "xxx",
    target: "/education/sexual-wellness",
    note: "Educational redirect",
  },
  {
    type: "redirect",
    query: "cheap",
    target: "/collections/value",
    note: "Reframe pricing concern",
  },
  {
    type: "redirect",
    query: "doctor recommended",
    target: "/education/sexual-health",
    note: "Medical authority",
  },
  {
    type: "redirect",
    query: "discreet shipping",
    target: "/shipping-privacy",
    note: "Privacy assurance",
  },
];

export default function SynonymsPage() {
  const downloadCSV = () => {
    const allData = [...synonymData, ...redirectData];
    const csvContent = [
      "type,query,target,note",
      ...allData.map(
        (row) => `${row.type},"${row.query}","${row.target}","${row.note}"`
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "synonyms-redirects.csv";
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
              <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Synonyms & Redirects Database
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Adult category search optimization & compliance
                </p>
              </div>
            </div>
            <button
              onClick={downloadCSV}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
            >
              <Database className="w-4 h-4" />
              Download CSV
            </button>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <Search className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {synonymData.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Synonyms
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <RotateCcw className="w-8 h-8 text-emerald-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {redirectData.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Redirects
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {synonymData.length + redirectData.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Entries
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Synonyms Section */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-600" />
            Search Synonyms ({synonymData.length} entries)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Alternative terms that map to canonical product names to reduce
            zero-result searches.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                    Query
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                    Maps To
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {synonymData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 dark:border-slate-700/50"
                  >
                    <td className="py-2 px-3">
                      <code className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 px-2 py-1 rounded text-xs">
                        {item.query}
                      </code>
                    </td>
                    <td className="py-2 px-3 font-medium text-gray-900 dark:text-white">
                      {item.target}
                    </td>
                    <td className="py-2 px-3 text-gray-600 dark:text-gray-400">
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Redirects Section */}
        <section className="mb-8 bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Compliance Redirects ({redirectData.length} entries)
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Age-inappropriate or sensitive terms that redirect to educational
            content or safe alternatives.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-red-200 dark:border-red-800/50">
                  <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                    Query
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                    Redirects To
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {redirectData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-red-100 dark:border-red-800/30"
                  >
                    <td className="py-2 px-3">
                      <code className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 px-2 py-1 rounded text-xs">
                        {item.query}
                      </code>
                    </td>
                    <td className="py-2 px-3 font-medium text-gray-900 dark:text-white">
                      <code className="text-xs">{item.target}</code>
                    </td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300">
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="mb-8 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Implementation Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                HawkSearch Integration
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Upload via CSV import or API</li>
                <li>• Test on staging environment first</li>
                <li>• Monitor search analytics for effectiveness</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Maintenance Schedule
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Weekly review of new zero-result queries</li>
                <li>• Monthly audit of synonym performance</li>
                <li>• Quarterly compliance review</li>
              </ul>
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
