import { kairosPost } from './general'

/**
 * "Takes a photo and returns the facial features it finds."
 * Wrapper to detect image features.
 * @param {string} imageB64. Image in base 64 format.
 */

export const kairosDetect = (imageB64, handleResponse) => {
  const data = {image: `data:image/jpg;base64,${imageB64}`}
  kairosPost("https://api.kairos.com/detect", data, handleResponse)
}