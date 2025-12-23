export default async (request, context) => {
  const country = context.geo?.country?.code || "XX";
  const allowed = ["US", "CA", "GB"];

  if (!allowed.includes(country)) {
    return new Response("Not available in your country", { status: 403 });
  }

  return context.next();
};
