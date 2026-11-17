import React from 'react';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';

// Breadcrumb names for page segments, matching the breadcrumbs shown on
// the pages. Segments not listed fall back to title-cased slugs.
const SEGMENT_NAMES = {
    'networking': 'Networking',
    'distributed-gpu-compute': 'Distributed GPU compute',
    'open-source': 'Open source',
    'about': 'About',
    'contact': 'Contact',
    'blog': 'Blog',
};

// Pages whose visible breadcrumb is not their URL path. /case-studies is a
// redirect, so the case study sits under Networking, as shown on the page.
const TRAILS = {
    '/case-studies/rdma-kubernetes': [
        ['Networking', '/networking'],
        ['Case study', '/case-studies/rdma-kubernetes'],
    ],
};

function BreadcrumbSchema() {
    const location = useLocation();
    const path = location.pathname;

    if (path === '/') return null;

    const segments = path.split('/').filter(Boolean);
    const items = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://baaz.dev"
        }
    ];

    const trail = TRAILS[path.replace(/\/$/, '')];
    if (trail) {
        trail.forEach(([name, url], index) => {
            items.push({
                "@type": "ListItem",
                "position": index + 2,
                "name": name,
                "item": `https://baaz.dev${url}`
            });
        });
    }

    let currentPath = '';
    if (!trail) segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const name = SEGMENT_NAMES[segment] || segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        items.push({
            "@type": "ListItem",
            "position": index + 2,
            "name": name,
            "item": `https://baaz.dev${currentPath}`
        });
    });

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items
    };

    return (
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbData)}
            </script>
        </Head>
    );
}

export default function Root({children}) {
    // Ensure window.gtag exists before the gtag plugin tries to call it
    if (typeof window !== 'undefined' && typeof window.gtag !== 'function') {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() { window.dataLayer.push(arguments); };
    }

    return (
        <>
            <BreadcrumbSchema />
            {children}
        </>
    );
}
