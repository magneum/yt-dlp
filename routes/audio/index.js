"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";

// ╔⧉༻ ❝ ⚡ ⒸYT-DLP ⚡ ❞
// ║ Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +918436686758, +917430922909
// ╚════════════╝

// YT-DLP Was Made For Easier Scrapping And Downloading Youtube Audios & Videos.
// If You Fork This Repo And Edit Plugins, It's Your Concern For Further Updates.
// Forking Repo Is Fine.
// But If You Edit Something We Will Not Provide Any Help.
// In Short, Fork At Your Own Risk.

// YT-DLP Is In No Way Affiliated With, Authorized, Maintained,
// Sponsored Or Endorsed By YouTube Or Any Of Its Affiliates Or
// Subsidiaries.
// This Is An Independent And Unofficial Software.
// Use At Your Own Risk.

// MIT License
// Copyright (c) 2023 Mågnëum </>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
import ExecJson from "youtube-dl-exec";
import ProgressEstimator from "progress-estimator";
const ProgressEst = ProgressEstimator();
function regExTestYT(str) {
  var exp = new RegExp(/(youtu\.be|youtube\.com)/);
  return exp.test(str);
}
function shorten(url) {
  https.get(
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
    (res) => {
      res.on("data", (chunk) => {
        return chunk.toString();
      });
    }
  );
}

export async function audioData_customQuality(rover) {
  rover.sort = rover.sort || "high";
  rover.url = rover.url || "not-a-youtube-link";
  if (!regExTestYT(rover.url)) {
    throw new Error("YouTube Link not found.Refer to docs for usage examples.");
  } else
    try {
      var Execjson = ExecJson(rover.url, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      }).catch(() => {
        throw new Error("Sorry some error occured.Try again!");
      });
      const jsonmeta = await ProgressEst(Execjson, "Obtaining: " + " ");
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

      if (rover.sort === "high")
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
      else if (rover.sort === "medium")
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
            low[0].acodec ||
            low[1].acodec ||
            low[2].acodec ||
            low.acodec ||
            null,
          url: low[0].url || low[1].url || low[2].url || low.url || null,
        };
      else if (rover.sort === "low")
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
          extensions:
            ultralow[0].ext || ultralow[1].ext || ultralow.ext || null,
          acodec:
            ultralow[0].acodec || ultralow[1].acodec || ultralow.acodec || null,
          url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
        };
      else
        throw new Error("Sorry this video doesn't have the Quality requested.");
    } catch (error) {
      return error.message;
    }
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
export async function audioData_autoSorted(rover) {
  rover.url = rover.url || "not-a-youtube-link";
  rover.quality = rover.quality || "highest-possible";
  if (!regExTestYT(rover.url)) {
    throw new Error("YouTube Link not found.Refer to docs for usage examples.");
  } else
    try {
      var Execjson = ExecJson(rover.url, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      }).catch(() => {
        throw new Error("Sorry some error occured.Try again!");
      });
      const jsonmeta = await ProgressEst(Execjson, "Obtaining: " + " ");
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

      if (rover.quality === "highest-possible") {
        if (medium)
          return {
            quality: "highest-possible",
            resolution: "audio-only",
            filesize:
              medium[0].filesize ||
              medium[1].filesize ||
              medium.filesize ||
              null,
            audiochannels:
              medium[0].audio_channels ||
              medium[1].audio_channels ||
              medium.audio_channels ||
              null,
            extensions: medium[0].ext || medium[1].ext || medium.ext || null,
            acodec:
              medium[0].acodec || medium[1].acodec || medium.acodec || null,
            url: medium[0].url || medium[1].url || medium.url || null,
          };
        else if (!medium && low)
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
            extensions:
              low[0].ext || low[1].ext || low[2].ext || low.ext || null,
            acodec:
              low[0].acodec ||
              low[1].acodec ||
              low[2].acodec ||
              low.acodec ||
              null,
            url: low[0].url || low[1].url || low[2].url || low.url || null,
          };
        else if (!medium && !low && ultralow)
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
            extensions:
              ultralow[0].ext || ultralow[1].ext || ultralow.ext || null,
            acodec:
              ultralow[0].acodec ||
              ultralow[1].acodec ||
              ultralow.acodec ||
              null,
            url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "lowest-possible") {
        if (ultralow)
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
            extensions:
              ultralow[0].ext || ultralow[1].ext || ultralow.ext || null,
            acodec:
              ultralow[0].acodec ||
              ultralow[1].acodec ||
              ultralow.acodec ||
              null,
            url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
          };
        else if (low)
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
            extensions:
              low[0].ext || low[1].ext || low[2].ext || low.ext || null,
            acodec:
              low[0].acodec ||
              low[1].acodec ||
              low[2].acodec ||
              low.acodec ||
              null,
            url: low[0].url || low[1].url || low[2].url || low.url || null,
          };
        else if (medium)
          return {
            quality: "lowest-possible",
            resolution: "audio-only",
            filesize:
              medium[0].filesize ||
              medium[1].filesize ||
              medium.filesize ||
              null,
            audiochannels:
              medium[0].audio_channels ||
              medium[1].audio_channels ||
              medium.audio_channels ||
              null,
            extensions: medium[0].ext || medium[1].ext || medium.ext || null,
            acodec:
              medium[0].acodec || medium[1].acodec || medium.acodec || null,
            url: medium[0].url || medium[1].url || medium.url || null,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else throw new Error("Wrong Quality Provided.");
    } catch (error) {
      return error.message;
    }
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");

// ╔⧉༻ ❝ ⚡ ⒸYT-DLP ⚡ ❞
// ║ Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +918436686758, +917430922909
// ╚════════════╝

// YT-DLP Was Made For Easier Scrapping And Downloading Youtube Audios & Videos.
// If You Fork This Repo And Edit Plugins, It's Your Concern For Further Updates.
// Forking Repo Is Fine.
// But If You Edit Something We Will Not Provide Any Help.
// In Short, Fork At Your Own Risk.

// YT-DLP Is In No Way Affiliated With, Authorized, Maintained,
// Sponsored Or Endorsed By YouTube Or Any Of Its Affiliates Or
// Subsidiaries.
// This Is An Independent And Unofficial Software.
// Use At Your Own Risk.

// MIT License
// Copyright (c) 2023 Mågnëum </>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
