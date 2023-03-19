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
import fs from "fs";
import utils from "../../utils/index.js";
import config from "../../config/index.js";

async function Custom_Quality_Data(app) {
  app.resolution = app.resolution || "1080p";
  app.yturl = app.yturl || config.no_yturl;
  if (!utils.regexpyt(app.yturl))
    throw new Error(config.audioData_customQuality_no_url);
  else
    var promise = utils
      .probdl(app.yturl, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      })
      .catch(() => {
        throw new Error(config.ExecJson);
      });
  const jsonmeta = await utils.logger(promise, "FETCHING....\n");

  var FT2160p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "401" && res.format_note === "2160p") ||
      (res.format_id === "313" && res.format_note === "2160p")
  );
  var FT1440p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "400" && res.format_note === "1440p") ||
      (res.format_id === "271" && res.format_note === "1440p")
  );

  var FT1080p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "399" && res.format_note === "1080p") ||
      (res.format_id === "137" && res.format_note === "1080p") ||
      (res.format_id === "248" && res.format_note === "1080p")
  );

  var FT720p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "247" && res.format_note === "720p") ||
      (res.format_id === "398" && res.format_note === "720p") ||
      (res.format_id === "136" && res.format_note === "720p") ||
      (res.format_id === "22" && res.format_note === "720p")
  );
  var FT480p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "397" && res.format_note === "480p") ||
      (res.format_id === "135" && res.format_note === "480p") ||
      (res.format_id === "244" && res.format_note === "480p")
  );
  var FT360p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "396" && res.format_note === "360p") ||
      (res.format_id === "134" && res.format_note === "360p") ||
      (res.format_id === "18" && res.format_note === "360p") ||
      (res.format_id === "243" && res.format_note === "360p")
  );
  var FT240p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "395" && res.format_note === "240p") ||
      (res.format_id === "133" && res.format_note === "240p") ||
      (res.format_id === "242" && res.format_note === "240p")
  );
  var FT144p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "17" && res.format_note === "144p") ||
      (res.format_id === "597" && res.format_note === "144p") ||
      (res.format_id === "598" && res.format_note === "144p") ||
      (res.format_id === "394" && res.format_note === "144p") ||
      (res.format_id === "160" && res.format_note === "144p") ||
      (res.format_id === "278" && res.format_note === "144p")
  );

  if (app.resolution === "2160p") {
    if (FT2160p.filter((w) => w.width).length) {
      return {
        resolution: "2160p",
        extensions: FT2160p[0].ext || FT2160p[1].ext || FT2160p.ext,
        vcodec: FT2160p[0].vcodec || FT2160p[1].vcodec || FT2160p.vcodec,
        filesize: FT2160p[0].filesize || FT2160p[1].filesize,
        url: FT2160p[0].url || FT2160p[1].url || FT2160p.url,
      };
    } else throw new Error(config.video_no_quality);
  } else if (app.resolution === "1440p") {
    if (FT1440p) {
      return {
        resolution: "1440p",
        extensions: FT1440p[0].ext || FT1440p[1].ext || FT1440p.ext,
        vcodec: FT1440p[0].vcodec || FT1440p[1].vcodec || FT1440p.vcodec,
        filesize: FT1440p[0].filesize || FT1440p[1].filesize,
        url: FT1440p[0].url || FT1440p[1].url || FT1440p.url,
      };
    } else throw new Error(config.video_no_quality);
  } else if (app.resolution === "1080p") {
    if (FT1080p.filter((w) => w.width).length) {
      return {
        resolution: "1080p",
        filesize:
          FT1080p[0].filesize || FT1080p[1].filesize || FT1080p[2].filesize,
        extensions:
          FT1440p[0].ext || FT1440p[1].ext || FT1440p[2].ext || FT1440p.ext,
        vcodec:
          FT1440p[0].vcodec ||
          FT1440p[1].vcodec ||
          FT1440p[2].vcodec ||
          FT1440p.vcodec,
        url: FT1080p[0].url || FT1080p[1].url || FT1080p[2].url,
      };
    } else throw new Error(config.video_no_quality);
  } else if (app.resolution === "720p") {
    if (FT720p.filter((w) => w.width).length) {
      return {
        resolution: "720p",
        extensions:
          FT720p[0].ext || FT720p[1].ext || FT720p[2].ext || FT720p[3].ext,
        vcodec:
          FT720p[0].vcodec ||
          FT720p[1].vcodec ||
          FT720p[2].vcodec ||
          FT720p[3].vcodec,
        filesize:
          FT720p[0].filesize ||
          FT720p[1].filesize ||
          FT720p[2].filesize ||
          FT720p[3].filesize,
        url:
          FT720p[0].url ||
          FT720p[1].url ||
          FT720p[2].url ||
          FT720p[3].url ||
          FT720p.url,
      };
    } else throw new Error(config.video_no_quality);
  } else if (app.resolution === "480p") {
    if (FT480p.filter((w) => w.width).length) {
      return {
        resolution: "480p",
        filesize:
          FT480p[0].filesize ||
          FT480p[1].filesize ||
          FT480p[2].filesize ||
          FT480p.filesize,
        extensions:
          FT480p[0].ext || FT480p[1].ext || FT480p[2].ext || FT480p.ext,
        vcodec:
          FT480p[0].vcodec ||
          FT480p[1].vcodec ||
          FT480p[2].vcodec ||
          FT480p.vcodec,
        url: FT480p[0].url || FT480p[1].url || FT480p[2].url || FT480p.url,
      };
    } else throw new Error(config.video_no_quality);
  } else if (app.resolution === "360p") {
    if (FT360p.filter((w) => w.width).length) {
      return {
        resolution: "360p",
        extensions:
          FT360p[0].ext ||
          FT360p[1].ext ||
          FT360p[2].ext ||
          FT360p[3].ext ||
          FT360p.ext,
        vcodec:
          FT360p[0].vcodec ||
          FT360p[1].vcodec ||
          FT360p[2].vcodec ||
          FT360p[3].vcodec ||
          FT360p.vcodec,
        filesize:
          FT360p[0].filesize ||
          FT360p[1].filesize ||
          FT360p[2].filesize ||
          FT360p[3].filesize ||
          FT360p.url,
        url:
          FT360p[0].url ||
          FT360p[1].url ||
          FT360p[2].url ||
          FT360p[3].url ||
          FT360p.url,
      };
    } else throw new Error(config.video_no_quality);
  } else if (app.resolution === "240p") {
    if (FT240p.filter((w) => w.width).length) {
      return {
        resolution: "240p",
        filesize:
          FT240p[0].filesize ||
          FT240p[1].filesize ||
          FT240p[2].filesize ||
          FT240p.filesize,
        extensions:
          FT240p[0].ext || FT240p[1].ext || FT240p[2].ext || FT240p.ext,
        vcodec:
          FT240p[0].vcodec ||
          FT240p[1].vcodec ||
          FT240p[2].vcodec ||
          FT240p.vcodec,
        url: FT240p[0].url || FT240p[1].url || FT240p[2].url || FT240p.url,
      };
    } else throw new Error(config.video_no_quality);
  } else if (app.resolution === "144p") {
    if (FT144p.filter((w) => w.width).length) {
      return {
        resolution: "144p",
        filesize:
          FT144p[0].filesize ||
          FT144p[1].filesize ||
          FT144p[2].filesize ||
          FT144p[3].filesize ||
          FT144p[4].filesize ||
          FT144p[5].filesize ||
          FT144p.filesize,
        extensions:
          FT144p[0].ext ||
          FT144p[1].ext ||
          FT144p[2].ext ||
          FT144p[3].ext ||
          FT144p[4].ext ||
          FT144p[5].ext ||
          FT144p.ext,
        vcodec:
          FT144p[0].vcodec ||
          FT144p[1].vcodec ||
          FT144p[2].vcodec ||
          FT144p[3].vcodec ||
          FT144p[4].vcodec ||
          FT144p[5].vcodec ||
          FT144p.vcodec,
        url:
          FT144p[0].url ||
          FT144p[1].url ||
          FT144p[2].url ||
          FT144p[3].url ||
          FT144p[4].url ||
          FT144p[5].url ||
          FT144p.url,
      };
    } else throw new Error(config.video_no_quality);
  } else throw new Error(config.no_quality);
}

