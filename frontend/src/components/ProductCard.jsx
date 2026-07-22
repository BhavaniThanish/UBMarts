import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { CATEGORIES } from "../mock";

const ProductCard = ({ p }) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const cat = CATEGORIES.find(c => c.slug === p.category);
  const handleAdd = (e) => { e.preventDefault(); addItem(p); toast({ title: "Added to basket", description: p.name }); };

  return (
    <Link to={`/product/${p.id}`} className="product-card-2">
      <div className="p-img">
        <img src={p.image} alt={p.name} />
        {p.badge && <span className="badge-tl">{p.badge}</span>}
        {p.oldPrice && <span className="badge-tr">-{Math.round((1 - p.price / p.oldPrice) * 100)}%</span>}
        <div className="actions">
          <button onClick={handleAdd} aria-label="add to basket"><i className="bi bi-basket2"></i></button>
          <button aria-label="wishlist" onClick={(e) => e.preventDefault()}><i className="bi bi-heart"></i></button>
        </div>
      </div>
      <div className="p-body">
        <div className="p-cat">{cat?.name}</div>
        <h3 className="p-name">{p.name}</h3>
        <div className="d-flex align-items-center justify-content-between gap-2">
          <span className="stars-2">
            {[...Array(5)].map((_, i) => <i key={i} className={i < Math.round(p.rating) ? "bi bi-star-fill" : "bi bi-star"}></i>)}
          </span>
          <div>
            <span className="price">&#8377;{p.price}</span>
            {p.oldPrice && <span className="old">&#8377;{p.oldPrice}</span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
