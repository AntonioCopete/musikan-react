import styled from 'styled-components'

export const UserInfoContainer = styled.header`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`

export const UserName = styled.h2`
  font-size: 3.5rem;
`

export const UserEmail = styled.h5`
  font-size: 1.5rem;
  font-weight: 300;
`
export const Breadcrumb = styled.p`
  position: absolute;
  /* top: 2rem; */
  right: 4rem;
  color: ${(props) => props.theme.colors.text};
`
