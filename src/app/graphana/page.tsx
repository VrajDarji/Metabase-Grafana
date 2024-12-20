export default function Home() {
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
          src="https://grfana-custom-latest.onrender.com/d-solo/fe7gqma8ptjb4c/new-dashboard?orgId=1&from=2024-12-20T00:49:34.419Z&to=2024-12-20T06:49:34.419Z&timezone=browser&var-query0=&var-current_user_id=3665821a-3d01-49c4-90e0-72beb64a6059&panelId=1&__feature.dashboardSceneSolo"
          width="450"
          height="200"
        ></iframe>
        <iframe
          src="https://grfana-custom-latest.onrender.com/d-solo/fe7gqma8ptjb4c/new-dashboard?orgId=1&from=1734655774419&to=1734677374419&timezone=browser&var-query0=&var-current_user_id=3665821a-3d01-49c4-90e0-72beb64a6059&panelId=2&__feature.dashboardSceneSolo"
          width="450"
          height="200"
        ></iframe>
      </div>
      <div style={{ display: "flex", flexDirection: "row", columnGap: "16px" }}>
        <iframe
          src="https://grfana-custom-latest.onrender.com/d-solo/fe7gqma8ptjb4c/new-dashboard?orgId=1&from=1725494400000&to=1734480000000&timezone=browser&var-query0=&var-current_user_id=3665821a-3d01-49c4-90e0-72beb64a6059&panelId=3&__feature.dashboardSceneSolo"
          width="450"
          height="200"
        ></iframe>
        <iframe
          src="https://grfana-custom-latest.onrender.com/d-solo/fe7gqma8ptjb4c/new-dashboard?orgId=1&from=1725494400000&to=1734480000000&timezone=browser&var-query0=&var-current_user_id=3665821a-3d01-49c4-90e0-72beb64a6059&panelId=4&__feature.dashboardSceneSolo"
          width="450"
          height="200"
        ></iframe>
      </div>
      <div style={{ display: "flex", flex: 1 }}>
        <iframe
          src="https://grfana-custom-latest.onrender.com/d-solo/fe7gqma8ptjb4c/new-dashboard?orgId=1&from=1725494400000&to=1734480000000&timezone=browser&var-query0=&var-current_user_id=3665821a-3d01-49c4-90e0-72beb64a6059&panelId=5&__feature.dashboardSceneSolo"
          width="450"
          height="200"
        ></iframe>
      </div>
    </div>
  );
}
