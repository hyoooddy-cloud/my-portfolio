import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f5f5f7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.1,
          }}
        >
          Little designs,
          <br />
          big feelings.
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            color: "#666",
          }}
        >
          Ryo Portfolio · Marketing Designer
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}