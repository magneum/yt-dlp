import * as ytdlp from "yt-dlp";

/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "2160p" || "1440p" || "1080p" || "720p" || "480p" || "360p" || "240p" || "144p"
 */

// Promise method
ytdlp
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

// async/await method
(async () => {
  const data = await ytdlp
    .VideoData_CustomResolution({
      url: "https://youtu.be/TpdapO9QGRo", // required
      resolution: "2160p", // required
    })
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  console.log(chalk.bgGreen("VideoData_CustomResolution:"), data);
})();
