declare module "yt-dlp" {
  type responses = {
    yturl: string;
    url: string;
    title: string;
    sort: string;
    type: string;
    resolution: string;
    filesize: number;
    extensions: string;
    acodec: string;
    audiochannels: number;
    quality: number;
    vcodec: number;
  };
  const ytdlp: (url: string) => Promise<responses>;
  export default ytdlp;
}
