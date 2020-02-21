import styled from "styled-components"
import { textColor, fontFamily } from "../../../../theming/theme-getters"

const DescriptionWrapper = styled.p`
  font-size: 14px;
  letter-spacing: 0.16px;
  line-height: 18px;
  font-family: ${fontFamily("quicksand")};
  color: ${textColor("regentGray")};
`

export default DescriptionWrapper
