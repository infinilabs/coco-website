import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { type: string } }
) {
  const url = new URL(req.url);
  const query = url.searchParams.get("query") ?? "";
  const from = url.searchParams.get("from") ?? "0";
  const size = url.searchParams.get("size") ?? "9";
  const sort = url.searchParams.get("sort") ?? "";

  const remote = `https://coco.infini.cloud/store/server/${
    params.type
  }/_search?query=${encodeURIComponent(query)}&from=${from}&size=${size}${
    sort ? `&sort=${encodeURIComponent(sort)}` : ""
  }`;

  try {
    const res = await fetch(remote, {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
    const body = await res.text();
    return new Response(body, {
      status: res.status,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    return new Response(
      JSON.stringify({
        hits: { total: { relation: "eq", value: 0 }, max_score: 0, hits: [] },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
  }
}
