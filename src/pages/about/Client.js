import git from './git.png';

export default function Client() {
    return(
        <div className="client">
            <h3>Funkcionalnosti odjemalca</h3>
            <hr></hr>
            <li>Domov (home)</li>
            <li>Logo z Home funkcionalnostjo</li>
            <li>Breadcrumb navigacija</li>
            <li>MMC konzola</li>
            <ul>
                <li>Kazalo</li>
                <li>Iskanje po številki</li>
                <li>Iskanje po skupini (kazalo)</li>
            </ul>
            <li>Pregled pogostih vprašanj (FAQ)</li>
            <li>Vnos kontaktnih podatkov (Contacts)</li>
            <p></p>

            <h4>Oblikovne in tehnične značilnosti</h4>
            <li>Okno novice je fiksne širine</li>
            <li>Naslovi kategorij so različnih grafičnih oblik</li>
            <li>Več vrst navigacije</li>
            <li>Odpornost na robne pogoje (prvi, zadnji, neznan)</li>
            <p></p>

            <h4>Uporabljena tehnologija</h4>
            <li>HTML, CSS, JavaScript, React: Axios, NavLink, Outlet</li>
            <li>Git</li>
            <li>Adobe Illustrator</li>
            <p></p>

            <h4>Tehnični dolg</h4>
            <li>Kontrola vnosa edinstvenega kontakta</li>
            <li>png priloge iz srv v public</li>
            <li>Odpraviti vse "rdeče" v F12</li>
            <p></p>

            <h4>Ideje (ToDo)</h4>
            <li>Podstrani (stran/podstran)</li>
            <li>Časovno omejen prikaz podstrani (timer)</li>
            <li>Kroženje med podnovicami</li>
            <li>Obvestilo o zadnji posodobitvi na nivoju vsake novice</li>
            <li>F1 (pomoč)</li>
            <li>Sprememba obstoječe novice</li>
            <li>Arhiviranje novic</li>
            <p></p>

            <h4>Ocena izvedbe</h4>
            <li>Primerjava prve in trenutne verzije</li>
            <img className="server-erd" src={git} alt='ERD'/>
       </div>
    );
};