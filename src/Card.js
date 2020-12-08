import React from 'react'

const Card = (props) => {
  const {
    contact,
    index
  } = props

  const activeClass = contact.favorite ? 'active' : ''

  return (

    <div class="card m-4 w-25 ">
    <div class="card-header bg-success ">
    <span initials={contact.initials}></span>
        <h2>{contact.name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => { props.handleFavoriteToggle(index) }}
        >
          ☆
        </div>
    </div>
    <div class="card-body">
    <ul>
          <li>
            <span>Phone</span>
            {contact.phone ? contact.phone : 'n/a'}
          </li>
          <li>
            <span>Email  </span>
            {contact.email ? contact.email : 'n/a'}
          </li>
        </ul>
    </div> 
    
    </div>


    

  )
}

export default Card