import PropTypes from "prop-types"
import styled from "styled-components"

const Divider = styled.hr`
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.divider};
`

Divider.propTypes = {
  mt: PropTypes.string,
  mb: PropTypes.string,
}

Divider.defaultProps = {
  mt: "48px",
  mb: "48px",
}

export default Divider
