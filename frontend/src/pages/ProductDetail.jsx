import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Minus, Plus, ShoppingBag, Heart, Share2, Truck, ShieldCheck, Leaf, ArrowLeft } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "../mock";
import { useCart } from "../context/CartContext";
import { useToast } from "../hooks/use-toast";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const p = PRODUCTS.find(x => x.id === id);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("desc");
  const { addItem } = useCart();
  const { toast } = useToast();
  if (!p) return <div className="max-w-[1400px] mx-auto px-5 py-40 text-center">Product not found. <Link to="/products" className="underline text-[#2e7d32]">Go back</Link></div>;
  const cat = CATEGORIES.find(c => c.slug === p.category);
  const related = PRODUCTS.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);

  return (
    <main className="pb-16">
      {/* breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 pt-8 text-xs uppercase tracking-widest text-[#6b7360]">
        <Link to="/" className="hover:text-[#2e7d32]">Home</Link> / <Link to="/products" className="hover:text-[#2e7d32]">Shop</Link> / {cat && <><Link to={`/products/${cat.slug}`} className="hover:text-[#2e7d32]">{cat.name}</Link> / </>}<span className="text-[#1f2a1a]">{p.name}</span>
      </div>

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10 grid md:grid-cols-2 gap-12">
        <div className="bg-[#f5f0e6] rounded-[32px] overflow-hidden aspect-square relative img-reveal">
          <img src={p.image} alt={p.name} className="w-100 h-100 object-cover" />
          {p.badge && <span className="absolute top-6 left-6 bg-[#2e7d32] text-white text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded-circle">{p.badge}</span>}
        </div>
        <div>
          <Link to={`/products/${p.category}`} className="text-xs uppercase tracking-[0.3em] text-[#4a7c2a] hover:underline">{cat?.name}</Link>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1f2a1a] mt-2">{p.name}</h1>
          <div className="d-flex align-items-center gap-2 mt-3">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} className={i < Math.round(p.rating) ? "fill-[#e6a817] text-[#e6a817]" : "text-[#d5d0c1]"} />)}
            <span className="text-xs text-[#6b7360]">{p.rating}/5 • {p.weight}</span>
          </div>
          <div className="mt-5 d-flex items-baseline gap-3">
            <span className="font-serif text-4xl text-[#2e7d32]">&#8377;{p.price}</span>
            {p.oldPrice && <span className="text-lg text-[#a09a8a] line-through">&#8377;{p.oldPrice}</span>}
            {p.oldPrice && <span className="text-xs bg-[#e6a817]/20 text-[#8a6512] px-2 py-0.5 rounded-circle font-bold">Save {Math.round((1 - p.price/p.oldPrice)*100)}%</span>}
          </div>
          <p className="mt-6 text-[#3a4530] leading-relaxed">{p.description}</p>

          <div className="mt-8 d-flex align-items-center gap-4">
            <div className="d-flex align-items-center border border-[#eae5d8] rounded-circle">
              <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-3 hover:bg-[#f5f0e6]"><Minus size={14} /></button>
              <span className="px-5 font-medium">{qty}</span>
              <button onClick={() => setQty(q => q + 1)} className="px-4 py-3 hover:bg-[#f5f0e6]"><Plus size={14} /></button>
            </div>
            <button onClick={() => { addItem(p, qty); toast({ title: "Added to basket", description: `${qty} × ${p.name}` }); }} className="btn-primary flex-1 justify-content-center"><ShoppingBag size={16} /> Add to Basket</button>
          </div>
          <div className="mt-4 d-flex gap-2">
            <button className="flex-1 btn-outline justify-content-center"><Heart size={14} /> Wishlist</button>
            <button className="flex-1 btn-outline justify-content-center"><Share2 size={14} /> Share</button>
          </div>

          <div className="mt-8 pt-8 border-t border-[#eae5d8] grid grid-cols-3 gap-3 text-center">
            {[[Truck,"Free delivery"],[ShieldCheck,"Secure payment"],[Leaf,"100% organic"]].map(([Ic, l], i) => (
              <div key={i} className="p-3">
                <Ic size={20} className="mx-auto text-[#4a7c2a]" />
                <p className="text-xs text-[#3a4530] mt-2">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="d-flex gap-6 border-b border-[#eae5d8]">
          {[["desc","Description"],["info","Nutrition"],["reviews","Reviews"]].map(([k,l]) => (
            <button key={k} onClick={() => setTab(k)} className={`py-4 text-sm font-medium relative ${tab === k ? "text-[#2e7d32]" : "text-[#6b7360]"}`}>{l}{tab === k && <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[#2e7d32]" />}</button>
          ))}
        </div>
        <div className="py-8 max-w-3xl text-[#3a4530] leading-relaxed">
          {tab === "desc" && <p>{p.description} Made with 100% natural ingredients, no artificial preservatives, no chemicals. Our promise: farm-fresh quality delivered to your door.</p>}
          {tab === "info" && (
            <ul className="space-y-2 text-sm">
              <li>Weight: {p.weight}</li>
              <li>Storage: Store in a cool, dry place</li>
              <li>Shelf Life: 12 months</li>
              <li>Certification: India Organic • FSSAI</li>
            </ul>
          )}
          {tab === "reviews" && <p>{Math.round(p.rating * 20)}% of customers recommend this product. Verified reviews coming soon.</p>}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-5 lg:px-10 mt-16">
          <div className="d-flex align-items-end justify-content-between mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-[#1f2a1a]">You may also <span className="italic text-[#4a7c2a]">love</span></h2>
            <Link to={`/products/${p.category}`} className="text-sm text-[#2e7d32] font-semibold hover:underline d-flex align-items-center gap-1"><ArrowLeft size={14} className="rotate-180" /> View all</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map(rp => <ProductCard key={rp.id} p={rp} />)}
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
