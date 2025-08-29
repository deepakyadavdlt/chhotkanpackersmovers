import { siteConstants } from "@/constants/siteConstants";

export async function GET() {
    // List your static routes
    const staticPages = [
        "",
        "about",
        "contact",
        "locations",
        "services",
        "services/packing-and-moving",
        "services/office-relocation",
        "services/domestic-moving",
        "services/car-transport",
        "services/warehousing-and-storage",
        "services/international-moving",
        "services/loading-and-unloading",
    ];

    // All 38 districts of Bihar
    const districts = [
        "araria", "arwal", "aurangabad", "banka", "begusarai", "bhagalpur",
        "bhojpur", "buxar", "darbhanga", "east-champaran", "gaya", "gopalganj",
        "jamui", "jehanabad", "kaimur", "katihar", "khagaria", "kishanganj",
        "lakhisarai", "madhepura", "madhubani", "munger", "muzaffarpur",
        "nalanda", "nawada", "patna", "purnia", "rohtas", "saharsa",
        "samastipur", "saran", "sheikhpura", "sheohar", "sitamarhi",
        "siwan", "supaul", "vaishali", "west-champaran"
    ];

    const baseUrl = siteConstants.url.replace(/\/$/, "");

    // Generate static page URLs
    let urls = staticPages.map(
        (page) => `<url><loc>${baseUrl}/${page}</loc></url>`
    );

    // Generate dynamic district URLs for packers and movers
    urls = urls.concat(
        districts.map(
            (district) =>
                `<url><loc>${baseUrl}/packers-and-movers-in-${district}</loc></url>`
        )
    );

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
