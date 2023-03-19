<br>
<h1 align="center">
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

<details >
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

<details >
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

<details >
<summary><b>🎊Output Layout Example</b></summary>
<p>

```json
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
