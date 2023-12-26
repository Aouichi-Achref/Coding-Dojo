import React from 'react'

const PersonCard = (props) => {
  return (
    <div style={{backgroundColor:"red", borderRadius:3}}>
      <fieldset style={{backgroundColor:"wheat" , borderRadius:10}}>
        <legend >welcome to the dojo world</legend>

        <h3 >FIRST NAME :{props.person.firstname}</h3>

        <h4> LAST NAME :{props.person.lastname}</h4>

        <h4> Email : {props.person.email}</h4>

        <h4> Password : {props.person.password}</h4>

      </fieldset>
    </div>
  )
}

export default PersonCard
