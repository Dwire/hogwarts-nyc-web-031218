// import React from 'react'
import React from 'react'

const HogDetail = (props) => {
    return (
      <div>
        <h3>{props.hog.greased ? 'GREASED' : 'DRY' }</h3>
        <p>Dspecialty: {props.hog.specialty}</p>
        <p>Medal: {props.hog['highest medal achieved']}</p>
        <p>Weight: {props.hog.weight}</p>
      </div>
    )
}



export default HogDetail
