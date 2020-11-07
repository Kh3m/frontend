import React, { useState, useEffect, useRef } from 'react'

export default function Overlay({ children, innerRef, modalOpen, setModalOpen }) {
    const [isOpen, setIsOpen] = useState(true)


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    })
    const handleClickOutside = e => {
        if (modalOpen) {
            if (!innerRef.current.contains(e.target)) {
                setModalOpen(!modalOpen)

            }
        }
    }
    return (
        <div className={modalOpen ? "overlay" : "hidden"}>
            {children}
        </div>
    )
}
