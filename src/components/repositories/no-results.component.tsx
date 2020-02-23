import React from "react"
import styled from "styled-components"
import { textColor, fontFamily } from "../../theming/theme-getters"

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 48px 15px;

  h1 {
    font-family: ${fontFamily("quicksand")};
    color: ${textColor("navyBlue")};
  }
`

const NoResults = () => (
  <ContentWrapper>
    <h1>No results :(</h1>
  </ContentWrapper>
)

export default NoResults
