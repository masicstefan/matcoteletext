import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className='help-layout'>
        <h2>Administracija</h2>

        <nav>
            <NavLink to="novica">Vnesi novo novico</NavLink>
            <NavLink to="kontaktlist">Pregled kontaktov</NavLink>
        </nav>
        <Outlet />
    </div>
  )
};