async function Auto_Sorted_Data(app) {
  app.resolution = app.resolution || "highest-possible";
  app.yturl = app.yturl || config.no_yturl;
  if (!utils.regexpyt(app.yturl))
    throw new Error(config.audioData_customQuality_no_url);
  else
    var promise = utils
      .probdl(app.yturl, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      })
      .catch(() => {
        throw new Error(config.ExecJson);
      });
  const jsonmeta = await utils.logger(promise, "FETCHING....\n");
  var FT2160p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "401" && res.format_note === "2160p") ||
      (res.format_id === "313" && res.format_note === "2160p")
  );
  var FT1440p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "400" && res.format_note === "1440p") ||
      (res.format_id === "271" && res.format_note === "1440p")
  );

  var FT1080p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "399" && res.format_note === "1080p") ||
      (res.format_id === "137" && res.format_note === "1080p") ||
      (res.format_id === "248" && res.format_note === "1080p")
  );

  var FT720p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "247" && res.format_note === "720p") ||
      (res.format_id === "398" && res.format_note === "720p") ||
      (res.format_id === "136" && res.format_note === "720p") ||
      (res.format_id === "22" && res.format_note === "720p")
  );
  var FT480p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "397" && res.format_note === "480p") ||
      (res.format_id === "135" && res.format_note === "480p") ||
      (res.format_id === "244" && res.format_note === "480p")
  );
  var FT360p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "396" && res.format_note === "360p") ||
      (res.format_id === "134" && res.format_note === "360p") ||
      (res.format_id === "18" && res.format_note === "360p") ||
      (res.format_id === "243" && res.format_note === "360p")
  );
  var FT240p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "395" && res.format_note === "240p") ||
      (res.format_id === "133" && res.format_note === "240p") ||
      (res.format_id === "242" && res.format_note === "240p")
  );
  var FT144p = jsonmeta.formats.filter(
    (res) =>
      (res.format_id === "17" && res.format_note === "144p") ||
      (res.format_id === "597" && res.format_note === "144p") ||
      (res.format_id === "598" && res.format_note === "144p") ||
      (res.format_id === "394" && res.format_note === "144p") ||
      (res.format_id === "160" && res.format_note === "144p") ||
      (res.format_id === "278" && res.format_note === "144p")
  );

  if (app.resolution === "highest-possible") {
    if (FT2160p.filter((w) => w.width).length) {
      return {
        resolution: "2160p",
        type: "highest-possible",
        extensions: FT2160p[0].ext || FT2160p[1].ext || FT2160p.ext,
        vcodec: FT2160p[0].vcodec || FT2160p[1].vcodec || FT2160p.vcodec,
        filesize: FT2160p[0].filesize || FT2160p[1].filesize,
        url: FT2160p[0].url || FT2160p[1].url || FT2160p.url,
      };
    } else if (FT1440p.filter((w) => w.width).length) {
      return {
        resolution: "1440p",
        type: "highest-possible",
        extensions: FT1440p[0].ext || FT1440p[1].ext || FT1440p.ext,
        vcodec: FT1440p[0].vcodec || FT1440p[1].vcodec || FT1440p.vcodec,
        filesize: FT1440p[0].filesize || FT1440p[1].filesize,
        url: FT1440p[0].url || FT1440p[1].url || FT1440p.url,
      };
    } else if (FT1080p.filter((w) => w.width).length) {
      return {
        resolution: "1080p",
        type: "highest-possible",
        filesize:
          FT1080p[0].filesize || FT1080p[1].filesize || FT1080p[2].filesize,
        extensions:
          FT1440p[0].ext || FT1440p[1].ext || FT1440p[2].ext || FT1440p.ext,
        vcodec:
          FT1440p[0].vcodec ||
          FT1440p[1].vcodec ||
          FT1440p[2].vcodec ||
          FT1440p.vcodec,
        url: FT1080p[0].url || FT1080p[1].url || FT1080p[2].url,
      };
    } else if (FT720p.filter((w) => w.width).length) {
      return {
        resolution: "720p",
        type: "highest-possible",
        extensions:
          FT720p[0].ext || FT720p[1].ext || FT720p[2].ext || FT720p[3].ext,
        vcodec:
          FT720p[0].vcodec ||
          FT720p[1].vcodec ||
          FT720p[2].vcodec ||
          FT720p[3].vcodec,
        filesize:
          FT720p[0].filesize ||
          FT720p[1].filesize ||
          FT720p[2].filesize ||
          FT720p[3].filesize,
        url:
          FT720p[0].url ||
          FT720p[1].url ||
          FT720p[2].url ||
          FT720p[3].url ||
          FT720p.url,
      };
    } else if (FT480p.filter((w) => w.width).length) {
      return {
        resolution: "480p",
        type: "highest-possible",
        filesize:
          FT480p[0].filesize ||
          FT480p[1].filesize ||
          FT480p[2].filesize ||
          FT480p.filesize,
        extensions:
          FT480p[0].ext || FT480p[1].ext || FT480p[2].ext || FT480p.ext,
        vcodec:
          FT480p[0].vcodec ||
          FT480p[1].vcodec ||
          FT480p[2].vcodec ||
          FT480p.vcodec,
        url: FT480p[0].url || FT480p[1].url || FT480p[2].url || FT480p.url,
      };
    } else if (FT360p.filter((w) => w.width).length) {
      return {
        resolution: "360p",
        type: "highest-possible",
        extensions:
          FT360p[0].ext ||
          FT360p[1].ext ||
          FT360p[2].ext ||
          FT360p[3].ext ||
          FT360p.ext,
        vcodec:
          FT360p[0].vcodec ||
          FT360p[1].vcodec ||
          FT360p[2].vcodec ||
          FT360p[3].vcodec ||
          FT360p.vcodec,
        filesize:
          FT360p[0].filesize ||
          FT360p[1].filesize ||
          FT360p[2].filesize ||
          FT360p[3].filesize ||
          FT360p.url,
        url:
          FT360p[0].url ||
          FT360p[1].url ||
          FT360p[2].url ||
          FT360p[3].url ||
          FT360p.url,
      };
    } else if (FT240p.filter((w) => w.width).length) {
      return {
        resolution: "240p",
        type: "highest-possible",
        filesize:
          FT240p[0].filesize ||
          FT240p[1].filesize ||
          FT240p[2].filesize ||
          FT240p.filesize,
        extensions:
          FT240p[0].ext || FT240p[1].ext || FT240p[2].ext || FT240p.ext,
        vcodec:
          FT240p[0].vcodec ||
          FT240p[1].vcodec ||
          FT240p[2].vcodec ||
          FT240p.vcodec,
        url: FT240p[0].url || FT240p[1].url || FT240p[2].url || FT240p.url,
      };
    } else if (FT144p.filter((w) => w.width).length) {
      return {
        resolution: "144p",
        type: "highest-possible",
        filesize:
          FT144p[0].filesize ||
          FT144p[1].filesize ||
          FT144p[2].filesize ||
          FT144p[3].filesize ||
          FT144p[4].filesize ||
          FT144p[5].filesize ||
          FT144p.filesize,
        extensions:
          FT144p[0].ext ||
          FT144p[1].ext ||
          FT144p[2].ext ||
          FT144p[3].ext ||
          FT144p[4].ext ||
          FT144p[5].ext ||
          FT144p.ext,
        vcodec:
          FT144p[0].vcodec ||
          FT144p[1].vcodec ||
          FT144p[2].vcodec ||
          FT144p[3].vcodec ||
          FT144p[4].vcodec ||
          FT144p[5].vcodec ||
          FT144p.vcodec,
        url:
          FT144p[0].url ||
          FT144p[1].url ||
          FT144p[2].url ||
          FT144p[3].url ||
          FT144p[4].url ||
          FT144p[5].url ||
          FT144p.url,
      };
    } else throw new Error(config.video_no_quality);
  } else if (app.resolution === "lowest-possible") {
    if (FT144p.filter((w) => w.width).length) {
      return {
        resolution: "144p",
        type: "lowest-possible",
        filesize:
          FT144p[0].filesize ||
          FT144p[1].filesize ||
          FT144p[2].filesize ||
          FT144p[3].filesize ||
          FT144p[4].filesize ||
          FT144p[5].filesize ||
          FT144p.filesize,
        extensions:
          FT144p[0].ext ||
          FT144p[1].ext ||
          FT144p[2].ext ||
          FT144p[3].ext ||
          FT144p[4].ext ||
          FT144p[5].ext ||
          FT144p.ext,
        vcodec:
          FT144p[0].vcodec ||
          FT144p[1].vcodec ||
          FT144p[2].vcodec ||
          FT144p[3].vcodec ||
          FT144p[4].vcodec ||
          FT144p[5].vcodec ||
          FT144p.vcodec,
        url:
          FT144p[0].url ||
          FT144p[1].url ||
          FT144p[2].url ||
          FT144p[3].url ||
          FT144p[4].url ||
          FT144p[5].url ||
          FT144p.url,
      };
    } else if (FT240p.filter((w) => w.width).length) {
      return {
        resolution: "240p",
        type: "lowest-possible",
        filesize:
          FT240p[0].filesize ||
          FT240p[1].filesize ||
          FT240p[2].filesize ||
          FT240p.filesize,
        extensions:
          FT240p[0].ext || FT240p[1].ext || FT240p[2].ext || FT240p.ext,
        vcodec:
          FT240p[0].vcodec ||
          FT240p[1].vcodec ||
          FT240p[2].vcodec ||
          FT240p.vcodec,
        url: FT240p[0].url || FT240p[1].url || FT240p[2].url || FT240p.url,
      };
    } else if (FT360p.filter((w) => w.width).length) {
      return {
        resolution: "360p",
        type: "lowest-possible",
        extensions:
          FT360p[0].ext ||
          FT360p[1].ext ||
          FT360p[2].ext ||
          FT360p[3].ext ||
          FT360p.ext,
        vcodec:
          FT360p[0].vcodec ||
          FT360p[1].vcodec ||
          FT360p[2].vcodec ||
          FT360p[3].vcodec ||
          FT360p.vcodec,
        filesize:
          FT360p[0].filesize ||
          FT360p[1].filesize ||
          FT360p[2].filesize ||
          FT360p[3].filesize ||
          FT360p.url,
        url:
          FT360p[0].url ||
          FT360p[1].url ||
          FT360p[2].url ||
          FT360p[3].url ||
          FT360p.url,
      };
    } else if (FT480p.filter((w) => w.width).length) {
      return {
        resolution: "480p",
        type: "lowest-possible",
        filesize:
          FT480p[0].filesize ||
          FT480p[1].filesize ||
          FT480p[2].filesize ||
          FT480p.filesize,
        extensions:
          FT480p[0].ext || FT480p[1].ext || FT480p[2].ext || FT480p.ext,
        vcodec:
          FT480p[0].vcodec ||
          FT480p[1].vcodec ||
          FT480p[2].vcodec ||
          FT480p.vcodec,
        url: FT480p[0].url || FT480p[1].url || FT480p[2].url || FT480p.url,
      };
    } else if (FT720p.filter((w) => w.width).length) {
      return {
        resolution: "720p",
        type: "lowest-possible",
        extensions:
          FT720p[0].ext || FT720p[1].ext || FT720p[2].ext || FT720p[3].ext,
        vcodec:
          FT720p[0].vcodec ||
          FT720p[1].vcodec ||
          FT720p[2].vcodec ||
          FT720p[3].vcodec,
        filesize:
          FT720p[0].filesize ||
          FT720p[1].filesize ||
          FT720p[2].filesize ||
          FT720p[3].filesize,
        url:
          FT720p[0].url ||
          FT720p[1].url ||
          FT720p[2].url ||
          FT720p[3].url ||
          FT720p.url,
      };
    } else if (FT1080p.filter((w) => w.width).length) {
      return {
        resolution: "1080p",
        type: "lowest-possible",
        filesize:
          FT1080p[0].filesize || FT1080p[1].filesize || FT1080p[2].filesize,
        extensions:
          FT1440p[0].ext || FT1440p[1].ext || FT1440p[2].ext || FT1440p.ext,
        vcodec:
          FT1440p[0].vcodec ||
          FT1440p[1].vcodec ||
          FT1440p[2].vcodec ||
          FT1440p.vcodec,
        url: FT1080p[0].url || FT1080p[1].url || FT1080p[2].url,
      };
    } else if (FT1440p.filter((w) => w.width).length) {
      return {
        resolution: "1440p",
        type: "lowest-possible",
        extensions: FT1440p[0].ext || FT1440p[1].ext || FT1440p.ext,
        vcodec: FT1440p[0].vcodec || FT1440p[1].vcodec || FT1440p.vcodec,
        filesize: FT1440p[0].filesize || FT1440p[1].filesize,
        url: FT1440p[0].url || FT1440p[1].url || FT1440p.url,
      };
    } else if (FT2160p.filter((w) => w.width).length) {
      return {
        resolution: "2160p",
        type: "lowest-possible",
        extensions: FT2160p[0].ext || FT2160p[1].ext || FT2160p.ext,
        vcodec: FT2160p[0].vcodec || FT2160p[1].vcodec || FT2160p.vcodec,
        filesize: FT2160p[0].filesize || FT2160p[1].filesize,
        url: FT2160p[0].url || FT2160p[1].url || FT2160p.url,
      };
    } else throw new Error(config.video_no_quality);
  } else throw new Error(config.wrong_quality);
}

