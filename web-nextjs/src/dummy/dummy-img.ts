export const dummyImage = (props: { size?: string; bg?: string; fg?: string; text?: string } = {}): string =>
  [
    'https://dummyimage.com/',
    props.size ?? '600x400',
    '/',
    props.bg ?? '000',
    '/',
    props.fg ?? 'fff',
    '.png',
    props.text && `&text=${encodeURIComponent(props.text)}`,
  ]
    .filter(Boolean)
    .join('');

export const dummyImages = {
  /** 1x1 transparent GIF */
  transparent: `data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==`,
  dummyImage,
} as const;
