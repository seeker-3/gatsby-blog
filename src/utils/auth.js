import netlifyIdentity from 'netlify-identity-widget'

export default () => {
  if (typeof window !== undefined) {
    netlifyIdentity.on('init', user => {
      if (!user) {
        netlifyIdentity.on('login', () => {
          document.location.href = '/admin/'
        })
      }
    })
  }
}
