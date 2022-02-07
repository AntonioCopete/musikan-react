import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  padding: 1rem 0;

  > div {
    margin-right: 2rem;
  }
`

export const Wrappers = styled.section`
  max-width: 60rem;
  width: 100%;
  padding: 1rem 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 32rem;
    margin: 0 auto;
  }
`
