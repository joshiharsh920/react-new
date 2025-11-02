import './MyPage.css';

function HeaderFile({ showPage }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-opacity-75 px-5 py-3 shadow-sm">
      <a className="fontClass text-white fw-bold text-decoration-none fs-4" href="#">
        Portfolio
      </a>

      <div className="ms-auto">
        <ul className="navbar-nav fontClass d-flex flex-row gap-4">
          <li className="nav-item">
            <a className="nav-link text-white fw-semibold px-2 py-1 rounded hover-effect" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white fw-semibold px-2 py-1 rounded hover-effect" href="#education">
              Education
            </a>
          </li>
          <li className="nav-item">
            {/* Contact Us visually looks like a link but triggers showPage */}
            <a
              className="nav-link text-white fw-semibold px-2 py-1 rounded hover-effect"
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                showPage();         // Trigger display of FirstPage
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderFile;
