import { getCordovaCapture, getCordovaResolveLocalFileSystemURL } from '.';

export function hasCordovaCaptureSupport() {
  return getCordovaCapture() && getCordovaResolveLocalFileSystemURL();
}
