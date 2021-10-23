import styled from 'styled-components'
import { media } from 'styles'

export const Content = styled.section`
  text-align: center;
`

export const Wrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Container = styled.section`
  padding: 0 0.75rem;

  @media (min-width: ${media.medium}) {
    max-width: 1040px;
    margin: 0 auto;
  }

  @media (min-width: ${media.huge}) {
    max-width: 1540px;
  }
`

export const Body = styled.div`
  h1 {
    font-size: 3rem
    margin-bottom: 3rem
  }

  p {
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 2rem
  }

  @media (min-width: ${media.medium}) {
    h1 {
      font-size: 5rem
      margin-bottom: 5rem
    }
  
    p {
      font-size: 2rem;
      line-height: 2rem;
      margin-bottom: 3rem
    }
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: 2rem;
  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
