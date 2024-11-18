import React, { useState } from 'react';

import './Menuitem.css';




const Menuitem = () => {
  const Menu = [
    {
      id: 1,
      image: "images/maggi.jpg",
      name: "maggi",
      category: "breakfast",
      price: "12₹",
      description:
        "I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    },
    {
      id: 2,
      image: "images/allupakoida.jpg",
      name: "allu pakoda",
      category: "evening",
      price: "20₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 3,
      image: "images/corn.jpg",
      name: "corn",
      category: "breakfast",
      price: "10₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 4,
      image: "images/chola.jpg",
      name: "chola",
      category: "lunch",
      price: "50₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 5,
      image: "images/pizza.jpg",
      name: "pizza",
      category: "evening",
      price: "80₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 6,
      image: "images/nonvegthali.jpg",
      name: "Non-Veg Thali",
      category: "dinner",
      price: "180₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 7,
      image: "images/sweet.jpg",
      name: "Sweets",
      category: "dinner",
      price: "60₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 8,
      image: "images/rajmarice.jpg",
      name: "Rajma Rice",
      category: "lunch",
      price: "60₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 9,
      image: "images/samosa.jpg",
      name: "samosa",
      category: "evening",
      price: "15₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 10,
      image: "images/momo.jpg",
      name: "momos",
      category: "evening",
      price: "60₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 11,
      image: "images/puri.jpg",
      name: "puri",
      category: "dinner",
      price: "30₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 12,
      image: "images/rotiwithmeat.jpg",
      name: "rotiwithmeat",
      category: "dinner",
      price: "160₹",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
  ];
  const [menuData, setMenuData] = useState(Menu);
  

  const filterItem = (category) => {

    const updateData = Menu.filter((item) => item.category === category);
    setMenuData(updateData);

    if (category === "All") {
      setMenuData(Menu)
    }
  }


  const [counts, setCounts] = useState(Menu.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}));

  const inc = (id) => {
    setCounts({ ...counts, [id]: counts[id] + 1 });
  };

  const dec = (id) => {
    if (counts[id] > 0) {
      setCounts({ ...counts, [id]: counts[id] - 1 });
    }
  };

  


  return (
    <div>
      <div className="categorybox">
        <button onClick={() => filterItem("breakfast")} className='buton'>Breakfast</button>
        <button onClick={() => filterItem("lunch")} className='buton'>Lunch</button>
        <button onClick={() => filterItem("evening")} className='buton'>Evening</button>
        <button onClick={() => filterItem("dinner")} className='buton'>Dinner</button>
        <button onClick={() => filterItem("All")} className='buton'>All</button>
      </div>

      <div className="container-fluid menubox">
        {menuData.map((item) => (
          <div className="card" key={item.id}>
            <div className="cardimg">
              
              <img src={item.image} alt={item.name} />
            </div>
            <h3 className='name'>{item.name}</h3>
            <span className='price'>{item.price}</span>
            <span className='category'>{item.category}</span>
            <div className="cartbox">
              <button onClick={() => inc(item.id)}>+</button>
              <h4 className='itemnumber'>{counts[item.id]}</h4>
              <button onClick={() => dec(item.id)}>-</button>
              
            </div>
            <button className='cartbtn'>Add to Cart</button>

            
          </div>
        ))}
      </div>
      

    </div>
  );
};

export default Menuitem;