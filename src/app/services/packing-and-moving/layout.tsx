import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `Packing & Moving Services | ${siteConstants.name} - Professional Moving Solutions in Bihar`,
    description: "Expert packing and moving services in Bihar. Chhotkan Packers Movers provides professional packing, secure transportation, and safe delivery of your belongings. Get reliable moving services across all 38 districts.",
    keywords: [
        "packing and moving services bihar",
        "professional movers patna",
        "expert packing services",
        "secure moving solutions",
        "packers movers bihar",
        "moving company patna",
        "professional packing services",
        "secure transportation bihar",
        "moving solutions packers",
        "packing services patna",
        "moving company bihar",
        "professional packers movers",
        "secure moving patna",
        "packing moving services",
        "reliable movers bihar"
    ].join(", "),
    openGraph: {
        title: `Packing & Moving Services | ${siteConstants.name} - Professional Moving Solutions in Bihar`,
        description: "Expert packing and moving services in Bihar. Chhotkan Packers Movers provides professional packing, secure transportation, and safe delivery of your belongings.",
        url: `${siteConstants.url}/services/packing-and-moving`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Chhotkan Packers Movers - Packing and Moving Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Packing & Moving Services | ${siteConstants.name} - Professional Moving Solutions in Bihar`,
        description: "Expert packing and moving services in Bihar. Chhotkan Packers Movers provides professional packing, secure transportation, and safe delivery of your belongings.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/services/packing-and-moving",
    },
};

export default function PackingMovingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
