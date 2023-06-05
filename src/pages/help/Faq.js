export default function Faq() {
    return(
        <div className="faq">
            <h3>Pogosta vprašanja</h3>

            <div className="question">
                <p><strong>Kaj je CEEFAX?</strong></p>
                <p>Ceefax (sifaks) je bila prva informacijska storitev teleteksta na svetu in predhodnica trenutne storitve BBC Red Button.  (Vir, Wikipedia)</p>
            </div>
            <div className="question">
                <p><strong>Kaj je Teletext?</strong></p>
                <p>Teletekst ali <strong>oddajni teletekst</strong> je standard za prikaz besedila in osnovne grafike na ustrezno opremljenih televizijskih sprejemnikih.  (Vir, Wikipedia)</p>
            </div>
            <div className="question">
                <p><strong>Kdaj je nastal Teletext?</strong></p>
                <p>Teletekst je v zgodnjih sedemdesetih letih prejšnjega stoletja v Združenem kraljestvu ustvaril <strong>John Adams</strong>, Philipsov glavni oblikovalec za video prikazovalnike. Javne informacijske storitve teleteksta so uvedle glavne televizijske postaje v Združenem kraljestvu, začenši z BBC-jevo storitvijo Ceefax leta 1974.  (Vir, Wikipedia)</p>
            </div>
            <div className="question">
                <p><strong>Kaj pomeni VBI?</strong></p>
                <p>Na zaslonu rastrskega skeniranja je interval navpičnega praznjenja (Vertical Blanking Interval, VBI), znan tudi kot navpični interval ali VBLANK, čas med koncem zadnje vidne vrstice okvira ali polja in začetkom prve vidne vrstice naslednjega okvirja. Prisoten je v analogni televiziji, VGA, DVI in drugih signalih. (Vir, Wikipedia)</p>
            </div>
        </div>
    )
};