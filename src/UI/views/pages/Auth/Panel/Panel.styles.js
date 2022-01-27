import styled from 'styled-components'

export const PanelWrapper = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media all and (max-width: 54.375rem) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`

export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 7;

  .panel__content {
    color: #fff;
    -webkit-transition: 0.9s 0.6s ease-in-out;
    transition: 0.9s 0.6s ease-in-out;
  }

  &.panel__left {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
  }

  &.panel__right {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
  }

  .panel__title {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  .panel__paragraph {
    font-size: 0.95rem;
    padding: 0.7rem 0;
    max-width: 560px;
  }

  .panel__image {
    width: 100%;
    transition: 1.1s 0.4s ease-in-out;
  }

  .btn {
    border: none;
    outline: none;
    border-radius: 3.0625rem;
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    margin: 0;
    background: none;
    border: 2px solid #fff;
    width: 130px;
    height: 41px;
    font-size: 0.8rem;
  }

  /*Animation*/
  .panel__right .panel__content,
  .panel__right .panel__image {
    -webkit-transform: translateX(800px);
    transform: translateX(800px);
  }

  .container.sign-up-mode .panel__right .panel__content,
  .container.sign-up-mode .panel__right .panel__image {
    transform: translateX(0px);
  }

  .container.sign-up-mode::before {
    -webkit-transform: translate(100%, -50%);
    transform: translate(100%, -50%);
    right: 52%;
  }

  .container.sign-up-mode .panel__left .panel__image,
  .container.sign-up-mode .panel__left .panel__content {
    -webkit-transform: translateX(-800px);
    transform: translateX(-800px);
  }

  .container.sign-up-mode .panel__left {
    pointer-events: none;
  }

  .container.sign-up-mode .panel__right {
    pointer-events: all;
  }

  .container.sign-up-mode .form {
    left: 25%;
  }

  .container.sign-up-mode form.form__sign-in {
    z-index: 1;
    opacity: 0;
  }

  .container.sign-up-mode form.form__sign-up {
    z-index: 2;
    opacity: 1;
  }

  @media (max-width: 870px) {
    .panel {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 2.5rem 8%;
    }
    .panel__left {
      -ms-grid-row: 1;
      -ms-grid-row-span: 1;
      grid-row: 1 / 2;
    }
    .panel__right {
      -ms-grid-row: 3;
      -ms-grid-row-span: 1;
      grid-row: 3 / 4;
    }
    .panel__image {
      width: 200px;
      -webkit-transition: 0.9s 0.6s ease-in-out;
      transition: 0.9s 0.6s ease-in-out;
    }
    .panel__content {
      padding-right: 15%;
      -webkit-transition: 0.9s 0.8s ease-in-out;
      transition: 0.9s 0.8s ease-in-out;
    }
    .panel__title {
      font-size: 1.2rem;
    }
    .panel__paragraph {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }
    .panel__right .panel__content,
    .panel__right .panel__image {
      -webkit-transform: translateY(300px);
      transform: translateY(300px);
    }
    .btn {
      width: 6.875rem;
      height: 2.187rem;
      font-size: 0.7rem;
    }
    .container.sign-up-mode::before {
      -webkit-transform: translate(-50%, 100%);
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;
    }
    .container.container.sign-up-mode .panel__left .panel__image,
    .container.container.sign-up-mode .panel__left .panel__content {
      -webkit-transform: translateY(-300px);
      transform: translateY(-300px);
    }
    .container.sign-up-mode .form {
      top: 5%;
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
      left: 50%;
    }
  }

  @media (max-width: 570px) {
    .panel__image {
      display: none;
    }
    .panel__content {
      padding: 0.5rem 1rem;
    }
    .container::before {
      bottom: 72%;
      left: 50%;
    }
    .container.sign-up-mode::before {
      bottom: 28%;
      left: 50%;
    }
  }
`
