import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — simple CPU + network mark, navy/teal, no Swiss cross. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 78,
            height: 78,
            border: "3px solid #14B8A6",
            borderRadius: 12,
            marginBottom: 10,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 31,
              top: 14,
              width: 12,
              height: 12,
              border: "2.5px solid #FFFFFF",
              borderRadius: 999,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 14,
              top: 42,
              width: 10,
              height: 10,
              border: "2.5px solid #14B8A6",
              borderRadius: 999,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 50,
              top: 42,
              width: 10,
              height: 10,
              border: "2.5px solid #14B8A6",
              borderRadius: 999,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 1,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#FFFFFF" }}>IT </span>
          <span style={{ color: "#14B8A6" }}>NWS</span>
        </div>
        <div
          style={{
            marginTop: 8,
            color: "#94A3B8",
            fontSize: 11,
            letterSpacing: 2,
          }}
        >
          Nordwestschweiz
        </div>
      </div>
    ),
    { ...size },
  );
}
