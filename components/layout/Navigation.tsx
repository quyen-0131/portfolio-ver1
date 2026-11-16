import Link from "next/link";

const navigationItems = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  return (
    <header className="site-header">
      <div className="page-container navigation">
        <Link className="wordmark" href="/" aria-label="Quyen Nguyen, home">
          Quyen Nguyen
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="navigation-list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a href="/Nguyen-Phuong-Thao-Quyen-Resume.pdf" target="_blank" rel="noreferrer">
                Resume<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
