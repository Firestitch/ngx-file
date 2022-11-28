export interface FsFileProcessConfig {
  orientate?: boolean;
  quality?: number;
  format?: 'jpg' | 'png';
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
}
