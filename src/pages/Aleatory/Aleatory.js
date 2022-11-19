import React, { useEffect, useState } from 'react';
import './Aleatory.css';

const Aleatory = () => {
  const logoVermelha = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JsBdeiWUw9ycrjwAlkquD_WKKOffr4zmMADw-jm8rN1EVqxfnVwUkouwyBWTlngEbYQ&usqp=CAU';
  const logoBranca = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuzMAS4Za-DLDE-AAIo0BrjpAG8WupYB2fiXOdmsG0wvI1ROXGE3GUVtY8iw-_aEvYns&usqp=CAU';

  const [image, setImage] = useState(logoVermelha);

  useEffect(() => {
    setInterval(() => {
      if (image === logoVermelha) {
        setImage(logoBranca)
      } else {
        setImage(logoVermelha)
      }
    }, 2500)
  })

  return (
    <div className='aleatory'>
      <img src={image} alt=''></img>
    </div>
  )
}

export default Aleatory;