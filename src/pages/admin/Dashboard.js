import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../../components/admin/ImageUpload';
import { LogOut, Image as ImageIcon, Trash2, ExternalLink, LayoutDashboard, Settings, Menu, X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Dashboard.css';

const Dashboard = () => {
    const [session, setSession] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('gallery');
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            if (!session) navigate('/admin');
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (!session) navigate('/admin');
        });

        fetchImages();

        return () => subscription.unsubscribe();
    }, [navigate]);

    const fetchImages = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('gallery')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) console.error('Error fetching images:', error);
        else setImages(data);
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/admin');
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this image?')) return;

        try {
            const { error } = await supabase
                .from('gallery')
                .delete()
                .eq('id', id);

            if (error) throw error;
            toast.success('Image deleted from gallery');
            fetchImages();
        } catch (error) {
            toast.error('Error deleting image: ' + error.message);
        }
    };

    if (!session) return null;

    return (
        <div className={`admin-dashboard ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

            {/* Sidebar Navigation */}
            <aside className="admin-sidebar">
                <div className="sidebar-brand">
                    <div className="brand-icon">H</div>
                    <span>Admin Dash</span>
                </div>

                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <LayoutDashboard size={20} />
                        <span>Overview</span>
                    </button>

                    <button
                        className={`nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
                        onClick={() => setActiveTab('gallery')}
                    >
                        <ImageIcon size={20} />
                        <span>Gallery</span>
                    </button>

                    <button
                        className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <Settings size={20} />
                        <span>Settings</span>
                    </button>
                </nav>

                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="btn-logout-sidebar">
                        <LogOut size={18} /> Logout
                    </button>
                </div>
            </aside>

            <div className="main-content-wrapper">
                <header className="dashboard-header">
                    <div className="header-left">
                        <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <Menu size={24} />
                        </button>
                        <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management</h2>
                    </div>
                    <div className="header-right">
                        <span className="user-email">{session.user.email}</span>
                    </div>
                </header>

                <main className="dashboard-content">
                    {activeTab === 'gallery' ? (
                        <div className="gallery-view">
                            <div className="content-header">
                                <div>
                                    <h3>Photo Gallery</h3>
                                    <p>Manage images displayed on the website</p>
                                </div>
                            </div>

                            <div className="dashboard-grid">
                                <section className="upload-section">
                                    <div className="card">
                                        <h4>Upload New Image</h4>
                                        <ImageUpload onUploadSuccess={() => {
                                            fetchImages();
                                            toast.success('Image uploaded successfully!');
                                        }} />
                                    </div>
                                </section>

                                <section className="gallery-management">
                                    <div className="card">
                                        <h4>Existing Images</h4>
                                        <div className="image-stats">
                                            Total: {images.length} images
                                        </div>
                                        {loading ? (
                                            <div className="loading-state">
                                                <div className="spinner"></div>
                                                <p>Loading gallery...</p>
                                            </div>
                                        ) : (
                                            <div className="admin-gallery-grid">
                                                {images.length === 0 ? (
                                                    <div className="empty-state">
                                                        <ImageIcon size={48} />
                                                        <p>No images found. Upload your first one!</p>
                                                    </div>
                                                ) : (
                                                    images.map((img) => (
                                                        <div key={img.id} className="admin-gallery-item">
                                                            <div className="img-wrapper">
                                                                <img src={img.url} alt={img.title} />
                                                                <div className="item-overlay">
                                                                    <button
                                                                        onClick={() => handleDelete(img.id)}
                                                                        className="action-btn delete"
                                                                        title="Delete Image"
                                                                    >
                                                                        <Trash2 size={16} />
                                                                    </button>
                                                                    <a href={img.url} target="_blank" rel="noopener noreferrer" className="action-btn view" title="View Full">
                                                                        <ExternalLink size={16} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="item-details">
                                                                <p>{img.title}</p>
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </section>
                            </div>
                        </div>
                    ) : (
                        <div className="under-construction">
                            <Settings size={48} />
                            <h3>Coming Soon</h3>
                            <p>This feature is currently under development.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
