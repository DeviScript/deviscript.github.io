"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Target,
  Wrench,
  Building2,
  Lightbulb,
  TrendingUp,
  Heart,
  ChevronDown,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

interface Question {
  id: string;
  question: string;
  answer: string;
  keyPoints: string[];
  adamEveContext?: string;
}

interface Category {
  id: string;
  title: string;
  icon: any;
  description: string;
  questions: Question[];
  color: string;
}

const categories: Category[] = [
  {
    id: "core-technical",
    title: "Core Technical & Search Fundamentals",
    icon: Wrench,
    description:
      "Search algorithms, ranking, taxonomy, and foundational eCommerce merchandising (20 questions)",
    color: "blue",
    questions: [
      {
        id: "relevance-improvement",
        question:
          "How do you approach improving relevance in onsite search when results feel 'close but not quite right'?",
        answer:
          "I start by pulling a relevance audit: top 200 queries by volume, revenue, and search exits. I review query-result pairs and tag issues—synonym gaps, stemming/lemmatization misses, attribute weighting, and category bias. Then I tune in layers: expand synonyms and controlled vocabulary, adjust field boosts (title vs. attributes vs. popularity), and tighten typo tolerance for high risk terms. I'll test changes on a holdout set using precision@k and search exit rate, then release via a phased rollout. At my last role, boosting variant attributes (material and size) increased CTR 8% on fashion queries where users were clearly attribute-led.",
        keyPoints: [
          "Systematic relevance auditing methodology",
          "Multi-layer tuning approach with field boost optimization",
          "Holdout testing with precision metrics and user behavior signals",
          "Phased rollout strategy with measurable impact tracking",
        ],
        adamEveContext:
          "For Adam & Eve, relevance tuning would need to balance educational content with product results while ensuring medical terminology and euphemisms map correctly to appropriate products.",
      },
      {
        id: "popularity-vs-relevance",
        question:
          "When would you use popularity-based ranking versus purely textual relevance?",
        answer:
          "I see popularity as a stabilizer, not a driver. Textual relevance should decide the core rankings so the user sees semantically correct matches. Then I blend in popularity as a tie-breaker or a light boost for SKUs with strong conversion or low return rates. This helps avoid burying proven winners when multiple items are equally relevant. During a seasonal launch, I set popularity decay to 30 days so newer items had a chance to surface. The blend nudged CVR up 5% without skewing niche queries toward generic best sellers.",
        keyPoints: [
          "Relevance-first foundation with popularity as enhancement",
          "Strategic use of popularity for tie-breaking and quality signaling",
          "Temporal decay mechanisms for fair new product exposure",
          "Balanced approach preventing generic result dominance",
        ],
        adamEveContext:
          "Particularly important for Adam & Eve where educational content and specialized products shouldn't be overshadowed by popular general items.",
      },
      {
        id: "zero-results-process",
        question: "What's your process for handling zero-result searches?",
        answer:
          "First I separate true 'no inventory' queries from fixable intent issues. I analyze zero-result rate by query, device, and spelling distance. Quick wins include synonyms, pluralization, and brand or slang mappings. I also set graceful fallback logic: show relevant categories, editorial guides, and customer service cues, plus loosened matching (did-you-mean, partial word). In one sprint, adding slang synonyms and a safety fallback to top categories reduced zero-result rate from 9% to 3%, and search exits dropped by a third. I keep a monthly review to prune accidental over-expansion that might dilute relevance.",
        keyPoints: [
          "Systematic categorization of zero-result causes",
          "Multi-pronged solution approach with quick wins and fallbacks",
          "Graceful degradation with helpful alternative pathways",
          "Regular optimization review preventing solution drift",
        ],
        adamEveContext:
          "Critical for Adam & Eve where customers may use diverse terminology, euphemisms, or medical terms that need careful mapping to prevent embarrassing zero-result experiences.",
      },
      {
        id: "category-vs-facet-decision",
        question:
          "How do you decide when to create a new category versus expanding facets within an existing one?",
        answer:
          "I look for persistent query clusters and filter paths that imply a mental model users already have. If 10%+ of traffic to a category applies the same filter combo and conversion lifts meaningfully, that's a candidate for a subcategory. If users vary the attributes a lot but stay within one mission, better facet design usually wins. At a prior company, 'wireless lace bralettes' was a frequent path; splitting that into a subcategory improved CTR from search by 12% because it mirrored real intent users had signaled for months.",
        keyPoints: [
          "Data-driven analysis of user behavior patterns and mental models",
          "Quantitative thresholds for category creation decisions",
          "Distinction between consistent intent patterns and attribute variation",
          "Validation through conversion and engagement metrics",
        ],
        adamEveContext:
          "Adam & Eve would benefit from subcategories aligned with customer comfort levels and educational needs rather than just product types.",
      },
      {
        id: "promo-boost-relevance",
        question:
          "How do you prevent search from over-boosting promotional items and hurting relevance?",
        answer:
          "I keep promotion boosts constrained by guardrails. I'll cap promotional boost strength and apply it after minimum relevance thresholds are met so irrelevant promoted SKUs don't surface. I also limit boosts to specific query sets or categories and use time-boxing. We report on 'promo lift vs. relevance risk' using search exits, add-to-cart rate for promoted items, and cannibalization of highly relevant organic items. In one campaign, moving promo boosts from global to category-scoped and requiring a relevance score floor brought exits back in line while keeping revenue targets intact.",
        keyPoints: [
          "Guardrailed boost constraints protecting user experience",
          "Minimum relevance threshold requirements",
          "Category-scoped and time-boxed promotional strategies",
          "Performance monitoring balancing revenue and satisfaction",
        ],
        adamEveContext:
          "For Adam & Eve, maintaining trust through relevant results is more important than aggressive promotion, especially for first-time customers building comfort.",
      },
      {
        id: "synonym-management",
        question:
          "How do you approach synonym management without creating chaos?",
        answer:
          "I treat synonyms like code: versioned, tested, and reviewed. I maintain a controlled vocabulary with one-way and two-way rules, plus 'do-not-map' lists to avoid unsafe expansions. I group synonyms by intent—materials, brands, slang—and review performance monthly. We test high-impact additions against a validation set of queries to catch unexpected matches. When we added 'butt plug' to map with certain toy terms, we limited it to adult-intent contexts to avoid polluting non-adult accessories. The result improved recall where it mattered without causing irrelevant cross-category results.",
        keyPoints: [
          "Version-controlled synonym management system",
          "One-way and two-way mapping with do-not-map safeguards",
          "Intent-based grouping and monthly performance reviews",
          "Context-aware application preventing inappropriate matches",
        ],
        adamEveContext:
          "Crucial for Adam & Eve where slang, medical terms, and euphemisms require careful mapping to maintain both discretion and findability.",
      },
      {
        id: "precision-recall-balance",
        question: "How do you balance precision and recall in search?",
        answer:
          "I start with high precision for head queries where users are less tolerant of noise. For long-tail or exploratory queries, I allow broader recall with softened matching and attribute expansion. I tune edit distance and partial matching more aggressively on mobile where typos are common. Then I monitor precision@10 and search exits by query length. At a previous role, loosening recall on tail queries lifted add-to-carts 6% while keeping exits stable, because we gave exploratory users more to work with without compromising head-term quality.",
        keyPoints: [
          "Query-type differentiation (head vs. tail)",
          "Device-specific tuning for mobile typo tolerance",
          "Precision metrics monitoring by query characteristics",
          "Balanced approach optimizing both discovery and relevance",
        ],
        adamEveContext:
          "Educational searches at Adam & Eve may be more exploratory, requiring higher recall, while product searches need precision to build confidence.",
      },
      {
        id: "search-performance-metrics",
        question:
          "What metrics do you prioritize when evaluating onsite search performance?",
        answer:
          "I track search usage rate, CTR from results, search exit rate, refinement rate, zero-result rate, add-to-cart rate, and revenue per search. I segment by query type (navigational, category, product), device, and new vs. returning users. I also look at time to first click as a signal of cognitive load. In one quarterly review, we noticed high exits on mobile for attribute-heavy queries; simplifying result cards and improving above-the-fold filters dropped exits 15%. The combination of behavioral and revenue metrics tells me both user satisfaction and business impact.",
        keyPoints: [
          "Comprehensive metric framework covering behavior and revenue",
          "Segmentation by query type, device, and user type",
          "Time to first click as cognitive load indicator",
          "Combined satisfaction and business impact measurement",
        ],
        adamEveContext:
          "For Adam & Eve, tracking comfort indicators like session length on educational content and progression from learning to purchasing would be key additional metrics.",
      },
      {
        id: "bestseller-ranking-diagnosis",
        question:
          "How do you diagnose why a bestseller isn't ranking for obvious queries?",
        answer:
          "I check indexing first: is the right data present in searchable fields, and are variant attributes exposed? Next I check field boosts and whether a category filter or hard rule is suppressing it. Then I look for negative keywords or conflicting boosts from a promotion. Finally, I test the query in an isolated environment to see the raw score components. We found once that size attribute wasn't indexed for variants, so fitted styles lost matches on 'petite' searches. Fixing attribute exposure and a minor field boost put the bestseller in the top three.",
        keyPoints: [
          "Systematic diagnostic approach from indexing to scoring",
          "Field boost and rule conflict analysis",
          "Isolated environment testing for root cause identification",
          "Attribute exposure validation for variant products",
        ],
        adamEveContext:
          "For Adam & Eve, ensuring product attributes like materials, experience level, and use cases are properly indexed is critical for matching diverse customer search patterns.",
      },
      {
        id: "merchandising-rules-governance",
        question:
          "What's your approach to merchandising rules without turning search into a manual list?",
        answer:
          "Rules should be surgical and decaying. I use rules for specific business moments—launches, margin pushes, or compliance concerns—then set expiry dates and caps on how far they can override algorithmic scores. I avoid broad 'always boost this brand' except for navigational queries. Every rule is documented with a purpose, owner, and sunset date. In my last role, converting 60% of open-ended rules to time-boxed, targeted ones cut maintenance by half and improved long-term relevance because we weren't fighting our own algorithm.",
        keyPoints: [
          "Surgical, time-boxed rule application",
          "Documentation with purpose, owner, and sunset dates",
          "Caps on algorithmic score override strength",
          "Regular rule review and deprecation process",
        ],
        adamEveContext:
          "Adam & Eve would benefit from compliance-focused rules (age-verification, restricted categories) being permanent while promotional rules remain time-boxed.",
      },
      {
        id: "taxonomy-design",
        question:
          "How do you design a taxonomy that supports both discovery and governance?",
        answer:
          "I start with a customer-first mental model validated by search logs and click paths, then layer in governance for data integrity. Each node has a clear definition, required attributes, and mapping rules. I keep depth shallow enough for usability but rich enough to express differences that matter for filtering. We implemented 'use cases' as a parallel tagging layer to avoid blowing up the tree. That allowed seasonal and editorial experiences without constant structural changes. The outcome was faster onboarding, cleaner analytics, and fewer dead-end paths for customers.",
        keyPoints: [
          "Customer mental model foundation validated by behavior data",
          "Clear node definitions with required attributes",
          "Optimal depth balancing usability and expressiveness",
          "Parallel tagging for flexibility without structural complexity",
        ],
        adamEveContext:
          "Adam & Eve's taxonomy should balance product categories with educational content categories, wellness use cases, and comfort-level progression paths.",
      },
      {
        id: "searchable-vs-facetable-attributes",
        question:
          "How do you decide which product attributes should be searchable vs. facetable?",
        answer:
          "If an attribute represents intent users type, like brand, color, or size, it should be searchable and facetable. Technical or compliance attributes might be facetable only. I weigh frequency of usage, impact on conversion, and data quality. If completeness is below, say, 85%, I'm cautious about making it front-and-center. We made 'vibration pattern' facetable after seeing high engagement in filters; later we added it to searchable fields once completeness hit 90%, which improved recall on very specific intent queries without cluttering irrelevant searches.",
        keyPoints: [
          "Intent-based decision making for searchability",
          "Data quality thresholds for attribute prominence",
          "Phased approach from faceting to searching based on completeness",
          "Conversion impact and usage frequency analysis",
        ],
        adamEveContext:
          "For Adam & Eve, attributes like 'beginner-friendly,' 'body-safe materials,' and 'discreet' could be both searchable and facetable with proper data completeness.",
      },
      {
        id: "ambiguous-query-handling",
        question:
          "How do you handle ambiguous queries like 'gift for partner'?",
        answer:
          "I create intent clusters. For 'gift' queries, I route to curated collections with popular price bands, top-rated items, and guided filters like interests. I'll use soft personalization when available (returning user gender preference, last category viewed) to pre-seed the collection, but I keep it transparent and easy to change. A short banner with two or three discovery paths reduces paralysis. In one holiday season, this approach lifted conversion 11% for gift-intent terms because we gave structure without forcing users down a narrow path.",
        keyPoints: [
          "Intent clustering and curated collection routing",
          "Guided filters and discovery path options",
          "Soft personalization with transparency and easy modification",
          "Structured choices reducing decision paralysis",
        ],
        adamEveContext:
          "Gift queries at Adam & Eve require extra sensitivity—curated collections that respect discretion while offering helpful guidance for different relationship dynamics.",
      },
      {
        id: "content-in-search-results",
        question: "What role does content play in search results?",
        answer:
          "Content can rescue intent and build confidence. I allow editorial modules—fit guides, size charts, how-to—into results for education-heavy queries, but they're ranked below relevant products unless the query is clearly informational. I track interactions with content blocks and adjust thresholds so they appear only when engagement justifies them. When we added a 'how to choose' guide on complex categories, search exits fell and add-to-carts rose because users got oriented quickly. The trick is to keep content helpful, not distracting.",
        keyPoints: [
          "Strategic content integration for education-heavy queries",
          "Ranking below products unless clearly informational intent",
          "Engagement-based threshold adjustments",
          "Confidence-building without distraction",
        ],
        adamEveContext:
          "Adam & Eve's educational mission means content should be readily accessible in search results for curiosity-driven queries while staying out of the way for product-focused searches.",
      },
      {
        id: "mobile-vs-desktop-tuning",
        question: "How do you tune for mobile versus desktop differences?",
        answer:
          "On mobile, I prioritize speed to first meaningful result and minimize cognitive load. I simplify filters, use sticky primary facets, and tighten snippet text in cards. I relax typo tolerance slightly and prefer larger tap targets. I also keep the first row algorithmically strong—no heavy hand-tuning that could push noisy items above the fold. We A/B tested a compact mobile card with essential attributes visible; CTR improved 9% and bounce decreased, which told us users were deciding faster and with more confidence.",
        keyPoints: [
          "Speed and cognitive load optimization for mobile",
          "Simplified UI with sticky facets and compact cards",
          "Relaxed typo tolerance for mobile input patterns",
          "Strong algorithmic first-row without manual override",
        ],
        adamEveContext:
          "Mobile discretion is especially important for Adam & Eve—compact, informative cards that allow quick, confident decisions without prolonged browsing exposure.",
      },
      {
        id: "data-quality-governance",
        question:
          "How do you ensure data quality for search and merchandising?",
        answer:
          "I put guardrails in the ingestion pipeline: required attributes by category, validation rules, and alerts for missing or suspicious values. I maintain a 'readiness score' per SKU that blocks merchandising pushes until critical fields are present. Weekly data quality reports go to the upstream owners so fixes happen at the source. At one company, instituting readiness gates reduced search complaints dramatically because we stopped shipping half-formed products that broke ranking logic or faceting. Good merchandising starts with honest, consistent data.",
        keyPoints: [
          "Pipeline guardrails with validation rules and alerts",
          "Readiness score gating for merchandising actions",
          "Weekly reporting to upstream data owners",
          "Source-level fixes preventing downstream issues",
        ],
        adamEveContext:
          "For Adam & Eve, data quality is doubly important—incomplete product information can undermine customer confidence in sensitive purchasing decisions.",
      },
      {
        id: "seasonal-event-behavior",
        question:
          "What's your approach to seasonal or event-driven search behavior?",
        answer:
          "I prepare with playbooks. For peak events, I spin up seasonal synonym packs, curated landing pages, and temporary ranking blends that slightly lift newness and availability. I watch query mix shifts hourly on the first 48 hours to adjust. After the event, I roll back boosts and archive learnings into a pattern library. In a Valentine's cycle, early detection of 'couples kit' queries led us to fast-track a bundle surface. That small pivot accounted for a surprising percentage of event revenue with minimal engineering overhead.",
        keyPoints: [
          "Playbook-based seasonal preparation",
          "Real-time query monitoring during event windows",
          "Post-event rollback and learning documentation",
          "Pattern library for future event optimization",
        ],
        adamEveContext:
          "Valentine's Day, Pride Month, and Sexual Wellness Month are key opportunities for Adam & Eve to showcase relevant content and products through seasonal search optimization.",
      },
      {
        id: "ranking-impact-measurement",
        question:
          "How do you measure the impact of ranking changes without a full A/B test?",
        answer:
          "When formal testing isn't practical, I run controlled pilots with geo or traffic splits if the platform supports it. Otherwise, I use pre-post with synthetic control via matched query baskets and device segmentation, and I set short windows to reduce noise. I watch leading indicators like search CTR and exits before concluding on revenue. At a previous company, using matched baskets gave us enough confidence to roll out a boost adjustment that later, in a proper A/B, showed a similar 4% CVR lift—so our proxy held up.",
        keyPoints: [
          "Controlled pilot approaches with geo or traffic splits",
          "Synthetic control via matched query baskets",
          "Leading indicator monitoring before revenue conclusions",
          "Validation through subsequent formal testing",
        ],
        adamEveContext:
          "Quick iteration is valuable for Adam & Eve, but changes affecting sensitive categories should still maintain rigorous measurement to protect customer trust.",
      },
      {
        id: "category-blending-in-search",
        question:
          "How do you decide when to blend category results into search?",
        answer:
          "If the query is clearly category-intent or too broad for precise product ranking, I'll introduce category tiles or a top row of curated collections. The key is to detect intent signals—plural nouns, generic terms, high refinement rate—and give users a map before items. I cap the real estate to keep products visible and track click-through from those tiles. In tests, adding two category tiles for broad terms reduced pogo-sticking and improved downstream add-to-cart because users got oriented faster.",
        keyPoints: [
          "Intent signal detection for category vs. product queries",
          "Strategic category tile placement for orientation",
          "Real estate capping to maintain product visibility",
          "Pogo-sticking reduction through better wayfinding",
        ],
        adamEveContext:
          "Educational content categories could blend into broad search results at Adam & Eve, helping curious customers find learning resources alongside products.",
      },
      {
        id: "engineering-collaboration",
        question:
          "How do you collaborate with engineers on search algorithm changes?",
        answer:
          "I come with a clear hypothesis, a minimal spec, and test datasets. I define acceptance criteria, success metrics, and edge cases up front. We align on rollout strategy, observability, and a rollback plan. I also provide annotated query lists that represent different intents and failure modes so devs can validate quickly. In one project, packaging a reproducible relevance test harness saved everyone time and avoided subjective debates. It built trust because we moved from opinions to evidence, and production issues became rare.",
        keyPoints: [
          "Clear hypothesis and minimal spec documentation",
          "Acceptance criteria and edge case definition",
          "Test dataset and query list provision",
          "Reproducible test harness for objective validation",
        ],
        adamEveContext:
          "Engineering collaboration at Adam & Eve would need extra attention to compliance edge cases and sensitive query handling in the test harness.",
      },
    ],
  },
  {
    id: "advanced-technical",
    title: "Advanced Technical & AI/Personalization",
    icon: Target,
    description:
      "AI recommendations, personalization, analytics, and advanced optimization techniques (20 questions)",
    color: "purple",
    questions: [
      {
        id: "collaborative-vs-content-filtering",
        question:
          "How do you choose between collaborative filtering, content-based, and hybrid recommenders?",
        answer:
          "I look at data density, catalog volatility, and the cold-start footprint. If you've got strong interaction data and repeat visitors, collaborative filtering sings. When the catalog is large and long-tail, content-based helps with coverage and explainability. Most real sites benefit from a hybrid: similarity features from product attributes plus interaction embeddings. At my last role, we started with content-based for new launches, then blended in collaborative signals after two weeks of behavior. That hybrid outperformed either model alone by about 6% CTR and materially cut cold-start pain on seasonal items.",
        keyPoints: [
          "Data density and user behavior as primary selection criteria",
          "Hybrid approaches combining content and collaborative strengths",
          "Phased implementation strategy for new product launches",
          "Measurable performance improvements with reduced cold-start issues",
        ],
        adamEveContext:
          "For Adam & Eve, hybrid recommendations would balance educational content discovery with behavioral patterns while respecting customer privacy and comfort levels.",
      },
      {
        id: "cold-start-users-products",
        question:
          "How do you handle cold start for new users and new products?",
        answer:
          "For new users, I lean on contextual signals—traffic source, landing category, device—and safe defaults like top-rated or trending within the session's inferred intent. I'll also use lightweight quizzes or micro-preference toggles if the brand voice supports it. For new products, I rely on content similarity and merchant-curated starter placements while the model learns. In a past launch, seeding new items into 'newness-aware' carousels and giving them a small exploration budget helped the algorithm collect clicks without tanking revenue. Within a week, enough signals came in to move from curated to learned placements.",
        keyPoints: [
          "Contextual signals and safe defaults for new users",
          "Content-based similarity for new product positioning",
          "Controlled exploration budget for data collection",
          "Fast transition from curated to algorithmic placements",
        ],
        adamEveContext:
          "For Adam & Eve, cold-start strategies must emphasize educational content and comfort-building for new customers while ensuring new wellness products receive appropriate exposure.",
      },
      {
        id: "filter-bubble-prevention",
        question:
          "How do you avoid filter bubbles or overly aggressive personalization?",
        answer:
          "I set exploration quotas and diversity constraints. Every carousel gets a small percentage of slots reserved for exploration based on dissimilarity from recent views. I also include a reset mechanism—'clear preferences' or a 'browse all' path—to let customers step out of the model's assumptions. At one company, we added a weekly decay on user affinity vectors so old behaviors didn't dominate. The combo kept content fresh and lifted discovery metrics without hurting conversion. The rule of thumb is: personalize the defaults, not the options.",
        keyPoints: [
          "Exploration quotas and diversity constraints in recommendations",
          "User control mechanisms for preference management",
          "Temporal decay preventing stale personalization",
          "Balance between personalization and discovery",
        ],
        adamEveContext:
          "Critical for Adam & Eve to ensure customers can explore new wellness categories comfortably without being locked into narrow preference patterns.",
      },
      {
        id: "reranking-model-signals",
        question:
          "What signals do you feed into a re-ranking model for recommendations?",
        answer:
          "I start with product-side features (price, margin, availability, shipping speed), behavioral signals (clicks, add-to-carts, returns), and context (device, time of day, campaign). Then I add interaction terms like price sensitivity by user segment and inventory freshness. For an adult wellness catalog, I'd also consider discretion-related attributes like packaging notes if relevant to conversion. In practice, our best lift came from adding a simple 'recent availability' feature to downweight items flirting with stockouts. That change reduced recommendation-driven backorders and improved downstream satisfaction scores.",
        keyPoints: [
          "Multi-dimensional feature set combining product, behavior, and context",
          "Interaction features capturing user segment nuances",
          "Inventory health signals preventing stockout recommendations",
          "Downstream impact measurement beyond immediate clicks",
        ],
        adamEveContext:
          "For Adam & Eve, re-ranking models would include educational content signals and customer comfort indicators alongside traditional commerce metrics.",
      },
      {
        id: "bandits-vs-ab-testing",
        question:
          "When do you use bandits versus classic A/B testing for optimization?",
        answer:
          "If the choice set is stable and I want a clean read on causality, I run an A/B test. If the environment is volatile and I'm choosing among multiple promos or layouts that change weekly, a contextual bandit makes sense. We used bandits for homepage hero variations linked to traffic source and season. It learned faster than fixed tests and allocated more impressions to winners while still exploring. We still ran confirmatory A/Bs on big bets, but bandits handled the day-to-day merchandising decisions with less revenue risk.",
        keyPoints: [
          "A/B testing for stable environments and clean causal inference",
          "Bandits for dynamic, multi-variant optimization scenarios",
          "Faster learning and automatic winner allocation",
          "Hybrid approach with confirmatory testing for major decisions",
        ],
        adamEveContext:
          "For Adam & Eve, bandits could optimize educational content presentation and seasonal promotions while maintaining statistical rigor for major merchandising changes.",
      },
      {
        id: "incremental-recommendation-value",
        question:
          "How do you measure the true incremental value of recommendations?",
        answer:
          "I move beyond CTR and use holdout methods. Ghost ads or shadow traffic are ideal; if not, I'll do 'recommendation suppression' cohorts where we remove modules for a randomized slice and compare RPV and AOV downstream. In one analysis, we saw a module with high CTR but low incremental RPV—it was cannibalizing items users would have found anyway. We redesigned that slot to emphasize complementary add-ons instead of more-of-the-same, and incremental revenue improved. Attribution needs to consider path overlap, not just immediate clicks.",
        keyPoints: [
          "Holdout and suppression cohorts for true incrementality",
          "Focus on downstream RPV rather than immediate CTR",
          "Identification and correction of cannibalization issues",
          "Path-based attribution accounting for user journey overlap",
        ],
        adamEveContext:
          "Critical for Adam & Eve to measure whether recommendations genuinely add value or simply redistribute purchases that would have happened through educational content discovery.",
      },
      {
        id: "personalization-privacy-consent",
        question:
          "How do you approach personalization when consent and privacy are strict?",
        answer:
          "I start with privacy by design. If a user hasn't consented, I stick to session-based context and non-identifying signals. For known users, I maintain data minimization and clear retention windows, and I avoid storing sensitive inferences. With adult wellness, I'd keep categories generalized in logs and use aggregated audience cohorts rather than 1:1 targeting in outbound channels. We worked with legal to create a taxonomy of 'sensitive attributes not eligible for personalization,' which simplified engineering and built trust. Performance stayed strong using contextual and cohort-level personalization.",
        keyPoints: [
          "Privacy-first design with session-based fallbacks",
          "Data minimization and clear retention policies",
          "Cohort-based rather than individual-level targeting",
          "Legal collaboration for sensitive attribute taxonomy",
        ],
        adamEveContext:
          "Paramount for Adam & Eve where customer privacy and discretion are core brand values—personalization must enhance without exposing sensitive purchase history.",
      },
      {
        id: "model-freshness-maintenance",
        question:
          "How do you keep recommendation models fresh without constant retraining?",
        answer:
          "I separate fast and slow layers. The slow layer (embeddings, taxonomy learns) retrains weekly or biweekly. The fast layer (re-ranking with availability, price changes, trending signals) updates hourly or near real time. I also cache features in a simple feature store so inference stays quick. When we moved to this two-speed approach, we cut stale recs by half because the fast layer reacted to inventory shifts and promos, while the slow layer captured evolving taste. It's a pragmatic balance between cost and responsiveness.",
        keyPoints: [
          "Two-tier architecture separating slow and fast signals",
          "Strategic update cadences balancing freshness and cost",
          "Feature store for efficient real-time inference",
          "Significant reduction in stale recommendations",
        ],
        adamEveContext:
          "For Adam & Eve, fast-layer updates would handle inventory changes and seasonal content while slow-layer learning captures evolving customer wellness interests.",
      },
      {
        id: "recommendation-performance-diagnosis",
        question:
          "What's your workflow for diagnosing a recommendation module that suddenly drops in performance?",
        answer:
          "I check guardrails first: feed freshness, inventory flags, and API latency. Then I isolate whether traffic mix changed—new channel, promo, device split. Next I compare candidate generation vs. re-ranking; sometimes the generator is fine, but the re-ranker overweights margin or a new feature. I'll replay yesterday's traffic against last week's model to determine if it's data drift or code drift. In one incident, a minor schema change nulled an attribute, tanking diversity. We hot-fixed the mapping, then added a schema contract test to catch it earlier.",
        keyPoints: [
          "Systematic diagnostic process from infrastructure to algorithm",
          "Traffic composition analysis for external factors",
          "Model replay for drift identification",
          "Root cause resolution with preventive measures",
        ],
        adamEveContext:
          "For Adam & Eve, recommendation diagnostics must also check compliance flags and educational content balance to ensure brand mission alignment.",
      },
      {
        id: "embeddings-vector-search",
        question:
          "How do you use embeddings or vector search in merchandising?",
        answer:
          "Embeddings help cluster similar products and detect latent relationships that text alone misses. I've used them to power 'visually similar' and 'shop the look' even when product copy was thin. For search, vector recall can sit alongside keyword recall, then we re-rank with business constraints. We rolled out embeddings to fill gaps in long-tail queries; it lifted recall without flooding results with noise, because re-ranking enforced price and availability sanity. It's especially helpful when users describe sensations or use slang that doesn't map cleanly to attributes.",
        keyPoints: [
          "Latent relationship discovery beyond text matching",
          "Hybrid search combining vector and keyword recall",
          "Re-ranking layer ensuring business constraint compliance",
          "Long-tail query coverage improvement",
        ],
        adamEveContext:
          "For Adam & Eve, embeddings could bridge euphemistic language and medical terminology to appropriate products while maintaining educational content relevance.",
      },
      {
        id: "inventory-availability-recommendations",
        question:
          "How do you prevent recommendations from pushing out-of-stock or low-availability items?",
        answer:
          "I feed inventory health into both candidate generation and re-ranking, and I set exclusion rules for items below a threshold coverage by size or color. I'll also include predicted stockout risk based on recent velocity. One change that worked well was a 'next best substitution' fallback so we didn't just remove high demand items; we offered close alternatives automatically. That reduced frustration and saved revenue during peak. Reporting-wise, I track 'recommendation stock compliance' so we notice if feeds or rules are slipping.",
        keyPoints: [
          "Multi-layer inventory filtering in generation and ranking",
          "Predictive stockout risk based on velocity trends",
          "Automatic substitution for unavailable high-demand items",
          "Compliance monitoring and alerting",
        ],
        adamEveContext:
          "For Adam & Eve, inventory management in recommendations prevents customer disappointment and maintains trust, especially for specialized wellness products with limited stock.",
      },
      {
        id: "personalization-quality-segmentation",
        question:
          "What analytics do you use to evaluate personalization quality by segment?",
        answer:
          "I slice by new vs. returning, device, traffic source, and key intent categories. I look at module visibility, CTR, add-to-cart from recs, and incremental RPV. I also track diversity and novelty scores—if a cohort only sees a narrow set of products, I adjust exploration. When we noticed lapsed users engaging more with guides before buying, we tuned the first session to insert educational tiles above recs. That change increased conversion for that segment, because they needed confidence first, not more items.",
        keyPoints: [
          "Multi-dimensional segmentation for personalization assessment",
          "Diversity and novelty metrics alongside conversion",
          "Segment-specific optimization strategies",
          "Educational content integration for confidence building",
        ],
        adamEveContext:
          "For Adam & Eve, segmentation must identify when customers need education versus product recommendations, adjusting the experience to build comfort appropriately.",
      },
      {
        id: "margin-vs-relevance-balance",
        question:
          "How do you balance margin goals with personalization relevance?",
        answer:
          "I never let margin override intent. I add margin as a soft feature in re-ranking with caps so it can nudge choices but not distort relevance. During tight targets, I'll introduce 'good-better-best' groupings in carousels, where the first slot nails relevance, and adjacent slots express a margin-friendly option. We also tested personalized bundles that combined a highly relevant anchor with margin-positive add-ons. That approach felt customer-first and still moved the profitability needle. If you protect trust on the first click, you earn room to merchandise thoughtfully.",
        keyPoints: [
          "Soft margin features with caps to prevent distortion",
          "Good-better-best strategy maintaining relevance primacy",
          "Bundle optimization for margin without sacrificing trust",
          "Trust preservation enabling downstream optimization",
        ],
        adamEveContext:
          "For Adam & Eve, margin optimization must never compromise educational content visibility or customer comfort—long-term trust drives lifetime value.",
      },
      {
        id: "sensitive-content-personalization",
        question:
          "How do you personalize when product topics can be sensitive or private?",
        answer:
          "I keep the experience respectful and user-controlled. Onsite, I'll personalize quietly—ordering within a category rather than shouting 'recommended for you' around sensitive topics. I avoid email retargeting on explicit categories unless the user has clearly opted into that content stream. We used generic language like 'more like what you viewed' and made it easy to change preferences. In practice, this reduced opt-outs and allowed us to meet users where they are. The test for me is: would this feel okay if someone glanced over the shopper's shoulder?",
        keyPoints: [
          "Quiet personalization without explicit callouts",
          "Strict opt-in requirements for sensitive category retargeting",
          "User control and preference management",
          "Privacy-aware design considering shared device scenarios",
        ],
        adamEveContext:
          "Essential for Adam & Eve—personalization must be discreet and respectful, never exposing purchase history or creating uncomfortable social situations.",
      },
      {
        id: "multi-surface-ai-experiments",
        question:
          "How do you design experiments for AI-driven ranking changes that affect multiple surfaces?",
        answer:
          "I define primary and guardrail metrics per surface—search, PDP recs, cart cross-sell—and a shared hierarchy so wins in one spot don't hide losses elsewhere. I prefer slice-aware randomization to avoid contamination, and I set event-level attribution windows consistently. On a big refactor, we staggered rollouts: first PDP, then category, then search, verifying neutrality on returns and customer support contacts. Centralizing experiment metadata helped us catch a weird edge case where cart cross-sell stole credit from category recs; once we corrected logging, results were stable.",
        keyPoints: [
          "Surface-specific metrics with unified hierarchy",
          "Staggered rollout strategy for risk management",
          "Contamination prevention through proper randomization",
          "Comprehensive guardrail monitoring including support contacts",
        ],
        adamEveContext:
          "For Adam & Eve, multi-surface experiments must track customer comfort metrics alongside business KPIs to ensure holistic optimization.",
      },
      {
        id: "recommendation-feature-engineering",
        question:
          "What's your approach to feature engineering for recommendation models?",
        answer:
          "I mix human sense with automation. Start with obvious predictors—price, rating, availability—then layer affinities like brand and material. I'll add temporal features (time since view, seasonality) and interaction features (discount x price sensitivity). I keep a short list of high-signal, low-leak features to avoid target leakage. In one cycle, adding 'repeat purchase likelihood by subcategory' improved cross-sell quality because the model learned which items were complements, not substitutes. I'd rather ship a simple, auditable feature set that performs than chase marginal gains with opaque features.",
        keyPoints: [
          "Balanced approach combining domain expertise and automation",
          "Temporal and interaction features for context",
          "Leak prevention through careful feature design",
          "Simplicity and auditability as optimization constraints",
        ],
        adamEveContext:
          "For Adam & Eve, feature engineering would include educational engagement signals and customer comfort indicators as key predictors.",
      },
      {
        id: "search-recommendations-integration",
        question:
          "How do you integrate recommendations with onsite search results?",
        answer:
          "For exploratory queries, I'll insert a horizontal rec rail after the first row, driven by session intent and recent views. For precise, navigational queries, I keep it subdued or suppressed. We also used semantic reranking that considers user affinity when multiple items are tied on relevance. The key is transparency—results still primarily reflect the query, with personalization acting as a tiebreaker. In tests, this approach improved first-click speed and reduced refinements for broad terms, while not confusing users who expected exact matches on product names.",
        keyPoints: [
          "Query-type aware recommendation placement strategy",
          "Semantic reranking for tied relevance scenarios",
          "Transparency maintaining search result primacy",
          "Improved efficiency without user confusion",
        ],
        adamEveContext:
          "For Adam & Eve, search-recommendation integration must preserve educational content visibility while adding personalized product suggestions contextually.",
      },
      {
        id: "ai-fairness-bias-prevention",
        question:
          "How do you ensure AI systems behave fairly and avoid unintended bias?",
        answer:
          "I define fairness metrics up front—exposure by brand, price band, and size range—and monitor them alongside revenue. I add constraints into re-ranking so smaller brands or inclusive sizes get baseline visibility, then let performance adjust within bounds. After noticing underexposure for extended sizes, we guaranteed minimum slot coverage in relevant carousels and saw both engagement and satisfaction improve. I also push for periodic human review, especially in sensitive categories, to catch nuance models miss. Governance gives you room to optimize without eroding trust.",
        keyPoints: [
          "Explicit fairness metrics defined and monitored",
          "Exposure constraints ensuring diverse product representation",
          "Periodic human review for sensitive categories",
          "Trust preservation as optimization boundary",
        ],
        adamEveContext:
          "For Adam & Eve, fairness includes ensuring diverse body types, relationship types, and wellness approaches receive equitable representation in recommendations.",
      },
      {
        id: "trending-signal-handling",
        question:
          "How do you handle real-time signals like trending spikes without whipsawing the experience?",
        answer:
          "I smooth signals with decay functions and caps. A sudden spike gets a temporary boost that decays over hours unless reinforced by conversion. I also detect anomalies from offsite virality to avoid flooding unrelated pages. When a product went viral on TikTok, we allocated a few hero placements and increased its exploration budget in relevant areas, but we didn't let it hijack unrelated queries. This kept conversion high where intent matched, while preserving sanity elsewhere. Guardrails plus measured agility beat panic boosts.",
        keyPoints: [
          "Temporal decay functions preventing overreaction",
          "Virality detection and containment strategies",
          "Targeted boost allocation to relevant contexts",
          "Balance between responsiveness and stability",
        ],
        adamEveContext:
          "For Adam & Eve, trending products must be promoted tastefully without overwhelming educational content or making the site feel opportunistic.",
      },
      {
        id: "ai-collaboration-shipping",
        question:
          "How do you collaborate with engineering and analytics to ship personalization safely?",
        answer:
          "I bring crisp problem statements, sample payloads, and a rollback plan. We agree on schemas, PII boundaries, and monitoring before code ships. I'll help define synthetic tests to validate feature completeness and a 'null model' path if services fail, so UI degrades gracefully. With analytics, we pre-define metrics, slices, and experiment ownership, then do readouts jointly to avoid cherry-picking. On a previous team, this discipline meant even ambitious model changes felt routine. We shipped faster because everyone trusted the process, not just the person pitching the idea.",
        keyPoints: [
          "Clear requirements with rollback and degradation plans",
          "Schema and PII boundary agreements upfront",
          "Synthetic testing and graceful failure handling",
          "Joint readout process preventing bias",
        ],
        adamEveContext:
          "For Adam & Eve, shipping AI features requires extra diligence around privacy, compliance, and brand safety given the sensitive product category.",
      },
    ],
  },
  {
    id: "customer-experience",
    title: "Customer Experience & UX Optimization",
    icon: Heart,
    description:
      "User experience design, mobile optimization, accessibility, and customer journey management (20 questions)",
    color: "amber",
    questions: [
      {
        id: "ux-problem-prioritization",
        question:
          "How do you decide which UX problems to tackle first on a busy roadmap?",
        answer:
          "I look for issues that are both high-friction and high-frequency. I'll run a quick triage using conversion funnels and session replays to see where users hesitate or backtrack, then stack-rank by revenue impact and effort. If mobile PDPs show long dwell with low add-to-cart, that beats a niche desktop filter bug. I also check qualitative signals—chat transcripts and survey 'why didn't you buy?' comments—to make sure we're solving real pain. At my last company, prioritizing a sticky size selector and clearer shipping messaging outranked a fancy gallery revamp and moved mobile CVR faster than any visual polish would have.",
        keyPoints: [
          "High-friction, high-frequency prioritization framework",
          "Conversion funnel and session replay analysis",
          "Qualitative validation through customer feedback",
          "Impact vs effort assessment for roadmap decisions",
        ],
        adamEveContext:
          "For Adam & Eve, UX prioritization must consider customer comfort barriers alongside traditional conversion metrics.",
      },
      {
        id: "mobile-pdp-improvement",
        question:
          "What's your process for improving mobile product detail pages?",
        answer:
          "I start with the first screen. On mobile, the hero image, price, primary benefits, and add-to-cart need to be instantly visible. I'll collapse secondary content, keep reviews scannable with sentiment highlights, and make key actions sticky. Then I check tap targets and form inputs against Fitts's Law and ADA expectations. We A/B test image count versus speed, because too many high-res assets can slow first contentful paint. In one test, simplifying the above-the-fold into a clean 'image, price, primary CTA' layout improved first-click time and drove a 7% lift in add-to-cart without touching pricing.",
        keyPoints: [
          "Above-the-fold optimization for immediate value communication",
          "Progressive disclosure of secondary information",
          "Performance optimization balancing visuals and speed",
          "Measurable conversion improvements through simplification",
        ],
        adamEveContext:
          "For Adam & Eve, mobile PDPs must balance product information with discreet presentation and educational content access.",
      },
      {
        id: "education-conversion-balance",
        question:
          "How do you balance education and conversion on complex products?",
        answer:
          "I treat education as a confidence accelerant, not a detour. I'll keep the purchase path clean and layer help where it's needed: short explainer tooltips, an accordion with key benefits, and a 'how to choose' link that opens in a sheet, not a new page. I watch scroll depth to catch where questions arise and drop micro-guides there. At a previous role, we added a two-step 'help me decide' quiz that pre-selected filters on return—no dead ends. Conversion rose because users weren't forced to read a blog before buying; answers lived inside the shopping flow.",
        keyPoints: [
          "Education as conversion enabler, not obstacle",
          "Progressive help delivery at decision points",
          "In-context educational tools and guides",
          "Maintained shopping flow with embedded answers",
        ],
        adamEveContext:
          "Critical for Adam & Eve where educational content builds customer confidence for wellness purchases without creating friction.",
      },
      {
        id: "behavioral-analytics-usage",
        question:
          "How do you use behavioral analytics tools like ContentSquare or Heap to guide UX changes?",
        answer:
          "I pair macro with micro. Funnels tell me where, replays and heatmaps tell me why. I'll segment by device and traffic source because a paid social user behaves differently from an email loyalist. When I spot rage clicks or hover-without-click patterns on filter chips, I validate with a quick intercept survey and then prototype alternatives. One win came from seeing users repeatedly tap 'more info' on shipping; surfacing a concise delivery estimate near the price cut confusion in half and nudged AOV up because users felt safe adding one more item.",
        keyPoints: [
          "Combined quantitative funnel and qualitative behavior analysis",
          "Device and traffic source segmentation",
          "Pattern recognition followed by validation",
          "Quick iteration from insight to solution",
        ],
        adamEveContext:
          "For Adam & Eve, behavioral analytics can identify privacy concerns and comfort barriers that customers may not explicitly report.",
      },
      {
        id: "accessibility-implementation",
        question:
          "What's your approach to accessibility without slowing teams down?",
        answer:
          "I bake it into definition of done. Components come with roles, focus states, and color-contrast tokens by default, so designers aren't reinventing the wheel. I use automated checks for low-hanging issues and manual testing for screen reader flows on key templates. When we standardized headings and landmarks across PDP and checkout, screen reader navigation improved and our general UX coherence did too. Accessibility rarely hurts conversion—clearer focus, better labels, and predictable structure help everyone. It's faster to ship accessible components than to retrofit a dozen bespoke designs later.",
        keyPoints: [
          "Accessibility baked into component standards",
          "Automated and manual testing combination",
          "Universal benefits beyond disability compliance",
          "Proactive approach preventing retrofit costs",
        ],
        adamEveContext:
          "For Adam & Eve, accessible design ensures all customers can comfortably and discreetly access wellness information and products.",
      },
      {
        id: "mobile-checkout-abandonment",
        question: "How do you reduce mobile checkout abandonment?",
        answer:
          "I compress the flow: guest checkout first, wallet buttons visible, and auto-fill everything we can. I defer account creation to the receipt screen and make the form forgiving—inline validation, numeric keyboards, and a single field for full name. I also offer discrete packaging or privacy-related messaging early if that's a concern for the audience. We shaved abandonment by simplifying address entry with USPS suggestions and exposing a delivery ETA upfront. The psychological friction of 'how long will this take and will it be discreet?' mattered as much as typing fewer fields.",
        keyPoints: [
          "Streamlined guest checkout with minimal fields",
          "Smart defaults and auto-fill optimization",
          "Proactive privacy and discretion messaging",
          "Psychological friction reduction alongside technical optimization",
        ],
        adamEveContext:
          "For Adam & Eve, checkout must emphasize discreet shipping and privacy protection to overcome final purchase hesitation.",
      },
      {
        id: "navigation-changes-seo",
        question:
          "How do you evaluate navigation changes without breaking SEO or user habits?",
        answer:
          "I treat navigation like urban planning—small, measured moves. I'll mirror the new structure in a test nav on a subset of users, keeping URLs stable and breadcrumbs consistent. We track findability tasks, search refinements, and pogo-sticking between category and filter pages. If discoverability improves and search exits fall, that's a green light. When we consolidated overlapping categories and promoted high-intent entry points, we kept legacy redirects in place for SEO and gradually updated internal links. Users adjusted smoothly because the mental model got simpler, not just different.",
        keyPoints: [
          "Incremental testing with URL stability",
          "Findability and navigation success metrics",
          "SEO preservation through redirects",
          "Mental model simplification as guiding principle",
        ],
        adamEveContext:
          "For Adam & Eve, navigation changes must maintain customer comfort with familiar category organization while improving wellness product discovery.",
      },
      {
        id: "filter-redesign-signals",
        question:
          "What signals tell you that filters and sorting need a redesign?",
        answer:
          "High refinement loops, repeated filter toggling, and short dwell after sort changes are red flags. I also look at filter usage versus attribute completeness; if 'material' is popular but half the catalog lacks it, that's a data problem appearing as UX. On mobile, if users abandon after opening the filter drawer, the layout's probably too dense. At my last company, moving top filters into chips and auto-applying selections reduced cognitive load and increased filtered conversion. We also trimmed sort options to the ones customers actually used, not the ten we thought they needed.",
        keyPoints: [
          "Behavioral pattern analysis for UX problems",
          "Data completeness as filter effectiveness factor",
          "Mobile-specific usability considerations",
          "Simplification through usage-based pruning",
        ],
        adamEveContext:
          "For Adam & Eve, filter design must allow discreet exploration while helping customers find appropriate wellness products efficiently.",
      },
      {
        id: "reviews-integration-pdp",
        question:
          "How do you incorporate customer reviews without overwhelming the page?",
        answer:
          "I surface the signal, not the noise. A compact rating summary with distribution bars and two or three highlighted pros and cons beats a wall of text. I add filters for size, use case, and verified purchase, and I let shoppers sort by 'most helpful' instead of defaulting to newest. We also added a small badge when a product was frequently kept and not returned. That quiet social proof increased trust. For sensitive categories, we moderate for respectful language while keeping authenticity intact—overly sanitized reviews can feel fake and depress engagement.",
        keyPoints: [
          "Signal extraction over volume presentation",
          "Smart filtering and sorting for relevance",
          "Subtle social proof indicators",
          "Moderation balancing authenticity and appropriateness",
        ],
        adamEveContext:
          "For Adam & Eve, reviews must maintain discretion and respect while providing authentic customer experiences that build confidence.",
      },
      {
        id: "site-speed-visual-balance",
        question:
          "How do you approach site speed when design asks for heavy visuals?",
        answer:
          "I set performance budgets up front and treat them as non-negotiable. We use modern image formats, lazy loading below the fold, and responsive sizes to avoid shipping desktop assets to phones. I'll push for narrative impact with fewer, more purposeful visuals rather than a gallery of near-duplicates. In one refresh, we replaced auto-playing videos with a single optimized clip behind a tap. LCP improved, and engagement didn't drop because the call to watch was clear. If we have to choose, I'll protect speed on the primary path to cart every time.",
        keyPoints: [
          "Non-negotiable performance budgets",
          "Modern optimization techniques (formats, lazy loading)",
          "Purposeful visual selection over volume",
          "Primary conversion path prioritization",
        ],
        adamEveContext:
          "For Adam & Eve, fast load times are essential for maintaining customer comfort and preventing abandonment in sensitive shopping moments.",
      },
      {
        id: "personalization-without-creepiness",
        question: "How do you personalize UX without making it feel creepy?",
        answer:
          "I keep the tone matter-of-fact and the controls obvious. Personalization should reorder options, not announce secrets. I'll pre-select relevant filters based on recent browsing, show 'continue where you left off,' and surface complementary items quietly on PDP. I also add a simple 'Why am I seeing this?' link and a preference toggle. When we added a discreet mode that hid explicit thumbnails in shared spaces, opt-in was strong and engagement grew. The principle is respect: give users a smoother path, but let them steer and opt out easily.",
        keyPoints: [
          "Subtle reordering rather than explicit announcements",
          "Transparency through explanation features",
          "User control with easy opt-out mechanisms",
          "Privacy-conscious features for shared device scenarios",
        ],
        adamEveContext:
          "Essential for Adam & Eve where personalization must never expose sensitive purchase history in potentially shared browsing environments.",
      },
      {
        id: "customer-journey-mapping",
        question:
          "What's your method for mapping the customer journey to find experience gaps?",
        answer:
          "I start with a hypothesis map from discovery to repeat purchase—ad click, landing, browse, PDP, cart, checkout, post-purchase—and layer real data on top. We annotate each step with KPIs, common questions, and emotional states from surveys. Then we pick a persona—new-to-category, gift shopper, repeat buyer—and run task-based tests. When we saw new shoppers bouncing after adding to cart, the gap was confidence post-add. Adding reassurance modules in cart—returns, discreet shipping, and recommended complements with clear value—closed that loop. Journey maps are only useful if they lead to one or two focused experiments.",
        keyPoints: [
          "Data-layered journey hypothesis mapping",
          "Emotional state and question tracking",
          "Persona-based task testing",
          "Actionable gap identification and closure",
        ],
        adamEveContext:
          "For Adam & Eve, journey mapping must identify comfort and confidence gaps throughout the wellness product purchase experience.",
      },
      {
        id: "quiz-guided-selling",
        question: "How do you decide when to use a quiz or guided selling?",
        answer:
          "I look for high choice overload and vocabulary gaps. If users don't know how to translate their needs into filters, a short, friendly quiz can accelerate intent. The rule is brevity and immediate payoff: three to five questions, clear language, and results that map to pre-filtered collections users can adjust. We tested a long-form quiz once; completion tanked. A trimmed version that saved preferences to the session worked, and we saw higher PDP engagement. The quiz should feel like a shortcut, not a funnel you can't escape.",
        keyPoints: [
          "Choice overload and vocabulary gap indicators",
          "Brief, actionable quiz design (3-5 questions)",
          "Immediate value delivery with adjustable results",
          "Session persistence without forcing completion",
        ],
        adamEveContext:
          "For Adam & Eve, quizzes can help customers navigate unfamiliar wellness categories comfortably and find appropriate products quickly.",
      },
      {
        id: "inclusive-content-visuals",
        question:
          "How do you ensure content and visuals are inclusive and welcoming?",
        answer:
          "I start with representation in imagery—body diversity, skin tones, and couples—and I avoid implying one 'right' way to use products. Copy stays plainspoken and respectful. I also audit microcopy for gendered assumptions and make sure filters allow inclusive options where it matters. We brought in a small panel of customers to review language and imagery before a major refresh; their feedback helped us swap a few phrases that sounded clinical or judgmental. Conversion didn't just hold—it improved, because people felt seen rather than sorted.",
        keyPoints: [
          "Visual diversity across multiple dimensions",
          "Inclusive language avoiding assumptions",
          "Customer panel validation",
          "Positive conversion impact from inclusion",
        ],
        adamEveContext:
          "For Adam & Eve, inclusive representation across body types, relationships, and identities is core to the wellness mission and brand values.",
      },
      {
        id: "error-empty-states",
        question:
          "How do you approach error states and empty states so they don't kill momentum?",
        answer:
          "I design them as wayfinding moments. A zero-results page should offer quick pivots: related categories, top filters, and a gentle 'check spelling' hint. For form errors, I keep the message inline and specific—what went wrong and how to fix it—without clearing fields. We also show placeholders in empty wishlists or carts that encourage a next step with one-tap adds. When we reframed empty states as curated starting points, engagement rose because users weren't dumped into a dead end; they got a nudge that felt helpful, not salesy.",
        keyPoints: [
          "Wayfinding rather than dead-end design",
          "Specific, actionable error messaging",
          "Curated suggestions in empty states",
          "Maintained momentum through helpful nudges",
        ],
        adamEveContext:
          "For Adam & Eve, error states must maintain customer comfort and provide graceful alternatives without embarrassment.",
      },
      {
        id: "qualitative-ab-testing",
        question: "How do you use qualitative research alongside A/B tests?",
        answer:
          "I treat qualitative as reconnaissance and A/B as artillery. I'll run short moderated sessions or five-second tests to understand mental models, then prototype two or three viable directions. Once a concept feels right, we test it at scale. At one point, qualitative showed that users misunderstood a 'compare' feature as 'save for later.' We reframed the UI and then A/B tested the new label and placement. The test confirmed the fix, and usage climbed. Without the interviews, we would have optimized the wrong thing and still puzzled users.",
        keyPoints: [
          "Qualitative for understanding, quantitative for validation",
          "Mental model discovery through user research",
          "Iterative prototype refinement before testing",
          "Combined approach preventing optimization of wrong solutions",
        ],
        adamEveContext:
          "For Adam & Eve, qualitative research reveals unspoken comfort concerns and terminology preferences critical for wellness product UX.",
      },
      {
        id: "global-regional-ux",
        question:
          "How do you handle global UX patterns with regional or cultural nuances?",
        answer:
          "I set a core system of components and flows, then allow regional overrides for language, legal requirements, and sensitivities. Measurement stays consistent, but content can pivot—shipping promises, payment options, and customer support entry points sometimes need local emphasis. I'll pilot changes where cultural context strongly affects purchase confidence and expand if metrics justify it. On one site, adding cash-on-delivery and a prominent privacy statement in a new market was the difference between curiosity and conversion. Global doesn't mean identical; it means reliably familiar with room to flex.",
        keyPoints: [
          "Core system with regional flexibility",
          "Cultural context adaptation where impactful",
          "Consistent measurement across regions",
          "Pilot-driven expansion based on performance",
        ],
        adamEveContext:
          "For Adam & Eve, regional adaptations must account for varying cultural comfort levels with wellness products while maintaining brand values.",
      },
      {
        id: "ux-north-star-metrics",
        question: "How do you decide which UX metrics are your north stars?",
        answer:
          "I keep one experience metric and one business metric. For experience, I like task success signals such as time to first click on PDP or filter application rate. For business, it's conversion or revenue per visitor, depending on the context. Supporting metrics—bounce, scroll depth, search exits—explain the story but don't replace the stars. We learned the hard way that chasing CTR on recommendations without guarding RPV led to noise. Once we aligned on fewer, clearer metrics, debates got simpler and decisions faster.",
        keyPoints: [
          "Paired experience and business metrics",
          "Task success as experience indicator",
          "Supporting metrics for context, not direction",
          "Simplified decision-making through focus",
        ],
        adamEveContext:
          "For Adam & Eve, north star metrics must balance customer comfort and education engagement with conversion and lifetime value.",
      },
      {
        id: "customer-service-ux-integration",
        question:
          "How do you bring Customer Service insights into UX improvements?",
        answer:
          "I set up a monthly loop with CS to tag top contact drivers and map them to pages. If 'Where's my order?' spikes, that's a UX problem on PDP, cart, or post-purchase. We added clearer delivery windows and order tracking that updated proactively via email and SMS. Tickets dropped, and repeat purchase rates rose. I also ask CS to flag verbatims that indicate confusion we can address with microcopy or tooltips. It turns support pain into product insight and keeps us honest about what customers actually struggle with.",
        keyPoints: [
          "Systematic CS insight integration loop",
          "Contact driver mapping to UX touchpoints",
          "Proactive communication reducing support load",
          "Verbatim analysis for confusion identification",
        ],
        adamEveContext:
          "For Adam & Eve, CS insights reveal privacy concerns and product questions that customers may be uncomfortable asking through public channels.",
      },
      {
        id: "visual-design-usability",
        question:
          "How do you make sure visual design changes don't accidentally hurt usability?",
        answer:
          "I separate aesthetics from function in reviews. Critical affordances—buttons, links, inputs—must keep contrast, size, and proximity rules. If a new palette threatens contrast, we adjust tokens before comps ship. I run quick tree tests or first-click tests on navigation and key tasks to ensure the pretty version still performs. When we introduced a lighter theme, early tests showed users missing secondary CTAs. We strengthened hierarchy with spacing and typographic weight rather than louder colors, and the issue disappeared. Beauty serves clarity; if clarity slips, design iterates.",
        keyPoints: [
          "Function-first review criteria",
          "Usability testing of visual changes",
          "Hierarchy solutions beyond color",
          "Iterative approach maintaining clarity",
        ],
        adamEveContext:
          "For Adam & Eve, visual design must maintain discreet, professional appearance while ensuring all interactive elements remain accessible and clear.",
      },
    ],
  },
  {
    id: "business-strategy",
    title: "Business Strategy & Performance Management",
    icon: TrendingUp,
    description:
      "Strategic planning, KPI frameworks, optimization methodologies, and performance analysis (20 questions)",
    color: "green",
    questions: [
      {
        id: "north-star-metric-definition",
        question:
          "How do you define the north-star metric for a merchandising team?",
        answer:
          "I start with what we can truly influence and what best represents durable value. For merchandising, revenue per visitor and contribution margin per visitor are strong candidates, but I sanity-check against LTV and return rates so we don't win the hour and lose the month. I'll map inputs we control—search relevance, recommendation quality, category ranking, promo mix—to that north star with a simple driver tree. At my last company, we landed on RPV as the north star, with CVR, AOV, and search exit rate as tier-1 inputs. It made trade-offs clear: a discount that lifted AOV but hurt margin per unit didn't pass the driver-tree sniff test unless it improved repeat purchase or attachment rate downstream.",
        keyPoints: [
          "Durable value focus over short-term metrics",
          "Driver tree connecting controllable inputs to outcomes",
          "Trade-off clarity through hierarchical structure",
          "Long-term impact validation requirements",
        ],
        adamEveContext:
          "For Adam & Eve, the north star should balance educational mission success with business sustainability and customer lifetime value.",
      },
      {
        id: "quarterly-goal-setting",
        question:
          "How do you set quarterly goals without overcommitting the team?",
        answer:
          "I anchor OKRs in a realistic capacity model and a short list of bets with clear measurable outcomes. I use RICE (reach, impact, confidence, effort) to rank initiatives and cap the 'big rocks' at three per quarter. We pair each with a lead metric and a guardrail, like improving search CTR while keeping returns neutral. At a previous role, we resisted the urge to stack every request into the quarter; instead, we staged work behind feature flags. The result was fewer half-done projects and cleaner readouts. Stakeholders appreciated fewer surprises because they could see what shipped, what moved the needle, and what was deliberately parked for the next cycle.",
        keyPoints: [
          "Capacity-based realistic goal setting",
          "RICE prioritization framework",
          "Limited concurrent 'big rocks' strategy",
          "Feature flag staging for flexibility",
        ],
        adamEveContext:
          "For Adam & Eve, quarterly goals must balance immediate business needs with long-term educational content development and brand trust building.",
      },
      {
        id: "revenue-dip-diagnosis",
        question:
          "How do you diagnose a sudden revenue dip that doesn't show in traffic?",
        answer:
          "I split the funnel: sessions are flat, so I look at CVR and AOV by device, channel, and top entry pages. I check site health—errors, latency, inventory flags—then recent changes in ranking rules, promos, or pricing. I'll run a quick cohort view to see if new versus returning behavior diverged; a loyalty promo expiring can look like a conversion dip if returning customers are waiting. In one case, a delivery-date microcopy change reduced confidence on PDP; we saw a spike in page exits and cart hesitations. Reverting the copy and clarifying shipping windows recovered CVR within 48 hours. The key is to isolate the first broken link in the chain and fix the smallest thing that plausibly caused it.",
        keyPoints: [
          "Systematic funnel decomposition analysis",
          "Site health and technical validation",
          "Cohort segmentation for pattern identification",
          "Rapid iteration and rollback capability",
        ],
        adamEveContext:
          "For Adam & Eve, revenue dips might also indicate privacy concern spikes or educational content visibility issues requiring investigation.",
      },
      {
        id: "revenue-impact-forecasting",
        question:
          "What's your approach to forecasting revenue impact from merchandising changes?",
        answer:
          "I use a layered model. Baseline forecast relies on seasonality and channel mix. On top, I estimate lift from initiatives using historical elasticities—how CTR changes translate to CVR and RPV—and sanity-check with minimum detectable effect from prior tests. I keep assumptions explicit and bounded; if we plan to reduce zero-result rate by 20%, I translate that into expected incremental sessions reaching PDP and attach a conservative conversion. At my last company, we packaged forecasts with a range and a clear kill switch if the lower bound wasn't met by day seven. It built credibility because finance saw the logic, not just a hopeful number. Forecasts are arguments, not predictions; the argument should be inspectable.",
        keyPoints: [
          "Layered modeling with explicit assumptions",
          "Historical elasticity application",
          "Conservative estimates with bounded ranges",
          "Early kill switches for validation",
        ],
        adamEveContext:
          "For Adam & Eve, forecasting must account for educational content impact on customer confidence and conversion timelines.",
      },
      {
        id: "kpi-review-cadence",
        question:
          "How do you decide which KPIs to review weekly versus monthly?",
        answer:
          "Weekly is for operational health and early warning: search exit rate, zero-result rate, PDP add-to-cart, error rates, and recommendation stock compliance. Monthly is for durability and strategy: RPV, contribution margin per visitor, LTV movement, and cohort retention. I learned not to overreact to weekly revenue variance without context; seasonality and promo cadence can whiplash you. In one team, adding a weekly 'exceptions report' helped us focus only on metrics crossing a threshold, not every wiggle. Then at month-end, we told the bigger story with cohorts and attribution. The cadence kept us agile day-to-day without constantly changing course based on noise.",
        keyPoints: [
          "Operational vs strategic metric separation",
          "Exception-based weekly review",
          "Contextual monthly storytelling",
          "Noise filtering through thresholds",
        ],
        adamEveContext:
          "For Adam & Eve, weekly reviews should include compliance metrics while monthly reviews assess educational mission progress.",
      },
      {
        id: "executive-performance-readout",
        question: "How do you structure a performance readout for executives?",
        answer:
          "I lead with outcomes, not activities. First slide is the north star versus plan, then what changed it—two or three drivers with numbers, not adjectives. I include one page per big bet: hypothesis, what shipped, test design, measured lift, and next step. Risks and asks are explicit—if we need engineering weeks or creative assets, they're priced and tied to upside. When we presented this way, leadership conversations moved from 'what are you working on?' to 'should we double down here or pivot?' It also helped align with finance because our story matched their driver model. Clarity beats volume; five good charts are worth fifty screenshots.",
        keyPoints: [
          "Outcome-focused storytelling",
          "Driver-based explanation with quantification",
          "Clear asks with upside justification",
          "Decision-oriented presentation format",
        ],
        adamEveContext:
          "For Adam & Eve executives, readouts should connect merchandising performance to brand mission and customer trust metrics.",
      },
      {
        id: "growth-profitability-balance",
        question: "How do you balance growth with profitability targets?",
        answer:
          "I negotiate constraints up front. If contribution margin per order needs to stay above a floor, we bake that into promo logic and recommendation re-ranking as a soft feature. I'll push growth through mix shift—attach add-ons, bundles, and cross-sell—rather than blunt discounts. At a prior company, we introduced 'good-better-best' merchandising and protected high-margin add-ons at checkout. We hit revenue goals while holding margin flat. I also watch returns and support contact rates as silent profit killers; an aggressive push that spikes returns isn't real growth. The trick is to make the most profitable path feel like the most natural customer path.",
        keyPoints: [
          "Upfront constraint negotiation",
          "Mix optimization over discount strategies",
          "Downstream impact monitoring",
          "Natural path design for profitable outcomes",
        ],
        adamEveContext:
          "For Adam & Eve, growth strategies must protect educational content investment and brand trust while meeting financial targets.",
      },
      {
        id: "optimization-prioritization-framework",
        question: "What's your framework for prioritizing optimization ideas?",
        answer:
          "I keep a living backlog scored by RICE and feasibility on our current stack. I also tag ideas by dependency so we don't schedule three experiments that collide on the same page. We reserve a small portion of capacity for quick wins and bug fixes that unblock revenue now. In practice, a search synonym pack update with high reach and low effort jumps the queue over a complex personalization refactor with uncertain impact. After each quarter, we prune stale ideas and promote proven ones into playbooks. Prioritization isn't a one-time meeting; it's a weekly hygiene habit that keeps momentum.",
        keyPoints: [
          "RICE scoring with technical feasibility",
          "Dependency mapping preventing conflicts",
          "Quick win capacity reservation",
          "Regular backlog grooming and refinement",
        ],
        adamEveContext:
          "For Adam & Eve, prioritization should favor customer comfort improvements and compliance needs alongside revenue optimization.",
      },
      {
        id: "stakeholder-conflict-resolution",
        question:
          "How do you handle conflicting stakeholder goals, like brand wants hero storytelling and merchandising wants conversion?",
        answer:
          "I turn it into a testable brief. We define success for both sides—brand engagement time and conversion lift—and propose placements that can flex. For example, we'll run a hero module with narrative first impression, but below it, we place high-intent category tiles and search-forward entry points. In one campaign, we A/B tested two hero treatments and kept the one that preserved brand dwell without depressing RPV. Having shared metrics reframed the debate from taste to trade-offs. Most conflicts melt once everyone can see the numbers and a path to get both outcomes in balance.",
        keyPoints: [
          "Shared success metric definition",
          "Flexible design accommodating multiple goals",
          "Test-driven resolution",
          "Trade-off visualization for alignment",
        ],
        adamEveContext:
          "For Adam & Eve, brand storytelling and conversion optimization must both support the educational wellness mission.",
      },
      {
        id: "tooling-investment-roi",
        question:
          "How do you estimate the ROI of a tooling investment like a new search vendor feature?",
        answer:
          "I map the feature to specific use cases and quantify unlocked lift. If synonym automation could cut manual tuning time by 50 hours per quarter and reduce zero-result rate by one point, I translate that into revenue and saved labor. I include risk—migration time, learning curve—and a depreciation schedule on benefits because the first month won't be full efficiency. When we pitched a visual similarity module, we ran a proof-of-concept on a subset, proved a 3% RPV lift on long-tail queries, and used that to justify the full license. Finance leaned in because the assumptions were test-backed and reversible.",
        keyPoints: [
          "Use case mapping with quantified benefits",
          "Risk and ramp-up cost inclusion",
          "Proof-of-concept validation",
          "Test-backed business case presentation",
        ],
        adamEveContext:
          "For Adam & Eve, tooling ROI must include impact on educational content delivery and compliance automation efficiency.",
      },
      {
        id: "ab-test-vs-direct-ship",
        question:
          "How do you decide when to run an A/B test versus shipping directly?",
        answer:
          "I test when the risk of being wrong is material or when learnings will generalize. If it's copy on a sensitive reassurance pattern or a ranking logic change, I test. If it's a clear fix to a bug or a compliance requirement, we ship. I also look at traffic to ensure we can reach minimum detectable effect in a reasonable time; tiny audiences waste calendar time. In one instance, we rolled a cart microcopy change straight to production because the failure mode was low, and support tickets immediately dropped. Testing is a tool, not a religion—judgment matters.",
        keyPoints: [
          "Risk-based test decision framework",
          "Compliance and bug fixes ship without testing",
          "Traffic sufficiency validation",
          "Pragmatic approach over dogmatic testing",
        ],
        adamEveContext:
          "For Adam & Eve, customer trust and compliance changes may require testing even for seemingly minor copy adjustments.",
      },
      {
        id: "multi-team-attribution",
        question:
          "How do you approach attribution when multiple teams touch the same customer?",
        answer:
          "I push for event-level attribution with clear windows and shared taxonomy so clicks and conversions line up across media, CRM, and site. For merchandising, I rely on incremental lift via suppression cohorts or geo splits when practical. We once found that a popular recommendation slot inflated email performance because users clicked from email but bought via the rec slot later; once we corrected the logging to shared IDs, we saw the true contribution. Attribution fights calm down when everyone agrees on the data model and is willing to run holdouts to validate the story.",
        keyPoints: [
          "Event-level tracking with shared taxonomy",
          "Incremental lift methodology",
          "Cross-channel path analysis",
          "Holdout validation for attribution models",
        ],
        adamEveContext:
          "For Adam & Eve, attribution must capture educational content's role in building confidence that leads to later conversions.",
      },
      {
        id: "seasonality-planning-flexibility",
        question:
          "How do you plan for seasonality without overfitting last year's pattern?",
        answer:
          "I use multi-year seasonality as a baseline, then adjust for macro factors—channel mix, pricing environment, and inventory changes. I build scenario ranges and set triggers for promo intensity and assortment emphasis. During a volatile year, we staged two playbooks for peak: a conservative one with targeted offers and a bolder one with sitewide incentives, each with clear guardrails. We watched early-week signals—search volume by category, add-to-cart rate—and switched tracks by midweek. It avoids anchoring on last year's weather or one viral hit that won't repeat.",
        keyPoints: [
          "Multi-year baseline with macro adjustments",
          "Scenario planning with trigger points",
          "Real-time signal monitoring",
          "Adaptive playbook switching",
        ],
        adamEveContext:
          "For Adam & Eve, seasonal planning must account for wellness education trends and cultural event timing (Valentine's, Pride, etc.).",
      },
      {
        id: "merchandising-ltv-connection",
        question:
          "How do you connect merchandising to customer lifetime value?",
        answer:
          "I cohort LTV by first-purchase category and merchandising path. If customers who start with bundles or education-supported categories retain better, I shift acquisition and onsite emphasis there. We also analyze repeat purchase triggers—refill cycles, accessory attach—and bake reminders into post-purchase flows. At one company, positioning a starter kit with a gentle follow-up cadence improved 90-day LTV without increasing returns. It taught us to favor confidence-building first purchases over one-off high AOV splurges. When merchandising thinks in terms of LTV/CAC, decisions naturally align with durable value rather than one-day spikes.",
        keyPoints: [
          "First-purchase cohort analysis",
          "Repeat purchase trigger identification",
          "Confidence-building over immediate value maximization",
          "LTV/CAC framework for decision-making",
        ],
        adamEveContext:
          "For Adam & Eve, LTV connection reveals the value of educational first purchases that build trust for long-term customer relationships.",
      },
      {
        id: "experiment-roadmap-management",
        question: "How do you keep experimentation from clogging the roadmap?",
        answer:
          "I time-box tests, define a hard stop, and set a minimum detectable effect up front. We run a weekly triage where any stalled test gets killed or redesigned. I also maintain a shared test calendar so we don't stack conflicting experiments on the same surface. Templates and pre-approved metrics lighten the lift for setup. When we adopted this discipline, our median test runtime dropped, and more tests reached decisive outcomes. The roadmap flowed because we weren't babysitting zombie tests that soaked up traffic and attention without teaching us anything useful.",
        keyPoints: [
          "Time-boxing with hard stops",
          "Weekly triage for stalled experiments",
          "Conflict prevention through calendaring",
          "Template-driven efficiency",
        ],
        adamEveContext:
          "For Adam & Eve, experiment discipline ensures customer experience improvements ship quickly while maintaining test rigor.",
      },
      {
        id: "promo-effectiveness-evaluation",
        question: "How do you evaluate promo effectiveness beyond raw sales?",
        answer:
          "I look at incremental RPV, margin impact, pull-forward versus true lift, and effects on returns and support contacts. I'll run post-promo cohorts to see if buyers repeat or churn. In one analysis, a deep discount spiked sales but increased returns and reduced 60-day repeat rate, erasing profit. A narrower offer on complementary items produced smaller day-one revenue but better contribution margin and healthier LTV. I also check halo effects—did the promo help adjacent categories? Promos should be surgical instruments, not sledgehammers. If we can't explain the after-effects, we shouldn't repeat it.",
        keyPoints: [
          "Comprehensive impact analysis beyond sales",
          "Pull-forward vs true lift distinction",
          "Cohort-based repeat rate tracking",
          "Halo effect measurement",
        ],
        adamEveContext:
          "For Adam & Eve, promos must maintain brand positioning as premium wellness provider while driving strategic growth.",
      },
      {
        id: "analytics-partnership-efficiency",
        question:
          "How do you partner with analytics without turning every question into a ticket?",
        answer:
          "I co-own a self-serve metrics layer with agreed definitions and a small set of certified dashboards. We keep a backlog for complex questions and a standing sync to align on priorities. I bring clear hypotheses and sample queries so the analyst can pressure-test, not reinvent. At my last company, we built a 'merch sandbox' with pre-joined tables for search and recs. It cut turnaround time drastically because product managers could explore safely, then rope in analytics for the final readout. The result was fewer pings, better questions, and faster decisions.",
        keyPoints: [
          "Self-serve analytics infrastructure",
          "Clear hypothesis-driven requests",
          "Sandbox environment for exploration",
          "Partnership over ticketing model",
        ],
        adamEveContext:
          "For Adam & Eve, analytics partnership enables quick iteration on educational content performance and customer comfort metrics.",
      },
      {
        id: "feature-scalability-assurance",
        question: "How do you ensure new features actually scale?",
        answer:
          "I add scale criteria to the acceptance checklist: performance budgets, monitoring, feature flags, and a documented rollback. I also define the operational playbook—who tunes it, how often, and with what guardrails. We once launched a manual-heavy promotion tool that looked great in a demo but didn't scale; we replaced it with rule-based scheduling and templates that reduced setup time by 70%. If a feature needs a war room to run, it's not ready. I'd rather ship a smaller capability that operates smoothly than a shiny panel we can't sustain.",
        keyPoints: [
          "Scale criteria in acceptance definition",
          "Operational playbook documentation",
          "Automation over manual processes",
          "Sustainable capability over feature richness",
        ],
        adamEveContext:
          "For Adam & Eve, scalable features enable efficient management of educational content and seasonal wellness campaigns.",
      },
      {
        id: "feature-sunset-decision",
        question: "How do you decide when to sunset a feature or module?",
        answer:
          "I set success and health thresholds at launch and review them quarterly. If usage is low, impact is negligible, and maintenance cost is high, I propose deprecation with a migration plan. We give stakeholders a preview of the replacement path and a brief A/B to confirm no hidden value. Deleting code is a strategic choice; it frees attention and reduces complexity. When we retired an underused comparison tool and replaced it with richer PDP content, we removed clutter and saw PDP engagement go up. Sunsetting is as important as shipping.",
        keyPoints: [
          "Launch with sunset criteria defined",
          "Quarterly usage and impact review",
          "Migration path planning",
          "Strategic code reduction for focus",
        ],
        adamEveContext:
          "For Adam & Eve, feature sunset decisions should consider educational value alongside usage metrics.",
      },
      {
        id: "team-alignment-ambiguous-results",
        question:
          "How do you keep the team aligned when results are mixed or ambiguous?",
        answer:
          "I narrate the learning, not just the win. We write short memos that capture the hypothesis, what we tried, what happened, and what we'll change next. We keep a visible wall of experiments—digital or physical—so people see progress even when lifts are small. In a tricky quarter, this practice kept morale steady and kept us from thrashing. We also revisit the driver tree to confirm we're chasing the right levers. Ambiguity is part of optimization; the job is to reduce it step by step and communicate the path so everyone knows why we're taking the next swing.",
        keyPoints: [
          "Learning narrative over victory announcement",
          "Visible progress tracking",
          "Driver tree validation",
          "Step-by-step ambiguity reduction",
        ],
        adamEveContext:
          "For Adam & Eve, ambiguous results around educational content require patient iteration with team alignment on mission-driven success.",
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership & Process Management",
    icon: Lightbulb,
    description:
      "Team leadership, stakeholder management, process optimization, and cross-functional collaboration (20 questions)",
    color: "indigo",
    questions: [
      {
        id: "first-30-days-expectations",
        question:
          "How do you set expectations with a new team in your first 30 days?",
        answer:
          "I start by listening. I'll meet each person 1:1 to understand their strengths, frustrations, and how they measure a good week. Then I write a short working charter: what we own (search, merchandising, personalization), how we decide (data first, fast feedback), and our cadences (weekly ops review, biweekly experiment readout). I share a 30/60/90 plan with two or three clear outcomes—stabilize HawkSearch governance, reduce zero-result rate, and stand up a test calendar. I also set response-time norms with partners in Analytics and Creative, so our handoffs don't stall. In my last role, this simple playbook calmed the noise and gave the team permission to focus on measurable wins quickly.",
        keyPoints: [
          "Listening tour with individual team members",
          "Clear working charter and decision principles",
          "Focused 30/60/90 outcomes",
          "Partnership norms with dependencies",
        ],
        adamEveContext:
          "For Adam & Eve, early listening reveals team comfort with sensitive content and establishes educational mission alignment.",
      },
      {
        id: "opinionated-stakeholder-management",
        question:
          "How do you handle a high-performing but opinionated stakeholder who constantly pushes pet projects?",
        answer:
          "I treat it like product discovery. I'll ask for the business problem, not the solution, and translate their idea into a testable hypothesis with success metrics and guardrails. Then I slot it into our prioritization framework alongside competing bets, so we're comparing impact apples-to-apples. I also offer a small 'prove it' lane—rapid prototype or geo pilot—so good ideas get a shot without hijacking the roadmap. When a brand lead pushed a homepage takeover, we ran a targeted test with cohort guardrails; results showed neutral revenue and higher bounce. Presenting that calmly shifted the conversation from 'do it' to 'what's the next best lever,' and we stayed aligned.",
        keyPoints: [
          "Problem-focused discovery approach",
          "Prioritization framework for fairness",
          "Low-risk pilot opportunities",
          "Data-driven conversation shifting",
        ],
        adamEveContext:
          "At Adam & Eve, stakeholder ideas must be validated against educational mission and customer comfort impact.",
      },
      {
        id: "slipped-timeline-management",
        question:
          "How do you keep cross-functional partners aligned when timelines slip?",
        answer:
          "I default to transparency and options. If engineering capacity shifts, I immediately share the impact on outcomes, not just dates: 'Search tuning won't land by Friday, which risks our zero-result reduction goal.' Then I offer alternatives—scope cut, phased rollout, or swapping in a lower-effort win. I keep a red/yellow/green board visible to Marketing, Analytics, and Creative so nobody's guessing. We also log decision timestamps to avoid revisiting the same debate. In a recent crunch, phasing the PDP recommendations API behind a feature flag let Creative finalize assets while we stabilized performance. We still hit the campaign window without pretending the slip didn't exist.",
        keyPoints: [
          "Outcome-focused transparency",
          "Alternative solution offering",
          "Visible status tracking",
          "Decision logging for accountability",
        ],
        adamEveContext:
          "For Adam & Eve, timeline slips affecting educational content launches require clear stakeholder communication and mission-aligned alternatives.",
      },
      {
        id: "analytical-skills-coaching",
        question:
          "How do you coach a merchandiser who's strong creatively but weak analytically?",
        answer:
          "I pair them with a friendly analyst for a weekly 'numbers hour' and give them bite-size analysis templates tied to their domain: pull search exit rate for your top collection, read a basic funnel, propose one test. I celebrate clear problem statements more than perfect SQL. I've found teaching them to ask better questions beats forcing tool mastery on day one. In six weeks at my last company, a stylist-turned-merchandiser started framing hypotheses with expected directional impact, which unlocked faster approvals. Creativity stayed intact; now it was aimed by data. The goal is confidence with numbers, not turning them into a statistician.",
        keyPoints: [
          "Analyst pairing for skill transfer",
          "Domain-specific templates",
          "Problem-framing over tool mastery",
          "Confidence building approach",
        ],
        adamEveContext:
          "At Adam & Eve, creative merchandisers need data skills to validate educational content effectiveness and customer comfort metrics.",
      },
      {
        id: "effective-standups",
        question:
          "What's your approach to running effective standups without micromanaging?",
        answer:
          "I keep it ruthless and useful: blockers, decisions needed, and today's outcomes. No status monologues. We track work in a simple Kanban with owner and due date, and we time-box to 10 minutes. Anything bigger becomes a sidebar with the right people. I rotate who leads to keep it fresh and ask one learning per week—something that changed our plan or thinking. When standups drift into reporting theater, I kill them for a week and replace with an async update. In practice, this keeps energy high and respects focus time. People show up because it reliably unblocks them, not because it's a calendar relic.",
        keyPoints: [
          "Focus on blockers and decisions",
          "Time-boxed with sidebar escalation",
          "Rotating leadership for engagement",
          "Async alternative when meetings drift",
        ],
        adamEveContext:
          "For Adam & Eve, standups should surface compliance concerns and educational content bottlenecks quickly.",
      },
      {
        id: "platform-governance-prevention",
        question:
          "How do you prevent platform governance (like HawkSearch rules) from becoming chaos?",
        answer:
          "I treat rules like code. We keep a shared repository with owners, purpose statements, and expiry dates. Changes require a short form: affected queries, expected impact, and rollback. Every Friday, we review new and expiring rules, plus a dashboard that flags conflicts or overrides. I also cap the number of global rules and push for category-scoped logic to avoid unintended bleed. At a previous role, adding expirations and alerts cut 'mystery behavior' incidents almost entirely. People stopped arguing about ghosts because we could see exactly what was active, why it existed, and when it would sunset unless renewed with data.",
        keyPoints: [
          "Code-like governance with version control",
          "Required documentation for changes",
          "Regular review cadence",
          "Scoping to prevent cross-contamination",
        ],
        adamEveContext:
          "For Adam & Eve, HawkSearch governance must include compliance rule tracking and educational content protection.",
      },
      {
        id: "adult-content-onboarding",
        question:
          "How do you onboard an engineer or analyst unfamiliar with adult wellness content?",
        answer:
          "I set a respectful context and clear boundaries. We do a short primer on category taxonomy, compliance considerations, and customer privacy norms. Then I anchor them in the work: data schemas, KPIs, and our test harness. I avoid sensationalism; it's retail with extra care for discretion. I also share language guidelines so naming in dashboards and logs stays professional. New teammates often relax once they see structured problems and a thoughtful culture. In my last org, this approach helped a skeptical engineer become a champion for discreet-mode features because they understood the customer need without awkwardness.",
        keyPoints: [
          "Professional context setting",
          "Technical focus over content focus",
          "Language guidelines for consistency",
          "Customer-need empathy building",
        ],
        adamEveContext:
          "Critical for Adam & Eve to ensure all team members treat wellness products professionally while understanding the educational mission.",
      },
      {
        id: "speed-vs-quality-resolution",
        question: "How do you resolve conflicts between speed and quality?",
        answer:
          "I define 'quality' in measurable terms—performance budgets, error rates, accessibility checks—then decide where we can flex without harming users. For speed, I'll propose a phased approach: ship the 80% version behind a flag, collect data, and schedule the hardening work. We also agree on a rollback plan so moving fast doesn't mean breaking prod. In a tight holiday window, we shipped a lighter recommendations rail with minimal features, then layered in diversity constraints after peak. Conversion didn't suffer, and we avoided a heroically late release that would have risked stability anyway.",
        keyPoints: [
          "Measurable quality definition",
          "Phased delivery with feature flags",
          "Rollback planning for safety",
          "Strategic scope reduction",
        ],
        adamEveContext:
          "For Adam & Eve, quality includes compliance and customer comfort—never sacrificed for speed.",
      },
      {
        id: "actionable-retros",
        question: "How do you run retros that actually change behavior?",
        answer:
          "I keep them blameless and specific. We list what surprised us, what we'd repeat, and one habit to change. Every action gets an owner and a due date, and we review last retro's actions first so it's not therapy without follow-through. I also pull one metric trend to anchor the conversation—'returns spiked,' not 'felt chaotic.' When we noticed repeated delays on data pulls, the retro produced a certified dashboard and a rotating analyst office hour. Two sprints later, we'd cut ad hoc requests by half. Retros only matter if they create a new system, not just a new slide.",
        keyPoints: [
          "Blameless with specific actionability",
          "Action tracking and review",
          "Metric-anchored discussions",
          "System creation over venting",
        ],
        adamEveContext:
          "For Adam & Eve, retros should identify educational content gaps and compliance process improvements systematically.",
      },
      {
        id: "inconclusive-data-decisions",
        question:
          "How do you handle decision-making when data is inconclusive?",
        answer:
          "I set a decision deadline and choose a reversible path. If we can't reach statistical confidence in time, we go with the option that protects trust and is cheapest to roll back. I'll also define leading indicators to watch post-launch and a pre-committed kill switch. In one case, two category layouts were tied; we picked the simpler one, documented our bet, and monitored search exits and PDP dwell. A week later, the indicators favored the alternative on mobile, so we flipped there only. The team stayed calm because the decision wasn't a marriage; it was a trial with exits.",
        keyPoints: [
          "Decision deadlines preventing paralysis",
          "Reversibility as selection criterion",
          "Leading indicator monitoring",
          "Platform-specific flexibility",
        ],
        adamEveContext:
          "For Adam & Eve, inconclusive results on educational content require thoughtful experimentation with customer trust protection.",
      },
      {
        id: "creative-brand-merchandising-sync",
        question:
          "How do you keep creative, brand, and merchandising moving in sync?",
        answer:
          "I use a rhythm: quarterly themes, monthly briefs, and weekly checkpoints. The brief includes the audience, promise, and constraints—inventory, margin, compliance—plus required assets and deadlines. We co-own a shared calendar so brand stories line up with category availability and onsite surfaces. I also establish a 'no surprise' rule—if inventory changes kill a hero, we pivot within 24 hours to a backup story. This cadence reduced last-minute scrambles at my last company and made our launches feel cohesive. Everyone could see the same plan and negotiate trade-offs early, not at 9 p.m. before go-live.",
        keyPoints: [
          "Structured rhythm with clear briefs",
          "Shared calendar for visibility",
          "No-surprise pivot protocols",
          "Early trade-off negotiation",
        ],
        adamEveContext:
          "For Adam & Eve, cross-team sync ensures educational messaging consistency across all customer touchpoints.",
      },
      {
        id: "future-leader-development",
        question: "How do you develop future leads on your team?",
        answer:
          "I give them scoped ownership with real stakes: a KPI, a cross-functional partner set, and a mini-roadmap. I coach privately, but I let them present readouts and handle pushback so they build muscle. We do monthly growth check-ins focused on behaviors—decision-making, storytelling with data, conflict resolution—not just outputs. I also rotate them through 'hot zones' like search governance or promo planning to broaden their view. One PM I mentored took over our experimentation council and later led a major personalization rollout. The goal is to make myself less central without making them feel abandoned.",
        keyPoints: [
          "Scoped ownership with accountability",
          "Public presentation opportunities",
          "Behavior-focused development",
          "Exposure rotation for breadth",
        ],
        adamEveContext:
          "At Adam & Eve, future leaders must understand both business metrics and educational mission stewardship.",
      },
      {
        id: "managing-up-urgency",
        question:
          "How do you manage up to executives who want results yesterday?",
        answer:
          "I bring clarity and choices. I'll frame the goal, the fastest ethical path, and the risks. If they want speed, I ask what we're comfortable sacrificing—scope, polish, or certainty—and I document that trade. I keep updates tight: one slide with progress, blockers, and the next decision we need from them. When a CMO pushed for a wide promo, we proposed a narrower, high-intent version with margin guardrails, plus a path to scale if early indicators were strong. We hit the revenue target and protected profit. Managing up is translating urgency into an executable plan with explicit costs.",
        keyPoints: [
          "Choice framework with explicit trade-offs",
          "Concise progress updates",
          "Risk documentation",
          "Alternative proposals with guardrails",
        ],
        adamEveContext:
          "For Adam & Eve executives, urgency must be balanced against educational mission and customer trust preservation.",
      },
      {
        id: "lightweight-reliable-process",
        question: "How do you keep process light but reliable?",
        answer:
          "I minimize bespoke steps and lean on templates. We use a standard experiment brief, a shared KPI dictionary, and a simple DRI model for each initiative. Meetings have agendas and end with owners and dates, or they shouldn't exist. I also revisit processes quarterly: what felt heavy, what saved us, what can we kill. We once collapsed three overlapping approvals into a single async sign-off with a 24-hour SLA. Throughput improved and nobody missed the ceremony. The right process is the smallest one that prevents repeated pain.",
        keyPoints: [
          "Template-driven standardization",
          "Outcome-focused meetings",
          "Quarterly process review",
          "Minimal viable process philosophy",
        ],
        adamEveContext:
          "For Adam & Eve, lightweight processes enable fast iteration while maintaining compliance and educational quality standards.",
      },
      {
        id: "vendor-relationship-management",
        question:
          "How do you approach vendor management with platforms like HawkSearch?",
        answer:
          "I treat vendors like extended team members with SLAs. We set quarterly objectives—data freshness, rule automation, reporting improvements—and hold monthly check-ins with a clear agenda and shared backlog. I bring concrete examples of failure modes and sample queries, not generic complaints. I also ask for roadmap visibility so we can plan around upcoming features. In one case, aligning on a synonym API beta let us cut manual work significantly. Vendors respond well when you're specific, fair, and show impact; it becomes a partnership instead of a ticket treadmill.",
        keyPoints: [
          "SLA-based partnership approach",
          "Concrete examples over complaints",
          "Roadmap alignment for planning",
          "Impact demonstration for leverage",
        ],
        adamEveContext:
          "For Adam & Eve, HawkSearch vendor management should emphasize educational content handling and compliance feature roadmap.",
      },
      {
        id: "burnout-prevention-testing",
        question:
          "How do you handle burnout risk in a high-volume test culture?",
        answer:
          "I cap concurrent experiments per surface, protect focus blocks on calendars, and enforce a real definition of done. Wins and learnings get celebrated in a visible way—quick shoutouts with outcomes and screenshots—so the grind feels meaningful. I also rotate on-call duties for incidents and give people recovery time after peak seasons. When we noticed Slack pings exploding, we piloted quiet hours and a single daily ops digest. Morale improved, and paradoxically, speed went up because context-switching went down. Pace is a product decision; you tune it like any system.",
        keyPoints: [
          "Concurrent experiment limits",
          "Protected focus time",
          "Visible celebration of progress",
          "Communication channel discipline",
        ],
        adamEveContext:
          "At Adam & Eve, sustainable pace ensures team can maintain high standards for sensitive content and customer trust.",
      },
      {
        id: "analytics-product-disagreement",
        question:
          "How do you resolve disagreements between analytics and product on test readouts?",
        answer:
          "I bring both groups to a pre-mortem on the analysis plan: metrics, windows, segments, and fallback methods if traffic is short. After the test, we review together with the exact SQL or dashboard logic in view. If there's a dispute, we run a sensitivity check—does the conclusion hold under slightly different cuts? In a contentious test, we found a logging quirk misattributed events; once fixed, both sides agreed. The point is to align on the method before results arrive, so the debate is about reality, not moving goalposts.",
        keyPoints: [
          "Pre-mortem analysis planning",
          "Joint review with transparent logic",
          "Sensitivity analysis for validation",
          "Method alignment preventing disputes",
        ],
        adamEveContext:
          "For Adam & Eve, analytics alignment ensures educational content impact measurement accuracy and trust.",
      },
      {
        id: "compliance-speed-balance",
        question:
          "How do you ensure compliance and brand safety without stifling speed?",
        answer:
          "I codify guardrails into tools. For example, restricted terms lists live in the search platform with alerts, and sensitive-category rules have owners and expirations. We pre-approve copy patterns for discreet shipping and age gates so Creative isn't waiting for case-by-case legal reviews. When something novel comes up, we document the ruling and add it to the playbook. This keeps us compliant by default while letting the team move quickly within safe bounds. The legal team appreciates fewer surprises; the business appreciates fewer last-minute stops.",
        keyPoints: [
          "Automated compliance guardrails",
          "Pre-approved pattern library",
          "Documentation of novel rulings",
          "Safe-by-default system design",
        ],
        adamEveContext:
          "Critical for Adam & Eve where compliance with age verification and content regulations must never slow customer experience improvements.",
      },
      {
        id: "remote-team-accountability",
        question:
          "How do you keep remote or hybrid teams connected and accountable?",
        answer:
          "I combine asynchronous clarity with selective in-person moments. We use crisp docs, recorded demos, and a shared dashboard for KPIs so time zones aren't blockers. I reserve live time for decision-making and relationship building, not readouts. Twice a year, we run an onsite focused on roadmaps and team norms. Day-to-day, I encourage informal 'coffee walk' pairings across functions to keep empathy high. Accountability comes from visible work boards and weekly outcomes, not presenteeism. In my experience, when people can see the plan and their part in it, they don't need a manager hovering to deliver.",
        keyPoints: [
          "Async documentation for clarity",
          "Strategic in-person time usage",
          "Informal connection encouragement",
          "Outcome-based accountability",
        ],
        adamEveContext:
          "For Adam & Eve's employee-owned culture, remote accountability must maintain shared mission ownership and collaboration.",
      },
      {
        id: "leader-mistake-handling",
        question: "How do you handle your own mistakes as a leader?",
        answer:
          "I own them quickly and explain the fix. If I pushed an experiment that undercut margin, I'll share the data, what I missed, and how we'll adjust guardrails. I check for blast radius—did this create rework for Creative or stress for CS—and I help clean it up. I've found being candid builds more credibility than trying to spin. It also creates safety for the team to surface issues early. The quiet benefit is speed: when mistakes aren't career-ending, people try sensible risks, we learn faster, and the business moves forward without fear anchoring every decision.",
        keyPoints: [
          "Quick ownership without defensiveness",
          "Blast radius assessment and remediation",
          "Psychological safety building",
          "Learning culture over blame culture",
        ],
        adamEveContext:
          "At Adam & Eve, leader vulnerability models the thoughtful risk-taking needed for educational content innovation.",
      },
    ],
  },
  {
    id: "adameve-specific",
    title: "Adam & Eve Industry & Company Specific",
    icon: Building2,
    description:
      "Adult wellness industry expertise, compliance understanding, and company culture alignment (20 questions)",
    color: "pink",
    questions: [
      {
        id: "adameve-customer-profile",
        question:
          "How would you describe the Adam & Eve customer and their shopping journey?",
        answer:
          "Adam & Eve serves a broad spectrum—curious beginners needing education, long-time enthusiasts looking for quality, and couples exploring together. Many arrive with privacy concerns and limited product knowledge, so the journey needs to feel safe, respectful, and informative. Search is often intentional but sometimes exploratory ('gift ideas,' 'beginner-friendly'). The experience should balance discretion with clear, helpful content—transparent sizing, usage guidance, and materials without clinical coldness or over-sexualization. Success means someone leaves more confident in their choice and feels respected, not judged. Merchandising and search need to anticipate both the practical question ('body-safe materials?') and the emotional one ('is this okay for me?').",
        keyPoints: [
          "Diverse experience levels",
          "Privacy and education balance",
          "Intentional and exploratory search patterns",
          "Confidence and respect as success metrics",
        ],
        adamEveContext:
          "Adam & Eve's 50+ year mission is wellness-focused education; understanding this customer empathy is foundational.",
      },
      {
        id: "adameve-educational-content",
        question:
          "How would you integrate Adam & Eve's educational mission into search and merchandising?",
        answer:
          "I'd make education a first-class feature, not an afterthought. For example, search for 'massage oils' could surface a snippet on body-safe ingredients alongside products. Collection pages might include a short 'Getting Started' section or video. We'd tag content by maturity level—beginner, intermediate, advanced—and use that in personalization. I'd also propose a 'Learn' filter or tab within categories to surface guides, FAQs, and comparison tools. The key is relevance: education should answer the question the customer didn't know to ask, right when they need it. Metrics would track engagement (time on guide pages, video completion) and conversion lift for users who hit educational content before purchasing.",
        keyPoints: [
          "Contextual education in search results",
          "Maturity-level content tagging",
          "Learn filters and comparison tools",
          "Engagement and conversion tracking",
        ],
        adamEveContext:
          "Core to Adam & Eve's differentiation; seamlessly merging commerce and education builds trust and LTV.",
      },
      {
        id: "adameve-category-taxonomy",
        question:
          "How would you approach building a taxonomy for Adam & Eve's diverse catalog?",
        answer:
          "I'd start with customer language, not industry jargon. User research and search query analysis would reveal how people describe what they want—often indirectly. The taxonomy should support filtering by use case (solo, couples, travel-friendly), experience level (beginner, experienced), and attributes (rechargeable, waterproof, body-safe). I'd also build synonym libraries carefully, balancing clinical terms, colloquial phrases, and brand names. A layered approach helps: a beginner sees simpler options; an experienced user can drill into advanced specs. We'd validate with real searches and watch for zero-result patterns or awkward groupings. The goal is to make navigation intuitive and shame-free, whether you know exactly what you want or you're just curious.",
        keyPoints: [
          "Customer language over industry jargon",
          "Use case and experience-level filtering",
          "Comprehensive synonym strategy",
          "Zero-result monitoring for validation",
        ],
        adamEveContext:
          "Adam & Eve's taxonomy must serve wide experience ranges while maintaining dignity and clarity.",
      },
      {
        id: "adameve-discrete-packaging-ux",
        question:
          "How would you reflect Adam & Eve's discreet packaging promise in the digital experience?",
        answer:
          "Discretion starts on-site. I'd ensure product pages and confirmation emails reinforce discreet shipping—plain packaging, neutral sender name—right at cart and checkout. We'd also offer messaging preferences (SMS vs. email) and clear delivery window info so customers can plan. Search or category headers could include a trust badge: 'All orders shipped discreetly.' Post-purchase, I'd avoid overly enthusiastic email subject lines; instead, use neutral language with clear order details inside. Merchandising creative should feel sophisticated and inclusive, not campy, to signal that Adam & Eve respects the customer's privacy even in marketing. The goal is confidence at every touchpoint that their order is their business.",
        keyPoints: [
          "Discreet messaging at cart and checkout",
          "Delivery preference options",
          "Trust badges on key pages",
          "Sophisticated creative tone",
        ],
        adamEveContext:
          "Privacy is table stakes for Adam & Eve; digital experience must mirror physical discretion promise.",
      },
      {
        id: "adameve-age-verification-ux",
        question:
          "How would you balance age verification requirements with a smooth user experience?",
        answer:
          "I'd aim for compliance with minimal friction. A simple birth-date gate at entry or first add-to-cart can satisfy legal requirements without creating a wall. We'd remember verified users so they don't repeat the process on every visit. For search, I'd ensure that adult-category results are gated but other content (blog, guides) is accessible to inform before committing. I'd also A/B test gate placement—homepage vs. category—and measure drop-off to optimize. The messaging should be friendly and clear: 'To continue, confirm you're 18+' rather than stern legalese. The goal is to protect the brand and comply without making a curious visitor feel interrogated.",
        keyPoints: [
          "Minimal-friction date gate",
          "User session persistence",
          "Content accessibility before gating",
          "Friendly compliance messaging",
        ],
        adamEveContext:
          "Age verification is mandatory for Adam & Eve; UX must comply without damaging conversion or trust.",
      },
      {
        id: "adameve-gifting-search",
        question:
          "How would you optimize search and merchandising for gifting scenarios?",
        answer:
          "Gifting is a strong use case at Adam & Eve—anniversaries, Valentine's, bachelorettes. I'd create dedicated landing pages or search refinements: 'Gifts for Couples,' 'Beginner Gifts,' 'Luxury Gifts.' We'd tag products by gifting suitability and surface them with context: price, presentation quality, and discretion level. Search synonyms would include 'present,' 'surprise,' and occasion keywords. I'd also add gift-guide content with curated sets and messaging tips. On PDPs, we'd highlight if something comes in gift packaging or has pairing suggestions. Post-purchase, we'd offer add-on gift messages or upgraded boxes. Metrics would track gift-intent conversions and AOV uplift, plus sentiment from CS feedback.",
        keyPoints: [
          "Dedicated gifting landing pages",
          "Occasion and experience-level tagging",
          "Gift-guide content integration",
          "AOV and sentiment tracking",
        ],
        adamEveContext:
          "Gifting drives significant revenue for Adam & Eve; search and merchandising should make thoughtful selection easy.",
      },
      {
        id: "adameve-couples-shopping",
        question:
          "How would you design for couples shopping together, a unique dynamic in this category?",
        answer:
          "Couples often browse together but may defer the final purchase decision. I'd create filters or collections explicitly for 'Couples' with use-case tags (exploration, intimacy enhancement, adventure). Product descriptions should speak to shared benefits, not just individual experience. We might test a 'favorites' or 'save for later' feature that can be shared via link, so one partner can curate and the other can review. Search should handle joint queries like 'we want to try something new' with smart defaults. I'd also surface video demos and guides tailored to couples. Success metrics: higher AOV from couples categories, longer session times, and repeat-purchase rates indicating sustained engagement.",
        keyPoints: [
          "Couples-specific filters and collections",
          "Shared benefit messaging",
          "Shareable favorites feature",
          "Video and guide content",
        ],
        adamEveContext:
          "Adam & Eve's heritage emphasizes relationship wellness; couples-focused UX is a strategic differentiator.",
      },
      {
        id: "adameve-zero-result-sensitivity",
        question:
          "How would you handle zero-result pages in a category where search terms can be sensitive?",
        answer:
          "Zero-result pages are especially critical here—someone searching with vulnerability shouldn't hit a dead end. I'd design a fallback that's helpful, not condescending. Suggest related categories, popular items, or direct them to educational content ('Learn more about...') that might clarify their need. We'd log these queries to identify missing synonyms, misspellings, or emerging product interests. I'd also test a friendly message: 'We didn't find exact matches, but these might interest you,' plus a feedback option. If searches reveal consistent gaps—like a niche request we don't carry—we'd flag it for buying. The goal is to turn a frustration into discovery or insight, never leaving someone feeling dismissed.",
        keyPoints: [
          "Helpful fallback suggestions",
          "Query logging for taxonomy improvement",
          "Friendly, empathetic messaging",
          "Product gap identification",
        ],
        adamEveContext:
          "At Adam & Eve, zero-result experiences risk breaking trust with vulnerable customers; empathy is non-negotiable.",
      },
      {
        id: "adameve-loyalty-repeat-behavior",
        question:
          "How would you use search and merchandising to drive loyalty and repeat purchases?",
        answer:
          "Loyalty in this category is about trust and evolving needs. I'd personalize the experience: if someone bought beginner items, we'd surface intermediate options or complementary accessories in a 'Next Steps' module. Email and on-site messaging would reference past purchases discreetly ('Explore more in your favorite category') without explicit detail. We'd also highlight new arrivals and exclusive products for returning customers. A saved preferences feature—material types, favorite brands, price range—would streamline repeat shopping. I'd track cohort behavior to see if educational content engagement predicts higher LTV, then optimize for that. The goal is to make Adam & Eve feel like a trusted advisor, not just a store.",
        keyPoints: [
          "Progressive product recommendations",
          "Discreet purchase history references",
          "Saved preference features",
          "Cohort LTV analysis",
        ],
        adamEveContext:
          "Adam & Eve's long-term customer relationships depend on respectful personalization and trust maintenance.",
      },
      {
        id: "adameve-mobile-private-browsing",
        question:
          "How would you optimize the mobile experience, especially for private browsing?",
        answer:
          "Mobile is where privacy concerns peak—people browse in bed, on commutes, in shared spaces. I'd prioritize a clean, unobtrusive UI: no autoplay videos, discreet images that don't scream context, and fast load times to minimize exposure risk. Offer a 'private mode' toggle that simplifies the interface further or hides recent searches. Search should be fast and forgiving, with quick autocomplete but the option to turn it off. Cart and checkout need to be streamlined—no abandoned-cart popups that announce what you're buying. We'd test mobile-first filters for quick narrowing (price, rating, popular) without endless scrolling. Metrics: mobile conversion parity, lower bounce on mobile, and positive mobile NPS.",
        keyPoints: [
          "Discreet, fast-loading UI",
          "Optional private mode toggle",
          "Streamlined cart experience",
          "Mobile-first filter optimization",
        ],
        adamEveContext:
          "For Adam & Eve, mobile privacy sensitivity directly impacts conversion and customer trust scores.",
      },
      {
        id: "adameve-brand-partnerships",
        question:
          "How would you approach merchandising branded vs. private-label products at Adam & Eve?",
        answer:
          "I'd segment by customer familiarity and trust. Name brands (Womanizer, Lelo) signal quality to experienced buyers and can drive premiumization; private-label offers approachable entry points and better margins. Merchandising should balance visibility: feature brands in hero spots and search ads for credibility, but ensure house brands are prominent in value and beginner collections. Search shouldn't over-index on brand unless the query is brand-specific; otherwise, we risk underselling own-brand. I'd also test bundling: a name-brand item plus a house accessory. Analytics should track brand vs. private-label contribution to revenue, margin, and repeat rate. The goal is choice architecture that guides but doesn't box customers into one or the other.",
        keyPoints: [
          "Customer-segment targeting",
          "Balanced visibility strategy",
          "Brand-neutral search results",
          "Bundle testing for cross-promotion",
        ],
        adamEveContext:
          "Adam & Eve's private-label strategy benefits from smart merchandising that doesn't sacrifice brand-driven trust.",
      },
      {
        id: "adameve-seasonal-campaigns",
        question:
          "How would you plan search and merchandising for seasonal peaks like Valentine's Day?",
        answer:
          "I'd start six weeks out with campaign themes—'Gifts for Couples,' 'Self-Love,' 'Luxury Romance'—and build landing pages with curated assortments. Search synonyms get updated to include seasonal language ('Valentine's gift,' 'romantic surprise'). We'd boost relevant products in ranking, set up promo rules, and ensure inventory is deep on likely winners. I'd coordinate with Creative for consistent messaging and with CS to prepare for volume. During the peak, we'd monitor search trends daily and adjust: if 'massage' spikes, we'd promote oils and candles. Post-event, we'd analyze what converted, what educational content drove AOV, and what queries we missed. The playbook feeds next year's strategy.",
        keyPoints: [
          "Early campaign theme planning",
          "Seasonal synonym updates",
          "Inventory and promo coordination",
          "Real-time trend monitoring",
        ],
        adamEveContext:
          "Adam & Eve's seasonal revenue spikes require tight cross-functional coordination and merchandising agility.",
      },
      {
        id: "adameve-customer-reviews-moderation",
        question:
          "How would you handle customer reviews and ratings in a sensitive product category?",
        answer:
          "Reviews are trust signals, but moderation matters. I'd establish clear community guidelines: honest feedback welcome, explicit or offensive language flagged, and privacy respected (no personal stories that cross lines). We'd use automated filters for clearly inappropriate content, but human review for edge cases. Positive reviews should be prominently featured on PDPs and in search to build confidence; we might also surface 'beginner-friendly' reviews for first-timers. Negative reviews get addressed with empathetic CS responses and product improvement signals. I'd track review volume, sentiment, and conversion correlation. The goal is authenticity with dignity—real experiences that help others decide without making anyone uncomfortable.",
        keyPoints: [
          "Clear community guidelines",
          "Hybrid automated and human moderation",
          "Beginner-focused review surfacing",
          "Empathetic response to negatives",
        ],
        adamEveContext:
          "For Adam & Eve, reviews must balance authentic customer voice with brand values of respect and education.",
      },
      {
        id: "adameve-accessibility-inclusivity",
        question:
          "How would you ensure Adam & Eve's site is accessible and inclusive?",
        answer:
          "Accessibility is both legal and ethical. I'd audit for WCAG 2.1 AA compliance: screen-reader compatibility, keyboard navigation, color contrast, and alt text on images. Inclusive language should extend to product descriptions and educational content—gender-neutral where appropriate, body-positive imagery, diverse representation in marketing. Search and filters should accommodate varying abilities: voice search, easy-to-tap mobile buttons, and clear error messaging. We'd also test with real users of assistive tech to catch issues automated tools miss. Metrics: accessibility score trends, customer feedback, and conversion rates across device and input types. The goal is a welcoming experience for everyone, regardless of how they shop.",
        keyPoints: [
          "WCAG 2.1 AA compliance audit",
          "Inclusive language and imagery",
          "Assistive tech testing",
          "Accessibility score tracking",
        ],
        adamEveContext:
          "Adam & Eve's mission of wellness for all requires digital accessibility as a core value, not an afterthought.",
      },
      {
        id: "adameve-subscription-replenishment",
        question:
          "How would you design search and merchandising to support subscription or replenishment models?",
        answer:
          "Some products are consumables—lubricants, massage oils, batteries—perfect for subscriptions. I'd add a 'Subscribe & Save' option on PDPs with clear savings callouts and flexible intervals. Search could surface subscription-eligible items with a badge or filter. We'd also build a replenishment prompt: if someone bought batteries six months ago, a gentle reminder email with a quick reorder link. Merchandising would cross-sell related subscription items ('Customers also subscribed to...'). I'd track subscription attach rates, churn, and LTV uplift, then optimize prominence and pricing. The goal is convenience that increases CLV without feeling pushy.",
        keyPoints: [
          "Subscribe & Save PDP integration",
          "Search badges for subscription eligibility",
          "Replenishment email prompts",
          "LTV and churn tracking",
        ],
        adamEveContext:
          "Subscription models can drive predictable revenue for Adam & Eve and increase customer lifetime value significantly.",
      },
      {
        id: "adameve-international-expansion",
        question:
          "How would you prepare search and merchandising for Adam & Eve's international expansion?",
        answer:
          "International means localization, not just translation. I'd map category language by market—terms vary widely culturally—and build region-specific synonym libraries. Product availability, compliance, and payment methods differ, so merchandising rules need geo-scoping. We'd also adapt educational content for cultural norms and privacy expectations. Search should handle multilingual queries and mixed-language auto-suggest. I'd phase launches: tier-one markets first with full localization, then expand as we learn. Analytics would track conversion and engagement by region, identifying what resonates and what needs adjustment. The goal is to feel native in each market, not like a translated US site.",
        keyPoints: [
          "Region-specific language mapping",
          "Geo-scoped merchandising rules",
          "Cultural content adaptation",
          "Phased market entry strategy",
        ],
        adamEveContext:
          "International growth is strategic for Adam & Eve; localization must respect cultural sensitivities and compliance.",
      },
      {
        id: "adameve-ai-personalization-ethics",
        question:
          "How would you approach AI-powered personalization ethically in this category?",
        answer:
          "AI personalization can enhance experience but raises privacy and bias concerns. I'd use on-site behavior—clicks, cart adds, category views—without requiring login, and respect opt-out signals. Recommendations should avoid reinforcing stereotypes: don't assume gender or relationship status from purchases. We'd test for fairness: does the model serve diverse body types, orientations, and experience levels equally? I'd also build transparency: 'Why this recommendation?' tooltips and clear data usage policies. Personalization should feel helpful, not invasive. Metrics: rec click-through, conversion lift, and customer sentiment on privacy. The goal is smart suggestions that build trust, not creepy surveillance.",
        keyPoints: [
          "Behavior-based without forced login",
          "Bias testing for fairness",
          "Transparency in recommendations",
          "Privacy-respecting defaults",
        ],
        adamEveContext:
          "For Adam & Eve, AI must amplify the educational mission and customer empowerment without compromising dignity.",
      },
      {
        id: "adameve-content-creator-partnerships",
        question:
          "How would you integrate content creator or influencer partnerships into search and merchandising?",
        answer:
          "Influencers bring authenticity and reach, especially for younger audiences. I'd create landing pages or collections tied to trusted creators—'Dr. X's Picks' or 'Educator Y's Favorites'—with their curated product sets and educational video. Search could include creator names in synonyms so fans find content easily. We'd also embed creator content on PDPs as social proof. Partnerships should align with Adam & Eve's educational values: credible voices, not just reach. I'd track traffic, conversion, and new-customer acquisition from these campaigns, plus sentiment analysis on creator mentions. The goal is leveraging trusted voices to extend the brand's mission and reduce intimidation for first-timers.",
        keyPoints: [
          "Curated creator landing pages",
          "Creator name search integration",
          "Educational video embedding",
          "Attribution and sentiment tracking",
        ],
        adamEveContext:
          "Adam & Eve's educator partnerships can amplify trust and education; merchandising should showcase these authentically.",
      },
      {
        id: "adameve-data-privacy-trust",
        question:
          "How would you handle data privacy to maintain customer trust?",
        answer:
          "Privacy is existential in this category. I'd minimize data collection: no unnecessary account requirements, encrypted transactions, and clear opt-in for marketing. We'd avoid retargeting that broadcasts someone's browsing—no creepy ads following them around the web. Internally, access controls would ensure only need-to-know teams see purchase data. I'd also publish a simple, honest privacy policy and make opt-out easy. Testing would respect privacy: A/B cohorts anonymized, no individual tracking leaks. Metrics: data breach incidents (zero target), customer trust surveys, and churn analysis. The goal is to be the anti-creepy brand—customers trust Adam & Eve because we protect them, not exploit them.",
        keyPoints: [
          "Minimal necessary data collection",
          "No invasive retargeting",
          "Internal access controls",
          "Transparent, simple policies",
        ],
        adamEveContext:
          "Data privacy is a competitive advantage for Adam & Eve; breach or misuse would devastate the brand.",
      },
      {
        id: "adameve-employee-owned-culture",
        question:
          "How would you align search and merchandising strategy with Adam & Eve's employee-owned culture?",
        answer:
          "Employee ownership means everyone has skin in the game and a voice. I'd involve merchandisers, CS reps, and warehouse teams in roadmap planning—they see customer pain and inventory reality daily. We'd share performance data transparently: revenue per visitor, margin by category, test results. I'd also create opportunities for employees to propose experiments or educational content ideas, with a lightweight approval path. Wins would be celebrated company-wide to reinforce shared impact. The employee-owned model thrives on trust and alignment; my job is to translate strategy into something everyone can connect to and influence. Metrics: employee engagement scores and ideas submitted per quarter.",
        keyPoints: [
          "Cross-functional roadmap involvement",
          "Transparent performance sharing",
          "Employee-driven experiment opportunities",
          "Company-wide win celebration",
        ],
        adamEveContext:
          "Adam & Eve's ESOP structure is unique; leveraging it for strategy alignment drives both morale and results.",
      },
    ],
  },
];

export default function QAPreparationPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(
    "core-technical"
  );
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        text: "text-blue-700 dark:text-blue-400",
        icon: "text-blue-600",
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        text: "text-purple-700 dark:text-purple-400",
        icon: "text-purple-600",
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        text: "text-green-700 dark:text-green-400",
        icon: "text-green-600",
      },
      amber: {
        bg: "bg-amber-50 dark:bg-amber-900/20",
        border: "border-amber-200 dark:border-amber-800",
        text: "text-amber-700 dark:text-amber-400",
        icon: "text-amber-600",
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        border: "border-indigo-200 dark:border-indigo-800",
        text: "text-indigo-700 dark:text-indigo-400",
        icon: "text-indigo-600",
      },
      rose: {
        bg: "bg-rose-50 dark:bg-rose-900/20",
        border: "border-rose-200 dark:border-rose-800",
        text: "text-rose-700 dark:text-rose-400",
        icon: "text-rose-600",
      },
      pink: {
        bg: "bg-pink-50 dark:bg-pink-900/20",
        border: "border-pink-200 dark:border-pink-800",
        text: "text-pink-700 dark:text-pink-400",
        icon: "text-pink-600",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="mx-auto max-w-6xl p-6 pt-24">
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
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Candidate Deep Dive: Q&A Profile
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                120 comprehensive responses demonstrating experience, approach,
                and cultural fit
              </p>
            </div>
          </div>
        </div>

        {/* Communication Style Note */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Communication Style & Approach
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm substantive, fast, and hold a high standard. I dig into the
            system, call risks early, and make evidence-based decisions that
            move work across the line. You can see my operating style in this
            page—organized research, explicit assumptions, and decisions that
            are easy to audit. Interviews are a different modality; they
            spotlight on-the-spot performance, while my day-to-day advantage is
            disciplined preparation. If you need someone to simplify the
            problem, set clear guardrails, and ship without drama, that's where
            I'm at my best.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {categories.map((category) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={category.id}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-lg p-4`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <category.icon className={`w-5 h-5 ${colorClasses.icon}`} />
                  <span className={`text-xs font-medium ${colorClasses.text}`}>
                    {category.questions.length} Q&A
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Categories */}
        <div className="space-y-6">
          {categories.map((category) => {
            const isExpanded = expandedCategory === category.id;
            const colorClasses = getColorClasses(category.color);

            return (
              <div
                key={category.id}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() =>
                    setExpandedCategory(isExpanded ? null : category.id)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`${colorClasses.bg} ${colorClasses.border} border p-3 rounded-lg`}
                    >
                      <category.icon
                        className={`w-6 h-6 ${colorClasses.icon}`}
                      />
                    </div>
                    <div className="text-left">
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} text-sm font-medium rounded-full`}
                    >
                      {category.questions.length} questions
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Questions */}
                {isExpanded && (
                  <div className="border-t border-gray-200 dark:border-slate-700">
                    <div className="p-6 space-y-4">
                      {category.questions.map((question, index) => {
                        const isQuestionExpanded =
                          expandedQuestion === question.id;

                        return (
                          <div
                            key={question.id}
                            className="border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden"
                          >
                            <button
                              onClick={() =>
                                setExpandedQuestion(
                                  isQuestionExpanded ? null : question.id
                                )
                              }
                              className="w-full p-4 flex items-start justify-between hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors text-left"
                            >
                              <div className="flex-1">
                                <div className="flex items-start gap-3">
                                  <span
                                    className={`flex-shrink-0 w-6 h-6 ${colorClasses.bg} ${colorClasses.text} rounded-full flex items-center justify-center text-xs font-bold`}
                                  >
                                    {index + 1}
                                  </span>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    {question.question}
                                  </p>
                                </div>
                              </div>
                              {isQuestionExpanded ? (
                                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
                              ) : (
                                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
                              )}
                            </button>

                            {isQuestionExpanded && (
                              <div className="border-t border-gray-200 dark:border-slate-600 p-4 bg-gray-50 dark:bg-slate-700/30">
                                <div className="space-y-4">
                                  {/* Answer */}
                                  <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                      Answer:
                                    </h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                      {question.answer}
                                    </p>
                                  </div>

                                  {/* Key Points */}
                                  <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                      Key Points:
                                    </h4>
                                    <ul className="space-y-1">
                                      {question.keyPoints.map((point, i) => (
                                        <li
                                          key={i}
                                          className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                        >
                                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                          <span>{point}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* Adam & Eve Context */}
                                  {question.adamEveContext && (
                                    <div className="pt-3 border-t border-gray-200 dark:border-slate-600">
                                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-pink-500" />
                                        Adam & Eve Context:
                                      </h4>
                                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed italic">
                                        {question.adamEveContext}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Interview Strategy Tips */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Candidate Assessment & Usage Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                For Hiring Managers
              </h4>
              <ul className="space-y-1">
                <li>
                  • Review category-specific responses based on interview focus
                </li>
                <li>• Assess depth of examples and problem-solving approach</li>
                <li>• Evaluate cultural fit and company research depth</li>
                <li>• Note transferable skills from technical background</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Candidate Strengths
              </h4>
              <ul className="space-y-1">
                <li>• Systematic approach to complex problems</li>
                <li>• Data-driven decision making with business context</li>
                <li>
                  • Understanding of sensitive product category requirements
                </li>
                <li>
                  • Alignment with educational mission and cultural values
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
