const redirect = () => {
  if (typeof window === undefined) return
  window.location.replace(window.location.origin + '/admin')
}

export default () => {
  return null
}
