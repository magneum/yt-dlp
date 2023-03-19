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
import c from "chalk";
import Fetch from "node-fetch";
import * as YTDLP from "yt-dlp";

// To Get YouTube Video Simple Metadata
let songname = "4k audio dolby";
const FetchOpts = {
  method: "get",
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
};
Fetch(
  "https://magneum.vercel.app/api/youtube_sr?q=" + songname,
  FetchOpts
).then(async (response) => {
  const data = await response.json();
  console.log(data);

  // Promise method
  YTDLP.dloadVideo_customQuality({
    title: data.youtube_search[0].TITLE, // optional
    url: data.youtube_search[0].LINK, // required
    folder: "mågneum", // optional
    quality: "1080p", // required
  })
    .then((r) =>
      console.log(c.bgGreen("DLOADVIDEO_CUSTOMQUALITY: [PROMISE]"), r)
    )
    .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));

  // async/await method
  (async () => {
    const r = await YTDLP.dloadVideo_customQuality({
      title: data.youtube_search[0].TITLE, // optional
      url: data.youtube_search[0].LINK, // required
      folder: "mågneum", // optional
      quality: "1080p", // required
    }).catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
    console.log(c.bgGreen("DLOADVIDEO_CUSTOMQUALITY [ASYNC/AWAIT]:"), r);
  })();
});