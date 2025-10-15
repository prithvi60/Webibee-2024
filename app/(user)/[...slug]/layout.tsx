import { Metadata } from "next";
import React from "react";

interface SiteLayoutProps {
    children: React.ReactNode;
}

interface GenerateMetadataProps {
    params: Promise<{ slug: string | string[] }>;
}

export async function generateMetadata(
    { params }: GenerateMetadataProps
): Promise<Metadata> {
    const { slug } = await params;

    const slugStr = Array.isArray(slug) ? slug.join("-") : slug;

    const decodedId = slugStr
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
                    url: "/webibeepurplelogo.png",
                },
            ],
        },
    };
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
    return <main>{children}</main>;
};

export default SiteLayout;
