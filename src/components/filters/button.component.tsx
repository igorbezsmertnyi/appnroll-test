import React from "react"
import styled from "styled-components"
import { fontFamily, otherColor } from "../../theming/theme-getters"
import AppFunctionComponent from "../../types/app-function-component.interface"

const ButtonWrapper = styled.div`
  button {
    border: 0;
    padding: 11px 16px;
    background: ${otherColor("coffee")};
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    font-family: ${fontFamily("quicksand")};
    cursor: pointer;

    &:hover {
      background: ${otherColor("toryBlue")};
    }
  }
`
interface Props {
  handleClear(): void
}

const ClearButton: AppFunctionComponent<Props> = ({ handleClear }) => (
  <ButtonWrapper onClick={handleClear}>
    <button>Clear filters</button>
  </ButtonWrapper>
)

export default ClearButton
