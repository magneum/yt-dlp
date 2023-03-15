<p align="center">
  <img src="https://i.postimg.cc/j2ktjrwr/Liquid-You-Tube.gif" height="400" width="600" style="border-radius:5%"/>
</p>

<h1 align="center"><b>⚡ MAGNEUM-YOUTUBE ⚡</b></h1>
<p align="center">A youtube audio video scrapper and downloader</p>

<br></br><br></br>

<h1 align="center"><b>🖊️ Dependencies</b></h1>

- [@magneum](https://www.github.com/magneum)
- [@yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [@ffmpeg-installer/ffmpeg](https://github.com/kribblo/node-ffmpeg-installer#readme)
- [@ffprobe-installer/ffprobe](https://github.com/SavageCore/node-ffprobe-installer#readme)
- [@dotenv](https://github.com/motdotla/dotenv#readme)
- [@fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg#readme)
- [@node-fetch](https://github.com/yt-dlp/yt-dlp)
- [@progress-estimator](https://github.com/bvaughn/progress-estimator#readme)
- [@spinnies](https://github.com/jcarpanelli/spinnies#readme)

<!-- ================================================================================================================================================================ -->

## Module Usage and Parameter

<h1 align="center"><b>📹 VideoMeta() 👇🏻</b></h1>

```
  VideoMeta()
  : needs one paramter
  ? callback: logs that will be available when the execution is completed

```

<details open><summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { VideoMeta } from "magneum-youtube";

let url = "Take Me To Church";
let name = "https://youtu.be/PVjiKRfKpPI?list=RDPVjiKRfKpPI";
VideoMeta(url || name, async function (data) {
  console.log(data);
});

// or using arrow function:
VideoMeta(url || name, async (data) => console.log(data));
```

### VideoMeta() metadata

```json
{
  "header": "◎☱☱☱☱[ ву mågneum ]☱☱☱☱◎",
  "status": true,
  "links": {
    "_1080p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_720p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_480p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_360p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_240p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_144p": "https://rr2---sn-gwpa-jj06.googlevideo.com"
  },
  "footer": "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
}
```

</p>
</details>

<details open><summary><b>⚠️Arguments & Parameters</b></summary>

#### ❤️ for coding

<p>

| Parameter               | Usage                             | Arg[]        |
| :---------------------- | :-------------------------------- | :----------- |
| `songName / youtubeUrl` | VideoMeta("songName/youtubeUrl"); | **Required** |

</p>
</details>

<!-- ================================================================================================================================================================ -->
<h1 align="center"><b>📹 VideoSave() 👇🏻</b></h1>

```
  VideoSave()
  : needs three paramter
  ? datalink:  the link of the video got from VideoMeta()
  ? path:  absolute path where you wish to save the file
  ? callback: logs that will be available when the execution is completed
```

<details open><summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { VideoMeta, VideoSave, VideoAudioSave } from "magneum-youtube";

let url = "Take Me To Church";
let name = "https://youtu.be/PVjiKRfKpPI?list=RDPVjiKRfKpPI";
VideoMeta(url || name, async function (data) {
  console.log(data);
  let path "./";
  let metalink = data.links._1080p;
  VideoSave(url || name, metalink, path, async function (data) {
    console.log(data);
  });
});
```

### VideoMeta() metadata

```json
{
  "header": "◎☱☱☱☱[ ву mågneum ]☱☱☱☱◎",
  "status": true,
  "links": {
    "_1080p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_720p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_480p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_360p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_240p": "https://rr2---sn-gwpa-jj06.googlevideo.com",
    "_144p": "https://rr2---sn-gwpa-jj06.googlevideo.com"
  },
  "footer": "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
}
```

</p>
</details>

<details open><summary><b>⚠️Arguments & Parameters</b></summary>

#### ❤️ for coding

<p>

| Parameter               | Usage                                                                                      | Arg[]        |
| :---------------------- | :----------------------------------------------------------------------------------------- | :----------- |
| `songName / youtubeUrl` | VideoSave("songName/youtubeUrl");                                                          | **Required** |
| `datalink`              | VideoSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | **Required** |
| `path`                  | VideoSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | optional     |

</p>
</details>

<!-- ================================================================================================================================================================ -->
<h1 align="center"><b>📹 VideoAudioSave() 👇🏻</b></h1>

```
  VideoAudioSave()
  : needs three paramter
  ? datalink:  the link of the video got from VideoAudioSave()
  ? path:  absolute path where you wish to save the file
  ? callback: logs that will be available when the execution is completed
```

<details open><summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { VideoMeta, VideoSave, VideoAudioSave } from "magneum-youtube";

let url = "Take Me To Church";
let name = "https://youtu.be/PVjiKRfKpPI?list=RDPVjiKRfKpPI";
VideoMeta(url || name, async function (data) {
  console.log(data);
});
VideoAudioSave(url || name, metalink, path, async function (data) {
  console.log(data);
});
```

</p>
</details>

<details open><summary><b>⚠️Arguments & Parameters</b></summary>

#### ❤️ for coding

<p>

| Parameter               | Usage                                                                                           | Arg[]        |
| :---------------------- | :---------------------------------------------------------------------------------------------- | :----------- |
| `songName / youtubeUrl` | VideoAudioSave("songName/youtubeUrl");                                                          | **Required** |
| `datalink`              | VideoAudioSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | **Required** |
| `path`                  | VideoAudioSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | optional     |

</p>
</details>

<!-- ================================================================================================================================================================ -->
<h1 align="center"><b>📢 AudioMeta() 👇🏻</b></h1>

```
  AudioMeta()
  : needs one paramter
  ? callback: logs that will be available when the execution is completed

```

<details open><summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { AudioMeta, AudioSave } from "magneum-youtube";

let url = "Take Me To Church";
let name = "https://youtu.be/PVjiKRfKpPI?list=RDPVjiKRfKpPI";
AudioMeta(url || name, async function (data) {
  console.log(data);
});
```

#### 🎊 Output from the function

```json
{
  "header": "◎☱☱☱☱[ ву mågneum ]☱☱☱☱◎",
  "status": true,
  "links": {
    "ultralow": "https://rr4---sn-gwpa-jj0s.googlevideo.com",
    "low": "https://rr4---sn-gwpa-jj0s.googlevideo.com",
    "medium": "https://rr4---sn-gwpa-jj0s.googlevideo.com"
  },
  "footer": "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
}
```

</p>
</details>

<details open><summary><b>⚠️Arguments & Parameters</b></summary>

#### ❤️ for coding

<p>

| Parameter               | Usage                             | Arg[]        |
| :---------------------- | :-------------------------------- | :----------- |
| `songName / youtubeUrl` | AudioMeta("songName/youtubeUrl"); | **Required** |

</p>
</details>

<!-- ================================================================================================================================================================ -->
<h1 align="center"><b>📢 AudioSave() 👇🏻</b></h1>

```
  AudioSave()
  : needs three paramter
  ? datalink:  the link of the video got from VideoMeta()
  ? path:  absolute path where you wish to save the file
  ? callback: logs that will be available when the execution is completed
```

<details open><summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { AudioMeta, AudioSave } from "magneum-youtube";

let url = "Take Me To Church";
let name = "https://youtu.be/PVjiKRfKpPI?list=RDPVjiKRfKpPI";
AudioMeta(url || name, async function (data) {
  console.log(data);
});
AudioSave(url || name, metalink, path, async function (data) {
  console.log(data);
});
```

</p>
</details>

<details open><summary><b>⚠️Arguments & Parameters</b></summary>

#### ❤️ for coding

<p>

| Parameter               | Usage                                                                                      | Arg[]        |
| :---------------------- | :----------------------------------------------------------------------------------------- | :----------- |
| `songName / youtubeUrl` | AudioSave("songName/youtubeUrl");                                                          | **Required** |
| `datalink`              | AudioSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | **Required** |
| `path`                  | AudioSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | optional     |

</p>
</details>

<!-- ================================================================================================================================================================ -->
<h1 align="center"><b>🔍 Search() 👇🏻</b></h1>

```
  Search()
  : needs one paramter
  ? callback: logs that will be available when the execution is completed

```

<details open><summary><b>❓Example & Usage</b></summary>
<p>

#### ❤️ for coding

```js
import { Search } from "magneum-youtube";

let url = "Take Me To Church";
let name = "https://youtu.be/PVjiKRfKpPI?list=RDPVjiKRfKpPI";
Search(url || name, async function (data) {
  console.log(data);
});

// or using arrow function:
Search(url || name, async (data) => console.log(data));
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

<details open><summary><b>⚠️Arguments & Parameters</b></summary>

#### ❤️ for coding

<p>

| Parameter               | Usage                          | Arg[]        |
| :---------------------- | :----------------------------- | :----------- |
| `songName / youtubeUrl` | Search("songName/youtubeUrl"); | **Required** |

</p>
</details>

<!-- ================================================================================================================================================================ -->
