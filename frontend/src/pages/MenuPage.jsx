import React from "react";
import { API } from "../api";
import { useContext, useEffect, useState } from "react";
import CartContext from "../components/CartContext";

export default function MenuPage(){
  const [items,setItems] = useState([]);
  const { add } = useContext(CartContext);
  useEffect(()=> {
    API.get('/menu').then(r=>setItems(r.data)).catch(()=> {
      // fallback demo data
      setItems([{id:'m1',name:'Dimsum Ayam',price:8000},{id:'m2',name:'Cimol Crispy',price:12000},{id:'m3',name:'Kentang Goreng',price:15000}]);
    })
  },[]);
  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(it=>(
          <div key={it.id} className="card">
            <div className="font-bold">{it.name}</div>
            <div className="text-[#7B4F36] font-semibold">Rp {it.price?.toLocaleString()}</div>
            <button className="btn mt-2" onClick={()=>add({...it})}>Tambah</button>
          </div>
        ))}
      </div>
    </div>
  );
}
