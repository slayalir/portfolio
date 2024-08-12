import React from 'react'
import './modal.css'
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal'

const ProjectsModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal
        isOpen = { isOpen }
        onRequestClose = { onRequestClose }
        contentLabel = "Project Modal"
        className = 'project-modal'
        overlayClassName = 'project-modal-overlay'
    >
        <div className = 'project-close-modal'>
            <button onClick = { onRequestClose }>
                <MdClose />
            </button>
        </div>
        <div className = 'project-modal-container'>
            <h3 className = 'project-modal-text project-modal-text1'>{ project.title }</h3>
            <p className = 'project-modal-text project-modal-text3'>{ project.date }</p>
        </div>
        <p className = 'project-modal-text project-modal-text2'>{ project.sub }</p>
        <div className = 'project-modal-container'>
            <div className = 'project-modal-layout project-modal-layout1'>
                <img className = 'project-modal-picture' src = { project.subImage } alt = { project.title } />
            </div>
            <div className = 'project-modal-layout project-modal-layout2'>
                <p className = 'project-modal-text project-modal-text3'>{ project.description }</p>
            </div>
        </div>
    </Modal>
  )
}

export default ProjectsModal