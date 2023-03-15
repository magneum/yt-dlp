("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import Fetch from "node-fetch";
import * as dotenv from "dotenv";
import FFmpeg from "fluent-ffmpeg";
import ExecJson from "youtube-dl-exec";
import FFmpegPath from "@ffmpeg-installer/ffmpeg";
import ProgressEstimator from "progress-estimator";
import FFmpegProbe from "@ffprobe-installer/ffprobe";
function printProgress(progress) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress + "%");
}
const ProgressEst = ProgressEstimator();
dotenv.config();
const FetchOpts = {
  method: "get",
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "user-agent": [
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 YaBrowser/19.10.3.281 Yowser/2.5 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.30",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
    ],
  },
};
export default async (request, metalink, path, callback) => {
  const response = await Fetch(
    "https://magneum.vercel.app/api/youtube_sr?q=" + request,
    FetchOpts
  );
  const metadata = await response.json();
  const jsondata = await ProgressEst(
    ExecJson(metadata.youtube_search[0].LINK, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeFormats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:g  ooglebot"],
    }),
    "Obtaining: " + " "
  );
  let music;
  var audioUL = jsondata.formats.filter(
    (v) => v.format_id === "599" || v.format_id === "600"
  );
  var dbUL = audioUL[0] || audioUL[1] || audioUL;
  var audioL = jsondata.formats.filter(
    (v) =>
      v.format_id === "139" || v.format_id === "249" || v.format_id === "250"
  );
  var dbL = audioL[0] || audioL[1] || audioL[2] || audioL;
  var audioM = jsondata.formats.filter(
    (v) => v.format_id === "140" || v.format_id === "251"
  );
  var dbM = audioM[0] || audioM[1] || audioM;
  if (dbUL) music = dbUL;
  else if (dbL) music = dbL;
  else if (dbM) music = dbM;
  let downloadpath =
    path + "magneum - " + metadata.youtube_search[0].TITLE + ".mp4";
  FFmpeg()
    .format("mp4")
    .addInput(music)
    .addInput(metalink)
    .videoCodec("libx264")
    .withAudioCodec("aac")
    .setFfmpegPath(FFmpegPath.path)
    .setFfprobePath(FFmpegProbe.path)
    .saveToFile(downloadpath, { end: true })
    .outputOptions(["-movflags", "frag_keyframe + empty_moov"])
    .on("error", (error) => console.error("ERROR: " + error.message))
    .outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
    .on("progress", (progress) => printProgress(progress.percent.toFixed(2)))
    .on("end", () => {
      console.log("INFO: stream sent to client successfully.");
      callback({
        header: "◎☱☱☱☱[ ву mågneum ]☱☱☱☱◎",
        status: true,
        footer: "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎",
      });
    })
    .run();
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
