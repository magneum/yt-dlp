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
import * as ytdlp from "../../index.js";

(async () => {
  await ytdlp
    .AudioData_CustomQuality({
      url: "https://youtu.be/TpdapO9QGRo", // required
      sort: "high", // required
    })
    .then((data) =>
      console.log(chalk.bgGreen("AudioData_CustomQuality:"), data)
    )
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  await ytdlp
    .AudioData_SortedAuto({
      url: "https://youtu.be/TpdapO9QGRo", // required
      quality: "highest-possible", // required
    })
    .then((data) => console.log(chalk.bgGreen("INFOAUDIO_SORTED:"), data))
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  await ytdlp
    .VideoData_CustomResolution({
      url: "https://youtu.be/TpdapO9QGRo", // required
      resolution: "2160p", // required
    })
    .then((data) =>
      console.log(chalk.bgGreen("VideoData_CustomResolution:"), data)
    )
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  await ytdlp
    .VideoData_SortedResolution({
      url: "https://youtu.be/TpdapO9QGRo", // required
      quality: "highest-possible", // required
    })
    .then((data) => console.log(chalk.bgGreen("INFOVIDEO_SORTED:"), data))
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );

  // await ytdlp
  // .DownloadAudio_CustomQuality({
  // url: "https://youtu.be/TpdapO9QGRo", // required
  // title: "song-title", // optional
  // sort: "medium", // required
  // folder: "folder_save", // optional
  // })
  // .then((data) =>
  // console.log(chalk.bgGreen("DownloadAudio_CustomQuality:"), data)
  // )
  // .catch((error) =>
  // console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  // );
  // await ytdlp
  // .DownloadAudio_SortedQuality({
  // url: "https://youtu.be/TpdapO9QGRo", // required
  // title: "song-title", // optional
  // sort: "medium", // required
  // folder: "folder_save", // optional
  // })
  // .then((data) =>
  // console.log(chalk.bgGreen("DownloadAudio_SortedQuality:"), data)
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
