import React from "react"
import styled from "styled-components"
import { textColor, fontFamily } from "../../../../theming/theme-getters"
import LocationIcon from "../../../../images/icons/location.svg"
import LinkIcon from "../../../../images/icons/link.svg"
import AppFunctionComponent from "../../../../types/app-function-component.interface"

const ContentWrapper = styled.div`
  display: flex;
  font-size: 14px;
  letter-spacing: 0.16px;
  line-height: 18px;
  font-family: ${fontFamily("quicksand")};
  color: ${textColor("navyBlue")};
`

const IconsWrapper = styled.div`
  margin: 0 24px 0 0;
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    margin: 2px 8px 0 0;
  }

  a {
    color: ${textColor("navyBlue")};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

interface Props {
  location: string
  websiteUrl: string
}

const LocationAndSite: AppFunctionComponent<Props> = ({
  location,
  websiteUrl,
}) => (
  <ContentWrapper>
    <IconsWrapper>
      <LocationIcon />
      {location}
    </IconsWrapper>
    <IconsWrapper>
      <LinkIcon />
      <a href={websiteUrl}>{websiteUrl}</a>
    </IconsWrapper>
  </ContentWrapper>
)

export default LocationAndSite
