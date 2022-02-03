import styled from 'styled-components'

export const Logotype = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 1rem;

  img {
    max-height: 6rem;
  }
`

export const LogoBrand = styled.span`
  font-size: ${(props) => (props.main ? '3rem' : '5rem')};
  font-family: Acme, sans-serif;
  color: ${({ theme }) => theme.colors.text};

  @media ${(props) => props.theme.breakpoints.lg} {
    ${(props) => props.main && 'display: none'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4rem;
`
