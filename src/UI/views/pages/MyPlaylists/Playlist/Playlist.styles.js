import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const Wrapper = styled.section`
  max-width: 80rem;
  width: 100%;
  padding: 2rem 0;

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 500px;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 420px;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 220px;
    width: 100%;
  }
`

export const SwiperWrapper = styled(Swiper)`
  width: auto;
  height: auto;
`
