// src/components/PostmanButton.js

import React from 'react';
import PropTypes from 'prop-types';

const PostmanButton = ({ postmanUrl }) => {
    const buttonStyles = {
        padding: '6px 12px',
        backgroundColor: '#FF6C37',
        color: '#ffffff',
        textDecoration: 'none',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontWeight: 'bold'
    };

    return (
        <a
            href={postmanUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyles}
        >
            &#9654; <strong>Run in Postman</strong>
        </a>
    );
};

// Define prop types for validation
PostmanButton.propTypes = {
    postmanUrl: PropTypes.string.isRequired,
};

export default PostmanButton;
