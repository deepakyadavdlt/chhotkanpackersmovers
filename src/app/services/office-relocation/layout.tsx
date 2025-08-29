import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `Office Relocation Services | ${siteConstants.name} - Corporate Moving Solutions in Bihar`,
    description: "Professional office relocation services in Bihar. Chhotkan Packers Movers specializes in corporate moving, office shifting, and business relocation. Get efficient office moving solutions across all 38 districts.",
    keywords: [
        "office relocation services bihar",
        "corporate moving patna",
        "office shifting services",
        "business relocation bihar",
        "corporate movers patna",
        "office moving company",
        "business moving services",
        "corporate relocation bihar",
        "office shifting patna",
        "business movers packers",
        "corporate moving services",
        "office relocation patna",
        "business shifting bihar",
        "corporate packers movers",
        "office moving solutions"
    ].join(", "),
    openGraph: {
        title: `Office Relocation Services | ${siteConstants.name} - Corporate Moving Solutions in Bihar`,
        description: "Professional office relocation services in Bihar. Chhotkan Packers Movers specializes in corporate moving, office shifting, and business relocation.",
        url: `${siteConstants.url}/services/office-relocation`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Chhotkan Packers Movers - Office Relocation Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Office Relocation Services | ${siteConstants.name} - Corporate Moving Solutions in Bihar`,
        description: "Professional office relocation services in Bihar. Chhotkan Packers Movers specializes in corporate moving, office shifting, and business relocation.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/services/office-relocation",
    },
};

export default function OfficeRelocationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
