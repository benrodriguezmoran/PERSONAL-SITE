import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="nav-link fixed-bottom bg-secondary text-end ">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-2 fs-6">
                <Link key={1} className="text-light fs-6" to="/contact">Contact</Link>
            </ul>
        </footer>
    )
}