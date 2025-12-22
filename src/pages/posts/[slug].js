import Link from "next/link"
import connectDB from "@/lib/mongodb"
import Post from "@/models/Post"

export async function getServerSideProps({ params }) {
    await connectDB()
    const post = await Post.findOne({ slug: params.slug }).lean()

    if (!post) return { notFound: true }

    return {
        props: {
            post: {
                ...post,
                _id: post._id.toString(),
                createdAt: post.createdAt.toISOString()
            }
        }
    }
}

export default function PostDetail({ post }) {
    return (
        <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 20px", textAlign: "center" }}>
            <Link href="/posts" style={{ display: "inline-block", marginBottom: 20, color: "#0070f3" }}>
                ← Back
            </Link>

            <h1 style={{ marginBottom: 20, fontSize: 32 }}>{post.title}</h1>

            {post.thumbnail && (
                <img
                    src={post.thumbnail}
                    alt={post.title}
                    style={{
                        width: "100%",
                        maxHeight: 400,
                        objectFit: "cover",
                        marginBottom: 20,
                        borderRadius: 8,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                    }}
                />
            )}

            <hr style={{ margin: "30px 0", borderColor: "#ddd" }} />

            <div
                style={{
                    textAlign: "left",
                    lineHeight: 1.8,
                    fontSize: 18,
                    color: "#333"
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    )
}
