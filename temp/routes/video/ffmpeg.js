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
function regexpyt(str) {
  var exp = new RegExp(/(youtu\.be|youtube\.com)/);
  return exp.test(str);
}
function printProgress(progress) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress + "%");
}
function FFmpegSave(vLink, aLink, savepath, qual, title) {
  FFmpeg()
    .setFfmpegPath(FFmpegPath.path)
    .setFfprobePath(FFmpegProbe.path)
    .addInput(vLink)
    .addInput(aLink)
    .outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
    .videoCodec("libx264")
    .withAudioCodec("aac")
    .format("mp4")
    .outputOptions(["-movflags", "frag_keyframe + empty_moov"])
    .saveToFile(savepath + title + qual + ".mp3", { end: true })
    .on("error", (error) => console.error("ERROR: " + error.message))
    .on("progress", (progress) => printProgress(progress.percent.toFixed(2)))
    .on("end", () => console.log("INFO: stream sent to client successfully."))
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

export async function dloadVideo_customQuality(rover) {
  rover.quality = rover.quality || "1080p";
  rover.url = rover.url || "not-a-youtube-link";
  if (!regexpyt(rover.url)) {
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

      let audio;

      const maud = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "140" &&
            res.format_note === "medium" &&
            res.resolution === "audio only") ||
          (res.format_id === "251" &&
            res.format_note === "medium" &&
            res.resolution === "audio only")
      );
      const laud = jsonmeta.formats.filter(
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
      const uaud = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "599" &&
            res.format_note === "ultralow" &&
            res.resolution === "audio only") ||
          (res.format_id === "600" &&
            res.format_note === "ultralow" &&
            res.resolution === "audio only")
      );

      if (maud) audio = maud[0].url || maud[1].url || maud.url || null;
      else if (laud)
        audio = laud[0].url || laud[1].url || laud[2].url || laud.url || null;
      else if (uaud) audio = uaud[0].url || uaud[1].url || uaud.url || null;
      else
        throw new Error("Current video doesn't have any audio+video support.");

      var Format_2160p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "401" && res.format_note === "2160p") ||
          (res.format_id === "313" && res.format_note === "2160p")
      );
      var Format_1440p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "400" && res.format_note === "1440p") ||
          (res.format_id === "271" && res.format_note === "1440p")
      );

      var Format_1080p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "399" && res.format_note === "1080p") ||
          (res.format_id === "137" && res.format_note === "1080p") ||
          (res.format_id === "248" && res.format_note === "1080p")
      );

      var Format_720p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "247" && res.format_note === "720p") ||
          (res.format_id === "398" && res.format_note === "720p") ||
          (res.format_id === "136" && res.format_note === "720p") ||
          (res.format_id === "22" && res.format_note === "720p")
      );
      var Format_480p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "397" && res.format_note === "480p") ||
          (res.format_id === "135" && res.format_note === "480p") ||
          (res.format_id === "244" && res.format_note === "480p")
      );
      var Format_360p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "396" && res.format_note === "360p") ||
          (res.format_id === "134" && res.format_note === "360p") ||
          (res.format_id === "18" && res.format_note === "360p") ||
          (res.format_id === "243" && res.format_note === "360p")
      );
      var Format_240p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "395" && res.format_note === "240p") ||
          (res.format_id === "133" && res.format_note === "240p") ||
          (res.format_id === "242" && res.format_note === "240p")
      );
      var Format_144p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "17" && res.format_note === "144p") ||
          (res.format_id === "597" && res.format_note === "144p") ||
          (res.format_id === "598" && res.format_note === "144p") ||
          (res.format_id === "394" && res.format_note === "144p") ||
          (res.format_id === "160" && res.format_note === "144p") ||
          (res.format_id === "278" && res.format_note === "144p")
      );

      if (rover.quality === "2160p") {
        if (Format_2160p) {
          FFmpegSave(
            Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
            audio,
            downloadpath,
            "-2160p",
            rover.title
          );
          return {
            type: "2160p",
            audiourl: audio,
            url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "1440p") {
        if (Format_1440p) {
          FFmpegSave(
            Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
            audio,
            downloadpath,
            "-1440p",
            rover.title
          );
          return {
            type: "1440p",
            audiourl: audio,
            url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "1080p") {
        if (Format_1080p) {
          FFmpegSave(
            Format_1080p[0].url ||
              Format_1080p[1].url ||
              Format_1080p[2].url ||
              Format_1080p.url,
            audio,
            downloadpath,
            "-1080p",
            rover.title
          );
          return {
            type: "1080p",
            audiourl: audio,
            url:
              Format_1080p[0].url ||
              Format_1080p[1].url ||
              Format_1080p[2].url ||
              Format_1080p.url,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "720p") {
        if (Format_720p) {
          FFmpegSave(
            Format_720p[0].url ||
              Format_720p[1].url ||
              Format_720p[2].url ||
              Format_720p[3].url ||
              Format_720p.url,
            audio,
            downloadpath,
            "-720p",
            rover.title
          );
          return {
            type: "720p",
            audiourl: audio,
            url:
              Format_720p[0].url ||
              Format_720p[1].url ||
              Format_720p[2].url ||
              Format_720p[3].url ||
              Format_720p.url,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "480p") {
        if (Format_480p) {
          FFmpegSave(
            Format_480p[0].url ||
              Format_480p[1].url ||
              Format_480p[2].url ||
              Format_480p.url,
            audio,
            downloadpath,
            "-480p",
            rover.title
          );
          return {
            type: "480p",
            audiourl: audio,
            url:
              Format_480p[0].url ||
              Format_480p[1].url ||
              Format_480p[2].url ||
              Format_480p.url,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "360p") {
        if (Format_360p) {
          FFmpegSave(
            Format_360p[0].url ||
              Format_360p[1].url ||
              Format_360p[2].url ||
              Format_360p[3].url ||
              Format_360p.url,
            audio,
            downloadpath,
            "-360p",
            rover.title
          );
          return {
            type: "360p",
            audiourl: audio,
            url:
              Format_360p[0].url ||
              Format_360p[1].url ||
              Format_360p[2].url ||
              Format_360p[3].url ||
              Format_360p.url,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "240p") {
        if (Format_240p) {
          FFmpegSave(
            Format_240p[0].url ||
              Format_240p[1].url ||
              Format_240p[2].url ||
              Format_240p,
            audio,
            downloadpath,
            "-240p",
            rover.title
          );
          return {
            type: "240p",
            audiourl: audio,
            url:
              Format_240p[0].url ||
              Format_240p[1].url ||
              Format_240p[2].url ||
              Format_240p,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "144p") {
        if (Format_144p) {
          FFmpegSave(
            Format_144p[0].url ||
              Format_144p[1].url ||
              Format_144p[2].url ||
              Format_144p[3].url ||
              Format_144p[4].url ||
              Format_144p[5].url ||
              Format_144p.url,
            audio,
            downloadpath,
            "-144p",
            rover.title
          );
          return {
            type: "144p",
            audiourl: audio,
            url:
              Format_144p[0].url ||
              Format_144p[1].url ||
              Format_144p[2].url ||
              Format_144p[3].url ||
              Format_144p[4].url ||
              Format_144p[5].url ||
              Format_144p.url,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else throw new Error("Wrong Quality Provided.");
    } catch (error) {
      return error.message;
    }
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
export async function dloadVideo_autoSorted(rover) {
  rover.url = rover.url || "not-a-youtube-link";
  rover.quality = rover.quality || "highest-possible";
  rover.title = rover.title || "random-title-" + Math.random();
  if (!regexpyt(rover.url)) {
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
      let audio;

      const maud = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "140" &&
            res.format_note === "medium" &&
            res.resolution === "audio only") ||
          (res.format_id === "251" &&
            res.format_note === "medium" &&
            res.resolution === "audio only")
      );
      const laud = jsonmeta.formats.filter(
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
      const uaud = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "599" &&
            res.format_note === "ultralow" &&
            res.resolution === "audio only") ||
          (res.format_id === "600" &&
            res.format_note === "ultralow" &&
            res.resolution === "audio only")
      );

      if (maud) audio = maud[0].url || maud[1].url || maud.url || null;
      else if (laud)
        audio = laud[0].url || laud[1].url || laud[2].url || laud.url || null;
      else if (uaud) audio = uaud[0].url || uaud[1].url || uaud.url || null;
      else
        throw new Error("Current video doesn't have any audio+video support.");

      var Format_2160p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "401" && res.format_note === "2160p") ||
          (res.format_id === "313" && res.format_note === "2160p")
      );
      var Format_1440p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "400" && res.format_note === "1440p") ||
          (res.format_id === "271" && res.format_note === "1440p")
      );

      var Format_1080p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "399" && res.format_note === "1080p") ||
          (res.format_id === "137" && res.format_note === "1080p") ||
          (res.format_id === "248" && res.format_note === "1080p")
      );

      var Format_720p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "247" && res.format_note === "720p") ||
          (res.format_id === "398" && res.format_note === "720p") ||
          (res.format_id === "136" && res.format_note === "720p") ||
          (res.format_id === "22" && res.format_note === "720p")
      );
      var Format_480p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "397" && res.format_note === "480p") ||
          (res.format_id === "135" && res.format_note === "480p") ||
          (res.format_id === "244" && res.format_note === "480p")
      );
      var Format_360p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "396" && res.format_note === "360p") ||
          (res.format_id === "134" && res.format_note === "360p") ||
          (res.format_id === "18" && res.format_note === "360p") ||
          (res.format_id === "243" && res.format_note === "360p")
      );
      var Format_240p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "395" && res.format_note === "240p") ||
          (res.format_id === "133" && res.format_note === "240p") ||
          (res.format_id === "242" && res.format_note === "240p")
      );
      var Format_144p = jsonmeta.formats.filter(
        (res) =>
          (res.format_id === "17" && res.format_note === "144p") ||
          (res.format_id === "597" && res.format_note === "144p") ||
          (res.format_id === "598" && res.format_note === "144p") ||
          (res.format_id === "394" && res.format_note === "144p") ||
          (res.format_id === "160" && res.format_note === "144p") ||
          (res.format_id === "278" && res.format_note === "144p")
      );

      if (rover.quality === "highest-possible") {
        if (Format_2160p) {
          FFmpegSave(
            Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
            audio,
            downloadpath,
            "-2160p",
            rover.title
          );
          return {
            type: "2160p",
            audiourl: audio,
            url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
          };
        }

        if (Format_1440p) {
          FFmpegSave(
            Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
            audio,
            downloadpath,
            "-1440p",
            rover.title
          );
          return {
            type: "1440p",
            audiourl: audio,
            url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
          };
        }
        if (Format_1080p) {
          FFmpegSave(
            Format_1080p[0].url ||
              Format_1080p[1].url ||
              Format_1080p[2].url ||
              Format_1080p.url,
            audio,
            downloadpath,
            "-1080p",
            rover.title
          );
          return {
            type: "1080p",
            audiourl: audio,
            url:
              Format_1080p[0].url ||
              Format_1080p[1].url ||
              Format_1080p[2].url ||
              Format_1080p.url,
          };
        }
        if (Format_720p) {
          FFmpegSave(
            Format_720p[0].url ||
              Format_720p[1].url ||
              Format_720p[2].url ||
              Format_720p[3].url ||
              Format_720p.url,
            audio,
            downloadpath,
            "-720p",
            rover.title
          );
          return {
            type: "720p",
            audiourl: audio,
            url:
              Format_720p[0].url ||
              Format_720p[1].url ||
              Format_720p[2].url ||
              Format_720p[3].url ||
              Format_720p.url,
          };
        }
        if (Format_480p) {
          FFmpegSave(
            Format_480p[0].url ||
              Format_480p[1].url ||
              Format_480p[2].url ||
              Format_480p.url,
            audio,
            downloadpath,
            "-480p",
            rover.title
          );
          return {
            type: "480p",
            audiourl: audio,
            url:
              Format_480p[0].url ||
              Format_480p[1].url ||
              Format_480p[2].url ||
              Format_480p.url,
          };
        }
        if (Format_360p) {
          FFmpegSave(
            Format_360p[0].url ||
              Format_360p[1].url ||
              Format_360p[2].url ||
              Format_360p[3].url ||
              Format_360p.url,
            audio,
            downloadpath,
            "-360p",
            rover.title
          );
          return {
            type: "360p",
            audiourl: audio,
            url:
              Format_360p[0].url ||
              Format_360p[1].url ||
              Format_360p[2].url ||
              Format_360p[3].url ||
              Format_360p.url,
          };
        }
        if (Format_240p) {
          FFmpegSave(
            Format_240p[0].url ||
              Format_240p[1].url ||
              Format_240p[2].url ||
              Format_240p,
            audio,
            downloadpath,
            "-240p",
            rover.title
          );
          return {
            type: "240p",
            audiourl: audio,
            url:
              Format_240p[0].url ||
              Format_240p[1].url ||
              Format_240p[2].url ||
              Format_240p,
          };
        }
        if (Format_144p) {
          FFmpegSave(
            Format_144p[0].url ||
              Format_144p[1].url ||
              Format_144p[2].url ||
              Format_144p[3].url ||
              Format_144p[4].url ||
              Format_144p[5].url ||
              Format_144p.url,
            audio,
            downloadpath,
            "-144p",
            rover.title
          );
          return {
            type: "144p",
            audiourl: audio,
            url:
              Format_144p[0].url ||
              Format_144p[1].url ||
              Format_144p[2].url ||
              Format_144p[3].url ||
              Format_144p[4].url ||
              Format_144p[5].url ||
              Format_144p.url,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "lowest-possible") {
        if (Format_144p) {
          FFmpegSave(
            Format_144p[0].url ||
              Format_144p[1].url ||
              Format_144p[2].url ||
              Format_144p[3].url ||
              Format_144p[4].url ||
              Format_144p[5].url ||
              Format_144p.url,
            audio,
            downloadpath,
            "-144p",
            rover.title
          );
          return {
            type: "144p",
            audiourl: audio,
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
        if (Format_240p) {
          FFmpegSave(
            Format_240p[0].url ||
              Format_240p[1].url ||
              Format_240p[2].url ||
              Format_240p,
            audio,
            downloadpath,
            "-240p",
            rover.title
          );
          return {
            type: "240p",
            audiourl: audio,
            url:
              Format_240p[0].url ||
              Format_240p[1].url ||
              Format_240p[2].url ||
              Format_240p,
          };
        }
        if (Format_360p) {
          FFmpegSave(
            Format_360p[0].url ||
              Format_360p[1].url ||
              Format_360p[2].url ||
              Format_360p[3].url ||
              Format_360p.url,
            audio,
            downloadpath,
            "-360p",
            rover.title
          );
          return {
            type: "360p",
            audiourl: audio,
            url:
              Format_360p[0].url ||
              Format_360p[1].url ||
              Format_360p[2].url ||
              Format_360p[3].url ||
              Format_360p.url,
          };
        }
        if (Format_480p) {
          FFmpegSave(
            Format_480p[0].url ||
              Format_480p[1].url ||
              Format_480p[2].url ||
              Format_480p.url,
            audio,
            downloadpath,
            "-480p",
            rover.title
          );
          return {
            type: "480p",
            audiourl: audio,
            url:
              Format_480p[0].url ||
              Format_480p[1].url ||
              Format_480p[2].url ||
              Format_480p.url,
          };
        }
        if (Format_720p) {
          FFmpegSave(
            Format_720p[0].url ||
              Format_720p[1].url ||
              Format_720p[2].url ||
              Format_720p[3].url ||
              Format_720p.url,
            audio,
            downloadpath,
            "-720p",
            rover.title
          );
          return {
            type: "720p",
            audiourl: audio,
            url:
              Format_720p[0].url ||
              Format_720p[1].url ||
              Format_720p[2].url ||
              Format_720p[3].url ||
              Format_720p.url,
          };
        }
        if (Format_1080p) {
          FFmpegSave(
            Format_1080p[0].url ||
              Format_1080p[1].url ||
              Format_1080p[2].url ||
              Format_1080p.url,
            audio,
            downloadpath,
            "-1080p",
            rover.title
          );
          return {
            type: "1080p",
            audiourl: audio,
            url:
              Format_1080p[0].url ||
              Format_1080p[1].url ||
              Format_1080p[2].url ||
              Format_1080p.url,
          };
        }
        if (Format_1440p) {
          FFmpegSave(
            Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
            audio,
            downloadpath,
            "-1440p",
            rover.title
          );
          return {
            type: "1440p",
            audiourl: audio,
            url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
          };
        }
        if (Format_2160p) {
          FFmpegSave(
            Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
            audio,
            downloadpath,
            "-2160p",
            rover.title
          );
          return {
            type: "2160p",
            audiourl: audio,
            url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
          };
        } else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else throw new Error("Wrong Quality Provided.");
    } catch (error) {
      return error.message;
    }
}
