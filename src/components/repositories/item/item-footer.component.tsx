import React from "react"
import styled from "styled-components"
import AppFunctionComponent from "../../../types/app-function-component.interface"
import IRepository from "../../../types/repository-interface"
import StarIcon from "../../../images/icons/stars.svg"
import ForksIcon from "../../../images/icons/issues.svg"
import {
  textColor,
  fontFamily,
  backgroundColor,
} from "../../../theming/theme-getters"

const FooterWrapper = styled.div`
  position: absolute;
  width: calc(100% - 66px);
  height: 86px;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 33px;
  background-color: ${backgroundColor("lightBlue")};
`

const LanguageWrapper = styled.div<LanguageProps>`
  color: ${textColor("navyBlue")};
  font-family: ${fontFamily("quicksand")};
  font-size: 12px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-flex;
    width: 16px;
    height: 16px;
    margin: 0 4px 0 0;
    border-radius: 50%;
    background-color: ${(props: LanguageProps) => props.background};
  }
`

const IconsWrapper = styled.div`
  color: ${textColor("navyBlue")};
  font-family: ${fontFamily("quicksand")};
  font-size: 12px;
  margin: 0 0 0 24px;
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    margin: 2px 8px 0 0;
  }

  p {
    margin: 0;
    padding: 4px 0 0;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

interface LanguageProps {
  background: string
}

interface Props {
  info: Omit<IRepository, "name" | "url" | "id" | "description">
}

const ItemFooter: AppFunctionComponent<Props> = ({ info }) => (
  <FooterWrapper>
    <LanguageWrapper
      data-testid="repositoryLanguage"
      background={info.primaryLanguage.color}
    >
      {info.primaryLanguage.name}
    </LanguageWrapper>

    <Row>
      <IconsWrapper>
        <StarIcon />
        <p data-testid="repositoryStars">{info.stargazers.totalCount}</p>
      </IconsWrapper>

      <IconsWrapper>
        <ForksIcon />
        <p data-testid="repositoryForks">{info.forkCount}</p>
      </IconsWrapper>
    </Row>
  </FooterWrapper>
)

export default ItemFooter
