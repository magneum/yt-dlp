import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 */

// Promise method
ytdlp
  .AudioData_CustomQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    sort: "medium", // required
  })
  .then((data) => console.log(chalk.bgGreen("AudioData_CustomQuality:"), data))
  .catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );

// async/await method
(async () => {
  const data = await ytdlp
    .AudioData_CustomQuality({
      url: "https://youtu.be/TpdapO9QGRo", // required
      sort: "medium", // required
    })
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  console.log(chalk.bgGreen("AudioData_CustomQuality:"), data);
})();
