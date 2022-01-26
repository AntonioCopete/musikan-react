import styled from 'styled-components'

export const SignupForm = styled.form`
  form {
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
  }

  .form {
    position: absolute;
    top: 50%;
    left: 75%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: 1fr;
    width: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
    transition: 1s 0.7s ease-in-out;

    @media all and(max-width: 870px) {
      width: 100%;
      left: 50%;
      top: 95%;
      transform: translate(-50%, -100%);
      transition: 1s 0.8s ease-in-out;
    }

    &__title {
      font-size: 2.2rem;
      color: #444;
      margin-bottom: 10px;
    }

    &__input-field {
      display: -ms-grid;
      display: grid;
      grid-template-columns: 15% 85%;
      max-width: 380px;
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
    width: 9.375rem;
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
