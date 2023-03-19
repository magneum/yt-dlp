<br>
<h1 align="center">
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

<details >
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

<details >
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

<details >
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
