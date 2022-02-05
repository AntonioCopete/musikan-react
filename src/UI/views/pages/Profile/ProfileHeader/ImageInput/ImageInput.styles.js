import styled from 'styled-components'

export const LabelContainer = styled.label`
  position: relative;
  margin-right: 2rem;
`
export const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(71, 71, 71, 0.6);
  transition: opacity 0.25s;

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
