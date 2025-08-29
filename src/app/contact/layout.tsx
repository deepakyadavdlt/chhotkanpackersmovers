import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `Contact Us | ${siteConstants.name} - Get Free Moving Quote | Packers and Movers in Bihar`,
    description: "Contact Chhotkan Packers Movers for free moving quotes and professional relocation services. Call us at +91-9229029223 or fill our contact form. We serve all 38 districts of Bihar with reliable moving solutions.",
    keywords: [
        "contact packers and movers bihar",
        "moving quote request patna",
        "packers movers contact number",
        "free moving estimate bihar",
        "moving company contact patna",
        "relocation quote request",
        "packers movers phone number",
        "moving services contact",
        "office relocation quote",
        "home shifting contact",
        "vehicle transport quote",
        "packing services contact",
        "moving company email",
        "packers movers address patna",
        "moving consultation bihar"
    ].join(", "),
    openGraph: {
        title: `Contact Us | ${siteConstants.name} - Get Free Moving Quote | Packers and Movers in Bihar`,
        description: "Contact Chhotkan Packers Movers for free moving quotes and professional relocation services. Call us at +91-9229029223 or fill our contact form.",
        url: `${siteConstants.url}/contact`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Contact Chhotkan Packers Movers - Get Free Moving Quote",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Contact Us | ${siteConstants.name} - Get Free Moving Quote | Packers and Movers in Bihar`,
        description: "Contact Chhotkan Packers Movers for free moving quotes and professional relocation services. Call us at +91-9229029223 or fill our contact form.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
