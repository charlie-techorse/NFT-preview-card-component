import { ReactNode } from 'react'
import { ItemType } from '../types/itemType'
import './card.css'

type ItemProps = {
  item: ItemType
}

export function Card({ item }: ItemProps) {
  return <div className='card'>
    <img className="card__image" src='/image-equilibrium.jpg' alt="quilibrium" />
    <h1 className='card__title'>{item.title} #{item.id}</h1>
    <p className='card__description'>{item.description}</p>
    <div className='card__info'>
      <div className='card__info-eth'>
        <img src='/icon-ethereum.svg' alt='ethereum'></img>
        <p>{item.prize} ETH</p>
      </div>
      <div className='card__info-days'>
        <img src='/icon-clock.svg' alt='clock'></img>
        <p>{item.days} days left</p>
      </div>
    </div>
    <hr className='card__stripe'></hr>
    <div className='card__user'>
      <img className='card__user-img' src={item.image} alt='user'></img>
      <p className='card__user-name'>
        <span className='card__user-creation'>Creation of </span>
        Jules Wyvern
      </p>
    </div>
  </div>
}