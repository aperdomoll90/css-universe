import React, { useEffect, useRef } from 'react'

import {
  CardContainer,
  CarrouselButton,
  CarrouselCard,
  LeftContainer,
  Pagination,
  RightContainer,
  Wrapper,
} from './ResponsiveCarouselComponents'


export default function Carrousel(props) {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const cardContainerRef = useRef(null)
  //   const cardContainer = cardContainerRef?.current
  const {
    id,
    testId,
    cardContainerWidth,
    height,
    width,
    wrapperClass,
    cardsContainerClass,
    cardClass,
    pagination,
    navigation,
    color,
    orientation,
    cardsPerView,
    children,
  } = props

  const classes = ['card']

  cardClass && classes.push(cardClass)

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
          entry.target.classList.add('show')
          //   this adds the animation instead of the top line
          //   entry.target.classList.toggle('show', entry.isIntersecting)

          navigation &&
            intersectingIndex === firstChild &&
            leftButton?.firstElementChild?.classList?.toggle(
              'inactive',
              entry.isIntersecting
            )

          navigation &&
            intersectingIndex === lastChild &&
            rightButton?.firstElementChild?.classList.toggle(
              'inactive',
              entry.isIntersecting
            )
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
    <Wrapper
      id={id}
      data-testId={testId}
      // ref={responsiveCarouselRef}
      className={wrapperClass}
      height={height}
      width={width}
    >
      {navigation && (
        <>
          <LeftContainer
            data-testId={'left-button-container'}
            orientation={orientation}
          >
            <CarrouselButton ref={leftRef}>
              <button onClick={goPrev}>&#10094;</button>
            </CarrouselButton>
          </LeftContainer>
          <RightContainer
            data-testId={'right-button-container'}
            orientation={orientation}
          >
            <CarrouselButton ref={rightRef}>
              <button onClick={goNext}>&#10095;</button>
            </CarrouselButton>
          </RightContainer>
        </>
      )}

      <CardContainer
        ref={cardContainerRef}
        className={cardsContainerClass}
        color={color}
        orientation={orientation}
        cardContainerWidth={cardContainerWidth}
      >
        {children &&
          children.map((card, index) => (
            <CarrouselCard
              key={index}
              id={`card${index}`}
              className={classes.join(' ')}
              cardsPerView={cardsPerView}
            >
              {card}
            </CarrouselCard>
          ))}
      </CardContainer>

      {pagination && (
        <Pagination>
          {children &&
            children.map((card, index) => (
              // needs to be fixed the <a href> does not work as intended
              <a
                key={index}
                href={`#card${index}`}
                title={`title card ${index}`}
              >
                {card}
              </a>
            ))}
        </Pagination>
      )}
    </Wrapper>
  )
}
