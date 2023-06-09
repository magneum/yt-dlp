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
import FFmpeg from "fluent-ffmpeg";
import probdl from "youtube-dl-exec";
import FFmpegPath from "@ffmpeg-installer/ffmpeg";
import ProgressEstimator from "progress-estimator";
import FFmpegProbe from "@ffprobe-installer/ffprobe";
const logger = ProgressEstimator();

function printProgress(progress) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress + "%");
}

export default {
  probdl: probdl,
  logger: logger,
  FFmpeg: FFmpeg,
  FFmpegPath: FFmpegPath,
  FFmpegProbe: FFmpegProbe,
  printProgress: printProgress,
  FFmpegSaveAudio: function (link, savepath, qual, title) {
    FFmpeg(link)
      .format("mp3")
      .setFfmpegPath(FFmpegPath.path)
      .setFfprobePath(FFmpegProbe.path)
      .saveToFile(savepath + title + qual + ".mp3", { end: true })
      .on("error", (error) => console.error("ERROR: " + error.message))
      .on("progress", (progress) => printProgress(progress.percent.toFixed(2)))
      .on("end", () =>
        console.log("\nINFO: stream sent to client successfully.")
      )
      .run();
  },
  FFmpegSaveVideo: function (vLink, aLink, savepath, qual, title) {
    FFmpeg()
      .setFfmpegPath(FFmpegPath.path)
      .setFfprobePath(FFmpegProbe.path)
      .addInput(vLink)
      .addInput(aLink)
      .outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
      .videoCodec("libx264")
      .withAudioCodec("aac")
      .format("mp4")
      .outputOptions(["-movflags", "frag_keyframe + empty_moov"])
      .saveToFile(savepath + title + qual + ".mp3", { end: true })
      .on("error", (error) => console.error("ERROR: " + error.message))
      .on("progress", (progress) => printProgress(progress.percent.toFixed(2)))
      .on("end", () => console.log("INFO: stream sent to client successfully."))
      .run();
  },
  shorten: function (url) {
    https.get(
      "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
      (res) => {
        res.on("data", (chunk) => {
          return chunk.toString();
        });
      }
    );
  },
  regexpyt: function (url) {
    var exp = new RegExp(/(youtu\.be|youtube\.com)/);
    return exp.test(url);
  },
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
