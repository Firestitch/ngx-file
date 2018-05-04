export function createFile(data, name?, type?) {
  const file = <any>(new Blob(data, { type: type }));
  file.name = name;
  // file.lastModified = null;
  // file.lastModifiedDate = null;
  return file;
}
