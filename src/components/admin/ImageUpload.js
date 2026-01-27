import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import { toast } from 'react-toastify';

const ImageUpload = ({ onUploadSuccess }) => {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [title, setTitle] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': [] },
        multiple: false
    });

    const handleUpload = async () => {
        if (files.length === 0 || !title) {
            toast.warn('Please provide a description and select an image');
            return;
        }

        setUploading(true);

        try {
            const formData = new FormData();
            formData.append('file', files[0]);
            formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);

            const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
            const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: formData
            });

            if (!res.ok) throw new Error('Failed to upload to Cloudinary');
            const data = await res.json();

            if (data.secure_url) {
                // Save metadata to Supabase
                const { error } = await supabase
                    .from('gallery')
                    .insert([
                        {
                            title: title,
                            url: data.secure_url,
                            public_id: data.public_id,
                            category: 'all'
                        }
                    ]);

                if (error) throw error;

                setFiles([]);
                setTitle('');
                onUploadSuccess();
            }
        } catch (err) {
            console.error('Upload failed:', err);
            toast.error('Upload failed: ' + err.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="upload-container">
            <div className="admin-form-group">
                <label>Image Description</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Modern Eye Surgery Facility"
                    className="admin-input"
                />
            </div>

            <div {...getRootProps()} className={`admin-dropzone ${isDragActive ? 'active' : ''}`}>
                <input {...getInputProps()} />
                {files.length > 0 ? (
                    <div className="admin-preview-container">
                        <img src={files[0].preview} alt="Preview" />
                        <button className="admin-remove-preview" onClick={(e) => {
                            e.stopPropagation();
                            setFiles([]);
                        }}>
                            <X size={16} />
                        </button>
                    </div>
                ) : (
                    <div className="admin-dropzone-prompt">
                        <Upload size={32} />
                        <p><strong>Click to upload</strong> or drag & drop</p>
                        <span>PNG, JPG or WEBP (Max 5MB)</span>
                    </div>
                )}
            </div>

            <button
                onClick={handleUpload}
                className="admin-upload-btn"
                disabled={uploading || files.length === 0 || !title}
            >
                {uploading ? <><Loader2 className="animate-spin" size={18} /> Uploading...</> : 'Save to Gallery'}
            </button>

            <style jsx>{`
        .upload-container { display: flex; flex-direction: column; gap: 1.25rem; }
        .admin-form-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .admin-form-group label { font-size: 0.9rem; font-weight: 600; color: #4b5563; }
        .admin-input { 
          width: 100%; 
          padding: 0.75rem; 
          border: 1px solid #d1d5db; 
          border-radius: 8px; 
          font-size: 0.95rem;
          transition: border-color 0.2s;
        }
        .admin-input:focus { outline: none; border-color: #1d4ed8; box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1); }
        .admin-dropzone { 
          border: 2px dashed #d1d5db; 
          border-radius: 12px; 
          padding: 1.5rem; 
          text-align: center; 
          cursor: pointer;
          min-height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          background: #f9fafb;
        }
        .admin-dropzone:hover { border-color: #1d4ed8; background: #eff6ff; }
        .admin-dropzone.active { border-color: #1d4ed8; background: #eff6ff; }
        .admin-dropzone-prompt { color: #6b7280; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .admin-dropzone-prompt p { margin: 0; color: #374151; }
        .admin-dropzone-prompt span { font-size: 0.75rem; color: #9ca3af; }
        .admin-preview-container { position: relative; width: 100%; }
        .admin-preview-container img { width: 100%; max-height: 180px; object-fit: contain; border-radius: 8px; }
        .admin-remove-preview { 
          position: absolute; top: -8px; right: -8px; 
          background: #ef4444; color: white; border: none; 
          border-radius: 50%; width: 24px; height: 24px; 
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .admin-upload-btn { 
          margin-top: 0.5rem; 
          padding: 0.75rem; 
          background: #1d4ed8; 
          color: white; 
          border: none; 
          border-radius: 8px; 
          font-weight: 600; 
          cursor: pointer; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          gap: 0.5rem;
          transition: background 0.2s;
        }
        .admin-upload-btn:hover:not(:disabled) { background: #1e40af; }
        .admin-upload-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
        </div>
    );
};

export default ImageUpload;
