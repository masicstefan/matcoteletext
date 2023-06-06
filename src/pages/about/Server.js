import arhitektura from './arhitektura.png';
import erd from './TeletextERD_SM.svg';

export default function Server() {
  
    return(
        <div className="server">
            <h3>Arhitektura, funkcionalnosti, tehnologija, ERD</h3>
            <hr></hr>
            <li>Izbrana arhitektura</li>
            <img className="server-arhitektura" src={arhitektura} alt='Arhitektura'/>
            <p></p>

            <h4>Funkcionalnosti strežnika</h4>
            <li>Vrni vse novice (/api/novice)</li>
            <li>Vrni posamezno novico (/api/novice/:id)</li>
            <li>Vnos novega kontakta (/api/kontakti)</li>
            <li>Administracija: vnos in brisanje novice, pregled in brisanje kontaktov</li>
            <p></p>
            
            <h4>Uporabljena tehnologija</h4>
            <li>Express</li>
            <li>MySQL Server</li>
            <p></p>

            <h4>Podatkovni model</h4>
            <li>ER diagram</li>
            <img className="server-erd" src={erd} alt='ERD'/>

        </div>
    )
};