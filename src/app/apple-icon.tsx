import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — navy/teal mark without Swiss cross (matches public/it-nws-logo.svg). */
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
            width: 90,
            height: 70,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 12,
              top: 4,
              width: 16,
              height: 16,
              border: "3px solid #14B8A6",
              borderRadius: 999,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 62,
              top: 4,
              width: 16,
              height: 16,
              border: "3px solid #14B8A6",
              borderRadius: 999,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 37,
              top: 36,
              width: 16,
              height: 16,
              border: "3px solid #FFFFFF",
              borderRadius: 999,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
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
