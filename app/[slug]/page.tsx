// app/blog/[slug]/page.tsx
import { Metadata } from "next";
import { Calendar, User, Clock, ArrowLeft, Facebook, Twitter, Linkedin, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CopyLinkButton } from "@/components/ShareButton"; // Import the Client Component

const WP_API_URL = "https://cms.proshala.com/wp-json/wp/v2";

interface WordPressPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls?: {
        96: string;
      };
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
  };
}

async function getAllPosts(): Promise<WordPressPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?per_page=100`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function getPost(slug: string): Promise<WordPressPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return null;
    }

    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Proshala Blog",
    };
  }

  const description = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .substring(0, 160);

  return {
    title: `${post.title.rendered} | Proshala Blog`,
    description: description,
    keywords: `${post.title.rendered}, digital marketing, Proshala, Delhi NCR marketing`,
    openGraph: {
      title: post.title.rendered,
      description: description,
      type: "article",
      publishedTime: post.date,
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [post._embedded["wp:featuredmedia"][0].source_url]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: description,
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [post._embedded["wp:featuredmedia"][0].source_url]
        : [],
    },
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, "");
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const shareUrl = `https://www.proshala.com/blog/${params.slug}`;

  return (
    <>
      {/* Hero Section with Featured Image */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden bg-black">
        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
          <>
            <Image
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={
                post._embedded["wp:featuredmedia"][0].alt_text ||
                post.title.rendered
              }
              fill
              className="object-cover opacity-40"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />
        )}

        {/* Back button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-white hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>
        </div>

        {/* Post meta overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="container mx-auto max-w-5xl">
            {/* Categories */}
            {post._embedded?.["wp:term"]?.[0] && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post._embedded["wp:term"][0].slice(0, 3).map((cat) => (
                  <span
                    key={cat.id}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FACC15] text-black text-xs font-semibold uppercase"
                  >
                    <Tag className="h-3 w-3" />
                    {cat.name}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {post.title.rendered}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#FACC15]" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#FACC15]" />
                <span>{calculateReadingTime(post.content.rendered)} min read</span>
              </div>
              {post._embedded?.author?.[0]?.name && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-[#FACC15]" />
                  <span>By {post._embedded.author[0].name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-20 bg-white dark:bg-black">
        <div className="container mx-auto max-w-4xl px-5">
          {/* Main content with WordPress HTML */}
          <article
            className="prose prose-lg lg:prose-xl max-w-none
              prose-headings:font-extrabold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#FACC15] prose-a:no-underline prose-a:font-semibold hover:prose-a:underline
              prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
              prose-ul:my-6 prose-ol:my-6
              prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-2
              prose-li:marker:text-[#FACC15]
              prose-blockquote:border-l-4 prose-blockquote:border-[#FACC15] prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-900 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic
              prose-code:bg-gray-100 dark:prose-code:bg-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-[#FACC15] prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-gray-900 prose-pre:text-gray-100
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
              prose-hr:border-gray-200 dark:prose-hr:border-gray-800 prose-hr:my-12
              prose-table:border prose-table:border-gray-200 dark:prose-table:border-gray-800
              prose-th:bg-gray-50 dark:prose-th:bg-gray-900 prose-th:font-bold
              prose-td:border prose-td:border-gray-200 dark:prose-td:border-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Social Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold mb-2">Share this article</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Help others discover this content
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                  )}&text=${encodeURIComponent(post.title.rendered)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-[#1DA1F2] hover:text-white transition-all"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-[#1877F2] hover:text-white transition-all"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900 hover:bg-[#0A66C2] hover:text-white transition-all"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                {/* Use the Client Component here */}
                <CopyLinkButton url={shareUrl} />
              </div>
            </div>
          </div>

          {/* Author Bio (if available) */}
          {post._embedded?.author?.[0] && (
            <div className="mt-12 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-start gap-4">
                {post._embedded.author[0].avatar_urls?.["96"] && (
                  <Image
                    src={post._embedded.author[0].avatar_urls["96"]}
                    alt={post._embedded.author[0].name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h5 className="text-lg font-bold mb-1">
                    {post._embedded.author[0].name}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Content Writer at Proshala
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#FACC15] to-[#EAB308]">
        <div className="container mx-auto max-w-4xl px-5 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
            Ready to Grow Your Business?
          </h3>
          <p className="text-lg text-gray-900 mb-8">
            Lets discuss how our digital marketing strategies can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-black px-8 py-4 font-bold text-white hover:bg-gray-900 transition-all hover:scale-105"
          >
            Get in Touch
            <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}
