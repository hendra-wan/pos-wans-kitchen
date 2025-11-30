import React from "react";
import { useContext } from "react";
import CartContext from "../components/CartContext";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

export default function PaymentPage(){
  const {cart,clear} = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);

  async function checkout(){
    try{
      const payload = { items: cart.map(c=>({ menu_id: c.id, qty: c.qty, price: c.price })), total, payment_method: 'Cash', source: 'Offline' };
      const res = await API.post('/transactions', payload);
      clear();
      alert('Transaksi berhasil: '+res.data.id);
      navigate('/');
    }catch(e){
      alert('Error: transaksi gagal');
    }
  }

  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Pembayaran</h2>
      <div className="card">
        <div>Total: Rp {total}</div>
        <button className="btn mt-4" onClick={checkout}>Konfirmasi & Bayar</button>
      </div>
    </div>
  );
}
