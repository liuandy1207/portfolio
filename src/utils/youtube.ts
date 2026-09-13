// src/utils/youtube.ts

/**
 * Extracts the video ID from any common YouTube URL format:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://www.youtube.com/shorts/VIDEO_ID
 */
export function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1) || null;
    }

    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname === '/watch') {
        return parsed.searchParams.get('v');
      }
      const embedMatch = parsed.pathname.match(/^\/(embed|shorts)\/([^/?]+)/);
      if (embedMatch) return embedMatch[2];
    }

    return null;
  } catch {
    return null;
  }
}

/** Returns a ready-to-embed URL, or null if the video ID couldn't be parsed. */
export function getYouTubeEmbedUrl(url: string): string | null {
  const id = extractYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}