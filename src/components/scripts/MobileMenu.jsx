import React, { useState } from 'react'
import { menu } from '../../consts'
import Icon from '../Icons'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Función recursiva para renderizar el menú y sus submenús
  const renderMenu = (items) => {
    return items.map((item) => (
      <li key={item.title}>
        <a
          href={item.link}
          target={item.target === "blank" ? "_blank" : "_self"}
          className="block hover:bg-gray-100 px-4 py-2 text-sm uppercase"
        >
          {item.title}
        </a>
        {item.submenu && (
          <ul className="border-gray-200 ml-6 border-l-2">
            {renderMenu(item.submenu)}
          </ul>
        )}
      </li>
    ))
  }

  return (
    <div>
      <button onClick={toggleMenu} className="mobile-menu-button">
        {isOpen ? (<Icon name='X' client:visible color='#777777' size={30} />) : (<Icon client:visible name='Menu' color='#777777' size={30} />)}
      </button>
      <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>{renderMenu(menu)}</ul>
      </nav>
    </div>
  )
}

export default MobileMenu