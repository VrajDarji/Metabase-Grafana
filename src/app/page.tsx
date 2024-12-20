import getIframeURL from "@/utils/getIframeUrl";

export default function Home() {
  const userId = "3665821a-3d01-49c4-90e0-72beb64a6059";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "16px",
        padding: "16px",
      }}
      className="container"
    >
      <div style={{ display: "flex", flexDirection: "row", columnGap: "16px" }}>
        <iframe
          src={getIframeURL({
            questionNo: 38,
            userId,
          })}
          frameBorder={0}
          width={500}
          height={200}
          allowTransparency
        />
        <iframe
          src={getIframeURL({
            questionNo: 39,
            userId,
          })}
          frameBorder={0}
          width={500}
          height={200}
          allowTransparency
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", columnGap: "16px" }}>
        <iframe
          src={getIframeURL({
            questionNo: 41,
            userId,
          })}
          frameBorder={0}
          width={800}
          height={400}
          allowTransparency
        />
        <iframe
          src={getIframeURL({
            questionNo: 42,
            userId,
          })}
          frameBorder={0}
          width={800}
          height={400}
          allowTransparency
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row", columnGap: "16px" }}>
        <iframe
          src={getIframeURL({
            questionNo: 44,
            userId,
          })}
          frameBorder={0}
          width={800}
          height={400}
          allowTransparency
        />
        <iframe
          src={getIframeURL({
            questionNo: 100,
            userId,
          })}
          frameBorder={0}
          width={800}
          height={400}
          allowTransparency
        />
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <iframe
          src={getIframeURL({
            questionNo: 53,
            userId,
          })}
          frameBorder={0}
          width={1500}
          height={600}
          allowTransparency
        />
      </div>
    </div>
  );
}
