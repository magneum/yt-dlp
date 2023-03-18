<h1 align="center"><b>❝ ⚡ ⒸYT-DLP ⚡ ❞</b></h1>
<h3 align="center">Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client.<br/>
YT-DLP Was Made For Easier Scrapping And Downloading Youtube Audios & Videos.<br/>
YT-DLP Provide Many Useful Functions For Audios And Videos Both.
<br />
</h3>
<br></br>
<p align="center">
<img src="https://github.com/magneum/yt-dlp/blob/main/src/LiquidYouTube.gif" height="400" width="600" style="border-radius:5%"/>
<br>
<i><b>[ "audio", video", youtube", "python", "javascript", "binary", "nodejs", "yt-dlp", "yt-dlp-wrapper", "youtube-downloader" ]</b></i>
</p>

<br><br>

<h1 align="center"><b>🖊️ Dependencies</b></h1>

> [@magneum-api](https://bit.ly/magneum) <br/> > [@yt-dlp](https://github.com/yt-dlp/yt-dlp) <br/> > [@ffmpeg-installer/ffmpeg](https://github.com/kribblo/node-ffmpeg-installer#readme) <br/> > [@ffprobe-installer/ffprobe](https://github.com/SavageCore/node-ffprobe-installer#readme) <br/> > [@dotenv](https://github.com/motdotla/dotenv#readme) <br/> > [@fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#readme) <br/> > [@node-fetch](https://github.com/yt-dlp/yt-dlp) <br/> > [@progress-estimator](https://github.com/bvaughn/progress-estimator#readme) <br/> > [@spinnies](https://github.com/jcarpanelli/spinnies#readme) <br/>
> Python, ffmpeg and ffprobe are highly recommended <br/>
> Python versions 3.7+ (CPython and PyPy) are supported. Other versions and implementations may or may not work correctly.

<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br><br>

<h1 align="center"><b>🖊️ Available Functions</b></h1>
<p>
 <i> Meta-Gatherer Functions </i>
  <li>🔍 Scrapper</li>
  <li>📢 AudioData_SortedAuto</li>
  <li>📢 AudioData_CustomQuality</li>
  <li>📹 VideoData_SortedResolution</li>
  <li>📹 VideoData_CustomResolution</li>
</p>
<p>
 <i> Downloader Functions </i>
  <li>📥 DownloadAudio_CustomQuality</li>
  <li>📥 DownloadAudio_SortedQuality</li>
  <li>📥 DownloadVideo_SortedQuality</li>
  <li>📥 DownloadVideo_SortedQuality</li>
</p>

<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1 align="center">
<b>📹 VideoData_CustomResolution()
</b>
</h1>

> <b>⚠️ RETURNS AUDIO-LESS VIDEO METADATA ⚠️</b> <br />
> Every Youtube Video Metadata Returned From Server Will Have '2160p', '1440p', '1080p', '720p', '480p', '360p', '240p', '144p'. <br />
> You Can Get Customized Metadata Depending On Your Selected Resolution And What The Max Resolution Initial Video Was Uploaded At.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "2160p" || "1440p" || "1080p" || "720p"
 *                        || "480p" || "360p" || "240p" || "144p"
 */
```

</p>
</details>

<details>
<summary><b>❓Example & Usage</b></summary>
<p>

```js
import { VideoData_CustomResolution } from "yt-dlp";
import chalk from "chalk";

// Promise method
YTDLP.VideoData_CustomResolution({
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
  const data = await YTDLP.VideoData_CustomResolution({
    url: "https://youtu.be/TpdapO9QGRo", // required
    resolution: "2160p", // required
  }).catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );
  console.log(chalk.bgGreen("VideoData_CustomResolution:"), data);
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

### Output Layout

```js
// Promise method output
✓ Obtaining:   2.3 secs
{
type: '2160p',
url: 'https://(server-generated-random-link).com'
}
Done in 2.65s.

// async/await method output
✓ Obtaining:   2.4 secs
{
type: '2160p',
url: 'https://(server-generated-random-link).com'
}
Done in 2.65s.
```

</p>
</details>

<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1 align="center">
<b>📹 VideoData_SortedResolution()
</b>
</h1>

> <b>⚠️ RETURNS AUDIO-LESS VIDEO METADATA ⚠️</b> <br />
> Every Youtube Video Metadata Returned From Server Will Be Sorted Into 'Highest-Possible', 'Medium-Possible' 'Lowest-Possible' Categories. <br />
> You Can Supply Any Of The Above Arguments And Can Get Required Download Metadata.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "highest-possible" || "lowest-possible"
 */
```

</p>
</details>

<details>
<summary><b>❓Example & Usage</b></summary>
<p>

```js
import { VideoData_SortedResolution } from "yt-dlp";
import chalk from "chalk";

// Promise method
YTDLP.VideoData_SortedResolution({
  url: "https://youtu.be/TpdapO9QGRo", // required
  quality: "highest-possible", // required
})
  .then((data) => console.log(chalk.bgGreen("INFOVIDEO_SORTED:"), data))
  .catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );

// async/await method
(async () => {
  const data = await YTDLP.VideoData_SortedResolution({
    url: "https://youtu.be/TpdapO9QGRo", // required
    quality: "highest-possible", // required
  }).catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );
  console.log(chalk.bgGreen("INFOVIDEO_SORTED:"), data);
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

### Output Layout

```js
// Promise method output
✓ Obtaining:   2.4 secs
{
type: 'highest possible',
url: 'https://(server-generated-random-link).com'
}
Done in 2.64s.

// async/await method output
✓ Obtaining:   2.4 secs
{
type: 'highest possible',
url: 'https://(server-generated-random-link).com'
}
Done in 2.64s.
```

</p>
</details>
<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1 align="center">
<b>📢 AudioData_SortedAuto()
</b>
</h1>

> Every Youtube Video Metadata Returned From Server Will Have 'Highest-Possible', 'Lowest-Possible' Audio Quality. <br />
> You Can Get Either Of The Audio Quality As Output Depending On Parameter Passed.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} quality -> "highest-possible" || "lowest-possible"
 */
```

</p>
</details>

<details>
<summary><b>❓Example & Usage</b></summary>
<p>

```js
import { AudioData_SortedAuto } from "yt-dlp";
import chalk from "chalk";

// Promise method
YTDLP.AudioData_SortedAuto({
  url: "https://youtu.be/TpdapO9QGRo", // required
  quality: "highest-possible", // required
})
  .then((data) => console.log(chalk.bgGreen("INFOAUDIO_SORTED:"), data))
  .catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );

