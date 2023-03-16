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
import { audiosave } from "../lib/audio/ffmpeg.js";

audiosave(url, "medium", "mod")
  .then((data) => console.log(chalk.bgGreen("AUDIOSAVE:"), data))
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));
// (async () => {
// const data = await audiosave(url, "medium", "./src/").catch((e) =>
// console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message))
// );
// console.log(chalk.bgGreen("AUDIOSAVE:"), data);
// })();

// import { audiometa } from "../lib/audio/index.js";
// (async () => {
// const data = await audiometa(url).catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));
// audiometa(url).then((data) => console.log(data)).catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));
// console.log(data);
// })();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
