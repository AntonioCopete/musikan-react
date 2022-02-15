import styled from 'styled-components'

export const TrackWrapper = styled.ul`
  padding: 1rem 0;
`
export const TrackGrid = styled.li`
  display: grid;
  grid-template-columns: 10rem repeat(3, 1fr);
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: ${(props) => props.header && '1px solid white'};
  color: ${({ theme }) => theme.colors.text};

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 6rem repeat(2, 1fr) 3rem;
  }
`
