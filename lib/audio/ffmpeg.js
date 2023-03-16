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
export async function audiosave(
  url = "not-a-youtube-link",
  sort = "medium",
  path
) {
  if (!regExTestYT(url)) {
    throw new Error("YouTube Link not found.Refer to docs for usage examples.");
  } else
    try {
      let downloadpath;
      if (!path) {
        if (!fs.existsSync("mågneum")) fs.mkdirSync("mågneum");
        downloadpath = "./mågneum/mågneum.mp3";
      } else {
        if (!fs.existsSync(path)) fs.mkdirSync(path);
        downloadpath = "./" + path + "/mågneum.mp3";
      }

      var Execjson = ExecJson(url, {
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
      if (sort === "medium") {
        FFmpeg(medium[0].url || medium[1].url || medium.url || null)
          .format("mp3")
          .setFfmpegPath(FFmpegPath.path)
          .setFfprobePath(FFmpegProbe.path)
          .saveToFile(downloadpath, { end: true })
          .on("error", (error) => console.error("ERROR: " + error.message))
          .on("progress", (progress) =>
            printProgress(progress.percent.toFixed(2))
          )
          .on("end", () =>
            console.log("\nINFO: stream sent to client successfully.")
          )
          .run();
        return {
          header: "◎ ву mågneum ◎",
          status: true,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
        };
      } else if (sort === "low") {
        FFmpeg(low[0].url || low[1].url || low[2].url || low.url || null)
          .format("mp3")
          .setFfmpegPath(FFmpegPath.path)
          .setFfprobePath(FFmpegProbe.path)
          .saveToFile(downloadpath, { end: true })
          .on("error", (error) => console.error("ERROR: " + error.message))
          .on("progress", (progress) =>
            printProgress(progress.percent.toFixed(2))
          )
          .on("end", () =>
            console.log("\nINFO: stream sent to client successfully.")
          )
          .run();
        return {
          header: "◎ ву mågneum ◎",
          status: true,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
        };
      } else if (sort === "ultralow") {
        FFmpeg(ultralow[0].url || ultralow[1].url || ultralow.url || null)
          .format("mp3")
          .setFfmpegPath(FFmpegPath.path)
          .setFfprobePath(FFmpegProbe.path)
          .saveToFile(downloadpath, { end: true })
          .on("error", (error) => console.error("ERROR: " + error.message))
          .on("progress", (progress) =>
            printProgress(progress.percent.toFixed(2))
          )
          .on("end", () =>
            console.log("\nINFO: stream sent to client successfully.")
          )
          .run();
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
