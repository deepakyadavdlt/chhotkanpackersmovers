import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `International Moving Services | ${siteConstants.name} - Global Relocation Solutions in Bihar`,
    description: "Professional international moving services from Bihar. Chhotkan Packers Movers offers worldwide relocation, international shipping, and global moving solutions. Expert international packers and movers across all 38 districts.",
    keywords: [
        "international moving services bihar",
        "global relocation patna",
        "worldwide moving solutions",
        "international shipping bihar",
        "global movers patna",
        "international packers movers",
        "worldwide relocation services",
        "international moving company",
        "global moving bihar",
        "international shipping patna",
        "worldwide movers packers",
        "international relocation bihar",
        "global moving company",
        "international moving patna",
        "worldwide relocation packers"
    ].join(", "),
    openGraph: {
        title: `International Moving Services | ${siteConstants.name} - Global Relocation Solutions in Bihar`,
        description: "Professional international moving services from Bihar. Chhotkan Packers Movers offers worldwide relocation, international shipping, and global moving solutions.",
        url: `${siteConstants.url}/services/international-moving`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Chhotkan Packers Movers - International Moving Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `International Moving Services | ${siteConstants.name} - Global Relocation Solutions in Bihar`,
        description: "Professional international moving services from Bihar. Chhotkan Packers Movers offers worldwide relocation, international shipping, and global moving solutions.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/services/international-moving",
    },
};

export default function InternationalMovingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