async function dl_Auto_Sorted_Data(app) {
  app.yturl = app.yturl || config.no_yturl;
  app.sort = app.sort || "highest-possible";
  app.title = app.title || "random-title-" + Math.random();
  if (!utils.regexpyt(app.yturl))
    throw new Error(config.audioData_customQuality_no_url);
  else {
    let downloadpath;
    if (!app.folder) {
      if (!fs.existsSync("mågneum")) fs.mkdirSync("mågneum");
      downloadpath = "./mågneum/";
    } else {
      if (!fs.existsSync(app.folder)) fs.mkdirSync(app.folder);
      downloadpath = "./" + app.folder + "/";
    }
    var promise = utils
      .probdl(app.yturl, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      })
      .catch(() => {
        throw new Error(config.ExecJson);
      });
    const jsonmeta = await utils.logger(promise, "FETCHING....\n");
    let audio;
    const maud = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "140" &&
          res.format_note === "medium" &&
          res.resolution === "audio only") ||
        (res.format_id === "251" &&
          res.format_note === "medium" &&
          res.resolution === "audio only")
    );
    const laud = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "139" &&
          res.format_note === "low" &&
          res.resolution === "audio only") ||
        (res.format_id === "249" &&
          res.format_note === "low" &&
          res.resolution === "audio only") ||
        (res.format_id === "250" &&
          res.format_note === "low" &&
          res.resolution === "audio only")
    );
    const uaud = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "599" &&
          res.format_note === "ultralow" &&
          res.resolution === "audio only") ||
        (res.format_id === "600" &&
          res.format_note === "ultralow" &&
          res.resolution === "audio only")
    );

    if (maud) audio = maud[0].url || maud[1].url || maud.url || null;
    else if (laud)
      audio = laud[0].url || laud[1].url || laud[2].url || laud.url || null;
    else if (uaud) audio = uaud[0].url || uaud[1].url || uaud.url || null;
    else throw new Error(config.no_audio);

    var Format_2160p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "401" && res.format_note === "2160p") ||
        (res.format_id === "313" && res.format_note === "2160p")
    );
    var Format_1440p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "400" && res.format_note === "1440p") ||
        (res.format_id === "271" && res.format_note === "1440p")
    );

    var Format_1080p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "399" && res.format_note === "1080p") ||
        (res.format_id === "137" && res.format_note === "1080p") ||
        (res.format_id === "248" && res.format_note === "1080p")
    );

    var Format_720p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "247" && res.format_note === "720p") ||
        (res.format_id === "398" && res.format_note === "720p") ||
        (res.format_id === "136" && res.format_note === "720p") ||
        (res.format_id === "22" && res.format_note === "720p")
    );
    var Format_480p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "397" && res.format_note === "480p") ||
        (res.format_id === "135" && res.format_note === "480p") ||
        (res.format_id === "244" && res.format_note === "480p")
    );
    var Format_360p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "396" && res.format_note === "360p") ||
        (res.format_id === "134" && res.format_note === "360p") ||
        (res.format_id === "18" && res.format_note === "360p") ||
        (res.format_id === "243" && res.format_note === "360p")
    );
    var Format_240p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "395" && res.format_note === "240p") ||
        (res.format_id === "133" && res.format_note === "240p") ||
        (res.format_id === "242" && res.format_note === "240p")
    );
    var Format_144p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "17" && res.format_note === "144p") ||
        (res.format_id === "597" && res.format_note === "144p") ||
        (res.format_id === "598" && res.format_note === "144p") ||
        (res.format_id === "394" && res.format_note === "144p") ||
        (res.format_id === "160" && res.format_note === "144p") ||
        (res.format_id === "278" && res.format_note === "144p")
    );

    if (app.sort === "highest-possible") {
      if (Format_2160p) {
        utils.FFmpegSaveVideo(
          Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
          audio,
          downloadpath,
          "-highest_possible_2160p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "highest_possible_2160p",
          message: "INFO: stream starting.",
          url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
        };
      }

      if (Format_1440p) {
        utils.FFmpegSaveVideo(
          Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
          audio,
          downloadpath,
          "-highest_possible_1440p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "highest_possible_1440p",
          message: "INFO: stream starting.",
          url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
        };
      }
      if (Format_1080p) {
        utils.FFmpegSaveVideo(
          Format_1080p[0].url ||
            Format_1080p[1].url ||
            Format_1080p[2].url ||
            Format_1080p.url,
          audio,
          downloadpath,
          "-highest_possible_1080p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "highest_possible_1080p",
          message: "INFO: stream starting.",
          url:
            Format_1080p[0].url ||
            Format_1080p[1].url ||
            Format_1080p[2].url ||
            Format_1080p.url,
        };
      }
      if (Format_720p) {
        utils.FFmpegSaveVideo(
          Format_720p[0].url ||
            Format_720p[1].url ||
            Format_720p[2].url ||
            Format_720p[3].url ||
            Format_720p.url,
          audio,
          downloadpath,
          "-highest_possible_720p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "highest_possible_720p",
          message: "INFO: stream starting.",
          url:
            Format_720p[0].url ||
            Format_720p[1].url ||
            Format_720p[2].url ||
            Format_720p[3].url ||
            Format_720p.url,
        };
      }
      if (Format_480p) {
        utils.FFmpegSaveVideo(
          Format_480p[0].url ||
            Format_480p[1].url ||
            Format_480p[2].url ||
            Format_480p.url,
          audio,
          downloadpath,
          "-highest_possible_480p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "highest_possible_480p",
          message: "INFO: stream starting.",
          url:
            Format_480p[0].url ||
            Format_480p[1].url ||
            Format_480p[2].url ||
            Format_480p.url,
        };
      }
      if (Format_360p) {
        utils.FFmpegSaveVideo(
          Format_360p[0].url ||
            Format_360p[1].url ||
            Format_360p[2].url ||
            Format_360p[3].url ||
            Format_360p.url,
          audio,
          downloadpath,
          "-highest_possible_360p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "highest_possible_360p",
          message: "INFO: stream starting.",
          url:
            Format_360p[0].url ||
            Format_360p[1].url ||
            Format_360p[2].url ||
            Format_360p[3].url ||
            Format_360p.url,
        };
      }
      if (Format_240p) {
        utils.FFmpegSaveVideo(
          Format_240p[0].url ||
            Format_240p[1].url ||
            Format_240p[2].url ||
            Format_240p,
          audio,
          downloadpath,
          "-highest_possible_240p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "highest_possible_240p",
          message: "INFO: stream starting.",
          url:
            Format_240p[0].url ||
            Format_240p[1].url ||
            Format_240p[2].url ||
            Format_240p,
        };
      }
      if (Format_144p) {
        utils.FFmpegSaveVideo(
          Format_144p[0].url ||
            Format_144p[1].url ||
            Format_144p[2].url ||
            Format_144p[3].url ||
            Format_144p[4].url ||
            Format_144p[5].url ||
            Format_144p.url,
          audio,
          downloadpath,
          "-highest_possible_144p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "highest_possible_144p",
          message: "INFO: stream starting.",
          url:
            Format_144p[0].url ||
            Format_144p[1].url ||
            Format_144p[2].url ||
            Format_144p[3].url ||
            Format_144p[4].url ||
            Format_144p[5].url ||
            Format_144p.url,
        };
      } else throw new Error(config.video_no_quality);
    } else if (app.sort === "lowest-possible") {
      if (Format_144p) {
        utils.FFmpegSaveVideo(
          Format_144p[0].url ||
            Format_144p[1].url ||
            Format_144p[2].url ||
            Format_144p[3].url ||
            Format_144p[4].url ||
            Format_144p[5].url ||
            Format_144p.url,
          audio,
          downloadpath,
          "-lowest_possible_144p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "lowest_possible_144p",
          message: "INFO: stream starting.",
          url:
            Format_144p[0].url ||
            Format_144p[1].url ||
            Format_144p[2].url ||
            Format_144p[3].url ||
            Format_144p[4].url ||
            Format_144p[5].url ||
            Format_144p.url,
        };
      }
      if (Format_240p) {
        utils.FFmpegSaveVideo(
          Format_240p[0].url ||
            Format_240p[1].url ||
            Format_240p[2].url ||
            Format_240p,
          audio,
          downloadpath,
          "-lowest_possible_240p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "lowest_possible_240p",
          message: "INFO: stream starting.",
          url:
            Format_240p[0].url ||
            Format_240p[1].url ||
            Format_240p[2].url ||
            Format_240p,
        };
      }
      if (Format_360p) {
        utils.FFmpegSaveVideo(
          Format_360p[0].url ||
            Format_360p[1].url ||
            Format_360p[2].url ||
            Format_360p[3].url ||
            Format_360p.url,
          audio,
          downloadpath,
          "-lowest_possible_360p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "lowest_possible_360p",
          message: "INFO: stream starting.",
          url:
            Format_360p[0].url ||
            Format_360p[1].url ||
            Format_360p[2].url ||
            Format_360p[3].url ||
            Format_360p.url,
        };
      }
      if (Format_480p) {
        utils.FFmpegSaveVideo(
          Format_480p[0].url ||
            Format_480p[1].url ||
            Format_480p[2].url ||
            Format_480p.url,
          audio,
          downloadpath,
          "-lowest_possible_480p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "lowest_possible_480p",
          message: "INFO: stream starting.",
          url:
            Format_480p[0].url ||
            Format_480p[1].url ||
            Format_480p[2].url ||
            Format_480p.url,
        };
      }
      if (Format_720p) {
        utils.FFmpegSaveVideo(
          Format_720p[0].url ||
            Format_720p[1].url ||
            Format_720p[2].url ||
            Format_720p[3].url ||
            Format_720p.url,
          audio,
          downloadpath,
          "-lowest_possible_720p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "lowest_possible_720p",
          message: "INFO: stream starting.",
          url:
            Format_720p[0].url ||
            Format_720p[1].url ||
            Format_720p[2].url ||
            Format_720p[3].url ||
            Format_720p.url,
        };
      }
      if (Format_1080p) {
        utils.FFmpegSaveVideo(
          Format_1080p[0].url ||
            Format_1080p[1].url ||
            Format_1080p[2].url ||
            Format_1080p.url,
          audio,
          downloadpath,
          "-lowest_possible_1080p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "lowest_possible_1080p",
          message: "INFO: stream starting.",
          url:
            Format_1080p[0].url ||
            Format_1080p[1].url ||
            Format_1080p[2].url ||
            Format_1080p.url,
        };
      }
      if (Format_1440p) {
        utils.FFmpegSaveVideo(
          Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
          audio,
          downloadpath,
          "-lowest_possible_1440p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "lowest_possible_1440p",
          message: "INFO: stream starting.",
          url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
        };
      }
      if (Format_2160p) {
        utils.FFmpegSaveVideo(
          Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
          audio,
          downloadpath,
          "-lowest_possible_2160p",
          app.title
        );
        return {
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          type: "lowest_possible_2160p",
          message: "INFO: stream starting.",
          url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
        };
      } else throw new Error(config.video_no_quality);
    } else throw new Error(config.wrong_quality);
  }
}

