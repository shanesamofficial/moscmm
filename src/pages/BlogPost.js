import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import { ArticleSchema } from '../components/SchemaData';
import { supabase } from '../lib/supabaseClient';
import { blogPosts as staticBlogPosts } from '../data/blogData';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .eq('slug', slug)
                    .eq('status', 'published')
                    .single();

                if (error || !data) {
                    // Fallback to static data
                    const staticPost = staticBlogPosts.find(p => p.slug === slug);
                    if (staticPost) {
                        setPost(staticPost);
                    } else {
                        setPost(null);
                    }
                } else {
                    // Map database fields to component expected format
                    setPost({
                        id: data.id,
                        slug: data.slug,
                        title: data.title,
                        excerpt: data.excerpt,
                        content: data.content,
                        category: data.category,
                        author: data.author,
                        date: new Date(data.published_at || data.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }),
                        image: data.featured_image
                    });
                }
            } catch (error) {
                console.log('Using static blog data as fallback');
                const staticPost = staticBlogPosts.find(p => p.slug === slug);
                setPost(staticPost || null);
            }
            setLoading(false);
        };

        fetchPost();
        // Scroll to top when post loads
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return (
            <div className="blog-post-page">
                <div className="container section text-center">
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="container section text-center">
                <h2>Post not found</h2>
                <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
            </div>
        );
    }

    // Calculate read time assuming 200 words per minute
    const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    return (
        <div className="blog-post-page">
            <SEO
                title={post.title}
                description={post.excerpt}
                keywords="eye care, health blog, ophthalmology"
                url={`/blog/${post.slug}`}
                image={post.image}
            />
            <ArticleSchema
                title={post.title}
                description={post.excerpt}
                author={post.author}
                date={post.date}
                image={post.image}
                url={`https://www.kariambadieyehospital.com/blog/${post.slug}`}
            />

            < article className="section" >
                <div className="container">
                    <div className="blog-post">
                        <header className="blog-post__header">
                            <div className="blog-post__meta">
                                <span className="blog-post__category">{post.category}</span>
                                <span className="flex items-center gap-sm">
                                    <Calendar size={16} />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-sm">
                                    <Tag size={16} />
                                    {readTime} min read
                                </span>
                            </div>
                            <h1 className="blog-post__title">{post.title}</h1>
                            <div className="flex items-center justify-center gap-sm text-muted">
                                <User size={16} />
                                By {post.author}
                            </div>
                        </header>

                        {post.image && (
                            <div className="blog-post__image-wrapper">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="blog-post__image"
                                />
                            </div>
                        )}

                        <div
                            className="blog-post__content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        ></div>

                        <ShareButtons
                            url={`https://www.kariambadieyehospital.com/blog/${post.slug}`}
                            title={post.title}
                            description={post.excerpt}
                        />

                        <div className="blog-post__back">
                            <Link to="/blog" className="btn btn-secondary">
                                <ArrowLeft size={18} /> Back to All Posts
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;

