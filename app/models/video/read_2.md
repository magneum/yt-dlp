<br>
<h1 align="center">
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

<details >
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

<details >
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

<details >
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