async function dl_Custom_Quality_Data(app) {
  app.resolution = app.resolution || "1080p";
  app.yturl = app.yturl || config.no_yturl;
  if (!utils.regexpyt(app.yturl))
    throw new Error(config.audioData_customQuality_no_url);
  else {
    let downloadpath;
    if (!app.folder) {
      if (!fs.existsSync("mågneum")) fs.mkdirSync("mågneum");
      downloadpath = "./mågneum/";
    } else {
      if (!fs.existsSync(app.folder)) fs.mkdirSync(app.folder);
      downloadpath = "./" + app.folder + "/";
    }
    var promise = utils
      .probdl(app.yturl, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      })
      .catch(() => {
        throw new Error(config.ExecJson);
      });
    const jsonmeta = await utils.logger(promise, "FETCHING....\n");
    let audio;
    const maud = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "140" &&
          res.format_note === "medium" &&
          res.resolution === "audio only") ||
        (res.format_id === "251" &&
          res.format_note === "medium" &&
          res.resolution === "audio only")
    );
    const laud = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "139" &&
          res.format_note === "low" &&
          res.resolution === "audio only") ||
        (res.format_id === "249" &&
          res.format_note === "low" &&
          res.resolution === "audio only") ||
        (res.format_id === "250" &&
          res.format_note === "low" &&
          res.resolution === "audio only")
    );
    const uaud = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "599" &&
          res.format_note === "ultralow" &&
          res.resolution === "audio only") ||
        (res.format_id === "600" &&
          res.format_note === "ultralow" &&
          res.resolution === "audio only")
    );

    if (maud) audio = maud[0].url || maud[1].url || maud.url || null;
    else if (laud)
      audio = laud[0].url || laud[1].url || laud[2].url || laud.url || null;
    else if (uaud) audio = uaud[0].url || uaud[1].url || uaud.url || null;
    else throw new Error(config.no_audio);

    var Format_2160p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "401" && res.format_note === "2160p") ||
        (res.format_id === "313" && res.format_note === "2160p")
    );
    var Format_1440p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "400" && res.format_note === "1440p") ||
        (res.format_id === "271" && res.format_note === "1440p")
    );

    var Format_1080p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "399" && res.format_note === "1080p") ||
        (res.format_id === "137" && res.format_note === "1080p") ||
        (res.format_id === "248" && res.format_note === "1080p")
    );

    var Format_720p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "247" && res.format_note === "720p") ||
        (res.format_id === "398" && res.format_note === "720p") ||
        (res.format_id === "136" && res.format_note === "720p") ||
        (res.format_id === "22" && res.format_note === "720p")
    );
    var Format_480p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "397" && res.format_note === "480p") ||
        (res.format_id === "135" && res.format_note === "480p") ||
        (res.format_id === "244" && res.format_note === "480p")
    );
    var Format_360p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "396" && res.format_note === "360p") ||
        (res.format_id === "134" && res.format_note === "360p") ||
        (res.format_id === "18" && res.format_note === "360p") ||
        (res.format_id === "243" && res.format_note === "360p")
    );
    var Format_240p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "395" && res.format_note === "240p") ||
        (res.format_id === "133" && res.format_note === "240p") ||
        (res.format_id === "242" && res.format_note === "240p")
    );
    var Format_144p = jsonmeta.formats.filter(
      (res) =>
        (res.format_id === "17" && res.format_note === "144p") ||
        (res.format_id === "597" && res.format_note === "144p") ||
        (res.format_id === "598" && res.format_note === "144p") ||
        (res.format_id === "394" && res.format_note === "144p") ||
        (res.format_id === "160" && res.format_note === "144p") ||
        (res.format_id === "278" && res.format_note === "144p")
    );

    if (app.quality === "2160p") {
      if (Format_2160p) {
        utils.FFmpegSaveVideo(
          Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
          audio,
          downloadpath,
          "-2160p",
          app.title
        );
        return {
          resolution: "2160p",
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
        };
      } else throw new Error(config.video_no_quality);
    } else if (app.quality === "1440p") {
      if (Format_1440p) {
        utils.FFmpegSaveVideo(
          Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
          audio,
          downloadpath,
          "-1440p",
          app.title
        );
        return {
          resolution: "1440p",
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
        };
      } else throw new Error(config.video_no_quality);
    } else if (app.quality === "1080p") {
      if (Format_1080p) {
        utils.FFmpegSaveVideo(
          Format_1080p[0].url ||
            Format_1080p[1].url ||
            Format_1080p[2].url ||
            Format_1080p.url,
          audio,
          downloadpath,
          "-1080p",
          app.title
        );
        return {
          resolution: "1080p",
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          url:
            Format_1080p[0].url ||
            Format_1080p[1].url ||
            Format_1080p[2].url ||
            Format_1080p.url,
        };
      } else throw new Error(config.video_no_quality);
    } else if (app.quality === "720p") {
      if (Format_720p) {
        utils.FFmpegSaveVideo(
          Format_720p[0].url ||
            Format_720p[1].url ||
            Format_720p[2].url ||
            Format_720p[3].url ||
            Format_720p.url,
          audio,
          downloadpath,
          "-720p",
          app.title
        );
        return {
          resolution: "720p",
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          url:
            Format_720p[0].url ||
            Format_720p[1].url ||
            Format_720p[2].url ||
            Format_720p[3].url ||
            Format_720p.url,
        };
      } else throw new Error(config.video_no_quality);
    } else if (app.quality === "480p") {
      if (Format_480p) {
        utils.FFmpegSaveVideo(
          Format_480p[0].url ||
            Format_480p[1].url ||
            Format_480p[2].url ||
            Format_480p.url,
          audio,
          downloadpath,
          "-480p",
          app.title
        );
        return {
          resolution: "480p",
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          url:
            Format_480p[0].url ||
            Format_480p[1].url ||
            Format_480p[2].url ||
            Format_480p.url,
        };
      } else throw new Error(config.video_no_quality);
    } else if (app.quality === "360p") {
      if (Format_360p) {
        utils.FFmpegSaveVideo(
          Format_360p[0].url ||
            Format_360p[1].url ||
            Format_360p[2].url ||
            Format_360p[3].url ||
            Format_360p.url,
          audio,
          downloadpath,
          "-360p",
          app.title
        );
        return {
          resolution: "360p",
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          url:
            Format_360p[0].url ||
            Format_360p[1].url ||
            Format_360p[2].url ||
            Format_360p[3].url ||
            Format_360p.url,
        };
      } else throw new Error(config.video_no_quality);
    } else if (app.quality === "240p") {
      if (Format_240p) {
        utils.FFmpegSaveVideo(
          Format_240p[0].url ||
            Format_240p[1].url ||
            Format_240p[2].url ||
            Format_240p,
          audio,
          downloadpath,
          "-240p",
          app.title
        );
        return {
          resolution: "240p",
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          url:
            Format_240p[0].url ||
            Format_240p[1].url ||
            Format_240p[2].url ||
            Format_240p,
        };
      } else throw new Error(config.video_no_quality);
    } else if (app.quality === "144p") {
      if (Format_144p) {
        utils.FFmpegSaveVideo(
          Format_144p[0].url ||
            Format_144p[1].url ||
            Format_144p[2].url ||
            Format_144p[3].url ||
            Format_144p[4].url ||
            Format_144p[5].url ||
            Format_144p.url,
          audio,
          downloadpath,
          "-144p",
          app.title
        );
        return {
          resolution: "144p",
          audiourl: audio,
          downloadpath: downloadpath,
          message: "INFO: stream starting.",
          url:
            Format_144p[0].url ||
            Format_144p[1].url ||
            Format_144p[2].url ||
            Format_144p[3].url ||
            Format_144p[4].url ||
            Format_144p[5].url ||
            Format_144p.url,
        };
      } else throw new Error(config.video_no_quality);
    } else throw new Error(config.wrong_quality);
  }
}

export {
  Custom_Quality_Data,
  Auto_Sorted_Data,
  dl_Auto_Sorted_Data,
  dl_Custom_Quality_Data,
};
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
