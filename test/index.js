("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import fs from "fs";
import Fetch from "node-fetch";
import * as dotenv from "dotenv";
import ExecJson from "youtube-dl-exec";
const url = "https://youtu.be/0XyV-vw5II4";
const FourK = "https://youtu.be/TpdapO9QGRo";
import ProgressEstimator from "progress-estimator";
const ProgressEst = ProgressEstimator();
dotenv.config();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { VideoAdvanced, VideoCustom } from "../utils/video.js";
(async () => {
  const cron = await ProgressEst(
    ExecJson(url, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeFormats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    }),
    "Obtaining: " + " "
  );
  const video_ = await VideoCustom(cron, "highest");
  console.log("CUSTOM VIDEO: ", video_);
  const _video = await VideoAdvanced(cron, "2160p");
  console.log("ADVANCE VIDEO: ", _video);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { AudioSeperator, AudioQualityCustom } from "../utils/audio.js";
(async () => {
  const cron = await ProgressEst(
    ExecJson(url, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeFormats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    }),
    "Obtaining: " + " "
  );
  const audio_ = await AudioSeperator(cron, "medium");
  console.log("AUDIO: ", audio_);
  const _audio = await AudioQualityCustom(cron, "best-possible");
  console.log("CUSTOM AUDIO: ", _audio);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
