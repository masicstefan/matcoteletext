import { NavLink, Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function RootLayout() {
  return (
    <div className='root-layout'>
        <header>
            <nav>
                <h1><a href="/">MATCO Teletext</a></h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="novice">Novice</NavLink>
                    <NavLink to="mmc">MMC</NavLink>
                    <NavLink to="admin">Admin</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Pomoč</NavLink>
                </nav>
                <Breadcrumbs />
        </header>

        <main>
            <Outlet />
        </main>
    </div>
  )
};