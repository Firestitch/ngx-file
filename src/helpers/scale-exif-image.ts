export function ScaleExifImage(canvas, orientation, maxWidth = null, maxHeight = null) {
  let width = canvas.width;
  let height = canvas.height;

  if (maxWidth) {
    if (maxWidth < width) {
      width = maxWidth;
    }
  }

  if (maxHeight) {
    if (maxHeight < height) {
      height = maxHeight;
    }
  }

  const rotatedImage = document.createElement('canvas');
  rotatedImage.width = width;
  rotatedImage.height = height;
  const rotatedCtx = rotatedImage.getContext('2d');

  switch (orientation) {
    case 2: case 4: case 5: case 7:
      rotatedCtx.scale(-1, 1);
      rotatedCtx.drawImage(canvas, 0, 0, width, height, -width, 0, width, height);

      return rotatedImage;
    default:
      return canvas;
  }
}
