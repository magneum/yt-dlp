<p align="center">
  <img src="https://i.postimg.cc/j2ktjrwr/Liquid-You-Tube.gif" height="400px"/>
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

## Module Usage and Parameter

<h1 align="center"><b>📹 VideoMeta() 👇🏻</b></h1>

```
  VideoMeta()
  : needs one paramter
  ? callback: logs that will be available when the execution is completed

```

| Parameter               | Usage                             | Arg[]        |
| :---------------------- | :-------------------------------- | :----------- |
| `songName / youtubeUrl` | VideoMeta("songName/youtubeUrl"); | **Required** |

<!-- ================================================================================ -->
<h1 align="center"><b>📹 VideoSave() 👇🏻</b></h1>

```
  VideoSave()
  : needs three paramter
  ? datalink:  the link of the video got from VideoMeta()
  ? path:  absolute path where you wish to save the file
  ? callback: logs that will be available when the execution is completed
```

| Parameter               | Usage                                                                                      | Arg[]        |
| :---------------------- | :----------------------------------------------------------------------------------------- | :----------- |
| `songName / youtubeUrl` | VideoSave("songName/youtubeUrl");                                                          | **Required** |
| `datalink`              | VideoSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | **Required** |
| `path`                  | VideoSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | optional     |

<!-- ================================================================================ -->
<h1 align="center"><b>📹 VideoAudioSave() 👇🏻</b></h1>

```
  VideoAudioSave()
  : needs three paramter
  ? datalink:  the link of the video got from VideoAudioSave()
  ? path:  absolute path where you wish to save the file
  ? callback: logs that will be available when the execution is completed
```

| Parameter               | Usage                                                                                           | Arg[]        |
| :---------------------- | :---------------------------------------------------------------------------------------------- | :----------- |
| `songName / youtubeUrl` | VideoAudioSave("songName/youtubeUrl");                                                          | **Required** |
| `datalink`              | VideoAudioSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | **Required** |
| `path`                  | VideoAudioSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | optional     |

<!-- ================================================================================ -->
<h1 align="center"><b>📢 AudioMeta() 👇🏻</b></h1>

```
  AudioMeta()
  : needs one paramter
  ? callback: logs that will be available when the execution is completed

```

| Parameter               | Usage                             | Arg[]        |
| :---------------------- | :-------------------------------- | :----------- |
| `songName / youtubeUrl` | AudioMeta("songName/youtubeUrl"); | **Required** |

<!-- ================================================================================ -->
<h1 align="center"><b>📢 AudioSave() 👇🏻</b></h1>

```
  AudioSave()
  : needs three paramter
  ? datalink:  the link of the video got from VideoMeta()
  ? path:  absolute path where you wish to save the file
  ? callback: logs that will be available when the execution is completed
```

| Parameter               | Usage                                                                                      | Arg[]        |
| :---------------------- | :----------------------------------------------------------------------------------------- | :----------- |
| `songName / youtubeUrl` | AudioSave("songName/youtubeUrl");                                                          | **Required** |
| `datalink`              | AudioSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | **Required** |
| `path`                  | AudioSave("songName/youtubeUrl", "datalink", "path", (callback) => console.log(callback)); | optional     |

<!-- ================================================================================ -->
<h1 align="center"><b>🔍 Search() 👇🏻</b></h1>

```
  Search()
  : needs one paramter
  ? callback: logs that will be available when the execution is completed

```

| Parameter               | Usage                          | Arg[]        |
| :---------------------- | :----------------------------- | :----------- |
| `songName / youtubeUrl` | Search("songName/youtubeUrl"); | **Required** |

<!-- ================================================================================ -->
