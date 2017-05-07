const STORAGE_KEY = 'codetest-react'

export function clear() {
  localStorage.clear()
}

export function fetch() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY))
}

export function save(item) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(item))
}
