import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Divider = styled.hr`
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mt};
  margin-bottom: 3rem;
  border: none;
  border-bottom: 1px solid #dee2e6;
`

Divider.propTypes = {
  mt: PropTypes.string,
  mb: PropTypes.string,
}

Divider.defaultProps = {
  mt: "3rem",
  mb: "3rem",
}

export default Divider
