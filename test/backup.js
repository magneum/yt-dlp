("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoAudio_customQuality } from "../index.js";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 */

(async () => {
  let sort = "medium";
  const url = "https://youtu.be/TpdapO9QGRo";

  // Promise method
  infoAudio_customQuality(url, sort)
    .then((data) => console.log("INFOAUDIO_CUSTOMQUALITY: ", data))
    .catch((e) => console.log(e));

  // async/await method
  const data = await infoAudio_customQuality(url, sort).catch((e) =>
    console.log(e)
  );
  console.log("INFOAUDIO_CUSTOMQUALITY: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoAudio_Sorted } from "../index.js";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} quality -> "best-possible" || "medium-possible" || "lowest-possible"
 */
(async () => {
  let quality = "best-possible";
  const url = "https://youtu.be/TpdapO9QGRo";

  // Promise method
  infoAudio_Sorted(url, quality)
    .then((data) => console.log("INFOAUDIO_SORTED: ", data))
    .catch((e) => console.log(e));

  // async/await method
  const data = await infoAudio_Sorted(url, quality).catch((e) =>
    console.log(e)
  );
  console.log("INFOAUDIO_SORTED: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoVideo_customResolution } from "../index.js";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "2160p" || "1440p" || "1080p" || "720p" || "480p" || "360p" || "240p" || "144p"
 */
(async () => {
  let resolution = "2160p";
  const url = "https://youtu.be/TpdapO9QGRo";

  // Promise method
  infoVideo_customResolution(url, resolution)
    .then((data) => console.log("INFOVIDEO_CUSTOMRESOLUTION: ", data))
    .catch((e) => console.log(e));

  // async/await method
  const data = await infoVideo_customResolution(url, resolution).catch((e) =>
    console.log(e)
  );
  console.log("INFOVIDEO_CUSTOMRESOLUTION: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoVideo_Sorted } from "../index.js";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "highest" || "medium" || "lowest"
 */
(async () => {
  let quality = "highest";
  const url = "https://youtu.be/TpdapO9QGRo";

  // Promise method
  infoVideo_Sorted(url, quality)
    .then((data) => console.log("INFOVIDEO_SORTED: ", data))
    .catch((e) => console.log(e));

  // async/await method
  const data = await infoVideo_Sorted(url, quality).catch((e) =>
    console.log(e)
  );
  console.log("INFOVIDEO_SORTED: ", data);
})();
// ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱ [ DOWNLOADER ] ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱
import { downloadAudio_customQuality } from "../lib/audio/ffmpeg.js";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 * @param {download-folder-name} @arg {optional} -> auto created if not exists or specified
 */

let sort = "medium";
const url = "https://youtu.be/TpdapO9QGRo";

// Promise method
downloadAudio_customQuality(url, sort, "mågneum")
  .then((data) =>
    console.log(chalk.bgGreen("DOWNLOADAUDIO_CUSTOMQUALITY:"), data)
  )
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await downloadAudio_customQuality(url, sort, "./src/").catch(
    (e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message))
  );
  console.log(chalk.bgGreen("DOWNLOADAUDIO_CUSTOMQUALITY:"), data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// import { audiometa } from "../lib/audio/index.js";
// (async () => {
// const data = await audiometa(url).catch((e) => console.log(e));
// audiometa(url).then((data) => console.log(data)).catch((e) => console.log(e));
// console.log(data);
// })();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
