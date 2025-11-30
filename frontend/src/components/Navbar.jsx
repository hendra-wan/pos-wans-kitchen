import { Link } from "react-router-dom";
export default function Navbar(){
  return (
    <nav className="w-full bg-[#F7E8DA] text-[#2B2B2B] p-4 flex gap-4 font-bold sticky top-0 z-10">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div style={{width:44,height:44,borderRadius:10,background:'#7B4F36',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>WK</div>
          <div>Wan's Kitchen POS</div>
        </div>
        <div className="flex gap-4">
          <Link to="/">Menu</Link>
          <Link to="/cart">Keranjang</Link>
          <Link to="/payment">Bayar</Link>
          <Link to="/inventory">Stok</Link>
          <Link to="/reports">Laporan</Link>
        </div>
      </div>
    </nav>
  );
}
