export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary fixed-top">
      
      <div className="container-fluid">
          <a className="navbar-brand bg-primary fs-1 text-dark" href='/#'>
            BRODRIGUEZ<span className="fs-4 text-dark">.dev</span>
          </a>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0 me-2">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
    </nav>
  );
}
