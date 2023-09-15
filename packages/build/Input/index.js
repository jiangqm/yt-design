import { j as u } from "../jsx-runtime-2962e83b.js";
import { useState as c, useEffect as l } from "react";
const x = (t) => {
  const [s, e] = c(""), { type: o = "text", value: n } = t, i = (a) => {
    e(a.target.value), t.onChange && t.onChange(a);
  };
  return l(() => {
    e(n || "");
  }, [n]), /* @__PURE__ */ u.jsx("div", { children: /* @__PURE__ */ u.jsx("input", { className: "input", type: o, value: s, onChange: i }) });
};
export {
  x as default
};
