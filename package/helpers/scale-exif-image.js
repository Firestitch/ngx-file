"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ScaleExifImage(canvas, orientation, maxWidth, maxHeight) {
    if (maxWidth === void 0) { maxWidth = null; }
    if (maxHeight === void 0) { maxHeight = null; }
    var width = canvas.width;
    var height = canvas.height;
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
    var rotatedImage = document.createElement('canvas');
    rotatedImage.width = width;
    rotatedImage.height = height;
    var rotatedCtx = rotatedImage.getContext('2d');
    switch (orientation) {
        case 2:
        case 4:
        case 5:
        case 7:
            rotatedCtx.scale(-1, 1);
            rotatedCtx.drawImage(canvas, 0, 0, width, height, -width, 0, width, height);
            return rotatedImage;
        default:
            return canvas;
    }
}
exports.ScaleExifImage = ScaleExifImage;
//# sourceMappingURL=scale-exif-image.js.map