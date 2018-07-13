import { getCordovaCamera, getCordovaResolveLocalFileSystemURL } from '.';

export function hasCordovaCameraSupport() {
  return getCordovaCamera() && getCordovaResolveLocalFileSystemURL();
}
