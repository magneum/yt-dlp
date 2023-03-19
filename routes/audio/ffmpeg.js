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
import fs from "fs";
import FFmpeg from "fluent-ffmpeg";
import ExecJson from "youtube-dl-exec";
import FFmpegPath from "@ffmpeg-installer/ffmpeg";
import ProgressEstimator from "progress-estimator";
import FFmpegProbe from "@ffprobe-installer/ffprobe";
const ProgressEst = ProgressEstimator();
function regExTestYT(str) {
  var exp = new RegExp(/(youtu\.be|youtube\.com)/);
  return exp.test(str);
}
function printProgress(progress) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress + "%");
}
function FFmpegSave(link, savepath, qual, title) {
  FFmpeg(link)
    .format("mp3")
    .setFfmpegPath(FFmpegPath.path)
    .setFfprobePath(FFmpegProbe.path)
    .saveToFile(savepath + title + qual + ".mp3", { end: true })
    .on("error", (error) => console.error("ERROR: " + error.message))
    .on("progress", (progress) => printProgress(progress.percent.toFixed(2)))
    .on("end", () => console.log("\nINFO: stream sent to client successfully."))
    .run();
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

export async function dloadAudio_customQuality(rover) {
  rover.sort = rover.sort || "medium";
  rover.url = rover.url || "not-a-youtube-link";
  rover.title = rover.title || "random-title-" + Math.random();
  if (!regExTestYT(rover.url)) {
    throw new Error("YouTube Link not found.Refer to docs for usage examples.");
  } else
    try {
      let downloadpath;
      if (!rover.folder) {
        if (!fs.existsSync("mågneum")) fs.mkdirSync("mågneum");
        downloadpath = "./mågneum/";
      } else {
        if (!fs.existsSync(rover.folder)) fs.mkdirSync(rover.folder);
        downloadpath = "./" + rover.folder + "/";
      }

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
      if (rover.sort === "medium") {
        FFmpegSave(
          medium[0].url || medium[1].url || medium.url || null,
          downloadpath,
          "-medium",
          rover.title
        );
        return {
          header: "◎ ву mågneum ◎",
          status: true,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
        };
      } else if (rover.sort === "low") {
        FFmpegSave(
          low[0].url || low[1].url || low[2].url || low.url || null,
          downloadpath,
          "-low",
          rover.title
        );
        return {
          header: "◎ ву mågneum ◎",
          status: true,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
        };
      } else if (rover.sort === "ultralow") {
        FFmpegSave(
          ultralow[0].url || ultralow[1].url || ultralow.url || null,
          downloadpath,
          "-ultralow",
          rover.title
        );
        return {
          header: "◎ ву mågneum ◎",
          status: true,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
        };
      } else throw new Error("SORRY: Quality Not Found.");
    } catch (error) {
      return error.message;
    }
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
export async function dloadAudio_autoSorted(rover) {
  rover.url = rover.url || "not-a-youtube-link";
  rover.quality = rover.quality || "highest-possible";
  rover.title = rover.title || "random-title-" + Math.random();
  if (!regExTestYT(rover.url)) {
    throw new Error("YouTube Link not found.Refer to docs for usage examples.");
  } else
    try {
      let downloadpath;
      if (!rover.folder) {
        if (!fs.existsSync("mågneum")) fs.mkdirSync("mågneum");
        downloadpath = "./mågneum/";
      } else {
        if (!fs.existsSync(rover.folder)) fs.mkdirSync(rover.folder);
        downloadpath = "./" + rover.folder + "/";
      }
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
        if (medium) {
          FFmpegSave(
            medium[0].url || medium[1].url || medium.url || null,
            downloadpath,
            "-highest-possible",
            rover.title
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "highest-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else if (!medium && low) {
          FFmpegSave(
            low[0].url || low[1].url || low[2].url || low.url || null,
            downloadpath,
            "-highest-possible",
            rover.title
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "highest-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else if (!medium && !low && ultralow) {
          FFmpegSave(
            ultralow[0].url || ultralow[1].url || ultralow.url || null,
            downloadpath,
            "-highest-possible",
            rover.title
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "highest-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else throw new Error("SORRY: Quality Not Found.");
      } else if (rover.quality === "lowest-possible") {
        FFmpegSave(
          ultralow[0].url || ultralow[1].url || ultralow.url || null,
          downloadpath,
          "-lowest_possible",
          rover.title
        );
        if (ultralow) {
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "lowest-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else if (low) {
          FFmpegSave(
            low[0].url || low[1].url || low[2].url || low.url || null,
            downloadpath,
            "-lowest_possible",
            rover.title
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "medium-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else if (medium) {
          FFmpegSave(
            medium[0].url || medium[1].url || medium.url || null,
            downloadpath,
            "-highest-possible",
            rover.title
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "-lowest_possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else throw new Error("SORRY: Quality Not Found.");
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
