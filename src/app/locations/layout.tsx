import type { Metadata } from "next";
import { siteConstants } from "@/constants/siteConstants";

export const metadata: Metadata = {
    title: `Service Locations | ${siteConstants.name} - Packers and Movers in All 38 Districts of Bihar`,
    description: "Find Chhotkan Packers Movers in all 38 districts of Bihar. We provide professional moving services in Patna, Gaya, Bhagalpur, Muzaffarpur, Darbhanga, and all across Bihar. Get local moving solutions.",
    keywords: [
        "packers and movers locations bihar",
        "moving services patna",
        "packers movers gaya",
        "moving company bhagalpur",
        "packers movers muzaffarpur",
        "moving services darbhanga",
        "packers movers purnia",
        "moving company ara",
        "packers movers begusarai",
        "moving services katihar",
        "packers movers chhapra",
        "moving company sitamarhi",
        "packers movers samastipur",
        "moving services vaishali",
        "packers movers saran",
        "moving company east champaran",
        "packers movers west champaran",
        "moving services nalanda",
        "packers movers rohtas",
        "moving company buxar",
        "packers movers kaimur",
        "moving services aurangabad",
        "packers movers jamui",
        "moving company banka",
        "packers movers munger",
        "moving services lakhisarai",
        "packers movers sheikhpura",
        "moving company nawada",
        "packers movers jehanabad",
        "moving services arwal",
        "packers movers sheohar",
        "moving company madhubani",
        "packers movers supaul",
        "moving services saharsa",
        "packers movers khagaria",
        "moving company kishanganj",
        "packers movers araria",
        "moving services pashchim champaran",
        "packers movers purbi champaran",
        "moving company siwan",
        "packers movers gopalganj",
        "moving services bettiah",
        "packers movers motihari",
        "moving company bodh gaya",
        "packers movers rajgir",
        "moving services nalanda",
        "packers movers biharsharif",
        "moving company dehri on sone",
        "packers movers sasaram",
        "moving services bhabua",
        "local moving services bihar",
        "district wise packers movers",
        "moving company near me bihar"
    ].join(", "),
    openGraph: {
        title: `Service Locations | ${siteConstants.name} - Packers and Movers in All 38 Districts of Bihar`,
        description: "Find Chhotkan Packers Movers in all 38 districts of Bihar. We provide professional moving services in Patna, Gaya, Bhagalpur, Muzaffarpur, Darbhanga, and all across Bihar.",
        url: `${siteConstants.url}/locations`,
        siteName: siteConstants.name,
        type: "website",
        locale: "en_IN",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Chhotkan Packers Movers - Service Locations Across Bihar",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Service Locations | ${siteConstants.name} - Packers and Movers in All 38 Districts of Bihar`,
        description: "Find Chhotkan Packers Movers in all 38 districts of Bihar. We provide professional moving services in Patna, Gaya, Bhagalpur, Muzaffarpur, Darbhanga, and all across Bihar.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "/locations",
    },
};

export default function LocationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
