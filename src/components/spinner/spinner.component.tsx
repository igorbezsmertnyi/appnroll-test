import React from "react"
import styled from "styled-components"
import { otherColor } from "../../theming/theme-getters"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

const SpinnerWrapper = styled.div`
  border: 8px solid ${otherColor("athensGray")};
  border-radius: 50%;
  border-top: 8px solid ${otherColor("coffee")};
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Spinner = () => (
  <Container data-testid="spinner">
    <SpinnerWrapper />
  </Container>
)

export default Spinner
