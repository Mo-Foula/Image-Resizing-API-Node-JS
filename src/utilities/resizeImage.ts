import sharp from 'sharp'

export const resizeImage = async function (
  filename = '',
  height: number,
  width: number
): Promise<Buffer> {
  const buffer = await sharp(`images/${filename}.jpg`)
    .resize(width, height)
    .toBuffer()

  return buffer
}
