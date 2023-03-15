("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
async function AudioSeperator(jsondata) {
  // const AudioSeperated = await AudioSeperator(jsondata);
  // console.log("SEPERATED AUDIO: ", AudioSeperated);
  const AudioBp = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "140" || (await data.format_id) === "251"
  );
  const AudioMp = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "139" ||
      (await data.format_id) === "249" ||
      (await data.format_id) === "250"
  );
  const AudioLp = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "599" || (await data.format_id) === "600"
  );

  if (!AudioBp.width && !AudioMp.width && AudioLp.width)
    return AudioLp[0] || AudioLp[1] || AudioLp;
  else if (!AudioBp.width && AudioMp.width && AudioLp.width)
    return AudioMp[0] || AudioMp[1] || AudioMp[2] || AudioMp;
  else if (AudioBp.width && AudioMp.width && AudioLp.width)
    return AudioBp[0] || AudioBp[1] || AudioBp;
  else throw new Error("SORRY: Audio Not Found.");
}

async function AudioQualityCustom(jsondata, quality) {
  // const AudioQualityCustom = await AudioQualityCustom(jsondata, "best-possible");
  // console.log("CUSTOM AUDIO: ", AudioQualityCustom);
  const AudioBp = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "140" || (await data.format_id) === "251"
  );
  const AudioMp = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "139" ||
      (await data.format_id) === "249" ||
      (await data.format_id) === "250"
  );
  const AudioLp = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "599" || (await data.format_id) === "600"
  );

  if (quality === "best-possible") {
    if (AudioBp.width) return AudioBp[0] || AudioBp[1] || AudioBp;
    else if (!AudioBp.width && AudioMp.width)
      return AudioMp[0] || AudioMp[1] || AudioMp[2] || AudioMp;
    else if (!AudioBp.width && !AudioMp.width && AudioLp.width)
      return AudioLp[0] || AudioLp[1] || AudioLp;
    else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "medium-possible") {
    if (AudioMp.width) return AudioMp[0] || AudioMp[1] || AudioMp[2] || AudioMp;
    else if (!AudioMp.width && AudioLp.width)
      return AudioLp[0] || AudioLp[1] || AudioLp;
    else throw new Error("SORRY: Quality Not Found.");
  } else if (quality === "lowest-possible") {
    if (AudioLp.width) return AudioLp[0] || AudioLp[1] || AudioLp;
    else throw new Error("SORRY: Quality Not Found.");
  } else throw new Error("ERROR: Wrong Quality Provided.");
}
export { AudioQualityCustom, AudioSeperator };
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
