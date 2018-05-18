const dataCacheName = 'webcodetest-data-v1'
const cacheName = 'webcodetest-pwa-1'
const filesToCache = [
  '/',
  '/build/bundle.js',
  '/assets/material.min.js',
  '/assets/material.min.css'
]

self.addEventListener('install', e => {
  console.log('[ServiceWorker] Install')
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] Caching app shell')
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener('activate', e => {
  console.log('[ServiceWorker] Activate')
  e.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key)
          return caches.delete(key)
        }
        return Promise.resolve()
      }))
    })
  )
  return self.clients.claim()
})

self.addEventListener('fetch', e => {
  console.log('[Service Worker] Fetch', e.request.url)
  if (e.request.url.indexOf('/api') > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(cache => {
        return fetch(e.request).then(response => {
          cache.put(e.request.url, response.clone())
          return response
        })
      })
    )
  } else {
    /*
    * The app is asking for app shell files. In this scenario the app uses the
    * "Cache, falling back to the network" offline strategy:
    * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
    */
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request)
      })
    )
  }
})
