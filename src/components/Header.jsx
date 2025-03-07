import "./Header.css";
export default function Header() {
  return (
    <div className="App-Header-Row">
      <h1>My React Store</h1>
      <header>
        <nav >
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">Login</a></li>
          </ul>
        </nav>
      </header>
      
      
    </div>
  );
}