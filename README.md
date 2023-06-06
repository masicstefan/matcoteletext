## MATCO Teletext

Spletna stran imenovana **MATCO Teletekst** predstavlja simulacijo znane rešitve avtorja John Adamsa (1970). Storitev je prisotna v vseh velikih agencijah in televizijskih hišah (prva je CEEFAX, 1974) in predstavlja pravzaprav prvi interaktivni televizijski servis.

**Ideja** seminarske naloge je oblikovati kopijo funkcionalnosti *starejše sestre*, tako v obliki kot uporabi.

Iz uporabniške perspektive je ideja naloge oblikovati aplikacijo, ki uporabniku ne bo nudila ničesar več kakor jo v osnovi nudi Teletekst sistem na analognih televizijah (npr. RTV Slo Teletext). Pri tem se bo iskanje in prikaz informacij omejilo zgolj na iskanje s pomočjo številk strani in s pomočjo štirih barvnih gumbov.

Podrejeno se funkcionalnost razširi z dodajanjem možnosti nastavitve delovnega okolja: vklop iskalnika (Search), izbira različnih »retro« prikazov ter morebitna povezava z izbrano agencijsko hišo (npr. STA, ARSO) in vpeljavo sporočilnega sistema (npr. RabbitMQ).

**Razširitev** aplikacije se nakazuje v oblikovanju primernega algoritma zamenjav novic kot je to primer v realnih izvedbah teletekst strani. Koncept novice sledi principu menjavanja glavnih novic v izbranem časovnem okviru (npr. vsake pol ure). Nova novica prevzame številko predhodne, obstoječa novica se pomakne v seznamu, zadnja novica se označi kot nevidna.

**Oblikovni** princip sicer ni ključnega značaja za aplikacijo. Ne glede na to se bo aplikacija ukvarjala tudi z "retro" konceptom predstavitve (izbira primerne teletext pisave, uporaba zgolj majhne množice barv).

## Razvojno okolje
Uporabljene so naslednje tehnologije: node.js, express, react, mySQL, Adobe Illustrator

Aplikacijo zaženemo z ukazom `npm start`.

## Odvisnosti
Aplikacija je odvisna od podatkovne baze mySQL, ki teče (v razvojnem okolju) na naslovu: http://localhost:3001.

Podatkovno bazo zaženemo z ukazom `npm run devstart`.

## Podatkovna baza
Za potrebe podatkovne baze je uporabljen relacijski model, ki pa ne pokriva vseh potreb.
Vsled tega se predvideva v naslednji verziji uporaba GraphQL.

![ER diagram](https://user-images.githubusercontent.com/101993285/229517590-6c8db453-a990-45d7-bee3-abcb6e058eea.png)
<br>

>**MATCO logotip** predpona je dodano kot posvetilo priznanemu slovenskemu nožarju Mateju, umetniku med obrtniki njegovega stanu ter dolgoletnemu sponzorju avtorja.
