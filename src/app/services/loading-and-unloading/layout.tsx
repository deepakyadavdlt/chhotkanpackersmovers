import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `Loading & Unloading Services | ${siteConstants.name} - Professional Moving Support in Bihar`,
    description: "Expert loading and unloading services in Bihar. Chhotkan Packers Movers provides professional moving support, safe handling, and efficient loading/unloading of your belongings. Available across all 38 districts.",
    keywords: [
        "loading and unloading services bihar",
        "moving support patna",
        "professional loading services",
        "safe unloading bihar",
        "moving assistance patna",
        "loading unloading packers",
        "moving support services",
        "professional movers support",
        "loading services patna",
        "unloading services bihar",
        "moving assistance packers",
        "professional loading unloading",
        "safe moving support",
        "loading unloading bihar",
        "moving support packers movers"
    ].join(", "),
    openGraph: {
        title: `Loading & Unloading Services | ${siteConstants.name} - Professional Moving Support in Bihar`,
        description: "Expert loading and unloading services in Bihar. Chhotkan Packers Movers provides professional moving support, safe handling, and efficient loading/unloading of your belongings.",
        url: `${siteConstants.url}/services/loading-and-unloading`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Chhotkan Packers Movers - Loading and Unloading Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Loading & Unloading Services | ${siteConstants.name} - Professional Moving Support in Bihar`,
        description: "Expert loading and unloading services in Bihar. Chhotkan Packers Movers provides professional moving support, safe handling, and efficient loading/unloading of your belongings.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/services/loading-and-unloading",
    },
};

export default function LoadingUnloadingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
