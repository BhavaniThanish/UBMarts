import React from "react";
import { useToastList } from "../context/ToastContext";

const ToastHolder = () => {
  const { toasts } = useToastList();
  if (!toasts?.length) return null;
  return (
    <div className="ub-toast-holder">
      {toasts.map(t => (
        <div key={t.id} className="ub-toast">
          <div className="t-title">{t.title}</div>
          {t.description && <div className="t-desc">{t.description}</div>}
        </div>
      ))}
    </div>
  );
};

export default ToastHolder;
