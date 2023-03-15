("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import * as dotenv from "dotenv";
import ExecJson from "youtube-dl-exec";
const url = "https://youtu.be/0XyV-vw5II4";
const FourK = "https://youtu.be/TpdapO9QGRo";
import ProgressEstimator from "progress-estimator";
const ProgressEst = ProgressEstimator();
dotenv.config();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { videoadvanced, videocustomquality } from "../utils/video.js";
(async () => {
  const cron = await ProgressEst(
    ExecJson(FourK, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeFormats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    }),
    "Obtaining: " + " "
  );
  const video_ = await videocustomquality(cron, "highest");
  const _video = await videoadvanced(cron, "2160p");
  console.log("CUSTOM VIDEO: ", video_);
  console.log("ADVANCE VIDEO: ", _video);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { audioseperator, audiocustomquality } from "../utils/audio.js";
(async () => {
  const cron = await ProgressEst(
    ExecJson(FourK, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeFormats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    }),
    "Obtaining: " + " "
  );
  const audio_ = await audioseperator(cron, "medium");
  const _audio = await audiocustomquality(cron, "best-possible");
  console.log("AUDIO: ", audio_);
  console.log("CUSTOM AUDIO: ", _audio);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { audiosave } from "../lib/audio/index.js";
(async () => {
  const datalog = await audiosave(FourK, "medium", "./src/");
  console.log(datalog);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { audiometa } from "../lib/audio/index.js";
(async () => {
  const datalog = await audiometa(FourK);
  console.log(datalog);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
