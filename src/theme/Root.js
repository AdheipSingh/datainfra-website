import React from 'react';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';

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

    let currentPath = '';
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const name = segment
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
    return (
        <>
            <BreadcrumbSchema />
            {children}
        </>
    );
}
