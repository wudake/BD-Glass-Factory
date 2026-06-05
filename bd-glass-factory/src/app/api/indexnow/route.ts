const INDEXNOW_KEY = "dd5f85a303e228068338d592fc2517d9";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export async function GET() {
  // Return the key so Bing/Yandex can verify key ownership
  return Response.json({ key: INDEXNOW_KEY, endpoint: INDEXNOW_ENDPOINT });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { urlList } = body;

    if (!urlList || !Array.isArray(urlList) || urlList.length === 0) {
      return Response.json(
        { error: "urlList is required and must be a non-empty array" },
        { status: 400 }
      );
    }

    // Validate all URLs belong to our domain
    const invalidUrls = urlList.filter(
      (url: string) =>
        !url.startsWith("https://bdglassfactory.com") &&
        !url.startsWith("https://www.bdglassfactory.com")
    );
    if (invalidUrls.length > 0) {
      return Response.json(
        { error: "All URLs must belong to bdglassfactory.com" },
        { status: 400 }
      );
    }

    // Submit to IndexNow
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: "bdglassfactory.com",
        key: INDEXNOW_KEY,
        keyLocation: `https://bdglassfactory.com/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("IndexNow submission failed:", errorText);
      return Response.json(
        { error: "IndexNow submission failed", detail: errorText },
        { status: 502 }
      );
    }

    return Response.json({ success: true, submitted: urlList.length });
  } catch (error) {
    console.error("IndexNow error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
