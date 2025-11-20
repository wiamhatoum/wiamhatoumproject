import React from 'react'
import  '../App.css'
import '../styles/menu.css'
import { MenuList } from "../data/MenuList.js";
import MenuItem from "../components/MenuItem.js";

function Menu() {
  return (
    <div className="menu-page">
      <div className="menu-section-nav">
        {Object.keys(MenuList).map((category) => (
          <a key={category} href={`#${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </a>
        ))}
      </div>
      {Object.entries(MenuList).map(([category, items]) => (
      <div key={category} id={category} className="menu-category">
          <h2 className="menu-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="menu-container">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            image={item.image}
            name={item.name}
            ingredients={item.ingredients}
            price={item.price}
          />
        ))}

      </div>
    </div>
    ))}
     </div>
  );
}

export default Menu;