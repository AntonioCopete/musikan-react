import styled from 'styled-components'

export const InfoWrapper = styled.div`
  max-width: 20rem;
`

export const Image = styled.img`
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 8rem;
    width: 100%;
  }
`

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
`
