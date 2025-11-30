import React from "react";
import { useContext } from "react";
import CartContext from "../components/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage(){
  const {cart,remove,clear} = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Keranjang</h2>
      <div className="card">
        {cart.length===0 && <div>Keranjang kosong</div>}
        {cart.map(c=>(
          <div key={c.id} className="flex justify-between items-center py-2">
            <div>{c.name} x{c.qty}</div>
            <div>Rp {c.price*c.qty}</div>
            <div><button className="btn" onClick={()=>remove(c.id)}>Hapus</button></div>
          </div>
        ))}
        <div className="flex justify-between items-center mt-4 font-bold">
          <div>Total</div>
          <div>Rp {total}</div>
        </div>
        <div className="flex gap-2 mt-3">
          <button className="btn" onClick={()=>navigate('/payment')}>Bayar</button>
          <button className="btn" onClick={()=>clear()}>Bersihkan</button>
          <Link to="/" className="btn">Kembali</Link>
        </div>
      </div>
    </div>
  );
}
