import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQty, removeItem, total, clear } = useCart();
  return (
    <>
      <div className={`cart-drawer-back ${isOpen ? "" : "closed"}`} onClick={() => setIsOpen(false)} />
      <aside className={`cart-drawer ${isOpen ? "open" : "closed"}`}>
        <div className="d-flex align-items-center justify-content-between px-4 py-3 border-bottom" style={{ borderColor: "var(--ub-border)" }}>
          <h3 className="font-serif mb-0 h4"><i className="bi bi-bag me-2"></i>Your Basket</h3>
          <button className="btn btn-sm" onClick={() => setIsOpen(false)} aria-label="close cart"><i className="bi bi-x-lg"></i></button>
        </div>
        <div className="flex-fill overflow-auto p-4">
          {items.length === 0 ? (
            <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center gap-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: 80, height: 80, background: "var(--ub-border)" }}>
                <i className="bi bi-bag" style={{ fontSize: 28, color: "var(--ub-green-mid)" }}></i>
              </div>
              <div>
                <p className="font-serif h5 mb-1">Your basket is empty</p>
                <p className="small text-muted-2 mb-0">Browse our organic collection</p>
              </div>
              <Link to="/products" onClick={() => setIsOpen(false)} className="btn btn-primary">Shop Now</Link>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {items.map(it => (
                <div key={it.id} className="d-flex gap-3 bg-white p-3 rounded-4" style={{ border: "1px solid var(--ub-border)" }}>
                  <img src={it.image} alt={it.name} width={80} height={80} style={{ objectFit: "cover", borderRadius: 12 }} />
                  <div className="flex-fill">
                    <div className="d-flex justify-content-between align-items-start">
                      <p className="fw-medium mb-0 small">{it.name}</p>
                      <button className="btn btn-sm p-0" onClick={() => removeItem(it.id)} aria-label="remove"><i className="bi bi-trash small text-muted"></i></button>
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: 12 }}>&#8377;{it.price} each</p>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="d-inline-flex align-items-center rounded-pill" style={{ border: "1px solid var(--ub-border)" }}>
                        <button className="btn btn-sm" onClick={() => updateQty(it.id, it.qty - 1)}><i className="bi bi-dash"></i></button>
                        <span className="px-2 small fw-medium">{it.qty}</span>
                        <button className="btn btn-sm" onClick={() => updateQty(it.id, it.qty + 1)}><i className="bi bi-plus"></i></button>
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
          <div className="border-top p-4 bg-white" style={{ borderColor: "var(--ub-border)" }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="small text-muted-2">Subtotal</span>
              <span className="font-serif h4 mb-0">&#8377;{total}</span>
            </div>
            <button className="btn btn-primary w-100">Proceed to Checkout <i className="bi bi-arrow-right ms-1"></i></button>
            <button className="btn btn-link w-100 mt-2 small text-muted-2" onClick={clear}>Clear basket</button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
