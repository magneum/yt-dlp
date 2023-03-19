<br>
<h1 align="center">
<b>📢 audio.dl_Auto_Sorted_Data()
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
 * @param {string} sort -> "highest-possible" || "lowest-possible"
 * @param {folder} @arg {optional} -> auto created if not exists or specified
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
    console.log(c.cyan("Downloadpath:"), c.gray(r.downloadpath));
    console.log(c.cyan("Message:"), c.gray(r.message));
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
      title: api_data.youtube_search[0].TITLE, // optional
      yturl: api_data.youtube_search[0].LINK, // required
      sort: "highest-possible", // required
      folder: "mågneum", // optional
    })
    .catch((error) => console.log(c.bgRed("ERROR: "), c.gray(error.message)));
  console.log(c.bgGreen("[ASYNC]:"), c.bgGrey("audio.dl_Auto_Sorted_Data()"));
  console.log(c.cyan("Downloadpath:"), c.gray(r.downloadpath));
  console.log(c.cyan("Message:"), c.gray(r.message));
})();
```

</p>
</details>

<details >
<summary><b>🎊Output Layout Example</b></summary>
<p>

```
✓ FETCHING....
  2.4 secs
[PROMISE]: audio.dl_Auto_Sorted_Data()
Downloadpath: ./mågneum/
Message: INFO: stream starting.
100.01%
INFO: stream sent to client successfully.
  Done in 15.72s.

✓ FETCHING....
  2.4 secs
[ASYNC]: audio.dl_Auto_Sorted_Data()
Downloadpath: ./mågneum/
Message: INFO: stream starting.
100.01%
INFO: stream sent to client successfully.
  Done in 15.72s.
```

</p>
</details>
