import galax from './galax.png';
import nacrt from './nacrt.png';

export default function Home() {
    return(
        <div className="home">
            <h2>Teletext</h2>
            <p>Spletna stran imenovana MATCO Teletekst (igrivo TELE text) predstavlja simulacijo znane rešitve avtorja John Adamsa (1970).
               Storitev je prisotna v vseh velikih agencijah in televizijskih hišah (prva je CEEFAX, 1974) in predstavlja pravzaprav prvi interaktivni televizijski servis.
            </p>

            <h3>Ideja </h3>
            <p>Rešitev je oblikovana na osnovi več vzorcev (ORF, Galax, RTVSLO), izbran je <a href="https://teletext.rtvslo.si/100/1">Teletext RTVSLO</a>.</p>
            <img className="server-erd" src={galax} alt='Galax'/>
            <p></p>

            <h3>Idejna arhitektura</h3>
            <p>Rešitev sloni na osnovih načelih:</p>
            <li>uporaba Teletext pisav,</li>
            <li>prostor novic je majhen in fiksen,</li>
            <li>premik je možen zgolj z vpisom številke novice.</li>
            <img className="server-erd" src={nacrt} alt='Načrt'/>

        </div>
    )
};