// async/await method
(async () => {
  const data = await YTDLP.AudioData_SortedAuto({
    url: "https://youtu.be/TpdapO9QGRo", // required
    quality: "highest-possible", // required
  }).catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );
  console.log(chalk.bgGreen("INFOAUDIO_SORTED:"), data);
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

### Output Layout

```js
// Promise method output
✓ Obtaining:   2.3 secs
{
quality: 'best-possible',
resolution: 'audio only',
url: 'https://(server-generated-random-link).com'
}
Done in 2.62s.

// async/await method output
✓ Obtaining:   2.4 secs
{
quality: 'best-possible',
resolution: 'audio only',
url: 'https://(server-generated-random-link).com'
}
Done in 2.62s.
```

</p>
</details>
<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1 align="center">
<b>📢 AudioData_CustomQuality()
</b>
</h1>

> Every Youtube Video Metadata Returned From Server Will Have 'High', "Medium', 'Low' Audio Quality.<br />
> You Can Get Metadata Of Your Selected Audio Quality Depending On Your Passed Parameter.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "high" || "medium" || "low"
 */
```

</p>
</details>

<details>
<summary><b>❓Example & Usage</b></summary>
<p>

```js
import { AudioData_CustomQuality } from "yt-dlp";
import chalk from "chalk";

// Promise method
YTDLP.AudioData_CustomQuality({
  url: "https://youtu.be/TpdapO9QGRo", // required
  sort: "medium", // required
})
  .then((data) => console.log(chalk.bgGreen("AudioData_CustomQuality:"), data))
  .catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );

// async/await method
(async () => {
  const data = await YTDLP.AudioData_CustomQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    sort: "medium", // required
  }).catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );
  console.log(chalk.bgGreen("AudioData_CustomQuality:"), data);
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

### Output Layout

```js
// Promise method output
✓ Obtaining:   2.4 secs
{
type: 'medium',
resolution: 'audio only',
url: 'https://(server-generated-random-link).com'
}
Done in 2.68s.

// async/await method output
✓ Obtaining:   2.4 secs
{
type: 'medium',
resolution: 'audio only',
url: 'https://(server-generated-random-link).com'
}
Done in 2.68s.
```

</p>
</details>
<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1 align="center">
<b>📢 DownloadAudio_CustomQuality()
</b>
</h1>

> Cupidatat adipisicing ex reprehenderit nisi ea sunt fugiat deserunt enim magna.<br />
> Id excepteur excepteur ea nisi aliqua minim sunt.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {string} title -> "file-name"
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "high" || "medium" || "low"
 * @param {folder-name} @arg {optional} -> auto created if not exists or specified
 */
```

</p>
</details>

<details>
<summary><b>❓Example & Usage</b></summary>
<p>

```js
import { DownloadAudio_CustomQuality } from "yt-dlp";
import chalk from "chalk";

