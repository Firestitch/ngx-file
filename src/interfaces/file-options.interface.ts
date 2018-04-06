export interface FsFileOptions {
  disabled?:        boolean;
  multiple?:        boolean;
  preview?:         boolean;
  autoOrientation?: boolean;
  resize?:          boolean;
  minSize?:         number | undefined;
  maxSize?:         number | undefined,
  imageMaxWidth?:   number | undefined;
  imageMaxHeight?:  number | undefined;
  imageQuality?:    number | undefined;
  imageFormat?:     string | undefined;
  accept?:          string[];
}
