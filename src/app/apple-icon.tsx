import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — crafted triad network mark, navy/teal, no Swiss cross. */
export default function AppleIcon() {
  const node = (left: number, top: number, filled: boolean) => (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: 18,
        height: 18,
        borderRadius: 999,
        background: filled ? "#14B8A6" : "#0F172A",
        border: filled ? "none" : "3px solid #14B8A6",
        boxSizing: "border-box",
      }}
    />
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F172A",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 112,
            height: 112,
            display: "flex",
          }}
        >
          {/* triad edges */}
          <div
            style={{
              position: "absolute",
              left: 30,
              top: 45,
              width: 52,
              height: 3,
              background: "#14B8A6",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 28,
              top: 48,
              width: 3,
              height: 42,
              background: "#14B8A6",
              borderRadius: 2,
              transform: "rotate(38deg)",
              transformOrigin: "top center",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 28,
              top: 48,
              width: 3,
              height: 42,
              background: "#14B8A6",
              borderRadius: 2,
              transform: "rotate(-38deg)",
              transformOrigin: "top center",
            }}
          />
          {node(21, 32, false)}
          {node(73, 32, false)}
          {node(47, 78, true)}
        </div>
      </div>
    ),
    { ...size },
  );
}
