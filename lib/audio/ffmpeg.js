("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
function FFmpegSave(link, savepath, qual) {
  FFmpeg(link)
    .format("mp3")
    .setFfmpegPath(FFmpegPath.path)
    .setFfprobePath(FFmpegProbe.path)
    .saveToFile(savepath + qual + ".mp3", { end: true })
    .on("error", (error) => console.error("ERROR: " + error.message))
    .on("progress", (progress) => printProgress(progress.percent.toFixed(2)))
    .on("end", () => console.log("\nINFO: stream sent to client successfully."))
    .run();
}

export async function downloadAudio_customQuality(rover) {
  rover.url = rover.url || "not-a-youtube-link";
  rover.sort = rover.sort || "medium";
  if (!regExTestYT(rover.url)) {
    throw new Error("YouTube Link not found.Refer to docs for usage examples.");
  } else
    try {
      let downloadpath;
      if (!rover.path) {
        if (!fs.existsSync("mågneum")) fs.mkdirSync("mågneum");
        downloadpath = "./mågneum/mågneum";
      } else {
        if (!fs.existsSync(rover.path)) fs.mkdirSync(rover.path);
        downloadpath = "./" + rover.path + "/mågneum";
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
          "-medium"
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
          "-low"
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
          "-ultralow"
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
export async function downloadAudio_autoSorted(rover) {
  rover.url = rover.url || "not-a-youtube-link";
  rover.quality = rover.quality || "best-possible";
  if (!regExTestYT(rover.url)) {
    throw new Error("YouTube Link not found.Refer to docs for usage examples.");
  } else
    try {
      let downloadpath;
      if (!rover.path) {
        if (!fs.existsSync("mågneum")) fs.mkdirSync("mågneum");
        downloadpath = "./mågneum/mågneum";
      } else {
        if (!fs.existsSync(rover.path)) fs.mkdirSync(rover.path);
        downloadpath = "./" + rover.path + "/mågneum";
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

      if (rover.quality === "best-possible") {
        if (medium) {
          FFmpegSave(
            medium[0].url || medium[1].url || medium.url || null,
            downloadpath,
            "-best_possible"
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "best-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else if (!medium && low) {
          FFmpegSave(
            low[0].url || low[1].url || low[2].url || low.url || null,
            downloadpath,
            "-best_possible"
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "best-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else if (!medium && !low && ultralow) {
          FFmpegSave(
            ultralow[0].url || ultralow[1].url || ultralow.url || null,
            downloadpath,
            "-best_possible"
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "best-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else throw new Error("SORRY: Quality Not Found.");
      } else if (rover.quality === "medium-possible") {
        if (low) {
          FFmpegSave(
            low[0].url || low[1].url || low[2].url || low.url || null,
            downloadpath,
            "-medium_possible"
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "medium-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else if (!low && ultralow) {
          FFmpegSave(
            ultralow[0].url || ultralow[1].url || ultralow.url || null,
            downloadpath,
            "-medium_possible"
          );
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "medium-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else throw new Error("SORRY: Quality Not Found.");
      } else if (rover.quality === "lowest-possible") {
        FFmpegSave(
          ultralow[0].url || ultralow[1].url || ultralow.url || null,
          downloadpath,
          "-lowest_possible"
        );
        if (ultralow) {
          return {
            header: "◎ ву mågneum ◎",
            status: true,
            quality: "lowest-possible",
            downloadpath: downloadpath,
            message: "INFO: stream starting.",
          };
        } else throw new Error("SORRY: Quality Not Found.");
      } else throw new Error("Wrong Quality Provided.");
    } catch (error) {
      return error.message;
    }
}
