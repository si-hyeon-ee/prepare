import React from 'react'
import propTypes from 'prop-types'
import 'antd/dist/antd.css'
import Head from 'next/head'

const App = ({ Component }) => (
	<>
		<Head>
			<meta charSet="utf8"></meta>
			<title>NodeBird</title>
		</Head>
		<Component />
	</>
)

App.propTypes = {
	Component: propTypes.elementType.isRequired,
}

export default App
