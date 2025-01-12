import React from "react"
import { useState } from "react"
import { SlInfo } from "react-icons/sl"

function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <footer>
      <h3 id='developed'>
        Developed by <span>Thodoris Kallioras</span> 2025
      </h3>

      <div className='footer__info'>
        <button id='info' onClick={openModal}>
          <SlInfo />
        </button>
        <h4>More</h4>
      </div>

      {modalOpen && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-box' onClick={(e) => e.stopPropagation()}>
            <h2>Quiz Game Info</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              ipsam sint dicta facilis cum nemo laudantium eius beatae,
              obcaecati provident atque velit suscipit, veniam sed voluptatibus
              sapiente molestias vel eligendi molestiae. Recusandae aliquid
              earum a fugit perferendis fuga ipsa exercitationem? Facere
              molestias eius quos dignissimos. Voluptatibus qui quasi voluptas
              in.
            </p>
            <button onClick={closeModal} className='close-modal-btn'>
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
