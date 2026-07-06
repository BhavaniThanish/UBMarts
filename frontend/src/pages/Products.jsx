import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { LayoutGrid, List as ListIcon, ChevronDown, SlidersHorizontal } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../mock";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { slug } = useParams();
  const [sort, setSort] = useState("default");
  const [view, setView] = useState("grid");
  const cat = CATEGORIES.find(c => c.slug === slug);

  const products = useMemo(() => {
    let list = slug ? PRODUCTS.filter(p => p.category === slug) : PRODUCTS;
    if (sort === "low") list = [...list].sort((a,b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a,b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a,b) => b.rating - a.rating);
    return list;
  }, [slug, sort]);

  return (
    <main>
      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#f5f0e6] via-[#faf7f2] to-[#e8f0d8] overflow-hidden">
        <div className="absolute -top-20 -left-10 w-96 h-96 rounded-full bg-[#a3c86d]/20 blur-3xl" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 md:py-24">
          <div className="text-xs uppercase tracking-[0.3em] text-[#4a7c2a] mb-3">
            <Link to="/" className="hover:text-[#2e7d32]">Home</Link> / <Link to="/products" className="hover:text-[#2e7d32]">Shop</Link>{cat && <> / <span className="text-[#1f2a1a]">{cat.name}</span></>}
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1f2a1a]">{cat ? cat.name : "All Products"}</h1>
          {cat && <p className="mt-4 text-[#3a4530] max-w-2xl">{cat.description}</p>}
        </div>
      </section>

      {/* Toolbar */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#eae5d8]">
          <div className="flex items-center gap-2 text-sm text-[#6b7360]">
            <SlidersHorizontal size={16} /> Showing <b className="text-[#1f2a1a]">{products.length}</b> products
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select value={sort} onChange={e => setSort(e.target.value)} className="appearance-none bg-white border border-[#eae5d8] rounded-full pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#2e7d32]">
                <option value="default">Default sorting</option>
                <option value="rating">Sort by rating</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7360] pointer-events-none" />
            </div>
            <div className="flex items-center gap-1 bg-white border border-[#eae5d8] rounded-full p-1">
              <button onClick={() => setView("grid")} className={`p-2 rounded-full ${view === "grid" ? "bg-[#2e7d32] text-white" : "text-[#6b7360]"}`} aria-label="grid"><LayoutGrid size={14} /></button>
              <button onClick={() => setView("list")} className={`p-2 rounded-full ${view === "list" ? "bg-[#2e7d32] text-white" : "text-[#6b7360]"}`} aria-label="list"><ListIcon size={14} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-20">
        {/* categories chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link to="/products" className={`px-4 py-2 rounded-full text-xs font-medium transition ${!slug ? "bg-[#2e7d32] text-white" : "bg-white border border-[#eae5d8] text-[#3a4530] hover:border-[#2e7d32]"}`}>All</Link>
          {CATEGORIES.map(c => (
            <Link key={c.slug} to={`/products/${c.slug}`} className={`px-4 py-2 rounded-full text-xs font-medium transition ${slug === c.slug ? "bg-[#2e7d32] text-white" : "bg-white border border-[#eae5d8] text-[#3a4530] hover:border-[#2e7d32]"}`}>{c.name}</Link>
          ))}
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20 text-[#6b7360]">No products found.</div>
        ) : view === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        ) : (
          <div className="space-y-4">
            {products.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="flex gap-6 bg-white rounded-2xl border border-[#eae5d8] p-4 hover:shadow-xl hover:border-[#2e7d32] transition group">
                <img src={p.image} alt={p.name} className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover" />
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-[#1f2a1a] group-hover:text-[#2e7d32]">{p.name}</h3>
                  <p className="text-xs text-[#6b7360] mt-1">{p.weight} • Rating: {p.rating}/5</p>
                  <p className="mt-3 text-sm text-[#3a4530] line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="font-bold text-2xl text-[#2e7d32]">&#8377;{p.price}</span>
                    {p.oldPrice && <span className="text-sm text-[#a09a8a] line-through">&#8377;{p.oldPrice}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Products;
