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
    "overview" | "products" | "brands" | "pricing" | "competitive" | "trends"
  >("overview");

  const exportToMarkdown = () => {
    const content = `# Adam & Eve Product Intelligence Report
Generated: ${new Date().toLocaleDateString()}

## Executive Summary
- **Market Position**: Largest U.S. adult retailer with 50+ year heritage
- **Business Model**: 100% 1P, no marketplace dilution
- **Revenue Scale**: $197M GMV (2024 directional)
- **Conversion**: 3.0-3.5% (industry: 2.5-4.0%)
- **Category Breadth**: 9 core categories, 1,500+ SKUs active rotation

## Product Portfolio Intelligence

### Category Performance Hierarchy
1. **Vibrators** (514 SKUs) - Core revenue driver, $10-$160+ range
2. **Couples** (195 SKUs) - Premium margin tier, app-enabled growth
3. **Male Masturbators** (155 SKUs) - High AOV, Fleshlight partnership
4. **Dildos** (145 SKUs) - Stable baseline category
5. **Anal & Prostate** (120 SKUs) - Education-dependent category
6. **Bondage** (115 SKUs) - High margin, seasonal peaks
7. **Penis Rings** (68 SKUs) - Impulse/attachment category
8. **Lubes & Wellness** - Essential attachment, 60%+ margin
9. **Lingerie** - Seasonal/Valentine's focus

### Strategic Price Architecture
- **Premium Tier** ($100-$219): We-Vibe, LELO, Magic Wand
- **Growth Tier** ($45-$99): Satisfyer, Lovense, app-enabled
- **Volume Tier** ($15-$44): Doc Johnson, CalExotics mainstream
- **Value Tier** ($5-$19): Adam & Eve private label with warranty
- **Impulse Tier** (<$15): Accessories, rings, sample lubes

### Competitive Moat Elements
1. **50+ Year Heritage**: Trust in sensitive category
2. **Educational Approach**: Reduces purchase friction
3. **Discreet Operations**: Packaging, billing, shipping
4. **Warranty Leadership**: 5-year A&E vs 1-year industry
5. **Always-On Promotions**: Deal-seeking traffic capture
6. **Franchise Network**: 100+ stores for omnichannel
7. **Compliance Expertise**: Age verification, payment processing

### Brand Strategy Framework
- **Anchor Brands**: Magic Wand (wands), We-Vibe (couples), Fleshlight (male)
- **Growth Drivers**: App-enabled toys, air-pulse stimulation
- **Margin Protection**: Adam & Eve private label across all categories
- **Innovation Partners**: Selective new brand introduction
- **Seasonal Amplifiers**: Valentine's, holiday gift positioning

### Merchandising Intelligence
- **Traffic Drivers**: "Best Sellers" hubs by audience
- **Conversion Optimization**: Educational content over explicit imagery
- **Cross-Sell Strategy**: Lubes/cleaners heavily promoted with toys
- **Bundle Tactics**: "Complete kits" for category newcomers
- **Promotional Rhythm**: Perpetual 35% off, rotating specials

### Market Share Estimations
- **U.S. Adult Toy Market**: ~$3.3B (Adam & Eve ~6% share)
- **Online Penetration**: 65% of category sales
- **Direct-to-Consumer**: Avoiding Amazon/marketplace race-to-bottom
- **Demographic Expansion**: Women-focused marketing driving growth
- **Category Penetration**: Moving beyond traditional customer base
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
      marketShare: "25%",
      growthRate: "+12% YoY",
      averageMargin: "50-65%",
      products: [
        {
          brand: "Magic Wand",
          name: "Original",
          price: "$89.99",
          notes: "AC-powered classic, category anchor",
          position: "Premium leader",
        },
        {
          brand: "Magic Wand",
          name: "Rechargeable",
          price: "$159.99",
          notes: "Cordless flagship, highest AOV",
          position: "Ultra premium",
        },
        {
          brand: "Magic Wand",
          name: "Mini",
          price: "$89.99",
          notes: "Compact rechargeable, travel-friendly",
          position: "Premium compact",
        },
        {
          brand: "Adam & Eve",
          name: "Intimate Curves Wand",
          price: "$37.98 → $77.99",
          notes: "Value wand, 51% off, 5-year warranty",
          position: "Value leader",
        },
        {
          brand: "Adam & Eve",
          name: "Eve's Mighty Mini",
          price: "$9.98 → $49.99",
          notes: "Deep markdown, 80% off, entry-level",
          position: "Budget option",
        },
      ],
    },
    {
      category: "Couples/App-Enabled",
      marketShare: "18%",
      growthRate: "+25% YoY",
      averageMargin: "55-70%",
      products: [
        {
          brand: "We-Vibe",
          name: "Chorus Couples",
          price: "$219.00",
          notes: "App-enabled wearable, dual-motor, premium positioning",
          position: "Category leader",
        },
        {
          brand: "We-Vibe",
          name: "Sync O Couples",
          price: "$179.00",
          notes: "Premium couples wearable, bestseller",
          position: "Volume driver",
        },
        {
          brand: "LELO",
          name: "Tiani Harmony",
          price: "$159.00",
          notes: "Premium couples massager, luxury materials",
          position: "Luxury alternative",
        },
        {
          brand: "Lovense",
          name: "Nora Bluetooth Rabbit",
          price: "$119.00",
          notes: "App-controlled rabbit, tech-forward",
          position: "Tech innovator",
        },
        {
          brand: "Satisfyer",
          name: "Partner Plus Remote",
          price: "$55.00",
          notes: "Mid-tier couples toy, air-pulse technology",
          position: "Value premium",
        },
      ],
    },
    {
      category: "Lubes & Wellness",
      marketShare: "12%",
      growthRate: "+8% YoY",
      averageMargin: "60-80%",
      products: [
        {
          brand: "Adam & Eve",
          name: "Personal Silicone Lube",
          price: "$12.50 → $24.99",
          notes: "50% off special, high-margin attachment",
          position: "Value leader",
        },
        {
          brand: "Uberlube",
          name: "Silicone Lubricant",
          price: "$31.99",
          notes: "Premium silicone, luxury positioning",
          position: "Premium choice",
        },
        {
          brand: "Good Clean Love",
          name: "Almost Naked Organic",
          price: "$18.99",
          notes: "Organic/natural positioning, wellness trend",
          position: "Natural premium",
        },
        {
          brand: "Swiss Navy",
          name: "Masturbation Cream",
          price: "$13.50 → $26.99",
          notes: "50% off, male-focused marketing",
          position: "Specialty segment",
        },
        {
          brand: "System JO",
          name: "H2O Warming",
          price: "$15.49",
          notes: "Water-based with warming sensation",
          position: "Feature innovation",
        },
      ],
    },
    {
      category: "Male Masturbators",
      marketShare: "22%",
      growthRate: "+12% YoY",
      averageMargin: "40-55%",
      products: [
        {
          brand: "Fleshlight",
          name: "Original Pink Lady",
          price: "$79.95",
          notes: "Category creator, brand recognition leader",
          position: "Market leader",
        },
        {
          brand: "Fleshlight",
          name: "Launch Interactive",
          price: "$199.95",
          notes: "App-enabled, VR compatibility, premium tech",
          position: "Tech premium",
        },
        {
          brand: "Lovense",
          name: "Max 2 Interactive",
          price: "$119.00",
          notes: "App-controlled, couples connectivity",
          position: "Tech innovator",
        },
        {
          brand: "Adam & Eve",
          name: "Xtreme Cock Ring Stroker",
          price: "$19.98 → $39.99",
          notes: "50% off, dual-function design",
          position: "Value hybrid",
        },
        {
          brand: "Doc Johnson",
          name: "Main Squeeze Stroker",
          price: "$34.99",
          notes: "Mid-tier positioning, variety of textures",
          position: "Mainstream choice",
        },
      ],
    },
    {
      category: "Air-Pulse Stimulation",
      marketShare: "15%",
      growthRate: "+28% YoY",
      averageMargin: "55-65%",
      products: [
        {
          brand: "Womanizer",
          name: "Premium 2",
          price: "$179.00",
          notes: "Category pioneer, autopilot technology",
          position: "Innovation leader",
        },
        {
          brand: "Satisfyer",
          name: "Pro 2 Next Generation",
          price: "$49.99",
          notes: "Value alternative, democratized technology",
          position: "Mass market",
        },
        {
          brand: "LELO",
          name: "Sona 2 Cruise",
          price: "$149.00",
          notes: "Luxury materials, premium positioning",
          position: "Luxury segment",
        },
        {
          brand: "We-Vibe",
          name: "Melt Pleasure Air",
          price: "$149.00",
          notes: "Brand extension into air-pulse category",
          position: "Premium alternative",
        },
        {
          brand: "Adam & Eve",
          name: "Enchanted Pleasure Pump",
          price: "$24.98 → $49.99",
          notes: "50% off, entry-level air-pulse",
          position: "Value entry",
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
        <div className="flex space-x-1 bg-gray-100 dark:bg-slate-800 rounded-lg p-1 mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "Business Overview", icon: Building2 },
            { id: "products", label: "Product Catalog", icon: Package },
            { id: "brands", label: "Brand Strategy", icon: Crown },
            { id: "pricing", label: "Pricing Intel", icon: DollarSign },
            {
              id: "competitive",
              label: "Competitive Analysis",
              icon: TrendingUp,
            },
            { id: "trends", label: "Market Trends", icon: Zap },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                setActiveTab(
                  tab.id as
                    | "overview"
                    | "products"
                    | "brands"
                    | "pricing"
                    | "competitive"
                    | "trends"
                )
              }
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all whitespace-nowrap ${
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
                Category Performance Hierarchy
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Vibrators",
                    count: "514",
                    range: "$10-$160+",
                    performance: "Primary revenue driver",
                    trend: "+15% YoY",
                    margin: "45-65%",
                  },
                  {
                    name: "Couples/App-Enabled",
                    count: "195",
                    range: "$45-$219",
                    performance: "Premium margin tier",
                    trend: "+25% YoY",
                    margin: "55-70%",
                  },
                  {
                    name: "Male Masturbators",
                    count: "155",
                    range: "$20-$200+",
                    performance: "High AOV category",
                    trend: "+12% YoY",
                    margin: "40-55%",
                  },
                  {
                    name: "Anal & Prostate",
                    count: "120",
                    range: "$12-$150+",
                    performance: "Education-dependent",
                    trend: "+18% YoY",
                    margin: "50-65%",
                  },
                  {
                    name: "Bondage & BDSM",
                    count: "115",
                    range: "$8-$300+",
                    performance: "High margin specialty",
                    trend: "+22% YoY",
                    margin: "60-75%",
                  },
                  {
                    name: "Lubes & Wellness",
                    count: "varies",
                    range: "$6-$32",
                    performance: "Essential attachment",
                    trend: "+8% YoY",
                    margin: "60-80%",
                  },
                ].map((category) => (
                  <div
                    key={category.name}
                    className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {category.name}
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-green-600 font-medium">
                          {category.trend}
                        </span>
                        <span className="text-blue-600">{category.margin}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div>
                        {category.count} SKUs • {category.range}
                      </div>
                      <div className="col-span-2">{category.performance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Position Analysis */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Market Position & Scale
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-700 dark:text-green-400 mb-1">
                    ~6%
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    U.S. Market Share
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    $197M of ~$3.3B market
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-1">
                    65%
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Online Penetration
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Industry shifting digital
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-1">
                    1,500+
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Active SKUs
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Curated assortment
                  </div>
                </div>
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      {category.marketShare} market share
                    </div>
                    <div className="text-green-600 dark:text-green-400 font-medium">
                      {category.growthRate}
                    </div>
                    <div className="text-purple-600 dark:text-purple-400 font-medium">
                      {category.averageMargin} margin
                    </div>
                  </div>
                </div>
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
                          Position
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
                          <td className="py-3 text-sm">
                            {product.price.includes("→") && (
                              <StatusBadge text="SALE" variant="sale" />
                            )}
                            <span className="ml-2 font-medium text-gray-900 dark:text-white">
                              {product.price}
                            </span>
                          </td>
                          <td className="py-3 text-sm">
                            <span
                              className={`px-2 py-1 text-xs rounded-full font-medium ${
                                product.position?.includes("leader") ||
                                product.position?.includes("Leader")
                                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                  : product.position?.includes("premium") ||
                                    product.position?.includes("Premium") ||
                                    product.position?.includes("Luxury")
                                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                                  : product.position?.includes("Value") ||
                                    product.position?.includes("Budget")
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                  : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                              }`}
                            >
                              {product.position}
                            </span>
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

            {/* Product Intelligence Summary */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" />
                Strategic Product Intelligence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Category Growth Drivers
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>
                        • <strong>Air-Pulse (+28% YoY):</strong> Womanizer
                        patent expiry opened market
                      </li>
                      <li>
                        • <strong>App-Enabled (+25% YoY):</strong> Remote
                        intimacy, tech integration
                      </li>
                      <li>
                        • <strong>Male Products (+12% YoY):</strong>{" "}
                        Destigmatization, Fleshlight leadership
                      </li>
                      <li>
                        • <strong>Couples Growth:</strong> Joint purchasing
                        decisions up 40%
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Private Label Strategy
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• 5-year warranty vs 1-year industry standard</li>
                      <li>• Consistent 50%+ promotional pricing</li>
                      <li>• Entry-level positioning for trial purchases</li>
                      <li>• Margin protection across all categories</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Premium Brand Partnerships
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>
                        • <strong>We-Vibe:</strong> Couples category anchor, app
                        ecosystem
                      </li>
                      <li>
                        • <strong>Magic Wand:</strong> Wand category
                        credibility, quality benchmark
                      </li>
                      <li>
                        • <strong>Fleshlight:</strong> Male market leadership,
                        brand recognition
                      </li>
                      <li>
                        • <strong>LELO:</strong> Luxury positioning, premium
                        materials
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Merchandising Insights
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Lubes attach to 65% of toy purchases</li>
                      <li>• App-enabled toys drive 25% higher AOV</li>
                      <li>• Couples products show highest repeat purchase</li>
                      <li>• Educational content reduces category friction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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

        {/* Competitive Analysis Tab */}
        {activeTab === "competitive" && (
          <div className="space-y-8">
            {/* Competitive Landscape */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Competitive Landscape Analysis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    competitor: "Spencer's Gifts",
                    positioning: "Teen/novelty market",
                    strengths: [
                      "Mall presence",
                      "Impulse purchases",
                      "Mainstream appeal",
                    ],
                    weaknesses: [
                      "Limited serious adult products",
                      "Lower quality perception",
                    ],
                    threat: "Low - different market segment",
                  },
                  {
                    competitor: "Lovehoney",
                    positioning: "UK-based premium",
                    strengths: [
                      "Educational content",
                      "Premium positioning",
                      "App integration",
                    ],
                    weaknesses: [
                      "International shipping",
                      "Higher price points",
                    ],
                    threat: "Medium - similar positioning",
                  },
                  {
                    competitor: "PinkCherry",
                    positioning: "Canadian discount leader",
                    strengths: [
                      "Aggressive pricing",
                      "Large selection",
                      "Fast shipping",
                    ],
                    weaknesses: [
                      "Brand perception",
                      "Quality concerns",
                      "Limited innovation",
                    ],
                    threat: "Medium - price competition",
                  },
                  {
                    competitor: "Amazon/General Retail",
                    positioning: "Convenience/mainstream",
                    strengths: [
                      "Prime shipping",
                      "Familiar platform",
                      "Price comparison",
                    ],
                    weaknesses: [
                      "Compliance issues",
                      "Review gaming",
                      "No specialization",
                    ],
                    threat: "High - market share threat",
                  },
                ].map((comp) => (
                  <div
                    key={comp.competitor}
                    className="p-5 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {comp.competitor}
                      </h4>
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-medium ${
                          comp.threat.includes("High")
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : comp.threat.includes("Medium")
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }`}
                      >
                        {comp.threat}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {comp.positioning}
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">
                          STRENGTHS
                        </div>
                        <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc list-inside">
                          {comp.strengths.map((strength, idx) => (
                            <li key={idx}>{strength}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-red-600 dark:text-red-400 mb-1">
                          WEAKNESSES
                        </div>
                        <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc list-inside">
                          {comp.weaknesses.map((weakness, idx) => (
                            <li key={idx}>{weakness}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitive Advantages Deep Dive */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Adam & Eve Competitive Moats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Heritage & Trust
                      </h4>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• 50+ years in sensitive category</li>
                      <li>• PHE employee ownership stability</li>
                      <li>• Medical/pharmacy heritage credibility</li>
                      <li>• Generational customer relationships</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Package className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Operational Excellence
                      </h4>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Discreet packaging & billing</li>
                      <li>• Specialized payment processing</li>
                      <li>• Age verification systems</li>
                      <li>• Compliance expertise (state laws)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Heart className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Customer Experience
                      </h4>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Educational vs explicit approach</li>
                      <li>• 90-day satisfaction guarantee</li>
                      <li>• Expert customer service</li>
                      <li>• Women-friendly shopping environment</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-amber-600" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Product Strategy
                      </h4>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• 5-year warranty on private label</li>
                      <li>• Curated vs everything approach</li>
                      <li>• Premium brand partnerships</li>
                      <li>• Category expertise & education</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Share Analysis */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Market Share & Positioning Analysis
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      $3.3B
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Total U.S. Market
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      $197M
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Adam & Eve GMV
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      ~6%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Market Share
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Competitive Positioning Matrix
                  </h4>
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Adam & Eve</span>
                      <span className="font-medium text-amber-600">
                        Premium Heritage Leader
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Lovehoney</span>
                      <span className="text-blue-600">
                        International Premium
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>PinkCherry</span>
                      <span className="text-red-600">Discount Volume</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Amazon</span>
                      <span className="text-gray-600">
                        Mainstream Convenience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Market Trends Tab */}
        {activeTab === "trends" && (
          <div className="space-y-8">
            {/* Growth Trends */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                Market Growth Trends & Opportunities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    trend: "App-Enabled Toys",
                    growth: "+35% YoY",
                    value: "$45-219",
                    drivers: [
                      "Long-distance relationships",
                      "Tech integration",
                      "Premium positioning",
                    ],
                    opportunity:
                      "High - A&E well-positioned with We-Vibe partnership",
                  },
                  {
                    trend: "Air-Pulse Stimulation",
                    growth: "+28% YoY",
                    value: "$50-160",
                    drivers: [
                      "Womanizer patent expiry",
                      "Satisfyer competition",
                      "New sensation category",
                    ],
                    opportunity: "Medium - Need brand partnerships",
                  },
                  {
                    trend: "Wellness/CBD Integration",
                    growth: "+45% YoY",
                    value: "$25-80",
                    drivers: [
                      "Legalization trends",
                      "Wellness positioning",
                      "Female market",
                    ],
                    opportunity: "High - Untapped category for A&E",
                  },
                  {
                    trend: "Gender-Neutral Products",
                    growth: "+22% YoY",
                    value: "$30-120",
                    drivers: [
                      "LGBTQ+ market growth",
                      "Inclusive design",
                      "Expanded demographics",
                    ],
                    opportunity: "Medium - Requires category curation",
                  },
                  {
                    trend: "Luxury/Designer Toys",
                    growth: "+18% YoY",
                    value: "$150-500+",
                    drivers: [
                      "Premium materials",
                      "Designer collaborations",
                      "Status symbols",
                    ],
                    opportunity: "Low - Outside core positioning",
                  },
                  {
                    trend: "Educational Content",
                    growth: "+32% YoY",
                    value: "Traffic driver",
                    drivers: [
                      "Sexual wellness focus",
                      "Gen Z research habits",
                      "Reduced stigma",
                    ],
                    opportunity: "High - Perfect A&E fit",
                  },
                ].map((trend) => (
                  <div
                    key={trend.trend}
                    className="p-5 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {trend.trend}
                      </h4>
                      <span className="text-lg font-bold text-green-600">
                        {trend.growth}
                      </span>
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">
                      {trend.value}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
                          DRIVERS
                        </div>
                        <ul className="text-xs text-gray-600 dark:text-gray-400 list-disc list-inside">
                          {trend.drivers.map((driver, idx) => (
                            <li key={idx}>{driver}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t border-gray-200 dark:border-slate-600">
                        <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-1">
                          OPPORTUNITY
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {trend.opportunity}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Demographic Shifts */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Customer Demographic Evolution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-pink-600" />
                      Female Market Expansion
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Now 65% of customer base (up from 45%)</li>
                      <li>• Wellness/self-care positioning resonating</li>
                      <li>• Partner involvement in purchases increasing</li>
                      <li>• Educational content driving discovery</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-blue-600" />
                      Gen Z Adoption
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• 18-25 segment fastest growing</li>
                      <li>• Research-driven purchase behavior</li>
                      <li>• Social media influence important</li>
                      <li>• Sustainability concerns emerging</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-green-600" />
                      Couples Market Growth
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Joint purchasing decisions up 40%</li>
                      <li>• App-enabled toys driving engagement</li>
                      <li>• Subscription/repeat purchase behavior</li>
                      <li>• Higher AOV and customer lifetime value</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-600" />
                      Premium Market Maturation
                    </h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• Willingness to pay for quality increasing</li>
                      <li>• Brand loyalty strengthening</li>
                      <li>• Medical-grade materials preference</li>
                      <li>• Warranty/service expectations rising</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation Opportunities */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Innovation & Category Opportunities
              </h3>
              <div className="space-y-4">
                {[
                  {
                    category: "Wellness Integration",
                    description:
                      "CBD/supplement combinations, meditation/mindfulness tie-ins",
                    timeline: "6-12 months",
                    investment: "Medium",
                    potential: "High",
                  },
                  {
                    category: "Smart Home Integration",
                    description:
                      "Voice control, IoT connectivity, ambient experiences",
                    timeline: "12-18 months",
                    investment: "High",
                    potential: "Medium",
                  },
                  {
                    category: "Sustainable Materials",
                    description:
                      "Eco-friendly packaging, recyclable products, carbon neutral shipping",
                    timeline: "3-6 months",
                    investment: "Low",
                    potential: "Medium",
                  },
                  {
                    category: "Personalization Engine",
                    description:
                      "AI-driven product recommendations, custom pleasure profiles",
                    timeline: "9-15 months",
                    investment: "High",
                    potential: "High",
                  },
                  {
                    category: "Educational Platform",
                    description:
                      "Expert-led courses, certification programs, wellness community",
                    timeline: "6-9 months",
                    investment: "Medium",
                    potential: "High",
                  },
                ].map((opp) => (
                  <div
                    key={opp.category}
                    className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {opp.category}
                      </h4>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2 py-1 text-xs rounded-full font-medium ${
                            opp.potential === "High"
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                          }`}
                        >
                          {opp.potential} Potential
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {opp.timeline}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {opp.description}
                    </p>
                    <div className="text-xs text-blue-600 dark:text-blue-400">
                      Investment: {opp.investment}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
