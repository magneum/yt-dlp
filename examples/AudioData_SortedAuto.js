import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} quality -> "highest-possible" || "lowest-possible"
 */

// Promise method
ytdlp
  .AudioData_SortedAuto({
    url: "https://youtu.be/TpdapO9QGRo", // required
    quality: "highest-possible", // required
  })
  .then((data) => console.log(chalk.bgGreen("INFOAUDIO_SORTED:"), data))
  .catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );

// async/await method
(async () => {
  const data = await ytdlp
    .AudioData_SortedAuto({
      url: "https://youtu.be/TpdapO9QGRo", // required
      quality: "highest-possible", // required
    })
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  console.log(chalk.bgGreen("INFOAUDIO_SORTED:"), data);
})();
