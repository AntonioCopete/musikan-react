import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: 80rem;
  width: 100%;
  padding: 2rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 400px;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 300px;
    width: 100%;
  }
`
