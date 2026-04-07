import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

function getPlainText(prop: any) {
  if (!prop) return "";

  if (prop.type === "title") {
    return prop.title?.map((item: any) => item.plain_text).join("") || "";
  }

  if (prop.type === "rich_text") {
    return prop.rich_text?.map((item: any) => item.plain_text).join("") || "";
  }

  return "";
}

function getSelect(prop: any) {
  return prop?.select?.name || "";
}

function getFiles(prop: any) {
  if (!prop || prop.type !== "files") return [];

  return (
    prop.files?.map((file: any) => {
      if (file.type === "file") return file.file?.url || "";
      if (file.type === "external") return file.external?.url || "";
      return "";
    }).filter(Boolean) || []
  );
}

function mapProject(page: any) {
  const props = page.properties || {};

  const detailImages = [
    ...getFiles(props.DetailImage1),
    ...getFiles(props.DetailImage2),
    ...getFiles(props.DetailImage3),
    ...getFiles(props.DetailImage4),
    ...getFiles(props.DetailImage5),
  ];

  return {
    slug: getPlainText(props.Slug) || page.id,
    title: getPlainText(props.Title),
    category: getSelect(props.Category),
    year: getPlainText(props.Year),
    type: getPlainText(props.Type),
    role: getPlainText(props.Role),
    thumbnail: getFiles(props.Thumbnail)[0] || "",
    overview: getPlainText(props.Overview),
    concept: getPlainText(props.Concept),
    point1: getPlainText(props.Point1),
    point2: getPlainText(props.Point2),
    point3: getPlainText(props.Point3),
    detailImages,
    cardLabel: getPlainText(props.CardLabel),
  };
}

export async function getProjects() {
  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_DATA_SOURCE_ID!,
    });

    return response.results.map((page: any) => mapProject(page));
  } catch (error) {
    console.error("Notion fetch error:", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    const projects = await getProjects();
    return projects.find((project: any) => project.slug === slug) || null;
  } catch (error) {
    console.error("Notion getProjectBySlug error:", error);
    return null;
  }
}