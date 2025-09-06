
"use client";
import * as React from "react";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="header-row">
        <div className="logo-dot">Logo</div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="hamburger"
          onClick={() => setOpen(v => !v)}
        >
          {open ? <span className="hamburger-x" /> : (<><span /><span /><span /></>)}
        </button>
      </header>

      <aside className={`drawer ${open ? "drawer--open" : ""}`} aria-hidden={!open}>
        <div className="drawer__backdrop" onClick={() => setOpen(false)} />
        <div className="drawer__panel">
          <button className="drawer__close" aria-label="Close" onClick={() => setOpen(false)}>
            <span className="hamburger-x" />
          </button>
          <nav className="drawer__nav">
            <a href="#">Contact</a>
            <a href="#">Settings</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Condition</a>
          </nav>
        </div>
      </aside>
    </>
  );
}
