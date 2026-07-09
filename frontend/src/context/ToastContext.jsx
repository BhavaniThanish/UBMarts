import React, { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((title, description = "") => {
    const id = Date.now() + Math.random();
    setToasts(t => [...t, { id, title, description }]);
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3500);
  }, []);
  return <ToastContext.Provider value={{ toasts, push }}>{children}</ToastContext.Provider>;
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  return { toast: (o) => ctx.push(o.title, o.description) };
};

export const useToastList = () => useContext(ToastContext);
