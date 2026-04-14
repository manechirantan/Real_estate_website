import { useState } from "react";
import logo from "../assets/casa_1_11zon.webp";
const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#overview", label: "Overview" },
  { href: "#amenities", label: "Amenities" },
  { href: "#floorplans", label: "Floor Plans" },
  { href: "#connectivity", label: "Connectivity" },
  { href: "#developer", label: "Developer" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar({ brandName = "LIME", logoSrc: logoSrcProp }) {
  const [open, setOpen] = useState(false);
  const logoSrc = logoSrcProp || logo;

  const navTo = (href) => (e) => {
    if (typeof window === "undefined") return;

    const id = (href || "").replace(/^#/, "");
    const el = id ? document.getElementById(id) : null;

    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash !== href) window.location.hash = href;
    }

    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white border-b border-gray-100">
      <div className="px-6 py-3 flex items-center justify-between">
        <a href="#home" onClick={navTo("#home")} className="flex items-center gap-2">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover border border-gray-100"
            />
          ) : (
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-700">
              LR
            </div>
          )}
          <span className="text-xs text-gray-500 font-medium hidden sm:block">
            {brandName}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={navTo(l.href)}
                className="text-sm text-gray-600 hover:text-green-600 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#home"
            onClick={navTo("#home")}
            className="hidden md:inline-flex bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded transition-colors"
          >
            Enquiry Now
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 bg-white">
          <ul className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={navTo(l.href)}
                  className="block text-sm text-gray-700 hover:text-green-600 transition-colors py-1"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#home"
            onClick={navTo("#home")}
            className="mt-4 inline-flex w-full items-center justify-center bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded transition-colors"
          >
            Enquiry Now
          </a>
        </div>
      )}
    </nav>
  );
}
