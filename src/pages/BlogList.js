import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabaseClient';
import { blogPosts as staticBlogPosts } from '../data/blogData';
import './BlogList.css';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usingFallback, setUsingFallback] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .eq('status', 'published')
                    .order('published_at', { ascending: false });

                if (error) throw error;

                if (data && data.length > 0) {
                    // Map database fields to component expected format
                    const mappedPosts = data.map(post => ({
                        id: post.id,
                        slug: post.slug,
                        title: post.title,
                        excerpt: post.excerpt,
                        content: post.content,
                        category: post.category,
                        author: post.author,
                        date: new Date(post.published_at || post.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }),
                        image: post.featured_image
                    }));
                    setPosts(mappedPosts);
                } else {
                    // Fallback to static data if no posts in database
                    setPosts(staticBlogPosts);
                    setUsingFallback(true);
                }
            } catch (error) {
                console.log('Using static blog data as fallback');
                setPosts(staticBlogPosts);
                setUsingFallback(true);
            }
            setLoading(false);
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="blog-list-page">
                <SEO
                    title="Health Blog & Eye Care Tips"
                    description="Read our latest articles on eye health, treatments, and hospital news. Stay informed with MOSCMM Kariambady Eye Hospital."
                    keywords="eye care blog, ophthalmology news, health tips, cataracts, vision care"
                    url="/blog"
                />
                <section className="section">
                    <div className="container">
                        <div className="section-header">
                            <h1 className="section-title">Latest & News</h1>
                            <p className="section-subtitle">Loading articles...</p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div className="blog-list-page">
            <SEO
                title="Health Blog & Eye Care Tips"
                description="Read our latest articles on eye health, treatments, and hospital news. Stay informed with MOSCMM Kariambady Eye Hospital."
                keywords="eye care blog, ophthalmology news, health tips, cataracts, vision care"
                url="/blog"
            />

            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h1 className="section-title">Latest & News</h1>
                        <p className="section-subtitle">
                            Stay informed with the latest updates in eye care technology and health tips from our experts.
                        </p>
                    </div>

                    <div className="blog-grid">
                        {posts.map((post) => (
                            <article key={post.id} className="blog-card">
                                <div className="blog-card__image-wrapper">
                                    {post.image && (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="blog-card__image"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                                <div className="blog-card__content">
                                    <div className="blog-card__meta">
                                        <span className="blog-card__category">{post.category}</span>
                                        <span className="flex items-center gap-sm">
                                            <Calendar size={14} />
                                            {post.date}
                                        </span>
                                    </div>
                                    <h2 className="blog-card__title">
                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="blog-card__excerpt">
                                        {post.excerpt}
                                    </p>
                                    <div className="blog-card__footer">
                                        <span className="flex items-center gap-sm text-muted text-sm">
                                            <User size={14} />
                                            {post.author}
                                        </span>
                                        <Link to={`/blog/${post.slug}`} className="blog-card__link">
                                            Read More <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogList;

