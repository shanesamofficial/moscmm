import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { Plus, Edit2, Trash2, Eye, Search, Filter, ExternalLink, Save, X, Image as ImageIcon, ChevronLeft } from 'lucide-react';
import { toast } from 'react-toastify';
import BlogImageUpload from '../../components/admin/BlogImageUpload';
import './BlogManagement.css';

const BlogManagement = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setPosts(data || []);
        } catch (error) {
            console.error('Error fetching posts:', error);
            toast.error('Failed to load blog posts');
        }
        setLoading(false);
    };

    const generateSlug = (title) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    };

    const handleNewPost = () => {
        setCurrentPost({
            title: '',
            slug: '',
            excerpt: '',
            content: '',
            category: '',
            author: 'MOSCMM Admin',
            featured_image: '',
            featured_image_alt: '',
            meta_title: '',
            meta_description: '',
            status: 'draft'
        });
        setIsEditing(true);
    };

    const handleEditPost = (post) => {
        setCurrentPost({ ...post });
        setIsEditing(true);
    };

    const handleDeletePost = async (id) => {
        if (!window.confirm('Are you sure you want to delete this post? This cannot be undone.')) return;

        try {
            const { error } = await supabase
                .from('blog_posts')
                .delete()
                .eq('id', id);

            if (error) throw error;
            toast.success('Post deleted successfully');
            fetchPosts();
        } catch (error) {
            toast.error('Error deleting post: ' + error.message);
        }
    };

    const handleSavePost = async (status = currentPost.status) => {
        if (!currentPost.title.trim()) {
            toast.error('Title is required');
            return;
        }

        const postData = {
            ...currentPost,
            slug: currentPost.slug || generateSlug(currentPost.title),
            status,
            updated_at: new Date().toISOString(),
            published_at: status === 'published' && !currentPost.published_at
                ? new Date().toISOString()
                : currentPost.published_at
        };

        try {
            let result;
            if (currentPost.id) {
                // Update existing post
                result = await supabase
                    .from('blog_posts')
                    .update(postData)
                    .eq('id', currentPost.id)
                    .select();
            } else {
                // Create new post
                delete postData.id;
                result = await supabase
                    .from('blog_posts')
                    .insert([postData])
                    .select();
            }

            if (result.error) throw result.error;

            toast.success(currentPost.id ? 'Post updated successfully' : 'Post created successfully');
            setIsEditing(false);
            setCurrentPost(null);
            fetchPosts();
        } catch (error) {
            toast.error('Error saving post: ' + error.message);
        }
    };

    const handleInputChange = (field, value) => {
        setCurrentPost(prev => ({
            ...prev,
            [field]: value,
            ...(field === 'title' && !prev.slug ? { slug: generateSlug(value) } : {})
        }));
    };

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case 'published': return 'badge-published';
            case 'draft': return 'badge-draft';
            case 'scheduled': return 'badge-scheduled';
            default: return '';
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '-';
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Editor View
    if (isEditing && currentPost) {
        return (
            <div className="blog-editor-view">
                <div className="editor-header">
                    <button className="btn-back" onClick={() => { setIsEditing(false); setCurrentPost(null); }}>
                        <ChevronLeft size={20} /> Back to Posts
                    </button>
                    <div className="editor-actions">
                        <button className="btn-secondary" onClick={() => handleSavePost('draft')}>
                            <Save size={16} /> Save Draft
                        </button>
                        <button className="btn-primary" onClick={() => handleSavePost('published')}>
                            <Eye size={16} /> Publish
                        </button>
                    </div>
                </div>

                <div className="editor-content">
                    <div className="editor-main">
                        <div className="form-group">
                            <label>Title *</label>
                            <input
                                type="text"
                                value={currentPost.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                placeholder="Enter post title..."
                                className="input-title"
                            />
                        </div>

                        <div className="form-group">
                            <label>URL Slug</label>
                            <div className="slug-input">
                                <span>/blog/</span>
                                <input
                                    type="text"
                                    value={currentPost.slug}
                                    onChange={(e) => handleInputChange('slug', e.target.value)}
                                    placeholder="post-url-slug"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Excerpt</label>
                            <textarea
                                value={currentPost.excerpt}
                                onChange={(e) => handleInputChange('excerpt', e.target.value)}
                                placeholder="Brief description for blog listing..."
                                rows={3}
                            />
                        </div>

                        <div className="form-group">
                            <label>Content (HTML supported)</label>
                            <textarea
                                value={currentPost.content}
                                onChange={(e) => handleInputChange('content', e.target.value)}
                                placeholder="Write your blog post content here... HTML tags are supported."
                                rows={15}
                                className="content-textarea"
                            />
                        </div>
                    </div>

                    <div className="editor-sidebar">
                        <div className="sidebar-card">
                            <h4>Post Settings</h4>

                            <div className="form-group">
                                <label>Status</label>
                                <select
                                    value={currentPost.status}
                                    onChange={(e) => handleInputChange('status', e.target.value)}
                                >
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <input
                                    type="text"
                                    value={currentPost.category}
                                    onChange={(e) => handleInputChange('category', e.target.value)}
                                    placeholder="e.g., Eye Health, Prevention"
                                />
                            </div>

                            <div className="form-group">
                                <label>Author</label>
                                <input
                                    type="text"
                                    value={currentPost.author}
                                    onChange={(e) => handleInputChange('author', e.target.value)}
                                    placeholder="Author name"
                                />
                            </div>
                        </div>

                        <div className="sidebar-card">
                            <h4>Featured Image</h4>
                            <BlogImageUpload
                                currentImage={currentPost.featured_image}
                                onImageUploaded={(url) => handleInputChange('featured_image', url)}
                            />
                            <div className="form-group" style={{ marginTop: '0.75rem' }}>
                                <label>Or paste URL</label>
                                <input
                                    type="text"
                                    value={currentPost.featured_image}
                                    onChange={(e) => handleInputChange('featured_image', e.target.value)}
                                    placeholder="https://..."
                                />
                            </div>
                            <div className="form-group">
                                <label>Alt Text</label>
                                <input
                                    type="text"
                                    value={currentPost.featured_image_alt}
                                    onChange={(e) => handleInputChange('featured_image_alt', e.target.value)}
                                    placeholder="Image description for accessibility"
                                />
                            </div>
                        </div>

                        <div className="sidebar-card">
                            <h4>SEO Settings</h4>
                            <div className="form-group">
                                <label>Meta Title</label>
                                <input
                                    type="text"
                                    value={currentPost.meta_title}
                                    onChange={(e) => handleInputChange('meta_title', e.target.value)}
                                    placeholder="SEO title (optional)"
                                    maxLength={60}
                                />
                                <span className="char-count">{currentPost.meta_title?.length || 0}/60</span>
                            </div>
                            <div className="form-group">
                                <label>Meta Description</label>
                                <textarea
                                    value={currentPost.meta_description}
                                    onChange={(e) => handleInputChange('meta_description', e.target.value)}
                                    placeholder="SEO description (optional)"
                                    rows={3}
                                    maxLength={160}
                                />
                                <span className="char-count">{currentPost.meta_description?.length || 0}/160</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Posts List View
    return (
        <div className="blog-management">
            <div className="content-header">
                <div>
                    <h3>Blog Posts</h3>
                    <p>Create and manage blog posts for your website</p>
                </div>
                <button className="btn-primary" onClick={handleNewPost}>
                    <Plus size={18} /> New Post
                </button>
            </div>

            <div className="posts-toolbar">
                <div className="search-box">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filter-box">
                    <Filter size={16} />
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                        <option value="all">All Status</option>
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>
            </div>

            <div className="card posts-card">
                {loading ? (
                    <div className="loading-state">
                        <div className="spinner"></div>
                        <p>Loading posts...</p>
                    </div>
                ) : filteredPosts.length === 0 ? (
                    <div className="empty-state">
                        <ImageIcon size={48} />
                        <h4>No posts found</h4>
                        <p>Create your first blog post to get started</p>
                        <button className="btn-primary" onClick={handleNewPost}>
                            <Plus size={16} /> Create Post
                        </button>
                    </div>
                ) : (
                    <div className="posts-table-wrapper">
                        <table className="posts-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPosts.map(post => (
                                    <tr key={post.id}>
                                        <td className="post-title-cell">
                                            <strong>{post.title}</strong>
                                            <span className="post-slug">/blog/{post.slug}</span>
                                        </td>
                                        <td>{post.category || '-'}</td>
                                        <td>
                                            <span className={`status-badge ${getStatusBadgeClass(post.status)}`}>
                                                {post.status}
                                            </span>
                                        </td>
                                        <td>{formatDate(post.published_at || post.created_at)}</td>
                                        <td className="actions-cell">
                                            <button
                                                className="action-btn edit"
                                                onClick={() => handleEditPost(post)}
                                                title="Edit"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            {post.status === 'published' && (
                                                <a
                                                    href={`/blog/${post.slug}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="action-btn view"
                                                    title="View"
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                            <button
                                                className="action-btn delete"
                                                onClick={() => handleDeletePost(post.id)}
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <div className="posts-summary">
                Total: {posts.length} posts ({posts.filter(p => p.status === 'published').length} published, {posts.filter(p => p.status === 'draft').length} drafts)
            </div>
        </div>
    );
};

export default BlogManagement;
