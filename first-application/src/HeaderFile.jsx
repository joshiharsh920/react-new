import './MyPage.css';

function HeaderFile(){
 return (
     <nav className="navbar navbar-expand-lg bg-transparent px-4 py-4">
      <a className="fontClass" href="#">Demo Application</a>

      <div className="ms-auto">
        <ul className="navbar-nav fontClass d-flex flex-row gap-3">
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default HeaderFile;