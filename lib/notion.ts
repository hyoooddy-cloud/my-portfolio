import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getProjects() {
  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_DATA_SOURCE_ID!,
    });

    return response.results.map((page: any) => {
      const props = page.properties;

      const getText = (key: string) => {
        const prop = props[key];
        if (!prop) return "";

        if (prop.type === "title") {
          return prop.title?.[0]?.plain_text || "";
        }

        if (prop.type === "rich_text") {
          return prop.rich_text?.[0]?.plain_text || "";
        }

        return "";
      };

      const getSelect = (key: string) => {
        return props[key]?.select?.name || "";
      };

      const getFiles = (key: string) => {
        const file = props[key]?.files?.[0];
        if (!file) return "";

        if (file.type === "file") return file.file?.url || "";
        if (file.type === "external") return file.external?.url || "";

        return "";
      };

      return {
        slug: getText("Slug") || page.id,
        title: getText("Title"),
        category: getSelect("Category"),
        year: getText("Year"),
        type: getText("Type"),
        role: getText("Role"),
        thumbnail: getFiles("Thumbnail"),
        overview: getText("Overview"),
        concept: getText("Concept"),
        point1: getText("Point1"),
        point2: getText("Point2"),
        point3: getText("Point3"),
        detailImages: [],
        cardLabel: getText("CardLabel"),
      };
    });
  } catch (error) {
    console.error("Notion fetch error:", error);
    return [];
  }
}