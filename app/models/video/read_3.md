<br>
<h1 align="center">
<b>📹 video.dl_Custom_Quality_Data()
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

<details >
<summary><b>⚡Method [promise]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

ytdlp.video
  .dl_Custom_Quality_Data({
    title: api_data.youtube_search[0].TITLE, // optional
    yturl: api_data.youtube_search[0].LINK, // required
    folder: "mågneum", // optional
    quality: "2160p", // required
  })
  .then((r) => {
    console.log(
      c.bgGreen("[PROMISE]:"),
      c.bgGrey("audio.dl_Custom_Quality_Data()")
    );
    console.log(c.cyan("Resolution:"), c.gray(r.resolution));
    console.log(c.cyan("Downloadpath:"), c.gray(r.downloadpath));
    console.log(c.cyan("Message:"), c.gray(r.message));
    console.log(c.cyan("AudioUrl:"), c.gray(r.audiourl));
    console.log(c.cyan("Url:"), c.gray(r.url));
  })
  .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
```

</p>
</details>

<details >
<summary><b>⚡Method [async/await]</b></summary>
<p>

```js
import c from "chalk";
import { ytdlp } from "ytdlp";
import Fetch from "node-fetch";

(async () => {
  const r = await ytdlp.video
    .dl_Custom_Quality_Data({
      title: api_data.youtube_search[0].TITLE, // optional
      yturl: api_data.youtube_search[0].LINK, // required
      folder: "mågneum", // optional
      quality: "2160p", // required
    })
    .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
  if (r) {
    console.log(
      c.bgGreen("[ASYNC]:"),
      c.bgGrey("video.dl_Custom_Quality_Data()")
    );
    console.log(c.cyan("Resolution:"), c.gray(r.resolution));
    console.log(c.cyan("Downloadpath:"), c.gray(r.downloadpath));
    console.log(c.cyan("Message:"), c.gray(r.message));
    console.log(c.cyan("AudioUrl:"), c.gray(r.audiourl));
    console.log(c.cyan("Url:"), c.gray(r.url));
  }
})();
```

</p>
</details>

<details >
<summary><b>🎊Output Layout Example</b></summary>
<p>

```
✓ FETCHING....
  2.2 secs
[PROMISE]: audio.dl_Custom_Quality_Data()
Resolution: 2160p
Downloadpath: ./mågneum/
Message: INFO: stream starting.
AudioUrl: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
Url: https://rr6---sn-gwpa-jj06.googlevideo.com/videoplayback?
  Done in 14.79s.
```

</p>
</details>
