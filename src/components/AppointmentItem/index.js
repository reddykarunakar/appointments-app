// Write your code here
import React from 'react'
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {details, toggleIsFavorite} = props
  const {id, title, date, isFavorite} = details

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="appointment-item">
      <div className="appointments">
        <p>{title}</p>
        <p>
          format(new Date({date}).toLocaleDateString(), 'dd MMMM yyyy, EEEE')
        </p>
      </div>
      <button type="button" onClick={onClickStar} data-testid="star">
        <img src={starImgUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
