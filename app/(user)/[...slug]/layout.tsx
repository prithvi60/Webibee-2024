import { Metadata } from 'next';
import React from 'react'

interface SiteLayoutProps {
    children: React.ReactNode;
}

// Meta Data
export async function generateMetadata({ params }: { params: { slug: string | string[] } }): Promise<Metadata> {
    let slug = params.slug;

    if (Array.isArray(slug)) {
        slug = slug.join("-");
    }

    const decodedId = slug
        .replace(/-/g, " ")
        .toLowerCase()
        .replace(/\b\w/g, (c) => c.toUpperCase());
 
    return {
        title: `Webibee Software Agency | ${decodedId}`,
        description:
            "Business Tech for Small Medium Enterprises across the globe",
        robots: "index, follow",
        referrer: "origin-when-cross-origin",
        metadataBase: new URL("https://webibee.com/"),
        alternates: {
            canonical: "/",
            languages: {
                "en-US": "/",
            },
        },
        openGraph: {
            type: "website",
            url: `https://webibee.com`,
            title: `Webibee Software Agency | ${decodedId}`,
            description:
                "Business Tech for Small Medium Enterprises across the globe",
            siteName: "Webibee Agency",
            images: [
                {
                    url: "https://cdn.webibee.com/Webibee/webibeepurplelogo.png",
                },
            ],
        },
    };
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default SiteLayout