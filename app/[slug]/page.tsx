// app/blogs/[slug]/page.tsx
import { Metadata } from "next";
import { Calendar, User, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/blog/share-button";

const WP_API_URL = "https://cms.proshala.com/wp-json/wp/v2";

// ─── Types ────────────────────────────────────────────────────────────────────
interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    author?: Array<{ name: string }>;
  };
}

// ─── Data Fetchers ────────────────────────────────────────────────────────────
async function getAllPosts(): Promise<WordPressPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?per_page=100`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

async function getPost(slug: string): Promise<WordPressPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts[0] || null;
  } catch {
    return null;
  }
}

// ─── Static Params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post Not Found" };

  const description = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .substring(0, 160);

  return {
    title: `${post.title.rendered} | Proshala Blog`,
    description,
    openGraph: {
      title: post.title.rendered,
      description,
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [{ url: post._embedded["wp:featuredmedia"][0].source_url }]
        : [],
    },
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-IN", {
    year: "numeric", month: "long", day: "numeric",
  });
}

function readingTime(content: string) {
  const text = content.replace(/<[^>]*>/g, "");
  return Math.ceil(text.split(/\s+/).length / 200);
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const featuredImg = post._embedded?.["wp:featuredmedia"]?.[0];
  const authorName  = post._embedded?.author?.[0]?.name;

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white">

      {/* ── HERO / HEADER ─────────────────────────────────────────── */}
      <section className="relative pt-28 pb-12 overflow-hidden border-b border-white/[0.06]">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)" }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/30 mb-7 flex-wrap">
            <Link href="/" className="hover:text-amber-400 transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <Link href="/blogs" className="hover:text-amber-400 transition-colors font-medium">
              Blogs
            </Link>
            <ChevronRight className="w-3 h-3 flex-shrink-0" />
            <span
              className="text-white/60 truncate max-w-[200px] sm:max-w-xs font-medium"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </nav>

          {/* Category pill */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            <span className="text-amber-400 text-[11px] font-bold uppercase tracking-wider">
              Proshala Insights
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-2xl sm:text-3xl lg:text-[42px] font-black leading-[1.1] tracking-tight text-white mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-white/40">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>{readingTime(post.content.rendered)} min read</span>
            </div>
            {authorName && (
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>By {authorName}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────── */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 hover:text-amber-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>

          {/* Featured Image */}
          {featuredImg?.source_url && (
            <div className="relative w-full h-64 sm:h-80 lg:h-[460px] rounded-2xl overflow-hidden mb-12 border border-white/[0.07]">
              <Image
                src={featuredImg.source_url}
                alt={featuredImg.alt_text || post.title.rendered}
                fill
                className="object-cover"
                priority
              />
              {/* Subtle overlay to keep image from being too bright */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
              {/* Amber bottom glow line */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            </div>
          )}

          {/* Article body */}
          <div className="wp-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

          {/* Footer actions */}
          <div className="mt-14 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <ShareButton title={post.title.rendered} />
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────── */}
      <section className="py-14 border-t border-white/[0.06] bg-[#0D0D0D] relative overflow-hidden">
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(245,158,11,0.05) 0%, transparent 70%)" }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-black text-white text-lg sm:text-xl leading-tight mb-1">
                Ready to grow your business?
              </p>
              <p className="text-white/45 text-sm">
                Get a free audit from our performance marketing team.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-black px-6 py-3.5 rounded-2xl hover:-translate-y-0.5 transition-all shadow-xl shadow-amber-500/20 text-sm group"
            >
              Get Free Audit
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
