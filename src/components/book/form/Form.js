import React, { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../config/firestore";

import './form.css'
import modalImage from '../../../images/form-modal-img.jpg'

const Form = () => {
  const modal = document.querySelector(".modal-wrap")
  const close = document.querySelector(".modal-close")

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    peopleNumber: "",
    reservationTime: "",
    comments: "",
  })

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(details)
    try {
      const docRef = await addDoc(collection(db, "Booking"), details);
      console.log("Document written with ID: ", docRef.id);
      modal.classList.toggle('display-none')
      close.addEventListener("click", () => {
        modal.classList.toggle('display-none')
      })
    } catch (e) {
      console.error("Error in adding document", e)
    } finally {
      document.getElementById('book-form').reset()
    }
  }

  function handleChange(event) {
    const { target } = event
    const { name, value } = target
    const newValues = { ...details, [name]: value }
    setDetails(newValues)
  }

  return (
    <div>

      <div>
        <div className="modal-wrap display-none">
          <div className="modal">
            <img src={modalImage} alt="modal-img" />
            <h3>Gracias por su reservacion!</h3>
            <h3>Nos vemos en el restaurante</h3>
            <button className="btn modal-close">Cerrar</button>
          </div>
        </div>
      </div>

      <div className='component-container'>
      <h2>Libro de reservas</h2>
        <form id="book-form" className="book-form" onSubmit={handleSubmit}>
          <h3>Nombre:</h3>
          <input type="text" name="name" onChange={handleChange} />
          <h3>Correo:</h3>
          <input type="email" name="email" onChange={handleChange} />
          <h3> Numero de Telefono:</h3>
          <input type="tel" name="phone" onChange={handleChange} />
          <h3>Mesa para:</h3>
          <select name="peopleNumber" onChange={handleChange}>
            <option value="1">1 Persona</option>
            <option value="2">2 Personas</option>
            <option value="3">3 Personas</option>
            <option value="4">4 Personas</option>
          </select>
          <h3>Hora y Fecha de reserva:</h3>
          <input type="datetime-local" name="reservationTime" onChange={handleChange} />
          <h3>Comentarios adicionales:</h3>
          <textarea type="text" name="comments" onChange={handleChange} />
          <button type="submit">Reservar</button>
        </form>
      </div>

    </div>
  )
}

export default Form;