export default async (request) => {
    const country = request.headers.get("x-nf-ip-country") || "";
    const allowed = ["US", "CA", "GB"];

    if (!allowed.includes(country)) {
        return new Response("<h2>Content not available in your region.</h2>", { status: 403, headers: { "Content-Type": "text/html" } });
    }

    const html = await fetch(request.url.replace("/.netlify/functions/geo-check", "/index.html")).then(res => res.text());

    return new Response(html, { headers: { "Content-Type": "text/html" } });
};
