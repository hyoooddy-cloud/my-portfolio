type NotionFile = {
  file?: { url: string };
  external?: { url: string };
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  type: string;
  role: string;
  thumbnail: string;
  overview: string;
  concept: string;
  point1: string;
  point2: string;
  point3: string;
  detailImages: string[];
  cardLabel: string;
};

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATA_SOURCE_ID = process.env.NOTION_DATA_SOURCE_ID;

function getPlainText(property: any): string {
  if (!property) return "";

  if (property.type === "title") {
    return property.title?.map((item: any) => item.plain_text).join("") ?? "";
  }

  if (property.type === "rich_text") {
    return property.rich_text?.map((item: any) => item.plain_text).join("") ?? "";
  }

  if (property.type === "select") {
    return property.select?.name ?? "";
  }

  if (property.type === "number") {
    return String(property.number ?? "");
  }

  if (property.type === "url") {
    return property.url ?? "";
  }

  return "";
}

function getFileUrl(property: any): string {
  const file = property?.files?.[0] as NotionFile | undefined;
  return file?.file?.url || file?.external?.url || "";
}

function mapPageToProject(page: any): Project {
  const props = page.properties ?? {};

  const detail1 = getFileUrl(props.DetailImage1);
  const detail2 = getFileUrl(props.DetailImage2);

  return {
    slug: getPlainText(props.Slug),
    title: getPlainText(props.Title),
    category: getPlainText(props.Category),
    year: getPlainText(props.Year),
    type: getPlainText(props.Type),
    role: getPlainText(props.Role),
    thumbnail: getFileUrl(props.Thumbnail),
    overview: getPlainText(props.Overview),
    concept: getPlainText(props.Concept),
    point1: getPlainText(props.Point1),
    point2: getPlainText(props.Point2),
    point3: getPlainText(props.Point3),
    detailImages: [detail1, detail2].filter(Boolean),
    cardLabel: getPlainText(props.CardLabel) || getPlainText(props.Category),
  };
}

async function queryNotion() {
  if (!NOTION_TOKEN || !NOTION_DATA_SOURCE_ID) {
    throw new Error("NOTION_TOKEN 또는 NOTION_DATA_SOURCE_ID가 없습니다.");
  }

  const res = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATA_SOURCE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        sorts: [
          {
            property: "Slug",
            direction: "descending",
          },
        ],
      }),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion API 오류: ${res.status} ${text}`);
  }

  return res.json();
}

export async function getProjects(): Promise<Project[]> {
  const data = await queryNotion();
  return (data.results ?? []).map(mapPageToProject);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}