<h1 align="center"><b>⚡ YT-DLP ⚡</b></h1>
<h2 align="center" ><i>yt-dlp - Python+ Javascript Youtube Audio Video Scrapper And Downloader Client</i></h2>
<br></br>
<p align="center">
  <img src="https://i.postimg.cc/j2ktjrwr/Liquid-You-Tube.gif" height="400" width="600" style="border-radius:5%"/>
</p>

<h1 align="center"><b>🖊️ Dependencies</b></h1>

- [@magneum-api](https://bit.ly/magneum)
- [@yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [@ffmpeg-installer/ffmpeg](https://github.com/kribblo/node-ffmpeg-installer#readme)
- [@ffprobe-installer/ffprobe](https://github.com/SavageCore/node-ffprobe-installer#readme)
- [@dotenv](https://github.com/motdotla/dotenv#readme)
- [@fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#readme)
- [@node-fetch](https://github.com/yt-dlp/yt-dlp)
- [@progress-estimator](https://github.com/bvaughn/progress-estimator#readme)
- [@spinnies](https://github.com/jcarpanelli/spinnies#readme)

- Python versions 3.7+ (CPython and PyPy) are supported. Other versions and implementations may or may not work correctly.
- ffmpeg and ffprobe are highly recommended

<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

## Module Usage and Parameters

<br><h1 align="center"><b>📹 infoVideo_customResolution()</b></h1>

<b> 🗝️ @parameters/@arguments </b>

```js
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "2160p" || "1440p" || "1080p" || "720p"
 *                        || "480p" || "360p" || "240p" || "144p"
 */
```

<details open>
<summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { infoVideo_customResolution } from "yt-dlp";
import chalk from "chalk";

let resolution = "2160p";
const url = "https://youtu.be/TpdapO9QGRo";

// Promise method
infoVideo_customResolution(url, resolution)
  .then((data) =>
    console.log(chalk.bgGreen("INFOVIDEO_CUSTOMRESOLUTION:"), data)
  )
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await infoVideo_customResolution(url, resolution).catch((e) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message))
  );
  console.log(chalk.bgGreen("INFOVIDEO_CUSTOMRESOLUTION:"), data);
})();
```

</p>
</details>

<details open>
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

<br><h1 align="center"><b>📹 infoVideo_Sorted()</b></h1>

<b> 🗝️ @parameters/@arguments </b>

```js
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} resolution -> "highest" || "medium" || "lowest"
 */
```

<details open>
<summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { infoVideo_Sorted } from "yt-dlp";
import chalk from "chalk";

let quality = "highest";
const url = "https://youtu.be/TpdapO9QGRo";

// Promise method
infoVideo_Sorted(url, quality)
  .then((data) => console.log(chalk.bgGreen("INFOVIDEO_SORTED:"), data))
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await infoVideo_Sorted(url, quality).catch((e) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message))
  );
  console.log(chalk.bgGreen("INFOVIDEO_SORTED:"), data);
})();
```

</p>
</details>

<details open>
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

<br><h1 align="center"><b>📢 infoAudio_Sorted()</b></h1>

<b> 🗝️ @parameters/@arguments </b>

```js
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} quality -> "best-possible" || "medium-possible" || "lowest-possible"
 */
```

<details open>
<summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { infoAudio_Sorted } from "yt-dlp";
import chalk from "chalk";

let quality = "best-possible";
const url = "https://youtu.be/TpdapO9QGRo";

// Promise method
infoAudio_Sorted(url, quality)
  .then((data) => console.log(chalk.bgGreen("INFOAUDIO_SORTED:"), data))
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await infoAudio_Sorted(url, quality).catch((e) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message))
  );
  console.log(chalk.bgGreen("INFOAUDIO_SORTED:"), data);
})();
```

</p>
</details>

<details open>
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

<br><h1 align="center"><b>📢 infoAudio_customQuality()</b></h1>

<b> 🗝️ @parameters/@arguments </b>

```js
/**
 * @param {url} url -> "youtube-video-link"
 * @param {string} sort -> "medium" || "low" || "ultralow"
 */
```

<details open>
<summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { infoAudio_customQuality } from "yt-dlp";
import chalk from "chalk";

let sort = "medium";
const url = "https://youtu.be/TpdapO9QGRo";

// Promise method
infoAudio_customQuality(url, sort)
  .then((data) => console.log(chalk.bgGreen("INFOAUDIO_CUSTOMQUALITY:"), data))
  .catch((e) => console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message)));

// async/await method
(async () => {
  const data = await infoAudio_customQuality(url, sort).catch((e) =>
    console.log(chalk.bgRed("ERROR: "), chalk.gray(e.message))
  );
  console.log(chalk.bgGreen("INFOAUDIO_CUSTOMQUALITY:"), data);
})();
```

</p>
</details>

<details open>
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

<br><h1 align="center"><b>🔍 Search()</b></h1>

```
  Search()
  : needs one paramter
  ? callback: logs that will be available when the execution is completed

```

<details open>
<summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

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
</details>

<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->
