import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `Car Transport Services | ${siteConstants.name} - Vehicle Transportation in Bihar`,
    description: "Professional car transport services in Bihar. Chhotkan Packers Movers offers safe vehicle transportation, car shipping, and automobile transport solutions. Get reliable vehicle moving services across all 38 districts.",
    keywords: [
        "car transport services bihar",
        "vehicle transportation patna",
        "car shipping services",
        "automobile transport bihar",
        "vehicle movers patna",
        "car transportation company",
        "vehicle shipping services",
        "automobile movers bihar",
        "car transport patna",
        "vehicle moving services",
        "car shipping bihar",
        "automobile transportation",
        "vehicle transport company",
        "car moving services bihar",
        "vehicle shipping patna"
    ].join(", "),
    openGraph: {
        title: `Car Transport Services | ${siteConstants.name} - Vehicle Transportation in Bihar`,
        description: "Professional car transport services in Bihar. Chhotkan Packers Movers offers safe vehicle transportation, car shipping, and automobile transport solutions.",
        url: `${siteConstants.url}/services/car-transport`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Chhotkan Packers Movers - Car Transport Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Car Transport Services | ${siteConstants.name} - Vehicle Transportation in Bihar`,
        description: "Professional car transport services in Bihar. Chhotkan Packers Movers offers safe vehicle transportation, car shipping, and automobile transport solutions.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/services/car-transport",
    },
};

export default function CarTransportLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
