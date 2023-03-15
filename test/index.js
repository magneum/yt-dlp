const url = "https://youtu.be/TpdapO9QGRo";
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoAudio_customQuality, infoAudio_Sorted } from "../index.js";

infoAudio_customQuality(url, "medium")
  .then((data) => console.log("INFOAUDIO_CUSTOMQUALITY: ", data))
  .catch((e) => console.log(e));

infoAudio_Sorted(url, "best-possible")
  .then((data) => console.log("INFOAUDIO_SORTED: ", data))
  .catch((e) => console.log(e));
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import { infoVideo_customResolution, infoVideo_Sorted } from "../index.js";

infoVideo_customResolution(url, "2160p")
  .then((data) => console.log("INFOVIDEO_CUSTOMRESOLUTION: ", data))
  .catch((e) => console.log(e));

infoVideo_Sorted(url, "highest")
  .then((data) => console.log("INFOVIDEO_SORTED: ", data))
  .catch((e) => console.log(e));

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
