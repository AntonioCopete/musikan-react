import styled from 'styled-components'

export const FormStyle = styled.div`
  $color-primary: #e41e51;
  $color-primary-light: #e3519f;

  $color-secondary: #17182a;
  $color-secondary-light: #29304a;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

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

    /* &.form__sign-in {
      z-index: 2;
    }

    &.form__sign-up {
      z-index: 1;
      opacity: 0;
    } */
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
  }
`
