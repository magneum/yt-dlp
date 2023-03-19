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
import Fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();
const FetchOpts = {
  method: "get",
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "user-agent": [
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 YaBrowser/19.10.3.281 Yowser/2.5 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.30",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
    ],
  },
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
export default async (request, callback) => {
  const response = await Fetch(
    "https://magneum.vercel.app/api/youtube_sr?q=" + request,
    FetchOpts
  );
  const metadata = await response.json();
  return callback({
    header: "◎☱☱☱☱[ ву mågneum ]☱☱☱☱◎",
    status: true,
    api: "https://bit.ly/magneum",
    uuid: metadata.uuid,
    query: request,
    apiCalled: metadata.date_create,
    title: metadata.youtube_search[0].TITLE,
    videoId: metadata.youtube_search[0].YT_ID,
    uploadedOn: metadata.youtube_search[0].UPLOADED,
    views: metadata.youtube_search[0].VIEWS,
    durationString: metadata.youtube_search[0].DURATION_FULL,
    durationSeconds: metadata.youtube_search[0].DURATION_SECONDS,
    authorName: metadata.youtube_search[0].AUTHOR_NAME,
    authorChannel: metadata.youtube_search[0].AUTHOR_CHANNEL,
    videoLink: metadata.youtube_search[0].LINK,
    thumbnail: metadata.youtube_search[0].HQ_IMAGE,
    description: metadata.youtube_search[0].DESCRIPTION,
    footer: "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎",
  });
};
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
