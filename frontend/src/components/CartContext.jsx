import React from "react";
const CartContext = React.createContext();

export function CartProvider({children}){
  const [cart, setCart] = React.useState([]);
  function add(item){
    setCart(prev=>{
      const found = prev.find(p=>p.id===item.id);
      if(found) return prev.map(p=>p.id===item.id?{...p,qty:p.qty+1}:p);
      return [...prev,{...item,qty:1}];
    });
  }
  function remove(id){
    setCart(prev=>prev.filter(p=>p.id!==id));
  }
  function clear(){ setCart([]); }
  return <CartContext.Provider value={{cart,add,remove,clear}}>{children}</CartContext.Provider>
}

export default CartContext;
