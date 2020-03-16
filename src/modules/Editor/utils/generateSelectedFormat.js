export default function generateSelectedFormat() {
  const formats = [
    'bold',
    'italic',
    'underline',
    'justifyLeft',
    'justifyRight',
    'justifyCenter',
    'justifyFull'
  ]
  return formats.reduce(
    (formats, format) => ({
      ...formats,
      [format]: document.queryCommandState(format)
    }),
    {}
  )
}
