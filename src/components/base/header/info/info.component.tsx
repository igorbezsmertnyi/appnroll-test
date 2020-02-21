import React from "react"
import styled from "styled-components"
import Name from "./name.component"
import Description from "./description.component"
import LocationAndSite from "./localtion-and-site.component"
import AppFunctionComponent from "../../../../types/app-function-component.interface"
import IOrganization from "../../../../types/organization-interface"

const InfoWrapper = styled.div`
  margin: 0 0 0 21px;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

interface Props {
  info: Pick<IOrganization, Exclude<keyof IOrganization, "avatarUrl">>
}

const Info: AppFunctionComponent<Props> = ({ info }) => (
  <InfoWrapper>
    <Name>{info.name}</Name>
    <Description>{info.description}</Description>
    <LocationAndSite location={info.location} websiteUrl={info.websiteUrl} />
  </InfoWrapper>
)

export default Info
