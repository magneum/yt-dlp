"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";

// ╔⧉༻ ❝ ⚡ ⒸYT-DLP ⚡ ❞
// ║ Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +918436686758, +917430922909
// ╚════════════╝

// YT-DLP Was Made For Easier Scrapping And Downloading Youtube Audios & Videos.
// If You Fork This Repo And Edit Plugins, It's Your Concern For Further Updates.
// Forking Repo Is Fine.
// But If You Edit Something We Will Not Provide Any Help.
// In Short, Fork At Your Own Risk.

// YT-DLP Is In No Way Affiliated With, Authorized, Maintained,
// Sponsored Or Endorsed By YouTube Or Any Of Its Affiliates Or
// Subsidiaries.
// This Is An Independent And Unofficial Software.
// Use At Your Own Risk.

// MIT License
// Copyright (c) 2023 Mågnëum </>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 */

// Promise method
ytdlp
  .AudioData_CustomQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    sort: "medium", // required
  })
  .then((data) => console.log("AudioData_CustomQuality: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await ytdlp
    .AudioData_CustomQuality({
      url: "https://youtu.be/TpdapO9QGRo", // required
      sort: "medium", // required
    })
    .catch((e) => console.log(e));
  console.log("AudioData_CustomQuality: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} quality -> "best-possible" || "medium-possible" || "lowest-possible"
 */

// Promise method
ytdlp
  .AudioData_SortedAuto({
    url: "https://youtu.be/TpdapO9QGRo", // required
    quality: "best-possible", // required
  })
  .then((data) => console.log("AudioData_SortedAuto: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await ytdlp
    .AudioData_SortedAuto({
      url: "https://youtu.be/TpdapO9QGRo", // required
      quality: "best-possible", // required
    })
    .catch((e) => console.log(e));
  console.log("AudioData_SortedAuto: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import * as ytdlp from "yt-dlp";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "2160p" || "1440p" || "1080p" || "720p" || "480p" || "360p" || "240p" || "144p"
 */

// Promise method
ytdlp
  .VideoData_CustomResolution({
    url: "https://youtu.be/TpdapO9QGRo", // required
    resolution: "2160p", // required
  })
  .then((data) => console.log("VideoData_CustomResolution: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await ytdlp
    .VideoData_CustomResolution({
      url: "https://youtu.be/TpdapO9QGRo", // required
      resolution: "2160p", // required
    })
    .catch((e) => console.log(e));
  console.log("VideoData_CustomResolution: ", data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");

import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "highest" || "medium" || "lowest"
 */

// Promise method
ytdlp
  .VideoData_SortedResolution({
    url: "https://youtu.be/TpdapO9QGRo", // required
    quality: "highest", // required
  })
  .then((data) => console.log("VideoData_SortedResolution: ", data))
  .catch((e) => console.log(e));

// async/await method
(async () => {
  const data = await ytdlp
    .VideoData_SortedResolution({
      url: "https://youtu.be/TpdapO9QGRo", // required
      quality: "highest", // required
    })
    .catch((e) => console.log(e));
  console.log("VideoData_SortedResolution: ", data);
})();
// ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱ [ DOWNLOADER ] ☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱

import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 * @param {download-folder-name} @arg {optional} -> auto created if not exists or specified
 */

// Promise method
ytdlp
  .DownloadAudio_CustomQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    title: "song-title", // optional
    sort: "medium", // required
    folder: "folder_save", // optional
  })
  .then((data) =>
    console.log(chalk.bgGreen("DownloadAudio_CustomQuality:"), data)
  )
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await ytdlp
    .DownloadAudio_CustomQuality({
      url: "https://youtu.be/TpdapO9QGRo", // required
      title: "song-title", // optional
      sort: "medium", // required
      folder: "folder_save", //optional
    })
    .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));
  console.log(chalk.bgGreen("DownloadAudio_CustomQuality:"), data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");

import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "best-possible" || "lowest-possible"
 * @param {download-folder-name} @arg {optional} -> auto created if not exists or specified
 */

// Promise method
ytdlp
  .DownloadAudio_SortedQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    title: "song-title", // optional
    sort: "medium", // required
    folder: "folder_save", // optional
  })
  .then((data) =>
    console.log(chalk.bgGreen("DownloadAudio_SortedQuality:"), data)
  )
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await ytdlp
    .DownloadAudio_SortedQuality({
      url: "https://youtu.be/VCiDeT16t6U",
      sort: "medium",
      folder: "mågneum",
    })
    .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));
  console.log(chalk.bgGreen("DownloadAudio_SortedQuality:"), data);
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");

// ╔⧉༻ ❝ ⚡ ⒸYT-DLP ⚡ ❞
// ║ Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +918436686758, +917430922909
// ╚════════════╝

// YT-DLP Was Made For Easier Scrapping And Downloading Youtube Audios & Videos.
// If You Fork This Repo And Edit Plugins, It's Your Concern For Further Updates.
// Forking Repo Is Fine.
// But If You Edit Something We Will Not Provide Any Help.
// In Short, Fork At Your Own Risk.

// YT-DLP Is In No Way Affiliated With, Authorized, Maintained,
// Sponsored Or Endorsed By YouTube Or Any Of Its Affiliates Or
// Subsidiaries.
// This Is An Independent And Unofficial Software.
// Use At Your Own Risk.

// MIT License
// Copyright (c) 2023 Mågnëum </>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
