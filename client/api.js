export const fetch = async url => {
  let response
  try {
    // service worker intercept xhr - cache first, xhr fallback
    if ('caches' in window) {
      response = await caches.match(url)
    }
    response = response || (await window.fetch(url))
    return response.json()
  } catch (err) {
    console.error(err)
  }
}
