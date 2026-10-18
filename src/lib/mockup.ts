import type { ProjectMockup } from "@data/projects";

const POSTER_FILE = "poster.jpg";
const VIDEO_FILE = "video.mp4";
const VIDEO_WEBM_FILE = "video.webm";
const TABLET_FILE = "tablet.jpg";
const PHONE_FILE = "phone.jpg";

const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/projects/*/*.jpg", { eager: true });
const videos = import.meta.glob<{ default: string }>("/src/assets/projects/*/*.{mp4,webm}", { eager: true });

function asset<T>(files: Record<string, { default: T }>, key: string, name: string) {
  const file = files[`/src/assets/projects/${key}/${name}`];

  if (!file) {
    throw new Error(`Falta ${name} en src/assets/projects/${key}/`);
  }

  return file.default;
}

export function getMockup(key: string): ProjectMockup {
  return {
    laptop: {
      poster: asset(images, key, POSTER_FILE),
      mp4: asset(videos, key, VIDEO_FILE),
      webm: asset(videos, key, VIDEO_WEBM_FILE),
    },
    tablet: asset(images, key, TABLET_FILE),
    phone: asset(images, key, PHONE_FILE),
  };
}
