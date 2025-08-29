import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `Warehousing & Storage Services | ${siteConstants.name} - Secure Storage Solutions in Bihar`,
    description: "Professional warehousing and storage services in Bihar. Chhotkan Packers Movers offers secure, climate-controlled storage facilities for your belongings during relocation. Get flexible storage solutions across all 38 districts.",
    keywords: [
        "warehousing services bihar",
        "storage facilities patna",
        "secure storage solutions",
        "climate controlled storage bihar",
        "moving storage services",
        "warehouse facilities patna",
        "storage during relocation",
        "temporary storage bihar",
        "secure warehousing patna",
        "storage solutions packers movers",
        "warehouse storage bihar",
        "moving company storage",
        "storage facilities packers movers",
        "secure storage patna",
        "warehousing packers movers bihar"
    ].join(", "),
    openGraph: {
        title: `Warehousing & Storage Services | ${siteConstants.name} - Secure Storage Solutions in Bihar`,
        description: "Professional warehousing and storage services in Bihar. Chhotkan Packers Movers offers secure, climate-controlled storage facilities for your belongings during relocation.",
        url: `${siteConstants.url}/services/warehousing-and-storage`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Chhotkan Packers Movers - Warehousing and Storage Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Warehousing & Storage Services | ${siteConstants.name} - Secure Storage Solutions in Bihar`,
        description: "Professional warehousing and storage services in Bihar. Chhotkan Packers Movers offers secure, climate-controlled storage facilities for your belongings during relocation.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/services/warehousing-and-storage",
    },
};

export default function WarehousingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
