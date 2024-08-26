// src/components/DynamicLink.js

import React from 'react';
import PropTypes from 'prop-types';

const DynamicLink = ({ path }) => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const baseUrl = isDevelopment
        ? 'http://localhost:3000'
        : 'https://baaz.dev';

    // Construct the full URL by appending the path
    const fullUrl = `${baseUrl}${path}`;

    return <a href={fullUrl}>{fullUrl}</a>;
};

// Adding PropTypes for type checking
DynamicLink.propTypes = {
    path: PropTypes.string.isRequired,
};

export default DynamicLink;

