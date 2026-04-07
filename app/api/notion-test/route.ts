import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });

    const dataSourceId = process.env.NOTION_DATA_SOURCE_ID;

    if (!process.env.NOTION_TOKEN) {
      return NextResponse.json(
        {
          ok: false,
          step: "env",
          message: "NOTION_TOKEN 이 없음",
        },
        { status: 500 }
      );
    }

    if (!dataSourceId) {
      return NextResponse.json(
        {
          ok: false,
          step: "env",
          message: "NOTION_DATA_SOURCE_ID 이 없음",
        },
        { status: 500 }
      );
    }

    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
    });

    return NextResponse.json({
      ok: true,
      count: response.results.length,
      results: response.results,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        ok: false,
        step: "query",
        message: error?.message || "알 수 없는 오류",
        error,
      },
      { status: 500 }
    );
  }
}