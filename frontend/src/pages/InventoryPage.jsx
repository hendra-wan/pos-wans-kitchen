import React, { useEffect, useState } from "react";
import { API } from "../api";

export default function InventoryPage(){
  const [ings,setIngs] = useState([]);
  useEffect(()=> {
    API.get('/ingredients').then(r=>setIngs(r.data)).catch(()=>setIngs([{id:'i1',name:'Ayam',unit:'kg',cost_per_unit:20000}]));
  },[]);
  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Stok Bahan</h2>
      <div className="card">
        <table className="w-full">
          <thead><tr><th>Nama</th><th>Sisa</th><th>Harga/unit</th></tr></thead>
          <tbody>
            {ings.map(i=>(
              <tr key={i.id}><td>{i.name}</td><td>{i.unit}</td><td>Rp {i.cost_per_unit}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
