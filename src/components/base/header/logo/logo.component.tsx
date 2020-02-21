import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../../types/app-function-component.interface"
import { backgroundColor } from "../../../../theming/theme-getters"

const LogoWrapper = styled.div`
  min-width: 102px;
  width: 102px;
  height: 102px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${backgroundColor("haiti")};
`

const LogoImage = styled.img`
  width: calc(100% - 5px);
  height: calc(100% - 5px);
  object-fit: cover;
`

interface Props {
  src: string
}

const Logo: AppFunctionComponent<Props> = ({ src }) => (
  <LogoWrapper>
    <LogoImage data-testid="logoImage" src={src} />
  </LogoWrapper>
)

export default Logo
