import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {posts.map((post) => (
        <div key={post.id} className="border-b border-white/20 p-4">
          <h2>{post.name}</h2>
        </div>
      ))}
    </main>
  );
}
