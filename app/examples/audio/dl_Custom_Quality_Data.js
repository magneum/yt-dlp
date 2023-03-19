"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
// ╔⧉༻ ❝ ⚡ ⒸYT-DLP ⚡ ❞
// ║ Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +918436686758, +917430922909
// ╚════════════╝

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
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

// To Get YouTube Video Simple Metadata
let songname = "4k audio dolby";
Fetch("https://magneum.vercel.app/api/youtube_sr?q=" + songname, {
  method: "get",
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
}).then(async function (response) {
  const api_data = await response.json();
  // console.log(api_data);

  // Promise method
  ytdlp.audio
    .dl_Custom_Quality_Data({
      title: api_data.youtube_search[0].TITLE, // optional
      yturl: api_data.youtube_search[0].LINK, // required
      folder: "mågneum", // optional
      sort: "high", // required
    })
    .then((r) => {
      console.log(
        c.bgGreen("[PROMISE]:"),
        c.bgGrey("audio.dl_Custom_Quality_Data()")
      );
      console.log(c.cyan("Downloadpath:"), c.gray(r.downloadpath));
      console.log(c.cyan("Message:"), c.gray(r.message));
    })
    .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));

  // async/await method
  (async () => {
    const r = await ytdlp.audio
      .dl_Custom_Quality_Data({
        title: api_data.youtube_search[0].TITLE, // optional
        yturl: api_data.youtube_search[0].LINK, // required
        folder: "mågneum", // optional
        sort: "high", // required
      })
      .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
    console.log(
      c.bgGreen("[ASYNC]:"),
      c.bgGrey("ausio.dl_Custom_Quality_Data()")
    );
    console.log(c.cyan("Downloadpath:"), c.gray(r.downloadpath));
    console.log(c.cyan("Message:"), c.gray(r.message));
  })();
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ ❝ ⚡ ⒸYT-DLP ⚡ ❞
// ║ Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +918436686758, +917430922909
// ╚════════════╝

// MIT License
// Copyright (c) 2023 Mågnëum </>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
