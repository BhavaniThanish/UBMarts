import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

const Stars = ({ rating = 0 }) => (
  <span className="stars d-inline-flex gap-1 align-items-center">
    {[...Array(5)].map((_, i) => <i key={i} className={i < Math.round(rating) ? "bi bi-star-fill" : "bi bi-star"}></i>)}
    <small className="text-muted-2 ms-1" style={{ fontSize: 11 }}>({rating})</small>
  </span>
);

const ProductCard = ({ p }) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const handleAdd = (e) => { e.preventDefault(); addItem(p); toast({ title: "Added to basket", description: p.name }); };
  return (
    <Link to={`/product/${p.id}`} className="product-card">
      <div className="p-img">
        <img src={p.image} alt={p.name} />
        {p.badge && <span className="badge-tl">{p.badge}</span>}
        {p.oldPrice && <span className="badge-tr">-{Math.round((1 - p.price / p.oldPrice) * 100)}%</span>}
        <div className="qview">
          <button type="button" className="add-btn" onClick={handleAdd}><i className="bi bi-plus-lg"></i> Add</button>
          <span className="eye-btn"><i className="bi bi-eye"></i></span>
        </div>
      </div>
      <div className="p-body">
        <Stars rating={p.rating} />
        <h3 className="p-name">{p.name}</h3>
        {p.weight && <div className="text-muted-2 small">{p.weight}</div>}
        <div className="mt-2">
          <span className="price">&#8377;{p.price}</span>
          {p.oldPrice && <span className="old">&#8377;{p.oldPrice}</span>}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
