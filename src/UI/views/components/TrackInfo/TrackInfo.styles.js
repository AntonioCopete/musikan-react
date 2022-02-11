import styled from 'styled-components'

export const InfoWrapper = styled.div`
  width: 100%;
  align-self: end;

  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const Image = styled.img`
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 6rem;
    width: 100%;
  }
`

export const Text = styled.p`
  padding: 1rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.text};
`
