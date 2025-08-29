import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `Domestic Moving Services | ${siteConstants.name} - Home Relocation Solutions in Bihar`,
    description: "Professional domestic moving services in Bihar. Chhotkan Packers Movers specializes in home relocation, residential moving, and domestic shifting. Get reliable home moving solutions across all 38 districts.",
    keywords: [
        "domestic moving services bihar",
        "home relocation patna",
        "residential moving services",
        "domestic shifting bihar",
        "home movers patna",
        "residential relocation services",
        "domestic moving company",
        "home shifting bihar",
        "residential movers patna",
        "domestic packers movers",
        "home moving services",
        "residential shifting bihar",
        "domestic relocation patna",
        "home moving company",
        "residential moving bihar"
    ].join(", "),
    openGraph: {
        title: `Domestic Moving Services | ${siteConstants.name} - Home Relocation Solutions in Bihar`,
        description: "Professional domestic moving services in Bihar. Chhotkan Packers Movers specializes in home relocation, residential moving, and domestic shifting.",
        url: `${siteConstants.url}/services/domestic-moving`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Chhotkan Packers Movers - Domestic Moving Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Domestic Moving Services | ${siteConstants.name} - Home Relocation Solutions in Bihar`,
        description: "Professional domestic moving services in Bihar. Chhotkan Packers Movers specializes in home relocation, residential moving, and domestic shifting.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/services/domestic-moving",
    },
};

export default function DomesticMovingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
