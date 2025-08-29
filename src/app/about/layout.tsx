import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `About Us | ${siteConstants.name} - Leading Packers and Movers in Bihar Since 2009`,
    description: "Learn about Chhotkan Packers Movers - a trusted moving company in Bihar since 2009. We serve 100+ cities with professional packing, moving, and relocation services. Discover our story of excellence and commitment to customer satisfaction.",
    keywords: [
        "about chhotkan packers movers",
        "moving company history bihar",
        "packers and movers since 2009",
        "trusted moving company patna",
        "professional movers bihar",
        "moving company story bihar",
        "reliable packers movers",
        "experienced moving company",
        "customer focused movers",
        "quality moving services bihar",
        "moving company excellence",
        "packers movers patna history",
        "reliable relocation services",
        "professional moving team",
        "moving company commitment"
    ].join(", "),
    openGraph: {
        title: `About Us | ${siteConstants.name} - Leading Packers and Movers in Bihar Since 2009`,
        description: "Learn about Chhotkan Packers Movers - a trusted moving company in Bihar since 2009. We serve 100+ cities with professional packing, moving, and relocation services.",
        url: `${siteConstants.url}/about`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Chhotkan Packers Movers - About Our Company",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `About Us | ${siteConstants.name} - Leading Packers and Movers in Bihar Since 2009`,
        description: "Learn about Chhotkan Packers Movers - a trusted moving company in Bihar since 2009. We serve 100+ cities with professional packing, moving, and relocation services.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
