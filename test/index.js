("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const url = "https://youtu.be/TpdapO9QGRo";
const four = "https://youtu.be/0XyV-vw5II4";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 */

import { infoAudio_Sorted } from "../lib/utils/audio.js";
// import { infoAudio_Sorted } from "ytdlp";
(async () => {
  let sort = "medium";
  const url = "https://youtu.be/TpdapO9QGRo";

  // Promise method
  infoAudio_Sorted(url, sort)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  // async/await method
  const data = await infoAudio_Sorted(url, sort).catch((e) => console.log(e));
  console.log(data);
})();

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} quality -> "best-possible" || "medium-possible" || "lowest-possible"
 */
import { infoAudio_customQuality } from "../lib/utils/audio.js";
// import { infoAudio_customQuality } from "ytdlp";
(async () => {
  let quality = "best-possible";
  const url = "https://youtu.be/TpdapO9QGRo";

  // Promise method
  infoAudio_customQuality(url, quality)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  // async/await method
  const data = await infoAudio_customQuality(url, quality).catch((e) =>
    console.log(e)
  );
  console.log(data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "2160p" || "1440p" || "1080p" || "720p" || "480p" || "360p" || "240p" || "144p"
 */
import { infoVideo_customResolution } from "../lib/utils/video.js";
// import { infoVideo_customResolution } from "ytdlp";
(async () => {
  let resolution = "2160p";
  const url = "https://youtu.be/TpdapO9QGRo";

  // Promise method
  infoVideo_customResolution(url, resolution)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  // async/await method
  const data = await infoVideo_customResolution(url, resolution).catch((e) =>
    console.log(e)
  );
  console.log(data);
})();

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "highest" || "medium" || "lowest"
 */
import { infoVideo_Sorted } from "../lib/utils/video.js";
// import { infoVideo_Sorted } from "ytdlp";
(async () => {
  let quality = "highest";
  const url = "https://youtu.be/TpdapO9QGRo";

  // Promise method
  infoVideo_Sorted(url, quality)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  // async/await method
  const data = await infoVideo_Sorted(url, quality).catch((e) =>
    console.log(e)
  );
  console.log(data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// import { audiosave } from "../lib/audio/index.js";
// (async () => {
// const data = await audiosave(url, "medium", "./src/").catch((e) => console.log(e));
// audiosave(url, "medium", "./src/").then((data) => console.log(data)).catch((e) => console.log(e));
// console.log(data);
// })();

// import { audiometa } from "../lib/audio/index.js";
// (async () => {
// const data = await audiometa(url).catch((e) => console.log(e));
// audiometa(url).then((data) => console.log(data)).catch((e) => console.log(e));
// console.log(data);
// })();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
