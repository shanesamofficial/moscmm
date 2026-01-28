import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import { ArticleSchema } from '../components/SchemaData';
import { blogPosts } from '../data/blogData';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        // Scroll to top when post loads
        window.scrollTo(0, 0);
    }, [slug]);

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
                url={`https://kariambadieyehospital.com/blog/${post.slug}`}
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

                        <div className="blog-post__image-wrapper">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="blog-post__image"
                            />
                        </div>

                        <div
                            className="blog-post__content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        ></div>

                        <ShareButtons
                            url={`https://kariambadieyehospital.com/blog/${post.slug}`}
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
