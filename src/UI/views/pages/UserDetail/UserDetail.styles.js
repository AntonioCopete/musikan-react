import styled from 'styled-components'

export const ElementsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
  padding: 1rem 0;
  margin: 2rem 0;
`

export const ImageContent = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background: ${(props) => `url(${props.bgImage})`};
  background-size: cover;
  background-position: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 13rem;
    height: 13rem;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
`
