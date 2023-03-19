"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
// ╔⧉༻ ❝ ⚡ ⒸYT-DLP ⚡ ❞
// ║ Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +918436686758, +917430922909
// ╚════════════╝

// MIT License
// Copyright (c) 2023 Mågnëum </>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
import utils from "../../utils/index.js";
import config from "../../config/index.js";

async function Custom_Quality_Data(app) {
  app.sort = app.sort || "high";
  app.yturl = app.yturl || config.no_yturl;
  if (!utils.regexpyt(app.yturl)) {
    throw new Error(config.audioData_customQuality_no_url);
  } else
    var promise = utils
      .probdl(app.yturl, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      })
      .catch(() => {
        throw new Error(config.ExecJson);
      });
  const jsonmeta = await utils.logger(promise, "FETCHING....\n");
  const medium = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "140" &&
        res.format_note === "medium" &&
        res.resolution === "audio only") ||
      (res.format_id === "251" &&
        res.format_note === "medium" &&
        res.resolution === "audio only")
  );
  const low = jsonmeta.formats.filter(
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
  const ultralow = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "599" &&
        res.format_note === "ultralow" &&
        res.resolution === "audio only") ||
      (res.format_id === "600" &&
        res.format_note === "ultralow" &&
        res.resolution === "audio only")
  );

  if (app.sort === "high") {
    return {
      type: "high",
      resolution: "audio-only",
      filesize:
        medium[0].filesize || medium[1].filesize || medium.filesize || null,
      audiochannels:
        medium[0].audio_channels ||
        medium[1].audio_channels ||
        medium.audio_channels ||
        null,
      extensions: medium[0].ext || medium[1].ext || medium.ext || null,
      acodec: medium[0].acodec || medium[1].acodec || medium.acodec || null,
      url: medium[0].url || medium[1].url || medium.url || null,
    };
  } else if (app.sort === "medium") {
    return {
      type: "medium",
      resolution: "audio-only",
      filesize:
        low[0].filesize ||
        low[1].filesize ||
        low[2].filesize ||
        low.filesize ||
        null,
      audiochannels:
        low[0].audio_channels ||
        low[1].audio_channels ||
        low[2].audio_channels ||
        low.audio_channels ||
        null,
      extensions: low[0].ext || low[1].ext || low[2].ext || low.ext || null,
      acodec:
        low[0].acodec || low[1].acodec || low[2].acodec || low.acodec || null,
      url: low[0].url || low[1].url || low[2].url || low.url || null,
    };
  } else if (app.sort === "low") {
    return {
      type: "low",
      resolution: "audio-only",
      filesize:
        ultralow[0].filesize ||
        ultralow[1].filesize ||
        ultralow.filesize ||
        null,
      audiochannels:
        ultralow[0].audio_channels ||
        ultralow[1].audio_channels ||
        ultralow.audio_channels ||
        null,
      extensions: ultralow[0].ext || ultralow[1].ext || ultralow.ext || null,
      acodec:
        ultralow[0].acodec || ultralow[1].acodec || ultralow.acodec || null,
      url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
    };
  } else throw new Error(config.no_quality);
}
async function Auto_Sorted_Data(app) {
  app.yturl = app.yturl || config.no_yturl;
  app.quality = app.quality || "highest-possible";
  if (!utils.regexpyt(app.yturl)) {
    throw new Error(config.audioData_customQuality_no_url);
  } else
    var promise = utils
      .probdl(app.yturl, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      })
      .catch((error) => {
        throw new Error(config.ExecJson);
      });
  const jsonmeta = await utils.logger(promise, "FETCHING....\n");
  const medium = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "140" &&
        res.format_note === "medium" &&
        res.resolution === "audio only") ||
      (res.format_id === "251" &&
        res.format_note === "medium" &&
        res.resolution === "audio only")
  );
  const low = jsonmeta.formats.filter(
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
  const ultralow = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "599" &&
        res.format_note === "ultralow" &&
        res.resolution === "audio only") ||
      (res.format_id === "600" &&
        res.format_note === "ultralow" &&
        res.resolution === "audio only")
  );

  if (app.quality === "highest-possible") {
    if (medium) {
      return {
        quality: "highest-possible",
        resolution: "audio-only",
        filesize:
          medium[0].filesize || medium[1].filesize || medium.filesize || null,
        audiochannels:
          medium[0].audio_channels ||
          medium[1].audio_channels ||
          medium.audio_channels ||
          null,
        extensions: medium[0].ext || medium[1].ext || medium.ext || null,
        acodec: medium[0].acodec || medium[1].acodec || medium.acodec || null,
        url: medium[0].url || medium[1].url || medium.url || null,
      };
    } else if (!medium && low) {
      return {
        quality: "highest-possible",
        resolution: "audio-only",
        filesize:
          low[0].filesize ||
          low[1].filesize ||
          low[2].filesize ||
          low.filesize ||
          null,
        audiochannels:
          low[0].audio_channels ||
          low[1].audio_channels ||
          low[2].audio_channels ||
          low.audio_channels ||
          null,
        extensions: low[0].ext || low[1].ext || low[2].ext || low.ext || null,
        acodec:
          low[0].acodec || low[1].acodec || low[2].acodec || low.acodec || null,
        url: low[0].url || low[1].url || low[2].url || low.url || null,
      };
    } else if (!medium && !low && ultralow) {
      return {
        quality: "highest-possible",
        resolution: "audio-only",
        filesize:
          ultralow[0].filesize ||
          ultralow[1].filesize ||
          ultralow.filesize ||
          null,
        audiochannels:
          ultralow[0].audio_channels ||
          ultralow[1].audio_channels ||
          ultralow.audio_channels ||
          null,
        extensions: ultralow[0].ext || ultralow[1].ext || ultralow.ext || null,
        acodec:
          ultralow[0].acodec || ultralow[1].acodec || ultralow.acodec || null,
        url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
      };
    } else throw new Error(config.no_quality);
  } else if (app.quality === "lowest-possible") {
    if (ultralow) {
      return {
        quality: "lowest-possible",
        resolution: "audio-only",
        filesize:
          ultralow[0].filesize ||
          ultralow[1].filesize ||
          ultralow.filesize ||
          null,
        audiochannels:
          ultralow[0].audio_channels ||
          ultralow[1].audio_channels ||
          ultralow.audio_channels ||
          null,
        extensions: ultralow[0].ext || ultralow[1].ext || ultralow.ext || null,
        acodec:
          ultralow[0].acodec || ultralow[1].acodec || ultralow.acodec || null,
        url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
      };
    } else if (low) {
      return {
        quality: "lowest-possible",
        resolution: "audio-only",
        filesize:
          low[0].filesize ||
          low[1].filesize ||
          low[2].filesize ||
          low.filesize ||
          null,
        audiochannels:
          low[0].audio_channels ||
          low[1].audio_channels ||
          low[2].audio_channels ||
          low.audio_channels ||
          null,
        extensions: low[0].ext || low[1].ext || low[2].ext || low.ext || null,
        acodec:
          low[0].acodec || low[1].acodec || low[2].acodec || low.acodec || null,
        url: low[0].url || low[1].url || low[2].url || low.url || null,
      };
    } else if (medium) {
      return {
        quality: "lowest-possible",
        resolution: "audio-only",
        filesize:
          medium[0].filesize || medium[1].filesize || medium.filesize || null,
        audiochannels:
          medium[0].audio_channels ||
          medium[1].audio_channels ||
          medium.audio_channels ||
          null,
        extensions: medium[0].ext || medium[1].ext || medium.ext || null,
        acodec: medium[0].acodec || medium[1].acodec || medium.acodec || null,
        url: medium[0].url || medium[1].url || medium.url || null,
      };
    } else throw new Error(config.no_quality);
  } else throw new Error(config.wrong_quality);
}

export { Custom_Quality_Data, Auto_Sorted_Data };
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ ❝ ⚡ ⒸYT-DLP ⚡ ❞
// ║ Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +918436686758, +917430922909
// ╚════════════╝

// MIT License
// Copyright (c) 2023 Mågnëum </>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