// Promise method
YTDLP.DownloadAudio_CustomQuality({
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
  const data = await YTDLP.DownloadAudio_CustomQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    title: "song-title", // optional
    sort: "medium", // required
    folder: "mågneum", //optional
  }).catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );
  console.log(chalk.bgGreen("DownloadAudio_CustomQuality:"), data);
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

### Output Layout

```js

```

</p>
</details>
<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1 align="center">
<b>📢 DownloadAudio_SortedQuality()
</b>
</h1>

> Cupidatat adipisicing ex reprehenderit nisi ea sunt fugiat deserunt enim magna.<br />
> Id excepteur excepteur ea nisi aliqua minim sunt.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {string} title -> "file-name"
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "best-possible" || "lowest-possible"
 * @param {folder-name} @arg {optional} -> auto created if not exists or specified
 */
```

</p>
</details>

<details>
<summary><b>❓Example & Usage</b></summary>
<p>

```js
import { DownloadAudio_SortedQuality } from "yt-dlp";
import chalk from "chalk";

// Promise method
YTDLP.DownloadAudio_SortedQuality({
  url: "https://youtu.be/TpdapO9QGRo", // required
  title: "song-title", // optional
  sort: "medium", // required
  folder: "folder_save", // optional
})
  .then((data) =>
    console.log(chalk.bgGreen("DownloadAudio_SortedQuality:"), data)
  )
  .catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );

// async/await method
(async () => {
  const data = await YTDLP.DownloadAudio_SortedQuality({
    url: "https://youtu.be/TpdapO9QGRo", // required
    title: "song-title", // optional
    sort: "medium", // required
    folder: "folder_save", // optional
  }).catch((error) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(error.message))
  );
  console.log(chalk.bgGreen("DownloadAudio_SortedQuality:"), data);
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

### Output Layout

```js

```

</p>
</details>
<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<!-- <br>
<h1 align="center">
<b>🔍 Scrapper()
</b>
</h1>

```
Search()
: needs one paramter
? callback: logs that will be available when the execution is completed

```

<details>
<summary><b>❓Example & Usage</b></summary>
<p>


```js
import { Search } from "yt-dlp";
import chalk from "chalk";

let url = "https://youtu.be/PVjiKRfKpPI?list=RDPVjiKRfKpPI";
Search(url, async function (data) {
console.log(data);
});

Search(url, async (data) => console.log(data));
```

#### 🎊 Output from the function

```json
{
"header": "◎☱☱☱☱[ ву mågneum ]☱☱☱☱◎",
"status": true,
"api": "https://bit.ly/magneum",
"uuid": "c8739db6-1808-4c12-a5c1-fe0e8854350c",
"query": "https://youtu.be/PVjiKRfKpPI?list=RDPVjiKRfKpPI",
"apiCalled": "14-03-2023 04:56:45",
"title": "Janet Jackson - You Want This",
"videoId": "utxsSg1n_SQ",
"uploadedOn": "12 years ago",
"views": 2903297,
"durationString": "5:18",
"durationSeconds": 318,
"authorName": "Janet Jackson",
"authorChannel": "https://youtube.com/channel/UCz8ZHx5wFQpXWywaL2uqevw",
"videoLink": "https://youtube.com/watch?v=utxsSg1n_SQ",
"thumbnail": "https://i.ytimg.com/vi/utxsSg1n_SQ/hq720.jpg",
"description": "#JanetJackson Music video by Janet Jackson performing You Want This. (P) 2006 Virgin Records America, Inc.. All rights ...",
"footer": "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
}
```

</p>
</details>

<details open>
<summary><b>⚠️Arguments & Parameters</b></summary>

#### ❤️ for coding

<p>

| Parameter                  | Usage                          | Arg[]        |
| :------------------------- | :----------------------------- | :----------- |
| `song-name or youtube-url` | Search("songName/youtubeUrl"); | **Required** |

</p>
</details> -->

<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br><br>

<h1 align="center"><b>⚠️ Disclaimer</b></h1>

```
╔⧉༻ ❝ ⚡ ⒸYT-DLP ⚡ ❞
║ Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +918436686758, +917430922909
╚════════════╝

YT-DLP Was Made For Easier Scrapping And Downloading Youtube Audios & Videos.
If You Fork This Repo And Edit Plugins, It's Your Concern For Further Updates.
Forking Repo Is Fine.
But If You Edit Something We Will Not Provide Any Help.
In Short, Fork At Your Own Risk.
```

<br><br>

<h1 align="center"><b>🚨 Legal</b></h1>

```
YT-DLP Is In No Way Affiliated With, Authorized, Maintained,
Sponsored Or Endorsed By YouTube Or Any Of Its Affiliates Or
Subsidiaries.
This Is An Independent And Unofficial Software.
Use At Your Own Risk.
```
