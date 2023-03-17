// ◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// MIT License
// Copyright (c) 2023 Mågnëum </>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// ◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
import chalk from "chalk";
import * as ytdlp from "../index.js";

ytdlp
  .AudioData_CustomQuality({
    url: "https://youtu.be/VCiDeT16t6U", //required
    sort: "medium", //required
  })
  .then((data) => console.log(chalk.bgGreen("AudioData_CustomQuality:"), data))
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

ytdlp
  .AudioData_SortedAuto({
    url: "https://youtu.be/VCiDeT16t6U", //required
    quality: "best-possible", //required
  })
  .then((data) => console.log(chalk.bgGreen("AudioData_SortedAuto:"), data))
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// ◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"

ytdlp
  .VideoData_CustomResolution({
    url: "https://youtu.be/VCiDeT16t6U", //required
    resolution: "2160p", //required
  })
  .then((data) =>
    console.log(chalk.bgGreen("VideoData_CustomResolution:"), data)
  )
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

ytdlp
  .VideoData_SortedResolution({
    url: "https://youtu.be/VCiDeT16t6U", // required
    quality: "highest", //required
  })
  .then((data) => console.log(chalk.bgGreen("INFOVIDEO_SORTED:"), data))
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// ◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"

ytdlp
  .DownloadAudio_CustomQuality({
    url: "https://youtu.be/VCiDeT16t6U", // required
    sort: "ultralow", // required
    path: "mågneum", // optional
    title: "mågneum", // optional
  })
  .then((data) =>
    console.log(chalk.bgGreen("DownloadAudio_CustomQuality:"), data)
  )
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// ◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"

ytdlp
  .DownloadAudio_SortedQuality({
    url: "https://youtu.be/VCiDeT16t6U", // required
    quality: "best-possible", // required
    path: "mågneum", // optional
    title: "mågneum", // optional
  })
  .then((data) =>
    console.log(chalk.bgGreen("DownloadAudio_SortedQuality:"), data)
  )
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// ◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
