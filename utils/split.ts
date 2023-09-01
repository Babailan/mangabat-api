// "Updated : Aug 30,2023 - 05:37"; --> Aug 30,2023 - 05:37

export function split_first(string: string, splitter: string) {
  return string.split(splitter).slice(1).join(":").trim();
}
// "Updated : Aug 30,2023 - 05:37"; --> Aug 30,2023 - 05:37

export function split_last(string: string, splitter: string) {
  return string.split(splitter).pop();
}
