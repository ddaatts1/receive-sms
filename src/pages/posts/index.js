import Link from "next/link"
import connectDB from "@/lib/mongodb"
import Post from "@/models/Post"

const PAGE_SIZE = 5 // posts per page

export async function getServerSideProps({ query }) {
    const page = parseInt(query.page || "1")
    await connectDB()

    const totalPosts = await Post.countDocuments()
    const posts = await Post.find()
        .sort({ createdAt: -1 })
        .skip((page - 1) * PAGE_SIZE)
        .limit(PAGE_SIZE)
        .lean()

    const serialized = posts.map(p => ({
        ...p,
        _id: p._id.toString(),
        createdAt: p.createdAt.toISOString()
    }))

    const totalPages = Math.ceil(totalPosts / PAGE_SIZE)

    return {
        props: { posts: serialized, page, totalPages }
    }
}

export default function PostList({ posts, page, totalPages }) {
    return (
        <div style={{ maxWidth: 600, margin: "40px auto", padding: "0 20px", textAlign: "center" }}>
            <h1 style={{ marginBottom: 30 }}>Blog Posts</h1>

            {posts.map(post => (
                <div
                    key={post._id}
                    style={{
                        marginBottom: 30,
                        padding: 15,
                        border: "1px solid #ddd",
                        borderRadius: 8,
                        textAlign: "left",
                    }}
                >
                    {post.thumbnail && (
                        <img
                            src={post.thumbnail}
                            alt={post.title}
                            style={{ width: "100%", maxHeight: 200, objectFit: "cover", borderRadius: 4, marginBottom: 10 }}
                        />
                    )}

                    <h2 style={{ margin: "0 0 10px" }}>{post.title}</h2>
                    <Link href={`/posts/${post.slug}`} style={{ color: "#0070f3" }}>
                        Read More →
                    </Link>
                </div>
            ))}

            {/* Pagination */}
            <div style={{ marginTop: 30 }}>
                {page > 1 && (
                    <Link href={`/posts?page=${page - 1}`} style={{ marginRight: 15 }}>
                        ← Previous
                    </Link>
                )}

                {page < totalPages && (
                    <Link href={`/posts?page=${page + 1}`}>Next →</Link>
                )}
            </div>
        </div>
    )
}
