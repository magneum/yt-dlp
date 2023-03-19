<br>
<h1 align="center">
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

<details >
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

<details >
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

<details open>
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
