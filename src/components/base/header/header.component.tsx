import React from "react"
import styled from "styled-components"
import Logo from "./logo/logo.component"
import Info from "./info/info.component"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import IOrganization from "../../../types/organization-interface"

const HeaderRoot = styled.header`
  margin-bottom: 1.45rem;
  padding: 71px 0 25px;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1155px;
  padding: 1.45rem 1.0875rem;
`

interface Props {
  organization: IOrganization
}

const Header: AppFunctionComponent<Props> = ({ organization }) => {
  return (
    <HeaderRoot>
      <ContentWrapper>
        <Logo src={organization.avatarUrl} />
        <Info info={organization} />
      </ContentWrapper>
    </HeaderRoot>
  )
}

export default Header
