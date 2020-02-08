const redirect = () => {
  if (typeof window === undefined) return
  window.location.href = window.location.origin + '/admin/'
}

export default () => {
  return null
}
