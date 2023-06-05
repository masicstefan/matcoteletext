import { NavLink, Outlet } from "react-router-dom";

export default function AboutLayout() {
  return (
    <div className='help-layout'>
        <h2>O programu</h2>
        <p>Program je nastal kot projektna naloga pri predmetu Spletne tehnologije (2023).</p>
        <p>Program je simulacija znane platforme <b>TELETEXT</b>, nastale v času analognih televizorjev.</p>
        <p>Ideja programa je zgolj študijskega značaja, podrejeno pa se bo uporabila v okviru organizacije kot kanal sporočanja.</p>
        <p>Oblikovana je po vzorcu <a href="https://teletext.rtvslo.si/100/1">Teletext RTVSLO</a>.</p>
        <p>***</p>
        <pre><p>Avtor ~ Štefan Masič  |   Profesor ~ Boštjan Šumak   |   Asistent ~ Patrik Rek   |   Sponzor ~ MATCO   |   Leto rojstva ~ 2023</p></pre> 

        <nav>
            <NavLink to="client">Odjemalec</NavLink>
            <NavLink to="editor">Urednik</NavLink>
            <NavLink to="server">Strežnik</NavLink>
        </nav>
        <Outlet />
    </div>
  )
};