import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 60rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 400px;
    width: 100%;
  }
`
