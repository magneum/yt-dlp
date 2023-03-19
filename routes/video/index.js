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
import ExecJson from "youtube-dl-exec";
import ProgressEstimator from "progress-estimator";
const ProgressEst = ProgressEstimator();
function regExTestYT(str) {
  var exp = new RegExp(/(youtu\.be|youtube\.com)/);
  return exp.test(str);
}
function shorten(url) {
  https.get(
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
    (res) => {
      res.on("data", (chunk) => {
        return chunk.toString();
      });
    }
  );
}

export async function videoData_customQuality(rover) {
  rover.resolution || "1080p";
  rover.url || "not-a-youtube-link";
  if (!regExTestYT(rover.url)) {
    throw new Error("YouTube Link not found.Refer to docs for usage examples.");
  } else
    try {
      var Execjson = ExecJson(rover.url, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      }).catch(() => {
        throw new Error("Sorry some error occured.Try again!");
      });
      const jsonmeta = await ProgressEst(Execjson, "Obtaining: " + " ");

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

      if (rover.resolution === "2160p") {
        if (Format_2160p.width)
          return {
            type: "2160p",
            url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.resolution === "1440p") {
        if (Format_1440p)
          return {
            type: "1440p",
            url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.resolution === "1080p") {
        if (Format_1080p.width)
          return {
            type: "1080p",
            url:
              Format_1080p[0].url ||
              Format_1080p[1].url ||
              Format_1080p[2].url ||
              Format_1080p.url,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.resolution === "720p") {
        if (Format_720p.width)
          return {
            type: "720p",
            url:
              Format_720p[0].url ||
              Format_720p[1].url ||
              Format_720p[2].url ||
              Format_720p[3].url ||
              Format_720p.url,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.resolution === "480p") {
        if (Format_480p.width)
          return {
            type: "480p",
            url:
              Format_480p[0].url ||
              Format_480p[1].url ||
              Format_480p[2].url ||
              Format_480p.url,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.resolution === "360p") {
        if (Format_360p.width)
          return {
            type: "360p",
            url:
              Format_360p[0].url ||
              Format_360p[1].url ||
              Format_360p[2].url ||
              Format_360p[3].url ||
              Format_360p.url,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.resolution === "240p") {
        if (Format_240p.width)
          return {
            type: "240p",
            url:
              Format_240p[0].url ||
              Format_240p[1].url ||
              Format_240p[2].url ||
              Format_240p,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.resolution === "144p") {
        if (Format_144p.width)
          return {
            type: "144p",
            url:
              Format_144p[0].url ||
              Format_144p[1].url ||
              Format_144p[2].url ||
              Format_144p[3].url ||
              Format_144p[4].url ||
              Format_144p[5].url ||
              Format_144p.url,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else throw new Error("Wrong Quality Provided.");
    } catch (error) {
      return error.message;
    }
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
export async function videoData_autoSorted(rover) {
  rover.quality || "highest";
  rover.url || "not-a-youtube-link";
  if (!regExTestYT(rover.url)) {
    throw new Error("YouTube Link not found.Refer to docs for usage examples.");
  } else
    try {
      var Execjson = ExecJson(rover.url, {
        noWarnings: true,
        dumpSingleJson: true,
        preferFreeFormats: true,
        noCheckCertificates: true,
        addHeader: ["referer:youtube.com", "user-agent:googlebot"],
      }).catch(() => {
        throw new Error("Sorry some error occured.Try again!");
      });
      const jsonmeta = await ProgressEst(Execjson, "Obtaining: " + " ");
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

      if (rover.quality === "highest-possible") {
        if (Format_2160p.filter((w) => w.width).length)
          return {
            type: "highest-possible",
            resolution: "2160p",
            url: Format_2160p[0].url || Format_2160p[1].url || Format_2160p.url,
          };
        else if (Format_1440p.filter((w) => w.width).length)
          return {
            type: "highest-possible",
            resolution: "1440p",
            url: Format_1440p[0].url || Format_1440p[1].url || Format_1440p.url,
          };
        else if (Format_1080p.filter((w) => w.width).length)
          return {
            type: "highest-possible",
            resolution: "1080p",
            url:
              Format_1080p[0].url || Format_1080p[1].url || Format_1080p[2].url,
          };
        else if (Format_720p.filter((w) => w.width).length)
          return {
            type: "highest-possible",
            resolution: "720p",
            url:
              Format_720p[0].url ||
              Format_720p[1].url ||
              Format_720p[2].url ||
              Format_720p[3].url ||
              Format_720p.url,
          };
        else if (Format_480p.filter((w) => w.width).length)
          return {
            type: "highest-possible",
            resolution: "480p",
            url:
              Format_480p[0].url ||
              Format_480p[1].url ||
              Format_480p[2].url ||
              Format_480p.url,
          };
        else if (Format_360p.filter((w) => w.width).length)
          return {
            type: "highest-possible",
            resolution: "360p",
            url:
              Format_360p[0].url ||
              Format_360p[1].url ||
              Format_360p[2].url ||
              Format_360p[3].url ||
              Format_360p.url,
          };
        else if (Format_240p.filter((w) => w.width).length)
          return {
            type: "highest-possible",
            resolution: "240p",
            url:
              Format_240p[0].url ||
              Format_240p[1].url ||
              Format_240p[2].url ||
              Format_240p,
          };
        else if (Format_144p.filter((w) => w.width).length)
          return {
            type: "highest-possible",
            resolution: "144p",
            url:
              Format_144p[0].url ||
              Format_144p[1].url ||
              Format_144p[2].url ||
              Format_144p[3].url ||
              Format_144p[4].url ||
              Format_144p[5].url ||
              Format_144p.url,
          };
        else
          throw new Error(
            "Sorry this video doesn't have the Quality requested."
          );
      } else if (rover.quality === "lowest-possible") {
        if (Format_144p.filter((w) => w.width).length)
          return {
            type: "lowest-possible",
            resolution: "144p",
            url:
              Format_144p[0].url ||
              Format_144p[1].url ||
              Format_144p[2].url ||
              Format_144p[3].url ||
              Format_144p[4].url ||
              Format_144p[5].url ||
              Format_144p.url,
          };
      } else if (Format_240p.filter((w) => w.width).length)
        return {
          type: "lowest-possible",
          resolution: "240p",
          url:
            Format_240p[0].url ||
            Format_240p[1].url ||
            Format_240p[2].url ||
            Format_240p,
        };
      else if (Format_360p.filter((w) => w.width).length)
        return {
          type: "lowest-possible",
          resolution: "360p",
          url:
            Format_360p[0].url ||
            Format_360p[1].url ||
            Format_360p[2].url ||
            Format_360p,
        };
      else if (Format_480p.filter((w) => w.width).length)
        return {
          type: "lowest-possible",
          resolution: "480p",
          url:
            Format_480p[0].url ||
            Format_480p[1].url ||
            Format_480p[2].url ||
            Format_480p,
        };
      else if (Format_720p.filter((w) => w.width).length)
        return {
          type: "lowest-possible",
          resolution: "720p",
          url:
            Format_720p[0].url ||
            Format_720p[1].url ||
            Format_720p[2].url ||
            Format_720p,
        };
      else if (Format_1080p.filter((w) => w.width).length)
        return {
          type: "lowest-possible",
          resolution: "1080p",
          url:
            Format_1080p[0].url ||
            Format_1080p[1].url ||
            Format_1080p[2].url ||
            Format_1080p,
        };
      else if (Format_1440p.filter((w) => w.width).length)
        return {
          type: "lowest-possible",
          resolution: "1440p",
          url:
            Format_1440p[0].url ||
            Format_1440p[1].url ||
            Format_1440p[2].url ||
            Format_1440p,
        };
      else if (Format_2160p.filter((w) => w.width).length)
        return {
          type: "lowest-possible",
          resolution: "2160p",
          url:
            Format_2160p[0].url ||
            Format_2160p[1].url ||
            Format_2160p[2].url ||
            Format_2160p,
        };
      else throw new Error("Wrong Quality Provided.");
    } catch (error) {
      return error.message;
    }
}
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
