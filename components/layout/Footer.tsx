export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-content">
        <div className="footer-cta">
          <p className="footer-kicker">Research &amp; strategy → product</p>
          <p className="footer-title">Let&apos;s talk.</p>
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/qn131/" rel="noreferrer" target="_blank">
            LinkedIn <span aria-hidden="true">↗</span>
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <a href="mailto:ptq.nguyen.2026@mitb.smu.edu.sg">Email me</a>
          <a href="/Nguyen-Phuong-Thao-Quyen-Resume.pdf" target="_blank" rel="noreferrer">
            Resume (1 page)
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <a href="/Quyen-Nguyen-CV-2pages.pdf" target="_blank" rel="noreferrer">
            Detailed CV (2 pages)
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="footer-signoff">
          <span>Quyen Nguyen</span>
          <span>Human Insight × Strategy × Product</span>
        </p>
      </div>
    </footer>
  );
}
