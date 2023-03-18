import * as ytdlp from "yt-dlp";
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 * @param {download-folder-name} @arg {optional} -> auto created if not exists or specified
 */

// Promise method
ytdlp
  .DownloadAudio_CustomQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    title: "song-title", // optional
    sort: "medium", // required
    folder: "folder_save", // optional
  })
  .then((data) =>
    console.log(chalk.bgGreen("DownloadAudio_CustomQuality:"), data)
  )
  .catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );

// async/await method
(async () => {
  const data = await ytdlp
    .DownloadAudio_CustomQuality({
      url: "https://youtu.be/TpdapO9QGRo", // required
      title: "song-title", // optional
      sort: "medium", // required
      folder: "folder_save", //optional
    })
    .catch((error) =>
      console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
    );
  console.log(chalk.bgGreen("DownloadAudio_CustomQuality:"), data);
})();
