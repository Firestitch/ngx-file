export function isImageType(type: string) {
  return type
    .match(/^image\/(gif|jpe?g|pjpeg|png|svg\+xml|tiff|vnd\.microsoft\.icon|vnd\.wap\.wbmp|webp)/i);
}
