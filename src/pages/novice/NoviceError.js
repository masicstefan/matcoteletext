import { Link, useRouteError } from "react-router-dom"

export default function NoviceError() {
    const error = useRouteError();

      return (
        <div className="novice-error">
            <h3>Napaka</h3>
            <p>Opis napake: {error.message}</p>
            <p>Možne napake so naslednje:</p>
            <li>Strežnik za podatkovno bazo ni zagnan. Zaženi ga z ukazom <strong>npm run devstart</strong>.</li>
            <p></p>
            <hr></hr>
            <p></p>
            <Link to="/">Vrni se na prvo stran</Link>
        </div>
    )
};
