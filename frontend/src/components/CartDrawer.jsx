import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQty, removeItem, total, clear } = useCart();
  return (
    <>
      <div className={`cart-back ${isOpen ? "" : "closed"}`} onClick={() => setIsOpen(false)} />
      <aside className={`cart-drawer ${isOpen ? "" : "closed"}`}>
        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom" style={{ borderColor: "var(--ub-border)" }}>
          <div>
            <div className="eyebrow">Your Basket</div>
            <h3 className="section-title mb-0" style={{ fontSize: "1.6rem" }}>{items.length} item{items.length !== 1 ? "s" : ""}</h3>
          </div>
          <button className="icon-btn" onClick={() => setIsOpen(false)} aria-label="close cart"><i className="bi bi-x-lg"></i></button>
        </div>
        <div className="flex-fill overflow-auto px-4 py-3">
          {items.length === 0 ? (
            <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center gap-3">
              <div className="d-inline-flex align-items-center justify-content-center" style={{ width: 90, height: 90, background: "var(--ub-cream-2)", borderRadius: "50%" }}>
                <i className="bi bi-basket2" style={{ fontSize: 32, color: "var(--ub-terracotta)" }}></i>
              </div>
              <div>
                <p className="section-title mb-1" style={{ fontSize: "1.4rem" }}>Your basket is empty</p>
                <p className="small text-muted-2">Discover our organic collection</p>
              </div>
              <Link to="/products" onClick={() => setIsOpen(false)} className="btn btn-primary">Shop Now</Link>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {items.map(it => (
                <div key={it.id} className="d-flex gap-3 pb-3" style={{ borderBottom: "1px solid var(--ub-border)" }}>
                  <img src={it.image} alt={it.name} width={80} height={80} style={{ objectFit: "cover" }} />
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between align-items-start">
                      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1rem" }}>{it.name}</div>
                      <button className="btn btn-sm p-0" onClick={() => removeItem(it.id)} aria-label="remove"><i className="bi bi-x text-muted"></i></button>
                    </div>
                    <p className="text-muted mb-1" style={{ fontSize: 12 }}>&#8377;{it.price}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-inline-flex align-items-center" style={{ border: "1px solid var(--ub-border)" }}>
                        <button className="btn btn-sm py-1 px-2" onClick={() => updateQty(it.id, it.qty - 1)}><i className="bi bi-dash"></i></button>
                        <span className="px-2 small fw-medium">{it.qty}</span>
                        <button className="btn btn-sm py-1 px-2" onClick={() => updateQty(it.id, it.qty + 1)}><i className="bi bi-plus"></i></button>
                      </div>
                      <span className="fw-bold" style={{ color: "var(--ub-green)" }}>&#8377;{it.price * it.qty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {items.length > 0 && (
          <div className="border-top p-4" style={{ borderColor: "var(--ub-border)" }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted-2 small" style={{ letterSpacing: ".2em", textTransform: "uppercase" }}>Subtotal</span>
              <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.6rem", color: "var(--ub-green)" }}>&#8377;{total}</span>
            </div>
            <button className="btn btn-primary w-100">Checkout <i className="bi bi-arrow-right ms-1"></i></button>
            <button className="btn btn-link w-100 mt-2 small text-muted-2" onClick={clear} style={{ letterSpacing: ".1em", textTransform: "uppercase" }}>Clear basket</button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
