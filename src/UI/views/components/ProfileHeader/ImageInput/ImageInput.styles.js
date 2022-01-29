import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(71, 71, 71, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  & * {
    font-weight: 600;
  }
`

export const AvatarInput = styled.input`
  display: none;
`
