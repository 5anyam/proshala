// app/blog/page.tsx

import React from "react";
import Link from "next/link";

interface Post {
  id: number;
  title: { rendered: string };
  date: string;
  link: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://proshala.com/wp-json/wp/v2/posts?_embed", {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow-md p-4">
            <Link href={`/${post.slug}`}>
              {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover mb-4 rounded-lg cursor-pointer"
                />
              )}
            </Link>
            <h2 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p className="text-gray-600 mt-2">{new Date(post.date).toDateString()}</p>
            <Link href={`/${post.slug}`} className="mt-4 inline-block text-blue-600 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
