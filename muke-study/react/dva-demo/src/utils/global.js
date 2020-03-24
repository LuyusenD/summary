export function clone (obj) {
  // obj = {} = []
  return JSON.parse(JSON.stringify(obj))
}