import styled from "styled-components"
import { textColor, fontFamily } from "../../../theming/theme-getters"

const RepositoryTitle = styled.p`
  color: ${textColor("navyBlue")};
  font-family: ${fontFamily("quicksand")};
  font-size: 24px;
  margin: 0;
`

export default RepositoryTitle
