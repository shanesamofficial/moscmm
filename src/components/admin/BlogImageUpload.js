import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';

const BlogImageUpload = ({ currentImage, onImageUploaded }) => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length > 0) {
            const selectedFile = Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0])
            });
            setFile(selectedFile);
            // Auto-upload when file is selected
            handleUpload(selectedFile);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false,
        maxSize: 5 * 1024 * 1024 // 5MB
    });

    const handleUpload = async (fileToUpload) => {
        if (!fileToUpload) return;

        setUploading(true);

        try {
            const formData = new FormData();
            formData.append('file', fileToUpload);
            formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

            const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
            const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: formData
            });

            if (!res.ok) throw new Error('Failed to upload to Cloudinary');
            const data = await res.json();

            if (data.secure_url) {
                onImageUploaded(data.secure_url);
                toast.success('Image uploaded successfully!');
                setFile(null);
            }
        } catch (err) {
            console.error('Upload failed:', err);
            toast.error('Upload failed: ' + err.message);
        } finally {
            setUploading(false);
        }
    };

    const handleRemoveImage = (e) => {
        e.stopPropagation();
        onImageUploaded('');
        setFile(null);
    };

    return (
        <div className="blog-image-upload">
            {currentImage ? (
                <div className="current-image-container">
                    <img src={currentImage} alt="Featured" className="current-image" />
                    <button className="remove-image-btn" onClick={handleRemoveImage} type="button">
                        <X size={14} />
                    </button>
                </div>
            ) : (
                <div {...getRootProps()} className={`blog-dropzone ${isDragActive ? 'active' : ''} ${uploading ? 'uploading' : ''}`}>
                    <input {...getInputProps()} />
                    {uploading ? (
                        <div className="dropzone-content">
                            <Loader2 size={24} className="spin-animation" />
                            <p>Uploading...</p>
                        </div>
                    ) : (
                        <div className="dropzone-content">
                            <Upload size={24} />
                            <p><strong>Click or drag</strong> to upload</p>
                            <span>PNG, JPG, WEBP (Max 5MB)</span>
                        </div>
                    )}
                </div>
            )}

            <style>{`
                .blog-image-upload { margin-top: 0.5rem; }
                .current-image-container { 
                    position: relative; 
                    border-radius: 8px; 
                    overflow: hidden;
                    border: 1px solid #e5e7eb;
                }
                .current-image { 
                    width: 100%; 
                    height: 150px; 
                    object-fit: cover; 
                    display: block;
                }
                .remove-image-btn { 
                    position: absolute; 
                    top: 8px; 
                    right: 8px; 
                    background: rgba(239, 68, 68, 0.9); 
                    color: white; 
                    border: none; 
                    border-radius: 50%; 
                    width: 28px; 
                    height: 28px; 
                    cursor: pointer; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center;
                    transition: all 0.2s;
                }
                .remove-image-btn:hover { background: #ef4444; transform: scale(1.1); }
                .blog-dropzone { 
                    border: 2px dashed #d1d5db; 
                    border-radius: 8px; 
                    padding: 1.5rem 1rem; 
                    text-align: center; 
                    cursor: pointer;
                    transition: all 0.2s;
                    background: #f9fafb;
                }
                .blog-dropzone:hover { border-color: #1d4ed8; background: #eff6ff; }
                .blog-dropzone.active { border-color: #1d4ed8; background: #eff6ff; }
                .blog-dropzone.uploading { pointer-events: none; opacity: 0.7; }
                .dropzone-content { 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    gap: 0.25rem;
                    color: #6b7280;
                }
                .dropzone-content p { margin: 0; font-size: 0.8rem; color: #374151; }
                .dropzone-content span { font-size: 0.7rem; color: #9ca3af; }
                .spin-animation { animation: spin 1s linear infinite; }
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};

export default BlogImageUpload;
