import styled from "styled-components"
import { backgroundColor, fontFamily } from "../../../../theming/theme-getters"

const NameWrapper = styled.h1`
  margin: 0;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0;
  font-weight: 600;
  font-family: ${fontFamily("quicksand")};
  color: ${backgroundColor("haiti")};
`

export default NameWrapper
