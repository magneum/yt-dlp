("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import chalk from "chalk";
// const url = "https://youtu.be/TpdapO9QGRo";
const url = "https://youtu.be/VCiDeT16t6U";
import { infoAudio_customQuality, infoAudio_Sorted } from "../index.js";
import { infoVideo_customResolution, infoVideo_Sorted } from "../index.js";

// ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱ [ AUDIO ] ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱
// infoAudio_customQuality(url, "medium")
// .then((data) => console.log(chalk.bgGreen("INFOAUDIO_CUSTOMQUALITY:"), data))
// .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// infoAudio_Sorted(url, "best-possible")
// .then((data) => console.log(chalk.bgGreen("INFOAUDIO_SORTED:"), data))
// .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱ [ VIDEO ] ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱
// infoVideo_customResolution(url, "2160p")
// .then((data) =>
// console.log(chalk.bgGreen("INFOVIDEO_CUSTOMRESOLUTION:"), data)
// )
// .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// infoVideo_Sorted(url, "highest")
// .then((data) => console.log(chalk.bgGreen("INFOVIDEO_SORTED:"), data))
// .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱ [ DOWNLOADER ] ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱
// import { downloadAudio_customQuality } from "../index.js";

// downloadAudio_customQuality(url, "ultralow", "mågneum")
// .then((data) =>
// console.log(chalk.bgGreen("downloadAudio_customQuality:"), data)
// )
// .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱ [ DOWNLOADER ] ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱
import { downloadAudio_Sorted } from "../index.js";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "best-possible" || "medium-possible" || "lowest-possible"
 * @param {download-folder-name} @arg {optional} -> auto created if not exists or specified
 */

// Promise method
downloadAudio_Sorted(url, "best-possible", "mågneum")
  .then((data) => console.log(chalk.bgGreen("downloadAudio_Sorted:"), data))
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await downloadAudio_Sorted(url, "best-possible", "./src/").catch(
    (e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message))
  );
  console.log(chalk.bgGreen("downloadAudio_Sorted:"), data);
})();

// import { audiometa } from "../lib/audio/index.js";
// (async () => {
// const data = await audiometa(url).catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));
// audiometa(url).then((data) => console.log(data)).catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));
// console.log(data);
// })();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
