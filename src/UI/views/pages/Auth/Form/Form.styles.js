import styled from 'styled-components'

export const FormWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const FormGroup = styled.form`
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

  .form {
    &__title {
      font-size: ${({ theme }) => theme.fonts.title};
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 10px;

      @media ${(props) => props.theme.breakpoints.sm} {
        font-size: ${({ theme }) => theme.fonts.titleMobile};
      }
    }

    &__input-field {
      display: grid;
      grid-template-columns: 15% 85%;
      max-width: 23.75rem;
      width: 100%;
      height: 3.437rem;
      background-color: #f0f0f0;
      margin: 10px 0;
      border-radius: 3.437rem;
      padding: 0 0.4rem;

      & i {
        text-align: center;
        line-height: 3.437rem;
        color: #acacac;
        font-size: 1.1rem;
      }

      & input {
        background: none;
        outline: none;
        border: none;
        line-height: 1;
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;
        border-radius: inherit;
      }
    }

    & input::placeholder {
      color: #aaa;
      font-weight: 500;
    }
  }

  .form__submit {
    max-width: 23.75rem;
    width: 100%;
    height: 3.0625rem;
    margin: 10px 0;
    border-radius: 3.0625rem;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    outline: none;
    background-color: red;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: #5a1369;
    }

    &:disabled {
      opacity: 0.5;

      &:hover {
        background-color: red;
      }
    }
  }
`
