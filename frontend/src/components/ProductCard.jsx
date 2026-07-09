import React from "react";
import { Link } from "react-router-dom";
import { Star, Eye, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "../hooks/use-toast";

const ProductCard = ({ p }) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const handleAdd = (e) => { e.preventDefault(); addItem(p); toast({ title: "Added to basket", description: p.name }); };
  return (
    <Link to={`/product/${p.id}`} className="product-card group bg-white rounded-2xl border border-[#eae5d8] overflow-hidden block">
      <div className="relative aspect-square bg-[#f5f0e6] overflow-hidden">
        <img src={p.image} alt={p.name} className="w-100 h-100 object-cover group-hover:scale-110 transition-transform duration-700" />
        {p.badge && <span className="absolute top-3 left-3 bg-[#2e7d32] text-white text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-circle">{p.badge}</span>}
        {p.oldPrice && <span className="absolute top-3 right-3 bg-[#c73e1d] text-white text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-circle">-{Math.round((1 - p.price/p.oldPrice)*100)}%</span>}
        <div className="qview absolute bottom-3 left-3 right-3 d-flex gap-2">
          <button onClick={handleAdd} className="flex-1 bg-white text-[#1f2a1a] text-xs font-semibold py-2.5 rounded-circle d-flex align-items-center justify-content-center gap-1 hover:bg-[#2e7d32] hover:text-white transition"><Plus size={14} /> Add</button>
          <span className="w-10 h-10 bg-white rounded-circle d-flex align-items-center justify-content-center hover:bg-[#2e7d32] hover:text-white transition"><Eye size={14} /></span>
        </div>
      </div>
      <div className="p-4">
        <div className="d-flex align-items-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={11} className={i < Math.round(p.rating || 0) ? "fill-[#e6a817] text-[#e6a817]" : "text-[#d5d0c1]"} />)}
          <span className="text-[10px] text-[#6b7360] ml-1">({p.rating})</span>
        </div>
        <h3 className="font-serif text-base text-[#1f2a1a] group-hover:text-[#2e7d32] transition line-clamp-1">{p.name}</h3>
        {p.weight && <p className="text-xs text-[#6b7360] mt-0.5">{p.weight}</p>}
        <div className="mt-2 d-flex items-baseline gap-2">
          <span className="font-bold text-lg text-[#2e7d32]">&#8377;{p.price}</span>
          {p.oldPrice && <span className="text-xs text-[#a09a8a] line-through">&#8377;{p.oldPrice}</span>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
