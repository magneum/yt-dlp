("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
export async function AudioSeperator(json) {
  try {
    const medium = json.formats.filter(
      (res) =>
        (res.format_id === "140" &&
          res.format_note === "medium" &&
          res.resolution === "audio only") ||
        (res.format_id === "251" &&
          res.format_note === "medium" &&
          res.resolution === "audio only")
    );
    const low = json.formats.filter(
      (res) =>
        (res.format_id === "139" &&
          res.format_note === "low" &&
          res.resolution === "audio only") ||
        (res.format_id === "249" &&
          res.format_note === "low" &&
          res.resolution === "audio only") ||
        (res.format_id === "250" &&
          res.format_note === "low" &&
          res.resolution === "audio only")
    );
    const ultralow = json.formats.filter(
      (res) =>
        (res.format_id === "599" &&
          res.format_note === "ultralow" &&
          res.resolution === "audio only") ||
        (res.format_id === "600" &&
          res.format_note === "ultralow" &&
          res.resolution === "audio only")
    );

    if (medium) {
      return {
        type: "medium",
        resolution: "audio only",
        url: medium[0].url || medium[1].url || medium.url,
      };
    } else if (low) {
      return {
        type: "low",
        resolution: "audio only",
        url: low[0].url || low[1].url || low[2].url || low.url,
      };
    } else if (ultralow) {
      return {
        type: "ultralow",
        resolution: "audio only",
        url: ultralow[0].url || ultralow[1].url || ultralow.url,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } catch (error) {
    return error.message;
  }
}

export async function AudioQualityCustom(json, quality) {
  try {
    const medium = json.formats.filter(
      (res) =>
        (res.format_id === "140" &&
          res.format_note === "medium" &&
          res.resolution === "audio only") ||
        (res.format_id === "251" &&
          res.format_note === "medium" &&
          res.resolution === "audio only")
    );
    const low = json.formats.filter(
      (res) =>
        (res.format_id === "139" &&
          res.format_note === "low" &&
          res.resolution === "audio only") ||
        (res.format_id === "249" &&
          res.format_note === "low" &&
          res.resolution === "audio only") ||
        (res.format_id === "250" &&
          res.format_note === "low" &&
          res.resolution === "audio only")
    );
    const ultralow = json.formats.filter(
      (res) =>
        (res.format_id === "599" &&
          res.format_note === "ultralow" &&
          res.resolution === "audio only") ||
        (res.format_id === "600" &&
          res.format_note === "ultralow" &&
          res.resolution === "audio only")
    );

    if (quality === "best-possible") {
      if (medium) {
        return {
          quality: "best-possible",
          resolution: "audio only",
          url: medium[0].url || medium[1].url || medium.url,
        };
      } else if (!medium && low) {
        return {
          quality: "best-possible",
          resolution: "audio only",
          url: low[0].url || low[1].url || low[2].url || low.url,
        };
      } else if (!medium && !low && ultralow) {
        return {
          quality: "best-possible",
          resolution: "audio only",
          url: ultralow[0].url || ultralow[1].url || ultralow.url,
        };
      } else throw new Error("SORRY: Quality Not Found.");
    } else if (quality === "medium-possible") {
      if (low) {
        return {
          quality: "medium-possible",
          resolution: "audio only",
          url: low[0].url || low[1].url || low[2].url || low.url,
        };
      } else if (!low && ultralow) {
        return {
          quality: "medium-possible",
          resolution: "audio only",
          url: ultralow[0].url || ultralow[1].url || ultralow.url,
        };
      } else throw new Error("SORRY: Quality Not Found.");
    } else if (quality === "lowest-possible") {
      if (ultralow) {
        return {
          quality: "lowest-possible",
          resolution: "audio only",
          url: ultralow[0].url || ultralow[1].url || ultralow.url,
        };
      } else throw new Error("SORRY: Quality Not Found.");
    } else throw new Error("ERROR: Wrong Quality Provided.");
  } catch (error) {
    return error.message;
  }
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
