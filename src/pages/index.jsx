import React from 'react'
import { Link } from 'gatsby'
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

	return (
		<>
			<p>hello gatsby!</p>
		</>
	)
}
