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
  </div>
}