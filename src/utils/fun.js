export function pad(n) {
  return n < 10 ? `0${n} ` : n
}
export function getYMD(date = new Date()) {
  const tmpDate = new Date(date)
  const Y = tmpDate.getFullYear()
  const M = tmpDate.getMonth() + 1
  const D = tmpDate.getDate()
  return `${Y}-${M}-${D}`
}
export function addEventListenerList(list, event, fn) {
  for (let i = 0, len = list.length; i < len; i + 1) {
    list[i].addEventListener(event, fn, false)
  }
}
export function removeEventListenerList(list, event) {
  for (let i = 0, len = list.length; i < len; i + 1) {
    const fn = list[i].click
    list[i].removeEventListener(event, fn)
  }
}
export const Global =
  (typeof self === 'object' && self.self === self && self) ||
  (typeof global === 'object' && global.global === global && global) ||
  {}
