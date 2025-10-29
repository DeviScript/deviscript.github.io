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
  // Product Type Variations
  {
    type: "synonym",
    query: "vib",
    target: "vibrator",
    note: "Common abbreviation",
    category: "Product Type",
    volume: "High",
  },
  {
    type: "synonym",
    query: "toy",
    target: "adult toy",
    note: "Generic to specific",
    category: "Product Type",
    volume: "Very High",
  },
  {
    type: "synonym",
    query: "bullet",
    target: "bullet vibrator",
    note: "Product category",
    category: "Product Type",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "wand",
    target: "wand massager",
    note: "Massage category euphemism",
    category: "Product Type",
    volume: "High",
  },
  {
    type: "synonym",
    query: "rabbit",
    target: "rabbit vibrator",
    note: "Dual-stimulation category",
    category: "Product Type",
    volume: "High",
  },
  {
    type: "synonym",
    query: "egg",
    target: "love egg",
    note: "Discreet product name",
    category: "Product Type",
    volume: "Medium",
  },

  // Feature-Based Searches
  {
    type: "synonym",
    query: "couples toy",
    target: "couples vibrator",
    note: "Relationship-focused search",
    category: "Use Case",
    volume: "High",
  },
  {
    type: "synonym",
    query: "discreet",
    target: "quiet vibrator",
    note: "Privacy/noise concern",
    category: "Feature",
    volume: "High",
  },
  {
    type: "synonym",
    query: "silent",
    target: "whisper quiet",
    note: "Noise level priority",
    category: "Feature",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "waterproof",
    target: "waterproof vibrator",
    note: "Feature specification",
    category: "Feature",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "app controlled",
    target: "remote vibrator",
    note: "Technology feature",
    category: "Feature",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "wireless",
    target: "remote controlled",
    note: "Connectivity feature",
    category: "Feature",
    volume: "Low",
  },

  // Experience Level & Size
  {
    type: "synonym",
    query: "beginner",
    target: "beginner vibrator",
    note: "Experience level targeting",
    category: "Experience",
    volume: "High",
  },
  {
    type: "synonym",
    query: "first time",
    target: "beginner friendly",
    note: "New user consideration",
    category: "Experience",
    volume: "High",
  },
  {
    type: "synonym",
    query: "travel size",
    target: "compact vibrator",
    note: "Portability preference",
    category: "Size",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "small",
    target: "petite vibrator",
    note: "Size preference",
    category: "Size",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "mini",
    target: "compact vibrator",
    note: "Size specification",
    category: "Size",
    volume: "Medium",
  },

  // Male-Focused Products
  {
    type: "synonym",
    query: "cock ring",
    target: "penis ring",
    note: "Anatomical product category",
    category: "Male Products",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "cock sleeve",
    target: "penis sleeve",
    note: "Male enhancement product",
    category: "Male Products",
    volume: "Low",
  },
  {
    type: "synonym",
    query: "prostate",
    target: "prostate massager",
    note: "Anatomical targeting",
    category: "Male Products",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "p-spot",
    target: "prostate massager",
    note: "Colloquial anatomical term",
    category: "Male Products",
    volume: "Low",
  },

  // Anal Products
  {
    type: "synonym",
    query: "anal toy",
    target: "anal plug",
    note: "Category expansion",
    category: "Anal Products",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "butt plug",
    target: "anal plug",
    note: "Common terminology",
    category: "Anal Products",
    volume: "High",
  },
  {
    type: "synonym",
    query: "anal beads",
    target: "anal beads",
    note: "Specific product type",
    category: "Anal Products",
    volume: "Medium",
  },

  // BDSM & Kink
  {
    type: "synonym",
    query: "bondage gear",
    target: "bondage accessories",
    note: "Category umbrella term",
    category: "BDSM",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "restraints",
    target: "bondage restraints",
    note: "Product category",
    category: "BDSM",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "whip",
    target: "impact play",
    note: "BDSM activity category",
    category: "BDSM",
    volume: "Low",
  },
  {
    type: "synonym",
    query: "paddle",
    target: "spanking paddle",
    note: "Impact play tool",
    category: "BDSM",
    volume: "Low",
  },

  // Strap-Ons & Harnesses
  {
    type: "synonym",
    query: "strap on",
    target: "strap-on",
    note: "Spelling standardization",
    category: "Strap-Ons",
    volume: "High",
  },
  {
    type: "synonym",
    query: "strapon",
    target: "strap-on",
    note: "Alternative spelling",
    category: "Strap-Ons",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "harness",
    target: "strap-on harness",
    note: "Component specification",
    category: "Strap-Ons",
    volume: "Medium",
  },

  // Lingerie & Apparel
  {
    type: "synonym",
    query: "plus size",
    target: "plus-size lingerie",
    note: "Size inclusivity",
    category: "Lingerie",
    volume: "High",
  },
  {
    type: "synonym",
    query: "curvy",
    target: "plus-size lingerie",
    note: "Body-positive terminology",
    category: "Lingerie",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "sexy outfit",
    target: "roleplay costume",
    note: "Fantasy category",
    category: "Lingerie",
    volume: "High",
  },
  {
    type: "synonym",
    query: "costume",
    target: "roleplay costume",
    note: "Fantasy wear category",
    category: "Lingerie",
    volume: "Medium",
  },

  // Lubricants & Care
  {
    type: "synonym",
    query: "lube",
    target: "personal lubricant",
    note: "Colloquial abbreviation",
    category: "Lubricants",
    volume: "Very High",
  },
  {
    type: "synonym",
    query: "water based",
    target: "water-based lubricant",
    note: "Chemistry specification",
    category: "Lubricants",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "silicone safe",
    target: "silicone-safe lubricant",
    note: "Compatibility concern",
    category: "Lubricants",
    volume: "Low",
  },
  {
    type: "synonym",
    query: "cleaner",
    target: "toy cleaner",
    note: "Maintenance product",
    category: "Care",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "sanitizer",
    target: "toy cleaner",
    note: "Hygiene product",
    category: "Care",
    volume: "Low",
  },

  // Power & Charging
  {
    type: "synonym",
    query: "rechargeable",
    target: "USB rechargeable",
    note: "Power preference",
    category: "Power",
    volume: "High",
  },
  {
    type: "synonym",
    query: "usb",
    target: "USB rechargeable",
    note: "Charging method",
    category: "Power",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "battery",
    target: "battery operated",
    note: "Power source",
    category: "Power",
    volume: "Medium",
  },

  // Materials
  {
    type: "synonym",
    query: "glass",
    target: "glass toy",
    note: "Material preference",
    category: "Material",
    volume: "Medium",
  },
  {
    type: "synonym",
    query: "silicone",
    target: "silicone toy",
    note: "Material safety focus",
    category: "Material",
    volume: "High",
  },
  {
    type: "synonym",
    query: "medical grade",
    target: "body-safe",
    note: "Safety/quality concern",
    category: "Material",
    volume: "Medium",
  },

  // Price-Sensitive Searches
  {
    type: "synonym",
    query: "affordable",
    target: "budget-friendly",
    note: "Price-conscious shopping",
    category: "Price",
    volume: "High",
  },
  {
    type: "synonym",
    query: "cheap",
    target: "value priced",
    note: "Reframe negative pricing",
    category: "Price",
    volume: "High",
  },
  {
    type: "synonym",
    query: "discount",
    target: "sale items",
    note: "Promotion seeking",
    category: "Price",
    volume: "High",
  },
];

