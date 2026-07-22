import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../mock";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { slug } = useParams();
  const [sort, setSort] = useState("default");
  const cat = CATEGORIES.find(c => c.slug === slug);

  const products = useMemo(() => {
    let list = slug ? PRODUCTS.filter(p => p.category === slug) : PRODUCTS;
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [slug, sort]);

  return (
    <main>
      <section className="page-header-2">
        <div className="bg-word">Shop</div>
        <div className="container container-editorial px-3 px-lg-4 position-relative">
          <div className="crumb">
            <Link to="/" style={{ color: "var(--ub-terracotta)" }}>Home</Link> / <Link to="/products" style={{ color: "var(--ub-terracotta)" }}>Shop</Link>{cat && <> / <span style={{ color: "var(--ub-dark)" }}>{cat.name}</span></>}
          </div>
          <h1>{cat ? cat.name : <>All <span className="em">Products</span></>}</h1>
          {cat && <p className="text-muted-2 mt-3" style={{ maxWidth: 640 }}>{cat.description}</p>}
        </div>
      </section>

      <section className="container container-editorial px-3 px-lg-4 mt-4">
        <div className="d-flex flex-wrap gap-2 pb-4 border-bottom" style={{ borderColor: "var(--ub-border)" }}>
          <Link to="/products" className={`chip ${!slug ? "active" : ""}`}>All</Link>
          {CATEGORIES.map(c => (
            <Link key={c.slug} to={`/products/${c.slug}`} className={`chip ${slug === c.slug ? "active" : ""}`}>{c.name}</Link>
          ))}
        </div>

        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 py-4">
          <div className="text-muted-2" style={{ fontSize: ".78rem", letterSpacing: ".2em", textTransform: "uppercase" }}>
            <b style={{ color: "var(--ub-dark)" }}>{products.length}</b> Products
          </div>
          <select value={sort} onChange={e => setSort(e.target.value)} className="sort-select">
            <option value="default">Sort: Default</option>
            <option value="rating">Sort: Rating</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </section>

      <section className="container container-editorial px-3 px-lg-4 pb-5">
        {products.length === 0 && <div className="text-center py-5 text-muted-2">No products found.</div>}
        <div className="row g-4">
          {products.map(p => <div key={p.id} className="col-6 col-md-4 col-lg-3"><ProductCard p={p} /></div>)}
        </div>
      </section>
    </main>
  );
};

export default Products;
