import styled from 'styled-components'

export const Hero = styled.section`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.bgImage})`};

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    backdrop-filter: blur(1px);
  }
`

export const HeroInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  color: ${({ theme }) => theme.colors.text};
  z-index: 1;
`

export const HeroInfoContent = styled.div`
  display: flex;
  padding-bottom: 1rem;

  img {
    max-width: 12.2rem;
    margin-right: 1rem;
    border-radius: 5px;
  }
`
export const HeroInfo = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const HeroTitle = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin-bottom: 0;
  }

  svg {
    font-size: 5rem;
  }
`
