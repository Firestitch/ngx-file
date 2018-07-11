export function createBlob(data, name, type) {
  const blob = <any>(new Blob(data, { type: type }));
  blob.name = name;
  return blob;
}