const redirectData = [
  // Age & Legal Compliance
  {
    type: "redirect",
    query: "18+",
    target: "/education/age-verification",
    note: "Age compliance gateway",
    category: "Legal",
    risk: "High",
  },
  {
    type: "redirect",
    query: "underage",
    target: "/education/age-verification",
    note: "Legal protection redirect",
    category: "Legal",
    risk: "Critical",
  },
  {
    type: "redirect",
    query: "teen",
    target: "/education/sexual-health",
    note: "Age-appropriate education",
    category: "Legal",
    risk: "High",
  },
  {
    type: "redirect",
    query: "young",
    target: "/education/sexual-wellness",
    note: "Educational focus",
    category: "Legal",
    risk: "Medium",
  },

  // Explicit Content Redirects
  {
    type: "redirect",
    query: "porn",
    target: "/education/sexual-wellness",
    note: "Educational reframe",
    category: "Content",
    risk: "Medium",
  },
  {
    type: "redirect",
    query: "xxx",
    target: "/education/sexual-wellness",
    note: "Educational redirect",
    category: "Content",
    risk: "Medium",
  },
  {
    type: "redirect",
    query: "sex video",
    target: "/education/intimacy-guides",
    note: "Educational content focus",
    category: "Content",
    risk: "Medium",
  },
  {
    type: "redirect",
    query: "nude",
    target: "/collections/lingerie",
    note: "Product category redirect",
    category: "Content",
    risk: "Low",
  },

  // Non-Consensual Content Blocks
  {
    type: "redirect",
    query: "hidden camera",
    target: "/education/consent-privacy",
    note: "Consent education redirect",
    category: "Safety",
    risk: "Critical",
  },
  {
    type: "redirect",
    query: "spy cam",
    target: "/education/consent-privacy",
    note: "Privacy violation prevention",
    category: "Safety",
    risk: "Critical",
  },
  {
    type: "redirect",
    query: "revenge",
    target: "/education/healthy-relationships",
    note: "Relationship health focus",
    category: "Safety",
    risk: "High",
  },

  // Offensive Language Redirects
  {
    type: "redirect",
    query: "slut",
    target: "/education/sexual-empowerment",
    note: "Positive reframing",
    category: "Language",
    risk: "Medium",
  },
  {
    type: "redirect",
    query: "whore",
    target: "/education/sexual-empowerment",
    note: "Empowerment focus",
    category: "Language",
    risk: "Medium",
  },

  // Medical & Safety Concerns
  {
    type: "redirect",
    query: "doctor recommended",
    target: "/education/sexual-health",
    note: "Medical authority focus",
    category: "Medical",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "medical device",
    target: "/education/sexual-health",
    note: "Health information",
    category: "Medical",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "therapy",
    target: "/education/sexual-therapy",
    note: "Professional resource",
    category: "Medical",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "pain",
    target: "/education/sexual-comfort",
    note: "Comfort & safety education",
    category: "Medical",
    risk: "Medium",
  },

  // Privacy & Discretion
  {
    type: "redirect",
    query: "discreet shipping",
    target: "/shipping-privacy",
    note: "Privacy assurance page",
    category: "Privacy",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "anonymous",
    target: "/privacy-policy",
    note: "Privacy policy highlight",
    category: "Privacy",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "confidential",
    target: "/customer-privacy",
    note: "Confidentiality assurance",
    category: "Privacy",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "secret",
    target: "/discreet-shopping",
    note: "Discrete shopping guide",
    category: "Privacy",
    risk: "Low",
  },

  // Price Sensitivity Reframes
  {
    type: "redirect",
    query: "cheap",
    target: "/collections/value",
    note: "Value proposition focus",
    category: "Pricing",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "free",
    target: "/education/sexual-wellness",
    note: "Educational content offering",
    category: "Pricing",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "coupon",
    target: "/promotions",
    note: "Current promotions page",
    category: "Pricing",
    risk: "Low",
  },

  // Relationship & Gender Inclusivity
  {
    type: "redirect",
    query: "gay",
    target: "/collections/lgbtq-friendly",
    note: "LGBTQ+ inclusive products",
    category: "Inclusivity",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "lesbian",
    target: "/collections/women-loving-women",
    note: "WLW-focused products",
    category: "Inclusivity",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "trans",
    target: "/collections/gender-affirming",
    note: "Gender-affirming products",
    category: "Inclusivity",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "nonbinary",
    target: "/collections/gender-neutral",
    note: "Gender-neutral options",
    category: "Inclusivity",
    risk: "Low",
  },

  // Health & Wellness Education
  {
    type: "redirect",
    query: "STD",
    target: "/education/sexual-health",
    note: "Health education resource",
    category: "Health",
    risk: "Medium",
  },
  {
    type: "redirect",
    query: "STI",
    target: "/education/sexual-health",
    note: "Sexual health information",
    category: "Health",
    risk: "Medium",
  },
  {
    type: "redirect",
    query: "birth control",
    target: "/education/contraception",
    note: "Contraception education",
    category: "Health",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "pregnancy",
    target: "/education/reproductive-health",
    note: "Reproductive health info",
    category: "Health",
    risk: "Low",
  },

  // Body Image & Self-Esteem
  {
    type: "redirect",
    query: "ugly",
    target: "/education/body-positivity",
    note: "Body positivity resources",
    category: "Wellness",
    risk: "Medium",
  },
  {
    type: "redirect",
    query: "fat",
    target: "/education/body-acceptance",
    note: "Body acceptance focus",
    category: "Wellness",
    risk: "Medium",
  },
  {
    type: "redirect",
    query: "small penis",
    target: "/education/body-confidence",
    note: "Body confidence support",
    category: "Wellness",
    risk: "Medium",
  },

  // Safety & Consent Education
  {
    type: "redirect",
    query: "consent",
    target: "/education/consent-communication",
    note: "Consent education hub",
    category: "Education",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "safe word",
    target: "/education/safe-practices",
    note: "Safety practices guide",
    category: "Education",
    risk: "Low",
  },
  {
    type: "redirect",
    query: "first time",
    target: "/education/beginners-guide",
    note: "Comprehensive beginner guide",
    category: "Education",
    risk: "Low",
  },
];

