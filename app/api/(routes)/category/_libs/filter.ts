/**
 * Apply filtering parameters to the manga URL.
 *
 * @param manga_url - The base manga URL.
 * @param searchParams - The search parameters containing filter options.
 * @returns The filtered manga URL with applied search parameters.
 */

export default function filter(
  manga_url: string,
  searchParams: URLSearchParams
): string {
  // Create a new URL object based on the manga_url
  let requestUrl = new URL(manga_url);

  // Get the 'type' and 'state' parameters from the search parameters
  const type = searchParams.get("type");
  const state = searchParams.get("state");

  // Check if 'state' parameter is provided and append it to the URL if present
  if (state) {
    // 'state' can be 'completed' or 'ongoing'
    requestUrl.searchParams.append("state", state);
  }

  // Check if 'type' parameter is provided and append it to the URL if present
  if (type) {
    // 'type' can be 'newest' or ''
    requestUrl.searchParams.append("type", type);
  }

  // Return the filtered manga URL as a string
  return requestUrl.href;
}
