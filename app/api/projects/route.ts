import { getProjects } from "../../../lib/notion";

export async function GET() {
  try {
    const projects = await getProjects();
    return Response.json(projects);
  } catch (error) {
    console.error("GET /api/projects error:", error);

    return Response.json(
      { message: "프로젝트 데이터를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}