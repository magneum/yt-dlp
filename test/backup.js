("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoAudio_customQuality } from "yt-dlp";
url = "https://youtu.be/TpdapO9QGRo";
sort = "medium";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 */

// Promise method
infoAudio_customQuality(url, sort)
  .then((data) => console.log("INFOAUDIO_CUSTOMQUALITY: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await infoAudio_customQuality(url, sort).catch((e) =>
    console.log(e)
  );
  console.log("INFOAUDIO_CUSTOMQUALITY: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoAudio_Sorted } from "yt-dlp";
url = "https://youtu.be/TpdapO9QGRo";
quality = "best-possible";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} quality -> "best-possible" || "medium-possible" || "lowest-possible"
 */

// Promise method
infoAudio_Sorted(url, quality)
  .then((data) => console.log("INFOAUDIO_SORTED: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await infoAudio_Sorted(url, quality).catch((e) =>
    console.log(e)
  );
  console.log("INFOAUDIO_SORTED: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoVideo_customResolution } from "yt-dlp";
url = "https://youtu.be/TpdapO9QGRo";
resolution = "2160p";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "2160p" || "1440p" || "1080p" || "720p" || "480p" || "360p" || "240p" || "144p"
 */

// Promise method
infoVideo_customResolution(url, resolution)
  .then((data) => console.log("INFOVIDEO_CUSTOMRESOLUTION: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await infoVideo_customResolution(url, resolution).catch((e) =>
    console.log(e)
  );
  console.log("INFOVIDEO_CUSTOMRESOLUTION: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoVideo_Sorted } from "yt-dlp";
url = "https://youtu.be/TpdapO9QGRo";
quality = "highest";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "highest" || "medium" || "lowest"
 */
// Promise method
infoVideo_Sorted(url, quality)
  .then((data) => console.log("INFOVIDEO_SORTED: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await infoVideo_Sorted(url, quality).catch((e) =>
    console.log(e)
  );
  console.log("INFOVIDEO_SORTED: ", data);
})();
// ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱ [ DOWNLOADER ] ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱
import { downloadAudio_customQuality } from "../lib/audio/ffmpeg.js";
url = "https://youtu.be/TpdapO9QGRo";
sort = "medium";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 * @param {download-folder-name} @arg {optional} -> auto created if not exists or specified
 */

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
import { downloadAudio_Sorted } from "../lib/audio/ffmpeg.js";
url = "https://youtu.be/TpdapO9QGRo";
sort = "medium";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "best-possible" || "medium-possible" || "lowest-possible"
 * @param {download-folder-name} @arg {optional} -> auto created if not exists or specified
 */

// Promise method
downloadAudio_Sorted(url, "best-possible", "mågneum")
  .then((data) => console.log(chalk.bgGreen("DOWNLOADAUDIO_SORTED:"), data))
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await downloadAudio_Sorted(url, "best-possible", "./src/").catch(
    (e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message))
  );
  console.log(chalk.bgGreen("DOWNLOADAUDIO_SORTED:"), data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
