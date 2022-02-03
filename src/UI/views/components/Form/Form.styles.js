import styled from 'styled-components'

export const FormWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const FormItem = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;

  @media all and (max-width: 570px) {
    padding: 0 1.5rem;
  }

  &.form__sign-in {
    z-index: 2;
  }

  &.form__sign-up {
    z-index: 1;
    opacity: 0;
  }
`
