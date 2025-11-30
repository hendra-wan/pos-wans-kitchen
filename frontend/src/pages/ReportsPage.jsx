import React, { useEffect, useState } from "react";
import { API } from "../api";

export default function ReportsPage(){
  const [txs,setTxs] = useState([]);
  useEffect(()=> {
    API.get('/reports/recent-transactions').then(r=>setTxs(r.data)).catch(()=>setTxs([]));
  },[]);
  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Transaksi Terakhir</h2>
      <div className="card">
        {txs.length===0 && <div>Tidak ada transaksi</div>}
        {txs.map(t=>(
          <div key={t.id} className="flex justify-between py-2">
            <div>{new Date(t.created_at).toLocaleString()}</div>
            <div>Rp {t.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
