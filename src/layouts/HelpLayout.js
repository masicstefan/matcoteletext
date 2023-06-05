import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className='help-layout'>
        <h2>Pomoč uporabnikom</h2>
        <p>Na strani boste našli pogosto zastavljena vprašanja.
        V kolikor odgovora ne najdete, ne odlašajte in pošljite sporočilo.
        Na sporočilo vam bomo odgovorili v najkrajšem možnem.</p>

        <nav>
            <NavLink to="faq">Poglej FAQ</NavLink>
            <NavLink to="contact">Kontaktirajte nas</NavLink>
        </nav>
        <Outlet />
    </div>
  )
};