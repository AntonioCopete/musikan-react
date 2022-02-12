import styled from 'styled-components'

export const TrackWrapper = styled.ul`
  padding: 1rem 0;
`
export const TrackGrid = styled.li`
  display: grid;
  grid-template-columns: 5rem 8rem repeat(3, 1fr) 3rem;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: ${(props) => props.header && '1px solid white'};
  color: ${({ theme }) => theme.colors.text};

  /* @media ${(props) => props.theme.breakpoints.md} {
    ${(props) => props.header && 'display: none'};
  } */
`
