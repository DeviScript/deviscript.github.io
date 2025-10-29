"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Package,
  DollarSign,
  TrendingUp,
  Tag,
  Users,
  Building2,
  ExternalLink,
  Star,
  Crown,
  Heart,
  Zap,
  Shield,
} from "lucide-react";

const StatusBadge = ({
  text,
  variant = "default",
}: {
  text: string;
  variant?: "default" | "success" | "premium" | "sale";
}) => {
  const styles = {
    default: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    success:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    premium:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    sale: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${styles[variant]}`}
    >
      {text}
    </span>
  );
};

export default function ProductIntelligencePage() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "products" | "brands" | "pricing"
  >("overview");

  const exportToMarkdown = () => {
    const content = `# Adam & Eve Product Intelligence Report
Generated: ${new Date().toLocaleDateString()}

## Business Overview
- **Founded**: 1971 (50+ years)
- **Parent**: PHE, Inc. (employee-owned)
- **GMV 2024**: $197M (online, ECDB model)
- **Conversion Rate**: 3.0-3.5% (directional)
- **1P Share**: 100% (no marketplace)
- **Retail**: 100+ franchised stores
- **Platform**: HawkSearch powered

## Price Bands & Category Structure

### Vibrators ($10-$160+)
- **Wands**: Magic Wand Original $89.99, Rechargeable $159.99
- **Luxury/App**: We-Vibe Chorus $219, LELO Tiani $159
- **Value**: A&E private label $8.98-$37.98 (often 50%+ off)

### Couples/App-Enabled ($45-$219)
- **We-Vibe** dominates premium tier
- **Satisfyer** covers mid-tier app controls
- Focus on long-distance/mobile control features

### Lubes & Wellness ($6-$32)
- A&E private label $6.50-$8.00 (50% off)
- Premium: Uberlube $31.99
- Heavy attach strategy with BOGO/50% cycles

## Key Merchandising Insights
- **Perpetual Promotions**: 35% off 1 item, Free ship $69+, 20% off orders
- **Private Label Strategy**: A&E brand with 5-year warranty undercuts premium
- **Best-Seller Hubs**: Curated by audience (Women/Men/Couples) and category
- **Compliance Focus**: Age-appropriate redirects, discreet packaging, educational tone

## Brand Landscape
- **Premium**: We-Vibe (couples), Magic Wand (wands), LELO (luxury)
- **Mid-tier**: Satisfyer (air-pulse), Lovense (app-enabled)
- **Value**: Adam & Eve private label with warranty advantage
- **Specialty**: Fleshlight (men's), various bondage/kink brands

## Category Performance Drivers
1. **App/Remote Control**: Growth category, $70+ price points
2. **Air-Pulse Clitoral**: Womanizer/Satisfyer leading
3. **Couples Wearables**: We-Vibe franchise strength
4. **Private Label**: Margin protection with warranty/discount value prop
5. **Attachment Strategy**: Lubes/cleaners cross-sell heavily promoted

## Competitive Advantages
- 50+ year brand trust in sensitive category
- Discreet packaging/shipping as conversion moat
- Educational content approach reduces purchase friction
- 90-day returns + 5-year warranty on A&E products
- Always-on promotion structure for deal-seeking traffic
`;

    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "adam-eve-product-intelligence.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  const productData = [
    {
      category: "Wand Massagers",
      products: [
        {
          brand: "Magic Wand",
          name: "Original",
          price: "$89.99",
          notes: "AC-powered classic",
        },
        {
          brand: "Magic Wand",
          name: "Rechargeable",
          price: "$159.99",
          notes: "Cordless flagship",
        },
        {
          brand: "Magic Wand",
          name: "Mini",
          price: "$89.99",
          notes: "Compact rechargeable",
        },
        {
          brand: "Adam & Eve",
          name: "Intimate Curves Wand",
          price: "$37.98 → $77.99",
          notes: "Value wand, 51% off",
        },
        {
          brand: "Adam & Eve",
          name: "Eve's Mighty Mini",
          price: "$9.98 → $49.99",
          notes: "Deep markdown, 80% off",
        },
      ],
    },
    {
      category: "Luxury/App-Enabled",
      products: [
        {
          brand: "We-Vibe",
          name: "Chorus Couples",
          price: "$219.00",
          notes: "App-enabled wearable, dual-motor",
        },
        {
          brand: "We-Vibe",
          name: "Sync O Couples",
          price: "$179.00",
          notes: "Premium couples wearable",
        },
        {
          brand: "LELO",
          name: "Tiani Harmony",
          price: "$159.00",
          notes: "Premium couples massager",
        },
        {
          brand: "Lovense",
          name: "Nora Bluetooth Rabbit",
          price: "$119.00",
          notes: "App-controlled rabbit",
        },
        {
          brand: "Crave",
          name: "Vesper 2 Necklace",
          price: "$98.00",
          notes: "Discreet 'pleasure jewelry'",
        },
      ],
    },
    {
      category: "Lubes & Wellness",
      products: [
        {
          brand: "Adam & Eve",
          name: "Personal Silicone Lube",
          price: "$12.50 → $24.99",
          notes: "50% off special",
        },
        {
          brand: "Uberlube",
          name: "Silicone Lubricant",
          price: "$31.99",
          notes: "Premium silicone",
        },
        {
          brand: "Swiss Navy",
          name: "Masturbation Cream",
          price: "$13.50 → $26.99",
          notes: "50% off",
        },
        {
          brand: "Intimate Earth",
          name: "Plush Anal Hybrid",
          price: "$17.49 → $24.99",
          notes: "30% off",
        },
        {
          brand: "GoodHead",
          name: "Kit For Her",
          price: "$20.00 → $39.99",
          notes: "50% off bundle",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-7xl p-6 pt-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/interview/adameve"
              className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-md transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Interview</span>
            </Link>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Product Intelligence
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Adam & Eve catalog, pricing, and merchandising analysis
              </p>
            </div>
          </div>
          <button
            onClick={exportToMarkdown}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 dark:bg-slate-800 rounded-lg p-1 mb-8">
          {[
            { id: "overview", label: "Business Overview", icon: Building2 },
            { id: "products", label: "Product Catalog", icon: Package },
            { id: "brands", label: "Brand Strategy", icon: Crown },
            { id: "pricing", label: "Pricing Intel", icon: DollarSign },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === tab.id
                  ? "bg-white dark:bg-slate-700 text-amber-600 shadow-sm"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      $197M
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      2024 GMV
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      3.0-3.5%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      CVR Range
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      100%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      1P Share
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-8 h-8 text-amber-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      100+
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Retail Stores
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Structure */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-amber-600" />
                Category Structure
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Vibrators", count: "514", range: "$10-$160+" },
                  { name: "Dildos", count: "145", range: "$15-$120+" },
                  {
                    name: "Male Masturbators",
                    count: "155",
                    range: "$20-$200+",
                  },
                  { name: "Couples", count: "195", range: "$45-$219" },
                  { name: "Anal & Prostate", count: "120", range: "$12-$150+" },
                  {
                    name: "Lubes & Wellness",
                    count: "varies",
                    range: "$6-$32",
                  },
                  { name: "Bondage", count: "115", range: "$8-$300+" },
                  { name: "Penis Rings", count: "68", range: "$5-$80+" },
                  { name: "Lingerie", count: "varies", range: "$15-$200+" },
                ].map((category) => (
                  <div
                    key={category.name}
                    className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div className="font-medium text-gray-900 dark:text-white">
                      {category.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {category.count} items • {category.range}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Advantages */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-600" />
                Competitive Advantages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      50+ years brand trust
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Discreet packaging/shipping
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Educational, judgment-free approach
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      90-day returns policy
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Always-on promotion structure
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      5-year warranty on A&E products
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="space-y-8">
            {productData.map((category) => (
              <div
                key={category.category}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-slate-700">
                        <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Brand
                        </th>
                        <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Product
                        </th>
                        <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Price
                        </th>
                        <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.products.map((product, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-gray-100 dark:border-slate-700/50"
                        >
                          <td className="py-3 text-sm">
                            <span
                              className={`font-medium ${
                                product.brand === "Adam & Eve"
                                  ? "text-amber-600 dark:text-amber-400"
                                  : "text-gray-900 dark:text-white"
                              }`}
                            >
                              {product.brand}
                            </span>
                          </td>
                          <td className="py-3 text-sm text-gray-700 dark:text-gray-300">
                            {product.name}
                          </td>
                          <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">
                            {product.price.includes("→") && (
                              <StatusBadge text="SALE" variant="sale" />
                            )}
                            <span className="ml-2">{product.price}</span>
                          </td>
                          <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                            {product.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Brands Tab */}
        {activeTab === "brands" && (
          <div className="space-y-8">
            {/* Brand Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-6 h-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Premium Tier
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    • <strong>We-Vibe</strong> - Couples/app wearables
                  </li>
                  <li>
                    • <strong>LELO</strong> - Luxury vibrators
                  </li>
                  <li>
                    • <strong>Magic Wand</strong> - Wand category leader
                  </li>
                  <li>
                    • <strong>Womanizer</strong> - Air-pulse pioneer
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Mid-Tier
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    • <strong>Satisfyer</strong> - Air-pulse/app controls
                  </li>
                  <li>
                    • <strong>Lovense</strong> - App-enabled toys
                  </li>
                  <li>
                    • <strong>Doc Johnson</strong> - Mainstream appeal
                  </li>
                  <li>
                    • <strong>CalExotics</strong> - Broad assortment
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
                <div className="flex items-center gap-3 mb-4">
                  <Tag className="w-6 h-6 text-amber-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Value Tier
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    • <strong>Adam & Eve</strong> - Private label
                  </li>
                  <li>
                    • <strong>5-year warranty</strong> advantage
                  </li>
                  <li>
                    • <strong>Heavy discounting</strong> (50%+ off)
                  </li>
                  <li>
                    • <strong>Entry-level</strong> positioning
                  </li>
                </ul>
              </div>
            </div>

            {/* Brand Strategy Insights */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Brand Strategy Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Premium Brand Leverage
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• We-Vibe drives credibility in couples category</li>
                    <li>• Magic Wand establishes quality benchmark</li>
                    <li>• LELO/Womanizer justify higher price points</li>
                    <li>• App-enabled features command premium</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Private Label Strategy
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• 5-year warranty vs 1-year standard</li>
                    <li>• Heavy promotional pricing (50%+ off)</li>
                    <li>• Margin protection through own-brand</li>
                    <li>• Entry-level price points for trial purchases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === "pricing" && (
          <div className="space-y-8">
            {/* Pricing Strategy */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Perpetual Promotion Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="font-semibold text-red-700 dark:text-red-400 mb-2">
                    35% Off 1 Item
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Code: GET35
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Always-on coupon
                  </div>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="font-semibold text-blue-700 dark:text-blue-400 mb-2">
                    Free Shipping
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    $69+ orders
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Code: 69SHIP
                  </div>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="font-semibold text-purple-700 dark:text-purple-400 mb-2">
                    20% Off Order
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Rotating code
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Periodic special
                  </div>
                </div>
              </div>
            </div>

            {/* Price Band Analysis */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Price Band Analysis
              </h3>
              <div className="space-y-4">
                {[
                  {
                    category: "Vibrators",
                    range: "$10-$160+",
                    examples: "Magic Wand $89-159, A&E $8.98-37.98",
                  },
                  {
                    category: "Couples/App",
                    range: "$45-$219",
                    examples: "We-Vibe Chorus $219, Satisfyer $45-55",
                  },
                  {
                    category: "Lubes",
                    range: "$6-$32",
                    examples: "A&E $6.50-8.00, Uberlube $31.99",
                  },
                  {
                    category: "Male Toys",
                    range: "$20-$200+",
                    examples: "Fleshlight range, strokers, pumps",
                  },
                  {
                    category: "Anal/Prostate",
                    range: "$12-$150+",
                    examples: "Entry plugs to premium massagers",
                  },
                ].map((band) => (
                  <div
                    key={band.category}
                    className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {band.category}
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        {band.range}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {band.examples}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promotional Patterns */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Promotional Patterns
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Private Label Discounting
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• Consistent 50%+ markdowns on A&E brand</li>
                    <li>• Example: $9.98 → $49.99 (80% off)</li>
                    <li>• Drives perceived value vs list price</li>
                    <li>• Creates urgency for deal-seeking traffic</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Premium Brand Strategy
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• We-Vibe maintains consistent pricing</li>
                    <li>• Occasional 20% off on premium brands</li>
                    <li>• Focuses on bundle/attachment opportunities</li>
                    <li>• Preserves brand equity and margins</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
