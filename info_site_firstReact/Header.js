function Header() {
  return (
    <header>
      <nav id="navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="react-logo"
          width="40px"
        />
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}