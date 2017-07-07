import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  /** Message to display */
  message: PropTypes.string
}

/** A canary component for demonstration purposes */
const HelloWorld = ({message = 'World'}) => <div>Hello {message}</div>

HelloWorld.propTypes = propTypes

export default HelloWorld