export default async function audio(jsondata) {
  var audioBp = jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "140" || (await data.format_id) === "251"
  );
  var audioMp = jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "139" ||
      (await data.format_id) === "249" ||
      (await data.format_id) === "250"
  );
  var audioLp = jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "599" || (await data.format_id) === "600"
  );

  if (!audioBp.width && !audioMp.width && audioLp.width) {
    let qLowest = audioLp[0] || audioLp[1] || audioLp;
    return qLowest;
  } else if (audioBp.width && audioMp.width && audioLp.width) {
    let qBest = audioBp[0] || audioBp[1] || audioBp;
    return qBest;
  } else if (!audioBp.width && audioMp.width && audioLp.width) {
    let qMedium = audioMp[0] || audioMp[1] || audioMp[2] || audioMp;
    return qMedium;
  } else if (!audioBp.width && !audioMp.width && !audioLp.width) {
    throw new Error("SORRY: Audio Not Found.");
  }
}

export async function audioQulity(jsondata, quality) {
  var audioBp = jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "140" || (await data.format_id) === "251"
  );
  var audioMp = jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "139" ||
      (await data.format_id) === "249" ||
      (await data.format_id) === "250"
  );
  var audioLp = jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "599" || (await data.format_id) === "600"
  );

  if (quality === "best-possible") {
    if (audioBp.width) return audioBp[0] || audioBp[1] || audioBp;
    else if (!audioBp.width && audioMp.width)
      return audioMp[0] || audioMp[1] || audioMp[2] || audioMp;
    else if (!audioBp.width && !audioMp.width && audioLp.width)
      return audioLp[0] || audioLp[1] || audioLp;
    else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "medium-possible") {
    if (audioMp.width) return audioMp[0] || audioMp[1] || audioMp[2] || audioMp;
    else if (!audioMp.width && audioLp.width)
      return audioLp[0] || audioLp[1] || audioLp;
    else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "lowest-possible") {
    if (audioLp.width) return audioLp[0] || audioLp[1] || audioLp;
    else throw new Error("SORRY: Quality Not Found.");
  } else throw new Error("ERROR: Wrong Quality Provided.");
}
