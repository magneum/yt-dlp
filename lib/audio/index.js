("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
import ExecJson from "youtube-dl-exec";
import ProgressEstimator from "progress-estimator";
const ProgressEst = ProgressEstimator();
function regExTestYT(str) {
var exp = new RegExp(/(youtu\.be|youtube\.com)/);
return exp.test(str);
}

export async function infoAudio_customQuality(
url = "not-a-youtube-link",
sort = "medium"
) {
if (!regExTestYT(url)) {
throw new Error("YouTube Link not found.Refer to docs for usage examples.");
} else
try {
var Execjson = ExecJson(url, {
noWarnings: true,
dumpSingleJson: true,
preferFreeFormats: true,
noCheckCertificates: true,
addHeader: ["referer:youtube.com", "user-agent:googlebot"],
}).catch(() => {
throw new Error("Sorry some error occured.Try again!");
});
const jsonmeta = await ProgressEst(Execjson, "Obtaining: " + " ");
const medium = jsonmeta.formats.filter(
(res) =>
(res.format_id === "140" &&
res.format_note === "medium" &&
res.resolution === "audio only") ||
(res.format_id === "251" &&
res.format_note === "medium" &&
res.resolution === "audio only")
);
const low = jsonmeta.formats.filter(
(res) =>
(res.format_id === "139" &&
res.format_note === "low" &&
res.resolution === "audio only") ||
(res.format_id === "249" &&
res.format_note === "low" &&
res.resolution === "audio only") ||
(res.format_id === "250" &&
res.format_note === "low" &&
res.resolution === "audio only")
);
const ultralow = jsonmeta.formats.filter(
(res) =>
(res.format_id === "599" &&
res.format_note === "ultralow" &&
res.resolution === "audio only") ||
(res.format_id === "600" &&
res.format_note === "ultralow" &&
res.resolution === "audio only")
);

if (sort === "medium") {
return {
type: "medium",
resolution: "audio only",
url: medium[0].url || medium[1].url || medium.url || null,
};
} else if (sort === "low") {
return {
type: "low",
resolution: "audio only",
url: low[0].url || low[1].url || low[2].url || low.url || null,
};
} else if (sort === "ultralow") {
return {
type: "ultralow",
resolution: "audio only",
url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
};
} else throw new Error("SORRY: Quality Not Found.");
} catch (error) {
return error.message;
}
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
export async function infoAudio_Sorted(
url = "not-a-youtube-link",
quality = "best-possible"
) {
if (!regExTestYT(url)) {
throw new Error("YouTube Link not found.Refer to docs for usage examples.");
} else
try {
var Execjson = ExecJson(url, {
noWarnings: true,
dumpSingleJson: true,
preferFreeFormats: true,
noCheckCertificates: true,
addHeader: ["referer:youtube.com", "user-agent:googlebot"],
}).catch(() => {
throw new Error("Sorry some error occured.Try again!");
});
const jsonmeta = await ProgressEst(Execjson, "Obtaining: " + " ");
const medium = jsonmeta.formats.filter(
(res) =>
(res.format_id === "140" &&
res.format_note === "medium" &&
res.resolution === "audio only") ||
(res.format_id === "251" &&
res.format_note === "medium" &&
res.resolution === "audio only")
);
const low = jsonmeta.formats.filter(
(res) =>
(res.format_id === "139" &&
res.format_note === "low" &&
res.resolution === "audio only") ||
(res.format_id === "249" &&
res.format_note === "low" &&
res.resolution === "audio only") ||
(res.format_id === "250" &&
res.format_note === "low" &&
res.resolution === "audio only")
);
const ultralow = jsonmeta.formats.filter(
(res) =>
(res.format_id === "599" &&
res.format_note === "ultralow" &&
res.resolution === "audio only") ||
(res.format_id === "600" &&
res.format_note === "ultralow" &&
res.resolution === "audio only")
);

if (quality === "best-possible") {
if (medium) {
return {
quality: "best-possible",
resolution: "audio only",
url: medium[0].url || medium[1].url || medium.url || null,
};
} else if (!medium && low) {
return {
quality: "best-possible",
resolution: "audio only",
url: low[0].url || low[1].url || low[2].url || low.url || null,
};
} else if (!medium && !low && ultralow) {
return {
quality: "best-possible",
resolution: "audio only",
url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
};
} else throw new Error("SORRY: Quality Not Found.");
} else if (quality === "medium-possible") {
if (low) {
return {
quality: "medium-possible",
resolution: "audio only",
url: low[0].url || low[1].url || low[2].url || low.url || null,
};
} else if (!low && ultralow) {
return {
quality: "medium-possible",
resolution: "audio only",
url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
};
} else throw new Error("SORRY: Quality Not Found.");
} else if (quality === "lowest-possible") {
if (ultralow) {
return {
quality: "lowest-possible",
resolution: "audio only",
url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
};
} else throw new Error("SORRY: Quality Not Found.");
} else throw new Error("Wrong Quality Provided.");
} catch (error) {
return error.message;
}
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
export async function audiometasep(url = "not-a-youtube-link", quality) {
if (!regExTestYT(url)) {
throw new Error("YouTube Link not found.Refer to docs for usage examples.");
} else
try {
var Execjson = ExecJson(url, {
noWarnings: true,
dumpSingleJson: true,
preferFreeFormats: true,
noCheckCertificates: true,
addHeader: ["referer:youtube.com", "user-agent:googlebot"],
}).catch(() => {
throw new Error("Sorry some error occured.Try again!");
});
const jsonmeta = await ProgressEst(Execjson, "Obtaining: " + " ");
const medium = jsonmeta.formats.filter(
(res) =>
(res.format_id === "140" &&
res.format_note === "medium" &&
res.resolution === "audio only") ||
(res.format_id === "251" &&
res.format_note === "medium" &&
res.resolution === "audio only")
);
const low = jsonmeta.formats.filter(
(res) =>
(res.format_id === "139" &&
res.format_note === "low" &&
res.resolution === "audio only") ||
(res.format_id === "249" &&
res.format_note === "low" &&
res.resolution === "audio only") ||
(res.format_id === "250" &&
res.format_note === "low" &&
res.resolution === "audio only")
);
const ultralow = jsonmeta.formats.filter(
(res) =>
(res.format_id === "599" &&
res.format_note === "ultralow" &&
res.resolution === "audio only") ||
(res.format_id === "600" &&
res.format_note === "ultralow" &&
res.resolution === "audio only")
);

return [
{
medium: {
filesize:
medium[0].filesize ||
medium[1].filesize ||
medium.filesize ||
null,
audiochannels:
medium[0].audio_channels ||
medium[1].audio_channels ||
medium.audio_channels ||
null,
extensions: medium[0].ext || medium[1].ext || medium.ext || null,
acodec:
medium[0].acodec || medium[1].acodec || medium.acodec || null,
url: medium[0].url || medium[1].url || medium.url || null,
},

low: {
filesize:
low[0].filesize ||
low[1].filesize ||
low[2].filesize ||
low.filesize ||
null,
audiochannels:
low[0].audio_channels ||
low[1].audio_channels ||
low[2].audio_channels ||
low.audio_channels ||
null,
extensions:
low[0].ext || low[1].ext || low[2].ext || low.ext || null,
acodec:
low[0].acodec ||
low[1].acodec ||
low[2].acodec ||
low.acodec ||
null,
url: low[0].url || low[1].url || low[2].url || low.url || null,
},
ultralow: {
filesize:
ultralow[0].filesize ||
ultralow[1].filesize ||
ultralow.filesize ||
null,
audiochannels:
ultralow[0].audio_channels ||
ultralow[1].audio_channels ||
ultralow.audio_channels ||
null,
extensions:
ultralow[0].ext || ultralow[1].ext || ultralow.ext || null,
acodec:
ultralow[0].acodec ||
ultralow[1].acodec ||
ultralow.acodec ||
null,
url: ultralow[0].url || ultralow[1].url || ultralow.url || null,
},
},
];
} catch (error) {
return error.message;
}
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");