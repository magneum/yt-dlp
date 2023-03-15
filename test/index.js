("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const url = "https://youtu.be/0XyV-vw5II4";
const four = "https://youtu.be/TpdapO9QGRo";

import { audioseperator } from "../lib/utils/audio.js";
(async () => {
  audioseperator(four, "medium").then((data) => console.log(data));
  const data = await audioseperator(four, "medium");
  console.log(data);
})();

import { audiocustomquality } from "../lib/utils/audio.js";
(async () => {
  audiocustomquality(four, "best-possible").then((data) => console.log(data));
  const data = await audiocustomquality(four, "best-possible");
  console.log(data);
})();

import { videoadvanced } from "../lib/utils/video.js";
(async () => {
  videoadvanced(four, "2160p").then((data) => console.log(data));
  const data = await videoadvanced(four, "2160p");
  console.log(data);
})();

import { videocustomquality } from "../lib/utils/video.js";
(async () => {
  videocustomquality(four, "highest").then((data) => console.log(data));
  const data = await videocustomquality(four, "highest");
  console.log(data);
})();

// import { audiosave } from "../lib/audio/index.js";
// (async () => {
// const data = await audiosave(four, "medium", "./src/");
// console.log(data);
// audiosave(four, "medium", "./src/").then((data) => console.log(data));
// })();

// import { audiometa } from "../lib/audio/index.js";
// (async () => {
// const data = await audiometa(four);
// console.log(data);
// audiometa(four).then((data) => console.log(data));
// })();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
