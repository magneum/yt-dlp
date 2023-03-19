<h1 align="center">
  <b>❝ ⚡ ⒸYT-DLP ⚡ ❞</b>
</h1>

<h3 align="center">Is A Python+ Javascript Youtube Audio Video Scrapper And Downloader Client.<br/>
YT-DLP Was Made For Easier Scrapping And Downloading Youtube Audios & Videos.<br/>
YT-DLP Provide Many Useful Functions For Audios And Videos Both.
<br />
</h3>

<br></br>

<p align="center">
  <img src="https://github.com/magneum/yt-dlp/blob/main/public/LiquidYouTube.gif" height="400" width="600" style="border-radius:5%"/><br>
  <i><b>[ "audio", video", youtube", "python", "javascript", "binary", "nodejs", "yt-dlp", "yt-dlp-wrapper", "youtube-downloader" ]</b></i>
</p>

<br><br>

<h1 align="center">
  <b>🖊️ Dependencies</b>
</h1>

<p>

- [@magneum-api](https://bit.ly/magneum) <br/>
- [@yt-dlp](https://github.com/yt-dlp/yt-dlp) <br/>
- [@ffmpeg-installer/ffmpeg](https://github.com/kribblo/node-ffmpeg-installer#readme) <br/>
- [@ffprobe-installer/ffprobe](https://github.com/SavageCore/node-ffprobe-installer#readme) <br/>
- [@dotenv](https://github.com/motdotla/dotenv#readme) <br/>
- [@fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#readme) <br/>
- [@node-fetch](https://github.com/yt-dlp/yt-dlp) <br/>
- [@progress-estimator](https://github.com/bvaughn/progress-estimator#readme) <br/>
- [@spinnies](https://github.com/jcarpanelli/spinnies#readme) <br/>
- Python, ffmpeg and ffprobe are highly recommended <br/>
- Python versions 3.7+ (CPython and PyPy) are supported. Other versions and implementations may or may not work correctly.

</p>

<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br><br>

<h1 align="center"><b>🖊️ Available Functions</b></h1>
<p>

> <b>Meta-Gatherer Functions </b> <br/>

- 🔍 Scrapper <br/>
- 📢 audio.Auto_Sorted_Data <br/>
- 📢 audio.Custom_Quality_Data <br/>
- 📹 video.Auto_Sorted_Data <br/>
- 📹 video.Custom_Quality_Data <br/>
</p>
<p>

> <b>Downloader Functions </b> <br/>

- 📥 audio.dl_Auto_Sorted_Data <br/>
- 📥 audio.dl_Custom_Quality_Data <br/>
- 📥 video.dl_Auto_Sorted_Data <br/>
- 📥 video.dl_Custom_Quality_Data <br/>

</p>

<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br><br>

<h1 align="center">
<b>🖊️ Visualize Functions</b>
</h1>

<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1>
<b>📹 video.Custom_Quality_Data()
</b>
</h1>

- ⚠️ RETURNS AUDIO-LESS VIDEO METADATA ⚠️
- every youtube video metadata returned from server will have "2160p", "1440p", "1080p", "720p", "480p", "360p", "240p", "144p".
- you can get customized metadata depending on your selected resolution and what the max resolution initial video was uploaded at.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {yturl} yturl -> "youtube-video-link"
 * @param {string} resolution -> "2160p" || "1440p" || "1080p" || "720p" || "480p" || "360p" || "240p" || "144p"
 */
```

</p>
</details>

<details>
<summary><b>⚡Method [promise]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

ytdlp.video
  .Custom_Quality_Data({
    yturl: "https://youtu.be/mVGWRaSFbEs", // required
    resolution: "2160p", // required
  })
  .then((r) => {
    console.log(
      c.bgGreen("[PROMISE]:"),
      c.bgGrey("video.Custom_Quality_Data()")
    );
    console.log(c.red("Filesize:"), c.gray(r.filesize));
    console.log(c.red("Extensions:"), c.gray(r.extensions));
    console.log(c.red("Videocodec:"), c.gray(r.vcodec));
    console.log(c.red("Resolution:"), c.gray(r.resolution));
    console.log(c.red("Url:"), c.gray(r.url));
  })
  .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
```

</p>
</details>

<details>
<summary><b>⚡Method [async/await]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

(async () => {
  const r = await ytdlp.video
    .Custom_Quality_Data({
      yturl: "https://youtu.be/mVGWRaSFbEs", // required
      resolution: "2160p", // required
    })
    .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
  if (r) {
    console.log(c.bgGreen("[ASYNC]:"), c.bgGrey("video.Custom_Quality_Data()"));
    console.log(c.red("Filesize:"), c.gray(r.filesize));
    console.log(c.red("Extensions:"), c.gray(r.extensions));
    console.log(c.red("Videocodec:"), c.gray(r.vcodec));
    console.log(c.red("Resolution:"), c.gray(r.resolution));
    console.log(c.red("Url:"), c.gray(r.url));
  }
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

```
✓ FETCHING....
  2.8 secs
[PROMISE]: video.Custom_Quality_Data()
Filesize: 165231000
Extensions: webm
Videocodec: vp9
Resolution: 2160p
Url: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
  Done in 5.71s.

✓ FETCHING....
  2.8 secs
[ASYNC]: video.Custom_Quality_Data()
Filesize: 165231000
Extensions: webm
Videocodec: vp9
Resolution: 2160p
Url: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
  Done in 5.71s.
```

</p>
</details>
<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1>
<b>📹 video.Auto_Sorted_Data()
</b>
</h1>

- ⚠️ RETURNS AUDIO-LESS VIDEO METADATA ⚠️
- every youtube video metadata returned from server will be sorted into 'highest-possible', 'medium-possible' 'lowest-possible' categories.
- you can supply any of the above arguments and can get required download metadata.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {yturl} yturl -> "youtube-video-link"
 * @param {string} resolution -> "highest-possible" || "lowest-possible"
 */
```

</p>
</details>

<details>
<summary><b>⚡Method [promise]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

ytdlp.video
  .Auto_Sorted_Data({
    yturl: "https://youtu.be/mVGWRaSFbEs", // required
    resolution: "highest-possible", // required
  })
  .then((r) => {
    console.log(c.bgGreen("[PROMISE]:"), c.bgGrey("video.Auto_Sorted_Data()"));
    console.log(c.red("Filesize:"), c.gray(r.filesize));
    console.log(c.red("Extensions:"), c.gray(r.extensions));
    console.log(c.red("Videocodec:"), c.gray(r.vcodec));
    console.log(c.red("Resolution:"), c.gray(r.resolution));
    console.log(c.red("Url:"), c.gray(r.url));
  })
  .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
```

</p>
</details>

<details>
<summary><b>⚡Method [async/await]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

(async () => {
  const r = await ytdlp.video
    .Auto_Sorted_Data({
      yturl: "https://youtu.be/mVGWRaSFbEs", // required
      resolution: "highest-possible", // required
    })
    .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
  console.log(c.bgGreen("[ASYNC]:"), c.bgGrey("video.Auto_Sorted_Data()"));
  console.log(c.red("Filesize:"), c.gray(r.filesize));
  console.log(c.red("Extensions:"), c.gray(r.extensions));
  console.log(c.red("Videocodec:"), c.gray(r.vcodec));
  console.log(c.red("Resolution:"), c.gray(r.resolution));
  console.log(c.red("Url:"), c.gray(r.url));
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

```
✓ FETCHING....
  2.3 secs
[PROMISE]: video.Auto_Sorted_Data()
Filesize: 165231000
Extensions: webm
Videocodec: vp9
Resolution: 2160p
Url: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
  Done in 4.79s.

✓ FETCHING....
  2.3 secs
[ASYNC]: video.Auto_Sorted_Data()
Filesize: 165231000
Extensions: webm
Videocodec: vp9
Resolution: 2160p
Url: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
  Done in 4.79s.
```

</p>
</details>
<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1>
<b>📢 audio.Auto_Sorted_Data()
</b>
</h1>

- every youtube video metadata returned from server will have 'highest-possible', 'lowest-possible' audio quality.
- you can get either of the audio quality as output depending on parameter passed.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {yturl} yturl -> "youtube-video-link"
 * @param {string} quality -> "highest-possible" || "lowest-possible"
 */
```

</p>
</details>

<details>
<summary><b>⚡Method [promise]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

ytdlp.audio
  .Auto_Sorted_Data({
    yturl: "https://youtu.be/mVGWRaSFbEs", // required
    quality: "highest-possible", // required
  })
  .then((r) => {
    console.log(c.bgGreen("[PROMISE]:"), c.bgGrey("audio.Auto_Sorted_Data()"));
    console.log(c.blue("Quality:"), c.gray(r.quality));
    console.log(c.blue("Resolution:"), c.gray(r.resolution));
    console.log(c.blue("Audiochannels:"), c.gray(r.audiochannels));
    console.log(c.blue("Filesize:"), c.gray(r.filesize));
    console.log(c.blue("Extensions:"), c.gray(r.extensions));
    console.log(c.blue("Audiocodec:"), c.gray(r.acodec));
    console.log(c.blue("Url:"), c.gray(r.url));
  })
  .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
```

</p>
</details>

<details>
<summary><b>⚡Method [async/await]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

(async () => {
  const r = await ytdlp.audio
    .Auto_Sorted_Data({
      yturl: "https://youtu.be/mVGWRaSFbEs", // required
      quality: "highest-possible", // required
    })
    .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
  console.log(c.bgGreen("[ASYNC]:"), c.bgGrey("audio.Auto_Sorted_Data()"));
  console.log(c.blue("Quality:"), c.gray(r.quality));
  console.log(c.blue("Resolution:"), c.gray(r.resolution));
  console.log(c.blue("Filesize:"), c.gray(r.filesize));
  console.log(c.blue("Audiochannels:"), c.gray(r.audiochannels));
  console.log(c.blue("Extensions:"), c.gray(r.extensions));
  console.log(c.blue("Audiocodec:"), c.gray(r.acodec));
  console.log(c.blue("Url:"), c.gray(r.url));
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

```
✓ FETCHING....
  2.6 secs
[PROMISE]: Auto_Sorted_Data()
Quality: highest-possible
Resolution: audio-only
Filesize: 3063725
Audiochannels: 2
Extensions: m4a
Audiocodec: mp4a.40.2
Url: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
  Done in 5.56s.


✓ FETCHING....
  2.6 secs
[ASYNC]: Auto_Sorted_Data()
Quality: highest-possible
Resolution: audio-only
Filesize: 3063725
Audiochannels: 2
Extensions: m4a
Audiocodec: mp4a.40.2
Url: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
  Done in 5.56s.
```

</p>
</details>
<!-- "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎" -->

<br>
<h1>
<b>📢 audio.Custom_Quality_Data()
</b>
</h1>

- every youtube video metadata returned from server will have 'high', "medium', 'low' audio quality.<br />
- you can get metadata of your selected audio quality depending on your passed parameter.

<br />
<details open>
<summary><b>🗝️ @parameters/@arguments</b></summary>
<p>

```js
/**
 * @param {yturl} yturl -> "youtube-video-link"
 * @param {string} sort -> "high" || "medium" || "low"
 */
```

</p>
</details>

<details>
<summary><b>⚡Method [promise]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

ytdlp.audio
  .Custom_Quality_Data({
    yturl: "https://youtu.be/mVGWRaSFbEs", // required
    quality: "high", // required
  })
  .then((r) => {
    console.log(
      c.bgGreen("[PROMISE]:"),
      c.bgGrey("audio.Custom_Quality_Data()")
    );
    console.log(c.blue("Type:"), c.gray(r.type));
    console.log(c.blue("Resolution:"), c.gray(r.resolution));
    console.log(c.blue("Filesize:"), c.gray(r.filesize));
    console.log(c.blue("Audiochannels:"), c.gray(r.audiochannels));
    console.log(c.blue("Extensions:"), c.gray(r.extensions));
    console.log(c.blue("Audiocodec:"), c.gray(r.acodec));
    console.log(c.blue("Url:"), c.gray(r.url));
  })
  .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
```

</p>
</details>

<details>
<summary><b>⚡Method [async/await]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

(async () => {
  const r = await ytdlp.audio
    .Custom_Quality_Data({
      yturl: "https://youtu.be/mVGWRaSFbEs", // required
      quality: "high", // required
    })
    .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
  console.log(c.bgGreen("[ASYNC]:"), c.bgGrey("audio.Custom_Quality_Data()"));
  console.log(c.blue("Type:"), c.gray(r.type));
  console.log(c.blue("Resolution:"), c.gray(r.resolution));
  console.log(c.blue("Filesize:"), c.gray(r.filesize));
  console.log(c.blue("Audiochannels:"), c.gray(r.audiochannels));
  console.log(c.blue("Extensions:"), c.gray(r.extensions));
  console.log(c.blue("Audiocodec:"), c.gray(r.acodec));
  console.log(c.blue("Url:"), c.gray(r.url));
})();
```

</p>
</details>

<details>
<summary><b>🎊Output Layout Example</b></summary>
<p>

```
✓ FETCHING....
  2.3 secs
[PROMISE]: Custom_Quality_Data()
Type: high
Resolution: audio-only
Filesize: 3063725
Audiochannels: 2
Extensions: m4a
Audiocodec: mp4a.40.2
Url: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
  Done in 5.49s.

✓ FETCHING....
  2.3 secs
[ASYNC]: Custom_Quality_Data()
Type: high
Resolution: audio-only
Filesize: 3063725
Audiochannels: 2
Extensions: m4a
Audiocodec: mp4a.40.2
Url: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
  Done in 5.49s.
```

</p>
</details>

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