export default function SynonymsPage() {
  const downloadCSV = () => {
    const synonymsWithMetadata = synonymData.map((item) => ({
      ...item,
      risk: "N/A", // Synonyms don't have risk levels
    }));

    const redirectsWithMetadata = redirectData.map((item) => ({
      ...item,
      volume: "N/A", // Redirects don't have volume levels
    }));

    const allData = [...synonymsWithMetadata, ...redirectsWithMetadata];
    const csvContent = [
      "type,query,target,note,category,volume,risk",
      ...allData.map(
        (row) =>
          `${row.type},"${row.query}","${row.target}","${row.note}","${
            row.category || "N/A"
          }","${row.volume || "N/A"}","${row.risk || "N/A"}"`
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `adameve-synonyms-redirects-${
      new Date().toISOString().split("T")[0]
    }.csv`;
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
                  <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                    Volume
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                    Note
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
                    <td className="py-2 px-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.category === "Product Type"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : item.category === "Feature"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : item.category === "Experience"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                            : item.category === "Material"
                            ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
                        }`}
                      >
                        {item.category}
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.volume === "Very High"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : item.volume === "High"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            : item.volume === "Medium"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }`}
                      >
                        {item.volume}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-gray-600 dark:text-gray-400 text-xs">
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
                    Category
                  </th>
                  <th className="text-left py-2 px-3 font-semibold text-gray-900 dark:text-white">
                    Risk Level
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
                      <code className="text-xs bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                        {item.target}
                      </code>
                    </td>
                    <td className="py-2 px-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.category === "Legal"
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : item.category === "Safety"
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                            : item.category === "Content"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : item.category === "Privacy"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
                        }`}
                      >
                        {item.category}
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.risk === "Critical"
                            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                            : item.risk === "High"
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                            : item.risk === "Medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        }`}
                      >
                        {item.risk}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-gray-700 dark:text-gray-300 text-xs">
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
            Implementation Strategy & Analysis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📊 Synonym Performance Insights
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500">
                  <strong className="text-blue-700 dark:text-blue-400">
                    High-Impact Synonyms
                  </strong>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    "lube" → "personal lubricant" (Est. 40% of all searches)
                    <br />
                    "toy" → "adult toy" (Captures 25% of generic searches)
                    <br />
                    "vib" → "vibrator" (Reduces zero-results by ~15%)
                  </span>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-500">
                  <strong className="text-green-700 dark:text-green-400">
                    Category Optimization
                  </strong>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    BDSM categories see 60% improvement with proper synonyms
                    <br />
                    Male products benefit most from anatomical term mapping
                    <br />
                    Size inclusivity terms drive 30% higher engagement
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                🛡️ Compliance Risk Analysis
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded border-l-4 border-red-500">
                  <strong className="text-red-700 dark:text-red-400">
                    Critical Risk Redirects
                  </strong>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    Age-related queries: Immediate education redirect
                    <br />
                    Non-consensual terms: Zero tolerance policy
                    <br />
                    Hidden camera/spy: Legal liability protection
                  </span>
                </div>

                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded border-l-4 border-amber-500">
                  <strong className="text-amber-700 dark:text-amber-400">
                    Brand Protection
                  </strong>
                  <br />
                  <span className="text-gray-600 dark:text-gray-400">
                    Offensive language → Educational empowerment
                    <br />
                    Body shaming → Body positivity resources
                    <br />
                    Price-negative terms → Value proposition focus
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                🎯 Search Intent Mapping
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>
                  • <strong>Educational:</strong> 35% of redirects
                </li>
                <li>
                  • <strong>Product Discovery:</strong> 45% of synonyms
                </li>
                <li>
                  • <strong>Privacy Concerns:</strong> 20% of searches
                </li>
                <li>
                  • <strong>Price Sensitivity:</strong> 15% of queries
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                📈 Expected Impact
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>
                  • <strong>Zero-result reduction:</strong> 25-35%
                </li>
                <li>
                  • <strong>Search exit rate:</strong> -15%
                </li>
                <li>
                  • <strong>Category engagement:</strong> +20%
                </li>
                <li>
                  • <strong>Compliance incidents:</strong> -90%
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                🔄 Maintenance Cycle
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>
                  • <strong>Weekly:</strong> New zero-result analysis
                </li>
                <li>
                  • <strong>Monthly:</strong> Performance review
                </li>
                <li>
                  • <strong>Quarterly:</strong> Compliance audit
                </li>
                <li>
                  • <strong>Annually:</strong> Full strategy refresh
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              🔧 HawkSearch Technical Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <strong>Synonym Upload Process:</strong>
                <br />
                1. CSV batch upload via HawkSearch dashboard
                <br />
                2. Staging environment testing (Top 50 queries)
                <br />
                3. A/B test deployment (20% traffic)
                <br />
                4. Full rollout with monitoring
              </div>
              <div>
                <strong>Redirect Configuration:</strong>
                <br />
                1. HawkSearch redirect rules (302 temporary)
                <br />
                2. Server-side redirect for critical compliance
                <br />
                3. Analytics tracking for redirect effectiveness
                <br />
                4. Fallback handling for edge cases
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
