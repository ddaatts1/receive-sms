import Link from "next/link"
import connectDB from "@/lib/mongodb"
import Post from "@/models/Post"
import { notFound } from "next/navigation"

async function getPost(slug) {
    await connectDB()
    const post = await Post.findOne({ slug }).lean()

    if (!post) return null

    return {
        ...post,
        _id: post._id.toString(),
        createdAt: post.createdAt.toISOString()
    }
}

// Generate metadata cho SEO
export async function generateMetadata({ params }) {
    const resolvedParams = await params
    const post = await getPost(resolvedParams.slug)

    if (!post) {
        return {
            title: "Post Not Found"
        }
    }

    return {
        title: post.title,
        description: post.excerpt || post.title,
        openGraph: {
            title: post.title,
            images: post.thumbnail ? [post.thumbnail] : []
        }
    }
}

// Optional: Generate static paths cho posts
export async function generateStaticParams() {
    await connectDB()
    const posts = await Post.find().select('slug').lean()

    return posts.map((post) => ({
        slug: post.slug
    }))
}

export default async function PostDetail({ params }) {
    const resolvedParams = await params
    const post = await getPost(resolvedParams.slug)

    if (!post) {
        notFound()
    }

    return (
        <div style={{
            maxWidth: 800,
            margin: "40px auto",
            padding: "0 20px",
            textAlign: "center",
            backgroundColor: "#fff",
            minHeight: "100vh",
            borderRadius: 8,
        }}>
            <Link href="/posts" style={{ display: "inline-block", marginBottom: 20, color: "#0070f3" }}>
                ← Back
            </Link>

            <h1 style={{ marginBottom: 20, fontSize: 32, color: "#000" }}>{post.title}</h1>

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
                className="post-content"
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