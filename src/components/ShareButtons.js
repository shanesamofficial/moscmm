import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon
} from 'react-share';
import './ShareButtons.css';

const ShareButtons = ({ url, title, description }) => {
    return (
        <div className="share-buttons">
            <h3 className="share-buttons__label">Share this article:</h3>
            <div className="share-buttons__list">
                <FacebookShareButton url={url} quote={title}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={url} title={title}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <WhatsappShareButton url={url} title={title} separator=":: ">
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <LinkedinShareButton url={url} title={title} summary={description} source="MOSCMM Kariambady Eye Hospital">
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>
        </div>
    );
};

export default ShareButtons;
