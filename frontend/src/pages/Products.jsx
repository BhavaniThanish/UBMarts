import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../mock";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { slug } = useParams();
  const [sort, setSort] = useState("default");
  const [view, setView] = useState("grid");
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
      <section className="page-header" style={{ textAlign: "left" }}>
        <div className="container-xxl px-4 px-lg-5 mx-auto position-relative">
          <div className="crumb">
            <Link to="/" style={{ color: "var(--ub-green-mid)" }}>Home</Link> / <Link to="/products" style={{ color: "var(--ub-green-mid)" }}>Shop</Link>{cat && <> / <span style={{ color: "var(--ub-dark)" }}>{cat.name}</span></>}
          </div>
          <h1 style={{ textAlign: "left" }}>{cat ? cat.name : "All Products"}</h1>
          {cat && <p className="text-muted-2 mt-3" style={{ maxWidth: 640 }}>{cat.description}</p>}
        </div>
      </section>

      <section className="container-xxl px-4 px-lg-5 mx-auto py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 pb-3 border-bottom" style={{ borderColor: "var(--ub-border)" }}>
          <div className="text-muted-2 small d-flex align-items-center gap-2">
            <i className="bi bi-sliders"></i> Showing <b style={{ color: "var(--ub-dark)" }}>{products.length}</b> products
          </div>
          <div className="d-flex align-items-center gap-3">
            <select value={sort} onChange={e => setSort(e.target.value)} className="sort-select">
              <option value="default">Default sorting</option>
              <option value="rating">Sort by rating</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
            <div className="d-inline-flex align-items-center gap-1 p-1 bg-white rounded-pill" style={{ border: "1px solid var(--ub-border)" }}>
              <button onClick={() => setView("grid")} className={`btn btn-sm rounded-circle ${view === "grid" ? "btn-primary" : ""}`} aria-label="grid"><i className="bi bi-grid"></i></button>
              <button onClick={() => setView("list")} className={`btn btn-sm rounded-circle ${view === "list" ? "btn-primary" : ""}`} aria-label="list"><i className="bi bi-list-ul"></i></button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-xxl px-4 px-lg-5 pb-5 mx-auto">
        <div className="d-flex flex-wrap gap-2 mb-4">
          <Link to="/products" className={`chip ${!slug ? "active" : ""}`}>All</Link>
          {CATEGORIES.map(c => (
            <Link key={c.slug} to={`/products/${c.slug}`} className={`chip ${slug === c.slug ? "active" : ""}`}>{c.name}</Link>
          ))}
        </div>
        {products.length === 0 && <div className="text-center py-5 text-muted-2">No products found.</div>}
        {products.length > 0 && view === "grid" && (
          <div className="row g-4">
            {products.map(p => <div key={p.id} className="col-6 col-md-4 col-lg-3"><ProductCard p={p} /></div>)}
          </div>
        )}
        {products.length > 0 && view === "list" && (
          <div className="d-flex flex-column gap-3">
            {products.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="d-flex gap-4 bg-white p-3 rounded-4xl text-decoration-none text-reset" style={{ border: "1px solid var(--ub-border)" }}>
                <img src={p.image} alt={p.name} style={{ width: 180, height: 180, objectFit: "cover", borderRadius: 16 }} />
                <div className="flex-fill">
                  <h3 className="font-serif h4">{p.name}</h3>
                  <p className="small text-muted-2 mb-2">{p.weight} • Rating: {p.rating}/5</p>
                  <p className="small">{p.description}</p>
                  <div className="mt-2">
                    <span className="fw-bold h4" style={{ color: "var(--ub-green)" }}>&#8377;{p.price}</span>
                    {p.oldPrice && <span className="text-decoration-line-through text-muted-2 ms-2 small">&#8377;{p.oldPrice}</span>}
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
