import React, { useEffect } from 'react'
import styled from 'styled-components'
import RouteWrapper from '../../Components/RouteWrapper'
import styles from './styles.css'

export default function Carrousel() {

  const Wrapper = styled.div`
  height: 80vh;
  width: 100vw;
  position: relative;
  margin-top: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y:scroll;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem; 
  padding:1rem; 
`

  useEffect(() => {
    const cards = document.querySelectorAll('.card')


    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        // this keeps the entry active by unorserving it
        // if(entry.isIntersecting)observer.unobserve(entry.target)
      })
    }, {
      // threshold monitors how much of the child is present in the observer area
      threshold: 1,
      // rootMargin controls when to observe from the edge on the parent container
      // + means will preload and - will wait till is that far inside the parent
      rootMargin: "3000px",
      
      // root is to set the parent component always needs to be scrollable
      // root:
    })

    const lastCardObserver = new IntersectionObserver(entries => {
      const lastCard = entries[0]  
      if (!lastCard.isIntersecting) return
      loadNewCards()
      lastCardObserver.unobserve(lastCard.target)
      lastCardObserver.observe(document.querySelector('.card:last-child'))
    }, {
      rootMargin: "3000px",
    })
    
    lastCardObserver.observe(document.querySelector('.card:last-child'))

    cards.forEach(card => {
      observer.observe(card)
    })
    
 const cardContainer = document.querySelector('.cardContainer')

    function loadNewCards() {
      for (let i = 0; i < 10; i++){
        const card = document.createElement('div')
        card.textContent = 'new card'
        card.classList.add('card')
        observer.observe(card)
        cardContainer.append(card)
      }
    }

  },[])



  return (
    <RouteWrapper>
      <Wrapper>
        <CardContainer className='cardContainer'>
          <div className='card'> First Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Card </div>
          <div className='card'> Last Card </div>
        </CardContainer>
      </Wrapper>
    </RouteWrapper>
  )
}
