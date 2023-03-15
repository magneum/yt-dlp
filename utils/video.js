("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
export async function videoadvanced(json, quality) {
  var Format_2160p = json.formats.filter(
    (res) =>
      (res.format_id === "401" && res.format_note === "2160p") ||
      (res.format_id === "313" && res.format_note === "2160p")
  );
  var Format_1440p = json.formats.filter(
    (res) =>
      (res.format_id === "400" && res.format_note === "1440p") ||
      (res.format_id === "271" && res.format_note === "1440p")
  );

  var Format_1080p = json.formats.filter(
    (res) =>
      (res.format_id === "399" && res.format_note === "1080p") ||
      (res.format_id === "137" && res.format_note === "1080p") ||
      (res.format_id === "248" && res.format_note === "1080p")
  );

  var Format_720p = json.formats.filter(
    (res) =>
      (res.format_id === "247" && res.format_note === "720p") ||
      (res.format_id === "398" && res.format_note === "720p") ||
      (res.format_id === "136" && res.format_note === "720p") ||
      (res.format_id === "22" && res.format_note === "720p")
  );
  var Format_480p = json.formats.filter(
    (res) =>
      (res.format_id === "397" && res.format_note === "480p") ||
      (res.format_id === "135" && res.format_note === "480p") ||
      (res.format_id === "244" && res.format_note === "480p")
  );
  var Format_360p = json.formats.filter(
    (res) =>
      (res.format_id === "396" && res.format_note === "360p") ||
      (res.format_id === "134" && res.format_note === "360p") ||
      (res.format_id === "18" && res.format_note === "360p") ||
      (res.format_id === "243" && res.format_note === "360p")
  );
  var Format_240p = json.formats.filter(
    (res) =>
      (res.format_id === "395" && res.format_note === "240p") ||
      (res.format_id === "133" && res.format_note === "240p") ||
      (res.format_id === "242" && res.format_note === "240p")
  );
  var Format_144p = json.formats.filter(
    (res) =>
      (res.format_id === "17" && res.format_note === "144p") ||
      (res.format_id === "597" && res.format_note === "144p") ||
      (res.format_id === "598" && res.format_note === "144p") ||
      (res.format_id === "394" && res.format_note === "144p") ||
      (res.format_id === "160" && res.format_note === "144p") ||
      (res.format_id === "278" && res.format_note === "144p")
  );

  if (quality === "2160p") {
    if (Format_2160p) {
      return {
        type: "2160p",
        url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "1440p") {
    if (Format_1440p) {
      return {
        type: "1440p",
        url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "1080p") {
    if (Format_1080p) {
      return {
        type: "1080p",
        url:
          Format_1080p[0].url ||
          Format_1080p[1].url ||
          Format_1080p[2].url ||
          Format_1080p.url,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "720p") {
    if (Format_720p) {
      return {
        type: "720p",
        url:
          Format_720p[0].url ||
          Format_720p[1].url ||
          Format_720p[2].url ||
          Format_720p[3].url ||
          Format_720p.url,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "480p") {
    if (Format_480p) {
      return {
        type: "480p",
        url:
          Format_480p[0].url ||
          Format_480p[1].url ||
          Format_480p[2].url ||
          Format_480p.url,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "360p") {
    if (Format_360p) {
      return {
        type: "360p",
        url:
          Format_360p[0].url ||
          Format_360p[1].url ||
          Format_360p[2].url ||
          Format_360p[3].url ||
          Format_360p.url,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "240p") {
    if (Format_240p) {
      return {
        type: "240p",
        url:
          Format_240p[0].url ||
          Format_240p[1].url ||
          Format_240p[2].url ||
          Format_240p,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "144p") {
    if (Format_144p) {
      return {
        type: "144p",
        url:
          Format_144p[0].url ||
          Format_144p[1].url ||
          Format_144p[2].url ||
          Format_144p[3].url ||
          Format_144p[4].url ||
          Format_144p[5].url ||
          Format_144p.url,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } else throw new Error("ERROR: Wrong Quality Provided.");
}

export async function videocustomquality(json, quality) {
  var Format_2160p = json.formats.filter(
    (res) =>
      (res.format_id === "401" && res.format_note === "2160p") ||
      (res.format_id === "313" && res.format_note === "2160p")
  );
  var Format_1440p = json.formats.filter(
    (res) =>
      (res.format_id === "400" && res.format_note === "1440p") ||
      (res.format_id === "271" && res.format_note === "1440p")
  );

  var Format_1080p = json.formats.filter(
    (res) =>
      (res.format_id === "399" && res.format_note === "1080p") ||
      (res.format_id === "137" && res.format_note === "1080p") ||
      (res.format_id === "248" && res.format_note === "1080p")
  );

  var Format_720p = json.formats.filter(
    (res) =>
      (res.format_id === "247" && res.format_note === "720p") ||
      (res.format_id === "398" && res.format_note === "720p") ||
      (res.format_id === "136" && res.format_note === "720p") ||
      (res.format_id === "22" && res.format_note === "720p")
  );
  var Format_480p = json.formats.filter(
    (res) =>
      (res.format_id === "397" && res.format_note === "480p") ||
      (res.format_id === "135" && res.format_note === "480p") ||
      (res.format_id === "244" && res.format_note === "480p")
  );
  var Format_360p = json.formats.filter(
    (res) =>
      (res.format_id === "396" && res.format_note === "360p") ||
      (res.format_id === "134" && res.format_note === "360p") ||
      (res.format_id === "18" && res.format_note === "360p") ||
      (res.format_id === "243" && res.format_note === "360p")
  );
  var Format_240p = json.formats.filter(
    (res) =>
      (res.format_id === "395" && res.format_note === "240p") ||
      (res.format_id === "133" && res.format_note === "240p") ||
      (res.format_id === "242" && res.format_note === "240p")
  );
  var Format_144p = json.formats.filter(
    (res) =>
      (res.format_id === "17" && res.format_note === "144p") ||
      (res.format_id === "597" && res.format_note === "144p") ||
      (res.format_id === "598" && res.format_note === "144p") ||
      (res.format_id === "394" && res.format_note === "144p") ||
      (res.format_id === "160" && res.format_note === "144p") ||
      (res.format_id === "278" && res.format_note === "144p")
  );

  if (quality === "highest") {
    if (Format_2160p) {
      return {
        type: "highest possible",
        url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
      };
    } else if (!Format_2160p && Format_1440p) {
      return {
        type: "highest possible",
        url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
      };
    } else if (!Format_2160p && !Format_1440p && Format_1080p) {
      return {
        type: "highest possible",
        url: Format_1080p[0].url || Format_1080p[1].url || Format_1080p[2].url,
      };
    } else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "medium") {
    if (Format_720p) {
      return {
        type: "medium possible",
        url:
          Format_720p[0].url ||
          Format_720p[1].url ||
          Format_720p[2].url ||
          Format_720p[3].url ||
          Format_720p.url,
      };
    } else if (!Format_720p && Format_480p) {
      return {
        type: "medium possible",
        url:
          Format_480p[0].url ||
          Format_480p[1].url ||
          Format_480p[2].url ||
          Format_480p.url,
      };
    } else if (!Format_720p && !Format_480p && Format_360p) {
      return {
        type: "medium possible",
        url:
          Format_360p[0].url ||
          Format_360p[1].url ||
          Format_360p[2].url ||
          Format_360p[3].url ||
          Format_360p.url,
      };
    }
  } else if (quality === "lowest") {
    if (Format_240p) {
      return {
        type: "lowest possible",
        url:
          Format_240p[0].url ||
          Format_240p[1].url ||
          Format_240p[2].url ||
          Format_240p,
      };
    } else if (!Format_240p && Format_144p) {
      return {
        type: "lowest possible",
        url:
          Format_144p[0].url ||
          Format_144p[1].url ||
          Format_144p[2].url ||
          Format_144p[3].url ||
          Format_144p[4].url ||
          Format_144p[5].url ||
          Format_144p.url,
      };
    }
  } else throw new Error("ERROR: Wrong Quality Provided.");
}
