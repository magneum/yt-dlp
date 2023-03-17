// ◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
import Fetch from "node-fetch";
import * as dotenv from "dotenv";
import ExecJson from "youtube-dl-exec";
import ProgressEstimator from "progress-estimator";
const ProgressEst = ProgressEstimator();
dotenv.config();
const FetchOpts = {
  method: "get",
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "user-agent": [
      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 YaBrowser/19.10.3.281 Yowser/2.5 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.30",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
    ],
  },
};
export default async (request, callback) => {
  const response = await Fetch(
    "https://magneum.vercel.app/api/youtube_sr?q=" + request,
    FetchOpts
  );
  const metadata = await response.json();
  const jsondata = await ProgressEst(
    ExecJson(metadata.youtube_search[0].LINK, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeFormats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    }),
    "Obtaining: " + " "
  );
  var v_1080p = jsondata.formats.filter(
    (v) =>
      v.format_id === "399" || v.format_id === "137" || v.format_id === "248"
  );
  var tuub_1080p = v_1080p[2] || v_1080p[1] || v_1080p[0] || v_1080p;
  var v_720p = jsondata.formats.filter(
    (v) =>
      v.format_id === "247" ||
      v.format_id === "398" ||
      v.format_id === "136" ||
      v.format_id === "22"
  );
  var tuub_720p = v_720p[3] || v_720p[2] || v_720p[1] || v_720p[0] || v_720p;
  var v_480p = jsondata.formats.filter(
    (v) =>
      v.format_id === "397" || v.format_id === "135" || v.format_id === "244"
  );
  var tuub_480p = v_480p[0] || v_480p[1] || v_480p[2] || v_480p;
  var v_360p = jsondata.formats.filter(
    (v) =>
      v.format_id === "396" ||
      v.format_id === "134" ||
      v.format_id === "18" ||
      v.format_id === "243"
  );
  var tuub_360p = v_360p[0] || v_360p[1] || v_360p[2] || v_360p[3] || v_360p;
  var v_240p = jsondata.formats.filter(
    (v) =>
      v.format_id === "395" || v.format_id === "133" || v.format_id === "242"
  );
  var tuub_240p = v_240p[0] || v_240p[1] || v_240p[2] || v_240p;
  var v_144p = jsondata.formats.filter(
    (v) =>
      v.format_id === "17" ||
      v.format_id === "597" ||
      v.format_id === "598" ||
      v.format_id === "394" ||
      v.format_id === "160" ||
      v.format_id === "278"
  );
  var tuub_144p =
    v_144p[0] ||
    v_144p[1] ||
    v_144p[2] ||
    v_144p[3] ||
    v_144p[4] ||
    v_144p[5] ||
    v_144p;
  return callback({
    header: "◎☱☱☱☱[ ву mågneum ]☱☱☱☱◎",
    status: true,
    links: {
      _1080p: tuub_1080p.url,
      _720p: tuub_720p.url,
      _480p: tuub_480p.url,
      _360p: tuub_360p.url,
      _240p: tuub_240p.url,
      _144p: tuub_144p.url,
    },
    footer: "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎",
  });
};
// ◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
