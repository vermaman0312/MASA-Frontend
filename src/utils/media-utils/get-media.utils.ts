// src/utils/mediaUtils.ts
export async function getMediaStreams(): Promise<{
  audio: MediaStream | null;
  video: MediaStream | null;
}> {
  try {
    const audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    const videoStream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    return { audio: audioStream, video: videoStream };
  } catch (error) {
    console.error("Error accessing media streams", error);
    return { audio: null, video: null };
  }
}
