import styled from "styled-components"

interface Props {
  background: string
}

const ColoredLine = styled.div<Props>`
  width: 100%;
  height: 6px;
  background-color: ${(props: Props) => props.background};
`

export default ColoredLine
