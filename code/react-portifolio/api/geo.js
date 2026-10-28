export const config = { runtime: "edge" };

export default function handler(request) {
  return new Response(
    JSON.stringify({ country: request.headers.get("x-vercel-ip-country") }),
    {
      headers: {
        "content-type": "application/json",
        // Per-visitor answer: must never be shared through the CDN cache.
        "cache-control": "private, no-store",
      },
    },
  );
}
