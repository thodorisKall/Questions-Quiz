import React from "react"
import { useState } from "react"
import { SlInfo } from "react-icons/sl"
import { CgClose } from "react-icons/cg"

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
        <button onClick={openModal}>
          <SlInfo id='info' />
        </button>
      </div>

      {modalOpen && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal-box' onClick={(e) => e.stopPropagation()}>
            <div className='close__btn'>
              <button onClick={closeModal} className='close-modal-btn'>
                <CgClose />
              </button>
            </div>

            <h2>Quiz Game Info</h2>
            <p>
              QuizWhiz is a fun and easy-to-use quiz app where players can test
              their knowledge on different topics. Simply pick a category,
              answer 10 multiple-choice questions, and see your results at the
              end. You can replay as many times as you like and try new
              categories to improve your score and learn more trivia. In the
              future, QuizWhiz will let players choose how many questions they
              want to answer and pick a difficulty level (Easy, Medium, or Hard)
              to make the game even more exciting and customizable.
            </p>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
