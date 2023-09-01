// This function takes a URL as input and returns a server number based on the hostname.

export function getServerByUrl(url: string) {
  const { hostname } = new URL(url);
  const test = new URL(url);
  return hostname == new URL(process.env.manga_url).hostname ? 1 : 2;
}

// This function takes a server ID and returns a corresponding URL.
export function getUrlByServerID(serverID: number | string): string {
  const server1 = process.env.manga_url;
  const server2 = process.env.alt_manga_url;

  if (serverID == 1) {
    return server1;
  }
  if (serverID == 2) {
    return server2;
  }
  throw new Error(`Unsupported server ID: ${serverID}`);
}
