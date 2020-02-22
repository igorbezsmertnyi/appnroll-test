import styled from "styled-components"
import { textColor, fontFamily } from "../../../theming/theme-getters"

const RepositoryDescription = styled.p`
  color: ${textColor("regentGray")};
  font-family: ${fontFamily("quicksand")};
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`

export default RepositoryDescription
