// src/components/PostmanButton.js

import React from 'react';
import PropTypes from 'prop-types';

const PostmanButton = ({ postmanUrl, align = 'center' }) => {
    // Define styles for the button container based on alignment
    const buttonContainerStyles = {
        display: 'flex',
        justifyContent: align === 'left' ? 'flex-start' : 'center', // Align left or center based on prop
        width: '100%', // Ensure container takes full width for alignment to work properly
    };

    const buttonStyles = {
        display: 'flex',
        alignItems: 'center',
        padding: '6px 12px',
        backgroundColor: '#FF6C37',
        color: '#ffffff',
        textDecoration: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        width: '160px', // Set a fixed width for the button
        textAlign: 'center', // Center text if any (though here image is used)
    };

    return (
        <div style={buttonContainerStyles}>
            <a
                href={postmanUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={buttonStyles}
            >
                <img
                    src="https://run.pstmn.io/button.svg"
                    alt="Run In Postman"
                    style={{ width: '128px', height: '32px' }}
                />
            </a>
        </div>
    );
};

// Define prop types for validation
PostmanButton.propTypes = {
    postmanUrl: PropTypes.string.isRequired,
    align: PropTypes.oneOf(['left', 'center']), // Validate align prop
};

export default PostmanButton;
