const Footer = () => {
  return (
    <div className="mt-12">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside className=" md:my-auto">
          <p className="font-extrabold font-popi text-3xl">
          Adnan Land Agency
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">agricultural</a>
          <a className="link link-hover">ranches</a>
          <a className="link link-hover">farms</a>
          <a className="link link-hover">vineyards</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
