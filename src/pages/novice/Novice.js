import { useLoaderData, Link, useNavigation } from "react-router-dom";

export default function Novice() {
  const novicePodatki = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (<h3>Loading data ...</h3>)
  }
  return (
    <div className="novice">
      {novicePodatki.map((n, index) => {
        return(
          <Link to={n.stevilkanovice.toString()} key={n.stevilkanovice}>
              <div className="grid-novice-container"> 
                <p className="grid-novice-stevilka">{n.stevilkanovice}</p>
                <p className="grid-novice-kategorija">{n.oznakakategorije}</p>
              </div>
              <p className="novice-naziv">{n.nazivnovice}</p>
              <p>{n.opisnovice}</p>
          </Link>
        )
      })}
    </div>
  )
};

// Loader funkcija
export const noviceLoader = async () => {
  const res = await fetch('http://localhost:3001/api/novice');
  const noviceData = await res.json();

  if (!res.ok) {
    throw Error('Novic ni možno pridobiti in prikazati! Preveri naslov in vrata.');
  };

  return noviceData;
};
