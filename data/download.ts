import data from "@/public/data.json";

export const appVersion = data.app;
export const serverVersion = data.server;

export const appPublish = data.app_publish;
export const serverPublish = data.server_publish;

export const appNotes = "https://github.com/infinilabs/coco-app/releases";
export const serverNotes = "https://github.com/infinilabs/coco-server/releases";

export const appDocs = "https://docs.infinilabs.com/coco-app/main/";
export const serverDocs = "https://docs.infinilabs.com/coco-server/main/";

export const InstallApi = "https://release.infinilabs.com/coco/app/stable/";

export const macLinks = [
  {
    label: "Apple Silicon",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-mac-arm64.zip`,
    icon: "download",
  },
  {
    label: "Intel Mac",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-mac-amd64.zip`,
    icon: "download",
  },
  {
    label: "App store",
    size: "",
    url: "",
    icon: "external",
  },
];

export const winLinks = [
  {
    label: "x86",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-windows-386.zip`,
    icon: "download",
  },
  {
    label: "AMD 64",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-windows-amd64.zip`,
    icon: "download",
  },
  {
    label: "ARM 64",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-windows-arm64.zip`,
    icon: "download",
  },
  {
    label: "Microsoft Store",
    size: "",
    url: "",
    icon: "external",
  },
];

export const linuxLinks = [
  {
    label: "AMD 64",
    size: "11MB",
    url: `${InstallApi}Coco-AI-${appVersion}-deb-linux-amd64.zip`,
    icon: "download",
  },
  {
    label: "ARM 64",
    size: "10MB",
    url: `${InstallApi}Coco-AI-${appVersion}-deb-linux-arm64.zip`,
    icon: "external",
  },
];

export const ServerApi = "https://release.infinilabs.com/coco/server/stable/";
export const ServerHref =
  "https://docs.infinilabs.com/coco-server/main/docs/getting-started/install/";

export const DockerCommand = `docker run -d 
  --name cocoserver 
  -p 9000:9000 
  -v data:/app/easysearch/data 
  -v config:/app/easysearch/config 
  -v logs:/app/easysearch/logs 
  infinilabs/coco:${serverVersion}`;

export const macLinksServer = [
  {
    label: "Apple Silicon",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-mac-arm64.zip`,
    icon: "download",
  },
  {
    label: "Intel Mac",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-mac-amd64.zip`,
    icon: "download",
  },
];

export const winLinksServer = [
  {
    label: "AMD 64",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-windows-amd64.zip`,
    icon: "download",
  },
];

export const linuxLinkServer = [
  {
    label: "AMD 64",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-linux-amd64.tar.gz`,
    icon: "download",
  },
  {
    label: "ARM 64",
    size: "11MB",
    url: `${ServerApi}coco-${serverVersion}-linux-arm64.tar.gz`,
    icon: "download",
  },
];
