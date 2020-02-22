import React from "react"
import styled from "styled-components"
import ShareIcon from "../../../images/icons/external_link.svg"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import { textColor, fontFamily } from "../../../theming/theme-getters"

const LinkWrapper = styled.div`
  color: ${textColor("coffee")};
  font-family: ${fontFamily("quicksand")};
  font-size: 14px;
  font-weight: 300;
  margin: 16px 0;
  display: flex;
  align-self: center;

  a:visited {
    color: ${textColor("coffee")};
  }

  svg {
    margin: 0 10px 0 0;
    cursor: pointer;
  }
`

interface Props {
  link: string
}

const reduceHostName = (url: string) =>
  url.replace(/https:\/\/github.com\//, "")

const RepositoryLink: AppFunctionComponent<Props> = ({ link }) => (
  <LinkWrapper>
    <ShareIcon />

    <a data-testid="repositoryLink" href={link} target="_blank">
      {reduceHostName(link)}
    </a>
  </LinkWrapper>
)

export default RepositoryLink
