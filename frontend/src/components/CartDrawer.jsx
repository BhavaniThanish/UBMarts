import React from "react";
import { useCart } from "../context/CartContext";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQty, removeItem, total, clear } = useCart();
  return (
    <>
      <div onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-black/50 z-[60] transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
      <aside className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#faf7f2] z-[70] shadow-2xl transition-transform duration-500 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-5 border-b border-[#e8e2d4]">
          <h3 className="font-serif text-2xl text-[#1f2a1a] flex items-center gap-2"><ShoppingBag size={20} /> Your Basket</h3>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-[#e8e2d4] rounded-full" aria-label="close cart"><X size={18} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#e8e2d4] flex items-center justify-center"><ShoppingBag size={30} className="text-[#4a7c2a]" /></div>
              <div>
                <p className="font-serif text-xl text-[#1f2a1a]">Your basket is empty</p>
                <p className="text-sm text-[#6b7360] mt-1">Browse our organic collection</p>
              </div>
              <Link to="/products" onClick={() => setIsOpen(false)} className="btn-primary">Shop Now</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(it => (
                <div key={it.id} className="flex gap-3 bg-white p-3 rounded-xl border border-[#e8e2d4]">
                  <img src={it.image} alt={it.name} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-sm text-[#1f2a1a]">{it.name}</p>
                      <button onClick={() => removeItem(it.id)} className="text-[#6b7360] hover:text-red-600"><Trash2 size={14} /></button>
                    </div>
                    <p className="text-xs text-[#6b7360] mt-1">&#8377;{it.price} each</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-[#e8e2d4] rounded-full">
                        <button onClick={() => updateQty(it.id, it.qty - 1)} className="px-2 py-1 hover:bg-[#f5f0e6]"><Minus size={12} /></button>
                        <span className="px-3 text-sm font-medium">{it.qty}</span>
                        <button onClick={() => updateQty(it.id, it.qty + 1)} className="px-2 py-1 hover:bg-[#f5f0e6]"><Plus size={12} /></button>
                      </div>
                      <span className="font-semibold text-[#2e7d32]">&#8377;{it.price * it.qty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t border-[#e8e2d4] p-5 bg-white">
            <div className="flex justify-between mb-4">
              <span className="text-sm text-[#6b7360]">Subtotal</span>
              <span className="font-serif text-2xl text-[#1f2a1a]">&#8377;{total}</span>
            </div>
            <button className="w-full btn-primary justify-center">Proceed to Checkout</button>
            <button onClick={clear} className="w-full mt-2 text-xs text-[#6b7360] hover:text-red-600 py-2">Clear basket</button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
