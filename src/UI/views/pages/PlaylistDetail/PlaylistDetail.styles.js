import styled from 'styled-components'

export const PlaylistWrapper = styled.div`
  outline: 1px dashed white;
`

export const Hero = styled.section`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
  }
`

export const HeroDetails = styled.div`
  padding-left: 2rem;
  color: ${({ theme }) => theme.colors.text};
  z-index: 1;
`
