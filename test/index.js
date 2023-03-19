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
import Fetch from "node-fetch";
import { ytdlp } from "../app/index.js";

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

  // ytdlp.audio
  // .Auto_Sorted_Data({
  // yturl: api_data.youtube_search[0].LINK, // required
  // quality: "highest-possible", // required
  // })
  // .then((r) => {
  // console.log(c.bgGreen("[PROMISE]:"), c.bgGrey("Auto_Sorted_Data()"));
  // console.log(c.blue("Quality:"), c.gray(r.quality));
  // console.log(c.blue("Resolution:"), c.gray(r.resolution));
  // console.log(c.blue("Filesize:"), c.gray(r.filesize));
  // console.log(c.blue("Audiochannels:"), c.gray(r.audiochannels));
  // console.log(c.blue("Extensions:"), c.gray(r.extensions));
  // console.log(c.blue("Audiocodec:"), c.gray(r.acodec));
  // console.log(c.blue("Url:"), c.gray(r.url));
  // })
  // .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));

  // ytdlp.video
  // .Auto_Sorted_Data({
  // yturl: api_data.youtube_search[0].LINK, // required
  // quality: "highest-possible", // required
  // })
  // .then((r) => {
  // console.log(
  // c.bgGreen("[PROMISE]:"),
  // c.bgGrey("video.Auto_Sorted_Data()")
  // );
  // console.log(c.red("Filesize:"), c.gray(r.filesize));
  // console.log(c.red("Extensions:"), c.gray(r.extensions));
  // console.log(c.red("Videocodec:"), c.gray(r.vcodec));
  // console.log(c.red("Resolution:"), c.gray(r.resolution));
  // console.log(c.red("Url:"), c.gray(r.url));
  // })
  // .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));

  // ytdlp.audio
  // .Custom_Quality_Data({
  // yturl: api_data.youtube_search[0].LINK, // required
  // sort: "high", // required
  // })
  // .then((r) => {
  // console.log(c.bgGreen("[PROMISE]:"), c.bgGrey("Custom_Quality_Data()"));
  // console.log(c.blue("Type:"), c.gray(r.type));
  // console.log(c.blue("Resolution:"), c.gray(r.resolution));
  // console.log(c.blue("Filesize:"), c.gray(r.filesize));
  // console.log(c.blue("Audiochannels:"), c.gray(r.audiochannels));
  // console.log(c.blue("Extensions:"), c.gray(r.extensions));
  // console.log(c.blue("Audiocodec:"), c.gray(r.acodec));
  // console.log(c.blue("Url:"), c.gray(r.url));
  // })
  // .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));

  // ytdlp.video
  // .Custom_Quality_Data({
  // yturl: api_data.youtube_search[0].LINK, // required
  // resolution: "2160p", // required
  // })
  // .then((r) => {
  // console.log(
  // c.bgGreen("[PROMISE]:"),
  // c.bgGrey("video.Custom_Quality_Data()")
  // );
  // console.log(c.red("Filesize:"), c.gray(r.filesize));
  // console.log(c.red("Extensions:"), c.gray(r.extensions));
  // console.log(c.red("Videocodec:"), c.gray(r.vcodec));
  // console.log(c.red("Resolution:"), c.gray(r.resolution));
  // console.log(c.red("Url:"), c.gray(r.url));
  // })
  // .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));

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

  // ytdlp.audio
  // .dl_Auto_Sorted_Data({
  // title: api_data.youtube_search[0].TITLE, // optional
  // yturl: api_data.youtube_search[0].LINK, // required
  // sort: "highest-possible", // required
  // folder: "mågneum", // optional
  // })
  // .then((r) => {
  // console.log(
  // c.bgGreen("[PROMISE]:"),
  // c.bgGrey("audio.dl_Auto_Sorted_Data()")
  // );
  // console.log(c.cyan("Downloadpath:"), c.gray(r.downloadpath));
  // console.log(c.cyan("Message:"), c.gray(r.message));
  // })
  // .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
});
