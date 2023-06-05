import { useLoaderData, useParams } from "react-router-dom";

export default function NoviceDetail() {
    // const { stevilkanovice } = useParams();
    const novicaData = useLoaderData();

    // Opomba. Vedno je potrebno uporabljati MAP funkcijo, pa četudi je le en element.
    return (
        <div className="novice-detail">
            {novicaData.map((n, index) => {
                return (
                    <div>
                        <div className="grid-novice-container"> 
                            <p className="grid-novice-stevilka">{n.stevilkanovice}</p>
                            <p className="grid-novice-kategorija">{n.oznakakategorije}</p>
                        </div>
                        <p className="novice-naziv">{n.nazivnovice}</p>
                        <p>{n.opisnovice}</p>
                    </div>
                );
            })}
        </div>
    )
};

// Loader funkcija.
export const noviceDetailLoader = async ({ params }) => {
    const { stevilkanovice } = params;
    const res = await fetch(`http://localhost:3001/api/novice/${stevilkanovice}`);
    const noviceData = await res.json();
  
    if (!res.ok) {
      throw Error('Novic ni možno pridobiti in prikazati! Preveri naslov in vrata.');
    };
  
    return noviceData;
};