("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
async function VideoQualityCustom(jsondata, quality) {
  var videoBest = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "399" ||
      (await data.format_id) === "137" ||
      (await data.format_id) === "248"
  );
  var videoHighest = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "247" ||
      (await data.format_id) === "398" ||
      (await data.format_id) === "136" ||
      (await data.format_id) === "22"
  );
  var videoHigh = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "397" ||
      (await data.format_id) === "135" ||
      (await data.format_id) === "244"
  );
  var videoMedium = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "396" ||
      (await data.format_id) === "134" ||
      (await data.format_id) === "18" ||
      (await data.format_id) === "243"
  );
  var videoLow = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "395" ||
      (await data.format_id) === "133" ||
      (await data.format_id) === "242"
  );
  var videoLowest = await jsondata.formats.filter(
    async (data) =>
      (await data.format_id) === "17" ||
      (await data.format_id) === "597" ||
      (await data.format_id) === "598" ||
      (await data.format_id) === "394" ||
      (await data.format_id) === "160" ||
      (await data.format_id) === "278"
  );

  var TubeBest = videoBest[2] || videoBest[1] || videoBest[0] || videoBest;
  var TubeHighest =
    videoHighest[3] ||
    videoHighest[2] ||
    videoHighest[1] ||
    videoHighest[0] ||
    videoHighest;
  var TubeHigh = videoHigh[0] || videoHigh[1] || videoHigh[2] || videoHigh;
  var TubeMedium =
    videoMedium[0] ||
    videoMedium[1] ||
    videoMedium[2] ||
    videoMedium[3] ||
    videoMedium;
  var TubeLow = videoLow[0] || videoLow[1] || videoLow[2] || videoLow;
  var TubeLowest =
    videoLowest[0] ||
    videoLowest[1] ||
    videoLowest[2] ||
    videoLowest[3] ||
    videoLowest[4] ||
    videoLowest[5] ||
    videoLowest;
}
