import React from 'react'
import { Link } from 'gatsby'

export default () => {
	if (window.netlifyIdentity) {
		window.netlifyIdentity.on('init', user => {
			if (!user) {
				window.netlifyIdentity.on('login', () => {
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
