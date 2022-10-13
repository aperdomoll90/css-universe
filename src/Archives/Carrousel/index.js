import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import RouteWrapper from '../../Components/RouteWrapper'
import { devices } from './breakpoints'

export default function Carrousel({ props }) {
  const leftRef = useRef()
  const rightRef = useRef()
  const cardContainerRef = useRef()
  const cardContainer = cardContainerRef?.current
  const { children, className, pagination, navigation } = props

  const classes = ['card']
  className && classes.push(className)

  console.log('classes', classes)
  console.log('children', children)

  useEffect(() => {
    const leftButton = leftRef.current
    const rightButton = rightRef.current
    const childrenCards = cardContainerRef?.current?.childNodes
    const cards = Array.prototype.slice.call(childrenCards)
    const firstChild = 0
    const lastChild = cards.length - 1

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const intersectingIndex = cards.indexOf(entry.target)
          entry.target.classList.add('show', entry.isIntersecting)
          if (navigation && intersectingIndex === firstChild) {
            return leftButton.classList.toggle('inactive', entry.isIntersecting)
          }
          if (navigation && intersectingIndex === lastChild) {
            return rightButton.classList.toggle('inactive', entry.isIntersecting)
          }
        })
      },
      {
        // threshold monitors how much of the child is present in the observer area
        threshold: 0.5,
        // rootMargin controls when to observe from the edge on the parent container
        // + means will preload and - will wait till is that far inside the parent
        // rootMargin: '3000px',

        // root is to set the parent component always needs to be scrollable
        // root:
      }
    )

    //   INFINITE SCROLLING ADDING EXTRA DIVS
    //   const lastCardObserver = new IntersectionObserver(entries => {
    //   const lastCard = entries[0]
    //   if (!lastCard.isIntersecting) return
    //   Array(10).fill().forEach(loadNewCards)
    //   lastCardObserver.unobserve(lastCard.target)
    //   lastCardObserver.observe(document.querySelector('.card:last-child'))
    // }, {})

    // const cardContainer = document.querySelector('.cardContainer')

    // function loadNewCards() {
    //   const card = document.createElement('div')
    //   card.textContent = 'new card'
    //   card.classList.add('card')
    //   observer.observe(card)
    //   cardContainer.append(card)
    // }

    // lastCardObserver.observe(lastChild)
    cards.forEach(card => {
      observer.observe(card)
    })
  }, [])

  const goPrev = () => {
    console.log('prev')
  }
  const goNext = () => {
    console.log('next')
    
  }
  return (
    <RouteWrapper>
      <Wrapper>
        {navigation && (
          <>
            <LeftContainer>
              <CarrouselButton>
                <button  onClick={goPrev} ref={leftRef} className={'carrousel-button'}>
                  &#10094;
                </button>
              </CarrouselButton>
            </LeftContainer>
            <RightContainer>
              <CarrouselButton>
                <button onClick={goNext} ref={rightRef} className={'carrousel-button'}>
                  &#10095;
                </button>
              </CarrouselButton>
            </RightContainer>
          </>
        )}
        <CardContainer ref={cardContainerRef} className={'cardContainer'} {...props}>
          {children &&
            children.map((card, index) => (
              <div id={`card${index}`} className={classes.join(' ')}>
                {card.text}
              </div>
            ))}
        </CardContainer>
        {pagination && (
          <nav>
            {children &&
              children.map((card, index) => (
                <a href={`#card${index}`} title={`title card ${index}`}>
                  {card.text}
                </a>
              ))}
          </nav>
        )}
      </Wrapper>
    </RouteWrapper>
  )
}

// DESIGN  ELEMENTS
const Wrapper = styled.div`
  height: 50vh;
  width: 95vw;
  position: relative;
  margin-top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  nav {
    block-size: calc(10% 100%);
    position: absolute;
    z-index: 100;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    display: flex;
    margin: 0 auto;
    inline-size: max-content;
    /* DRY: set here the gap between the dots,
    * we will need it later to set the position
    * of the nav::before pseudoelement
    */
    --gap: 1rem;
    gap: var(--gap, 0.5rem);
  }

  nav::before,
  nav a {
    inline-size: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #9bc;
  }
  nav a {
    inline-size: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #9bc;
    text-indent: 100%;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0.33;
  }
  nav a:hover,
  nav a:focus {
    background: #eee;
  }

  nav::before {
    content: '';
    position: absolute;
    /* z-index: 1; */
    /* display: block;
   cursor: not-allowed; */

    /* here we use the above --gap variable.
    * the --slide variable is set in the
    * keyframes below.
    */
    transform: translateX(calc((100% + var(--gap, 0.5rem)) * calc(var(--slide, 1) - 1)));
    animation: dot 1s steps(1, end) forwards;
    /* shhh... here is the magic */
    animation-timeline: slide;
  }
  /* timeline animation */
  @scroll-timeline slide {
    source: selector(#s);
    orientation: inline;
    time-range: 1s;
  }

  @keyframes dot {
    0% {
      --slide: 1;
    }
    12.5% {
      --slide: 2;
    }
    25% {
      --slide: 3;
    }
    37.5% {
      --slide: 4;
    }
    50%,
    100% {
      --slide: 5;
    }
    62.5%,
    100% {
      --slide: 6;
    }
    75%,
    100% {
      --slide: 7;
    }
    87.5%,
    100% {
      --slide: 8;
    }
  }
`

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  /* gap: 1rem;
  padding: 1rem; */
  /* block-size: calc(50% + 25px); */
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  scroll-snap-type: both mandatory;
  scroll-behavior: smooth;
  cursor: ew-resize;
  background: ${({ color }) => color && color};
  flex-direction: ${({ thumbnailDirection }) => (thumbnailDirection && typeof thumbnailDirection === 'object' ? thumbnailDirection.default : thumbnailDirection)};
  ${({ thumbnailDirection }) =>
    thumbnailDirection &&
    typeof thumbnailDirection === 'object' &&
    `
       @media ${devices.md} {
         flex-direction:  ${thumbnailDirection.md};
       }
       @media ${devices.lg} {
         flex-direction: ${thumbnailDirection.lg};
       }
       @media ${devices.xl} {
         flex-direction: ${thumbnailDirection.xl};
       }
       `}
  .card {
    flex: 0 0 ${({ cardsPerView }) => (cardsPerView ? 100 / cardsPerView : 100)}%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    /* restore the actual height of the slider */
    /* block-size: calc(100% - 25px); */
    /* min-height: 5rem;
    min-width: 5rem; */
    /* transform: translateY(-100px); */
    /* opacity: 0; */
    /* transition: 150ms; */
    /* height: 90%; */
    /* min-width: 15rem; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    text-align: center;
    outline: 1px solid black;
  }
  .show {
    transform: translateY(0);
    opacity: 1;
  }
`
const LeftContainer = styled.div`
  position: absolute;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RightContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CarrouselButton = styled.div`
  button {
    min-height: 5rem;
    min-width: 5rem;
    font-size: 3.2rem;
    font-weight: 100;
    background: transparent;
    border: none;
    color: rgba(0, 0, 0, 0.571);
    transition: 1s;

    /* padding: 15px 32px; */
    /* text-align: center;
    text-decoration: none;
    display: inline-block; */
  }
  button:hover {
    color:yellow
  }
  .inactive {
    color: rgba(80, 78, 78, 0.453);
    font-size: 2.5rem;
    display: block;
    /* cursor: not-allowed; */
    /* opacity: 0; */
  }
`
