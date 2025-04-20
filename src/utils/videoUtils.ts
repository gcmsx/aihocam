
import { Video } from "@/types/video";

// Belirli bir subject ve topic için videoları filtrele
export function getVideosBySubjectAndTopic(
  subject: string,
  topic: string,
  allVideos: Video[]
): Video[] {
  return allVideos.filter(
    (video) =>
      video.subject === subject &&
      video.topic === topic
  );
}
