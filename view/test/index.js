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
import chalk from "chalk";
import * as YTDLP from "../../index.js";

(async () => {
  await YTDLP.audioData_customQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    sort: "high", // required
  })
    .then((data) =>
      console.log(chalk.bgGreen("audioData_customQuality:"), data)
    )
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  await YTDLP.audioData_autoSorted({
    url: "https://youtu.be/TpdapO9QGRo", // required
    quality: "highest-possible", // required
  })
    .then((data) => console.log(chalk.bgGreen("INFOAUDIO_SORTED:"), data))
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  await YTDLP.videoData_customQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    resolution: "2160p", // required
  })
    .then((data) =>
      console.log(chalk.bgGreen("videoData_customQuality:"), data)
    )
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  await YTDLP.videoData_autoSorted({
    url: "https://youtu.be/TpdapO9QGRo", // required
    quality: "highest-possible", // required
  })
    .then((data) => console.log(chalk.bgGreen("INFOVIDEO_SORTED:"), data))
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );

  // await YTDLP
  // .dloadAudio_customQuality({
  // url: "https://youtu.be/TpdapO9QGRo", // required
  // title: "song-title", // optional
  // sort: "medium", // required
  // folder: "folder_save", // optional
  // })
  // .then((data) =>
  // console.log(chalk.bgGreen("dloadAudio_customQuality:"), data)
  // )
  // .catch((error) =>
  // console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  // );
  // await YTDLP
  // .dloadAudio_autoSorted({
  // url: "https://youtu.be/TpdapO9QGRo", // required
  // title: "song-title", // optional
  // sort: "medium", // required
  // folder: "folder_save", // optional
  // })
  // .then((data) =>
  // console.log(chalk.bgGreen("dloadAudio_autoSorted:"), data)
  // )
  // .catch((error) =>
  // console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  // );
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
