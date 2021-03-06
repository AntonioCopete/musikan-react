import styled from 'styled-components'

export const TrackWrapper = styled.ul`
  padding: 1rem 0;
`
export const TrackGrid = styled.li`
  display: grid;
  grid-template-columns: 5rem 10rem repeat(4, 1fr);
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  border-bottom: ${(props) => props.header && '1px solid white'};
  color: ${({ theme }) => theme.colors.text};

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(4, 1fr);
    & > :not(.--visible) {
      display: none;
    }
  }
`
