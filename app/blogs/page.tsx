// app/blog/page.tsx
import { Metadata } from "next";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Blog - Digital Marketing Insights | Proshala",
  description:
    "Expert insights on digital marketing, performance marketing, SEO, social media, and growth strategies from Proshala team. Stay updated with the latest industry trends.",
  keywords:
    "digital marketing blog, performance marketing insights, SEO tips, social media strategy, growth marketing, content marketing, PPC guides, Delhi NCR marketing",
  openGraph: {
    title: "Digital Marketing Blog & Insights | Proshala",
    description:
      "Expert digital marketing insights, case studies, and strategies from Proshala team.",
    type: "website",
  },
};

const WP_API_URL = "https://cms.proshala.com/wp-json/wp/v2";

interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  slug: string;
  featured_media: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{ name: string }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
  };
}

async function getPosts(): Promise<WordPressPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?_embed&per_page=12`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").substring(0, 160) + "...";
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, "");
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      {/* Hero Header */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Animated background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #FACC15 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto max-w-7xl px-5 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FACC15]/20 text-[#FACC15] text-sm font-semibold mb-4 uppercase tracking-wide">
              Knowledge Hub
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Marketing <span className="text-[#FACC15]">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert guides, case studies, and actionable strategies to help you grow your business through digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-7xl px-5">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 mb-4">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No Posts Yet</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Check back soon for new insights and updates.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                  <article
                    key={post.id}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-[#FACC15] transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Featured Image */}
                    <Link href={`/${post.slug}`} className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-800">
                      {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                        <Image
                          src={post._embedded["wp:featuredmedia"][0].source_url}
                          alt={
                            post._embedded["wp:featuredmedia"][0].alt_text ||
                            post.title.rendered
                          }
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Calendar className="h-12 w-12 text-[#FACC15]" />
                        </div>
                      )}
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{calculateReadingTime(post.content.rendered)} min</span>
                        </div>
                      </div>

                      {/* Categories */}
                      {post._embedded?.["wp:term"]?.[0] && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post._embedded["wp:term"][0].slice(0, 2).map((cat) => (
                            <span
                              key={cat.id}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#FACC15]/10 text-[#FACC15] text-xs font-medium"
                            >
                              <Tag className="h-3 w-3" />
                              {cat.name}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Title */}
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#FACC15] transition-colors">
                          {post.title.rendered}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
                        {stripHtml(post.excerpt.rendered)}
                      </p>

                      {/* Author & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                        {post._embedded?.author?.[0]?.name && (
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                            <User className="h-3.5 w-3.5" />
                            <span>{post._embedded.author[0].name}</span>
                          </div>
                        )}

                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-[#FACC15] hover:gap-2 transition-all"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More placeholder */}
              {posts.length >= 12 && (
                <div className="text-center mt-12">
                  <button className="inline-flex items-center rounded-full bg-[#FACC15] px-8 py-3 font-semibold text-black hover:bg-[#EAB308] transition-all">
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Categories/Topics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-5">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">
              Explore by <span className="text-[#FACC15]">Topic</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Browse our content by category to find what interests you most.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Performance Marketing",
              "SEO & Content",
              "Social Media",
              "Web Development",
              "Case Studies",
              "Industry Insights",
              "Growth Strategies",
              "Influencer Marketing",
              "Analytics & Data",
              "Branding & Design",
            ].map((topic, index) => (
              <Link
                key={index}
                href={`/blog/category/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                className="group inline-flex items-center gap-2 bg-white dark:bg-black px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-[#FACC15] hover:bg-[#FACC15]/5 transition-all"
              >
                <Tag className="h-4 w-4 text-gray-400 group-hover:text-[#FACC15]" />
                <span className="text-sm font-medium">{topic}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-[#FACC15] to-[#EAB308]">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Never Miss an Update
          </h3>
          <p className="text-lg text-gray-900 mb-8 max-w-2xl mx-auto">
            Get weekly insights on digital marketing, growth strategies, and industry trends delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-6 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 font-bold text-white hover:bg-gray-900 transition-all"
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
