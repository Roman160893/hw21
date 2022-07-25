import React, { Component } from 'react';


class Contact extends Component {
   constructor(props) {
      super(props);
   }

   render() {

      return (
         <div className='contact__wrapper'>
            <input placeholder='Search contact' ></input>
            {this.props.contact.map((el) =>
               <div className='contact__wrapper-card'>
                  <p className='card__wrapper'>{el.gender == 'male' ? <img className='card__icon' src='https://cdn-icons-png.flaticon.com/512/1340/1340619.png' /> : el.gender == 'female' ? <img className='card__icon' src='https://cdn-icons-png.flaticon.com/512/766/766514.png' /> : el.firstName[0]}</p>
                  <div className='card__info'>
                     <p className='card__info-name'>{el.firstName} {el.lastName}</p>
                     <p className='card__info-phone'> {el.phone}</p>
                  </div>
               </div>
            )}

         </div>
      )
   }
}

export default Contact;