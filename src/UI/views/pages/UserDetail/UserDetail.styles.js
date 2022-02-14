import styled from 'styled-components'

export const ElementsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
  padding: 1rem 0;
  margin: 2rem 0;
`

export const UserInfoContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  & h1 {
    margin-left: 2rem;
  }
`
