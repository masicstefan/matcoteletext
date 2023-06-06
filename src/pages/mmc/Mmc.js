import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";


export default function Mmc() {
    const [stevilkanovice, setStevilkaNovice] = useState(100);
    const [novica, setNovica] = useState('');
    const [kategorija, setKategorija] = useState('Novica');
    const [logo, setLogo] = useState('100novice.png');

    const novicaData = useLoaderData();

    // Pridobimo prvo novico. Render naredimo samo enkrat, zato [].
    useEffect(() => {
      // Runs ONCE after initial rendering
      setNovica(novicaData[0]);
      }, []);
    
    // Domov.
    const getDomov = async () => {
      let res;
      try {
        res = await fetch(`http://localhost:3001/api/novice/100`);
        const novicaData = await res.json();

        // Definiramo prvo novico.
        setNovica(novicaData[0]);
        setKategorija(novicaData[0].oznakakategorije);
        setStevilkaNovice(novicaData[0].stevilkanovice);
      } catch {
          // Pac ne vrnemo nic.
          console.log("Ni podatkov, kaj češ!");
      }
    };

    const getKazalo = async () => {
      let res;
      try {
        res = await fetch(`http://localhost:3001/api/novice/106`);
        const novicaData = await res.json();

        // Definiramo prvo novico.
        setNovica(novicaData[0]);
        setKategorija(novicaData[0].oznakakategorije);
        setStevilkaNovice(novicaData[0].stevilkanovice);
      } catch {
          // Pac ne vrnemo nic.
          console.log("Ni podatkov, kaj češ!");
      }
    };

    // Vreme.
    const getNovicaVreme = async () => {
      let res;
      try {
        res = await fetch(`http://localhost:3001/api/novice/200`);
        const novicaData = await res.json();
    
        // Definiramo prvo novico.
        setNovica(novicaData[0]);
        setKategorija(novicaData[0].oznakakategorije);
        setStevilkaNovice(novicaData[0].stevilkanovice);
      } catch {
        // Pac ne vrnemo nic.
        console.log("Ni podatkov, kaj češ!");
      }
    };
    
    // Vrni izbrano novico, gumb Pojdi.
    const getNovica = async () => {
      const res = await fetch(`http://localhost:3001/api/novice/${stevilkanovice}`);
      const novicaData = await res.json();

      // Definiramo prvo novico.
      setNovica(novicaData[0]);
      setKategorija(novicaData[0].oznakakategorije);
    };

    // Vrni izbrano novico, gumb Pojdi.
    const getNovicaSport = async () => {
      const res = await fetch(`http://localhost:3001/api/novice/500`);
      const novicaData = await res.json();

      // Definiramo prvo novico.
      setNovica(novicaData[0]);
      setKategorija(novicaData[0].oznakakategorije);
      setStevilkaNovice(novicaData[0].stevilkanovice);
    };

    const getNovicaZadnja = async () => {
      const res = await fetch(`http://localhost:3001/api/novice/101`);
      const novicaData = await res.json();

      // Definiramo prvo novico.
      setNovica(novicaData[0]);
      setKategorija(novicaData[0].oznakakategorije);
      setStevilkaNovice(novicaData[0].stevilkanovice);
    };

    const getNovicaTv = async () => {
      const res = await fetch(`http://localhost:3001/api/novice/800`);
      const novicaData = await res.json();

      // Definiramo prvo novico.
      setNovica(novicaData[0]);
      setKategorija(novicaData[0].oznakakategorije);
      setStevilkaNovice(novicaData[0].stevilkanovice);
    };


    // Vrni naslednjo  novico, gumb Naslednja.
    const getNaslednjaNovica = async () => {
      let res;
      try {
        res = await fetch(`http://localhost:3001/api/naslednjanovica/${stevilkanovice}`);
        const novicaData = await res.json();
      
        // Vzamemo prvo novico, ki jo dobimo (in dobimo vedno samo eno).
        setNovica(novicaData[0]);
        // Nastavimo novo trenutno številko in kategorijo novice.
        setStevilkaNovice(novicaData[0].stevilkanovice);
        setKategorija(novicaData[0].oznakakategorije);
      } catch {
        // Pac ne vrnemo nic.
        console.log("Ni podatkov, kaj češ!");
      }
    };

    // Vrni predhodno  novico.
    const getPredhodnaNovica = async () => {
      const res = await fetch(`http://localhost:3001/api/predhodnanovica/${stevilkanovice}`);
      const novicaData = await res.json();
  
      // Vzamemo prvo novico, ki jo dobimo (in dobimo vedno samo eno).
      setNovica(novicaData[0]);
      // Nastavimo novo trenutno številko in kategorijo novice.
      setStevilkaNovice(novicaData[0].stevilkanovice);
      setKategorija(novicaData[0].oznakakategorije);
    };

    // Priprava loga (levo od novic).
    function Logo( ) {
      let strLogo = '100novice.png';

      switch (kategorija) {
        case 'Novica': {
          strLogo = '100novice.png';
          setLogo(strLogo);
          return <img src={logo} alt="Logo"/>;
        }
        case 'Kultura': 
          strLogo = '400kultura.png';
          setLogo(strLogo);
          return <img src={logo} alt="Logo"/>;
        case 'Šport': 
          strLogo = '500sport.png';
          setLogo(strLogo);
          return <img src={logo} alt="Logo"/>;
        case 'Vreme': 
          strLogo = '600vremeNaslov.png';
          setLogo(strLogo);
          return <img src={logo} alt="Logo"/>;
        case 'TV spored': 
          strLogo = '700tv.png';
          setLogo(strLogo);
          return <img src={logo} alt="Logo"/>;
        default:
          strLogo = '100novice.png';
          setLogo(strLogo);
          return <img src={logo} alt="Logo"/>;
      };
    };

    // Celotna novica (levo logotip, desno novica).
    function Novica() {
      return(
        <div className="mmc-novica">
          <p></p>
          <div className="mmc-novica-logo">
            <Logo />
          </div>
          <div className="mmc-novica-text">
            <p className="novice-naziv">{novica.nazivnovice}</p>
            {novica.opisnovice}
          </div>
        </div>
      );
    };

    function Kazalo() {
      return(
        <div className="mmc-novicavreme">
          <div className="mmc-novica-logo">
            <Logo />
          </div>
          <div className="mmc-novica-text">
            <p className="novice-naziv">Šport -------- 500</p>
            <p className="novice-naziv">Šport -------- 500</p>
            <p className="novice-naziv">Šport -------- 500</p>
          </div>
        </div>
      );
    };

    function NovicaKazalo() {
      return(
        <div className="mmc-novicavreme">
          <div className="mmc-novica-logo">
            <Logo />
          </div>
          <div className="mmc-novica-text">
            <p className="novice-naziv">{novica.nazivnovice}</p>
            {novica.opisnovice}
          </div>
        </div>
      );
    };

    // Celotna novica vremena (levo logotip, desno novica).
    function NovicaVreme() {
      return(
        <div className="mmc-novicavreme">
          <div className="mmc-novica-logo">
            <Logo />
          </div>
          <div className="mmc-novica-text">
            <p className="novice-naziv">{novica.nazivnovice}</p>
            {novica.opisnovice}
          </div>
        </div>
      );
    };

    function NovicaTv() {
      return(
        <div className="mmc-novicavreme">
          <div className="mmc-novica-logo">
            <Logo />
          </div>
          <div className="mmc-novica-text">
            <p className="novice-naziv">{novica.nazivnovice}</p>
            {novica.opisnovice}
          </div>
        </div>
      );
    };

    function Menu() {
      return(
        <div className="mmc-menu">
          <button className="mmc-menu-kazalo" onClick={getKazalo}>KAZALO</button>
          <button className="mmc-menu-novice" onClick={getDomov}>NOVICE</button>
          <button className="mmc-menu-vreme" onClick={getNovicaVreme}>VREME</button>
          <button className="mmc-menu-tv" onClick={getNovicaTv}>TV-PROGRAMI</button>
        </div>
      );
    };

    // Celotna navigacija.
    function Navigacija() {
      return(
        <div className="mmc-navigacija">
            <button onClick={getDomov}>Domov</button>
            <button onClick={getPredhodnaNovica}>Prejšnja stran</button>
            <button onClick={getNaslednjaNovica}>Naslednja stran</button>
            <label>Stran</label>
            <input type="number" name="stevilkanovice" value={stevilkanovice} onChange={(e) => {
              setStevilkaNovice(e.target.value)
            }} />
            <button className="mmc-button" onClick={getNovica}>Pojdi</button>
        </div>
      );
    };

    // Noga.
    function Noga() {
      return(
        <div className="mmc-noga">
            <button onClick={getNovicaZadnja}>Zadnja novica</button>
            <span></span>
            <button onClick={getNovicaVreme}>Vreme (Na kratko, SLO, Svet, Zrak, Vode)</button>
            <span></span>
            <button onClick={getNovicaSport}>Šport (Nogomet, Košarka, Rokomet, Tenis)</button>
            <span></span>
            <button onClick={getNovicaTv}>TV (TVSLO1, TVSLO2, TVSLO3)</button>
        </div>
      );
    };

    function PrikazNovice() {

      
      let intKategorija = stevilkanovice;

      if (intKategorija >= 200 && intKategorija < 300) {
        return(<NovicaVreme />)
      } else {
        if (intKategorija >=700 && intKategorija < 800) {
          return(<NovicaVreme />)
        } else {
          if (intKategorija >=800 && intKategorija < 900) {
            return(<NovicaTv />)
          } else {
            return(<Novica />)
          }
        }
      }
    };

    // GLAVNI RENDER.
    return (
        <div className="mmc">
          <PrikazNovice />
          <Menu />
          <Navigacija />
          <Noga />
        </div>
      );
};

// Loader funkcija
export const mmcLoader = async () => {
    const res = await fetch('http://localhost:3001/api/novice/100');
    // const res = await fetch(`http://localhost:3001/api/novice/${stevilkanovice}`);
    const noviceData = await res.json();
  
    if (!res.ok) {
      throw Error('Novic ni možno pridobiti in prikazati! Preveri naslov in vrata.');
    };
  
    return noviceData;
  };
