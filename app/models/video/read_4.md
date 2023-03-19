<br>
<h1 align="center">
<b>📹 video.dl_Auto_Sorted_Data()
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
  .dl_Auto_Sorted_Data({
    title: api_data.youtube_search[0].TITLE, // optional
    yturl: api_data.youtube_search[0].LINK, // required
    sort: "highest-possible", // required
    folder: "mågneum", // optional
  })
  .then((r) => {
    console.log(
      c.bgGreen("[PROMISE]:"),
      c.bgGrey("audio.dl_Auto_Sorted_Data()")
    );
    console.log(c.cyan("Type:"), c.gray(r.type));
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
    .dl_Auto_Sorted_Data({
      title: api_data.youtube_search[0].TITLE, // optional
      yturl: api_data.youtube_search[0].LINK, // required
      sort: "highest-possible", // required
      folder: "mågneum", // optional
    })
    .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
  console.log(c.bgGreen("[ASYNC]:"), c.bgGrey("video.dl_Auto_Sorted_Data()"));
  console.log(c.cyan("Type:"), c.gray(r.type));
  console.log(c.cyan("Downloadpath:"), c.gray(r.downloadpath));
  console.log(c.cyan("Message:"), c.gray(r.message));
  console.log(c.cyan("AudioUrl:"), c.gray(r.audiourl));
  console.log(c.cyan("Url:"), c.gray(r.url));
})();
```

</p>
</details>

<details >
<summary><b>🎊Output Layout Example</b></summary>
<p>

```

```

</p>
</details>
