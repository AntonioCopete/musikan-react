import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProfileTitle = styled.p`
  align-self: flex-end;
`
