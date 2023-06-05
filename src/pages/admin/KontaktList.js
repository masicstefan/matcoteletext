import { useState, useEffect } from "react";
import Axios from 'axios';

export default function KontaktList() {

    // Inicializacija.
    const sporocilaArray = []
    const [sporocilaList, setSporocilaList] = useState(sporocilaArray);

    // Vrne  vse kontakte.
    useEffect(() => {
        Axios.get('http://localhost:3001/api/kontakti').then((response) => {
            setSporocilaList(response.data); 
        }).catch(err => console.log(err))
    }, []);

    // Brisanje kontakta. Glej Backend.
    const deleteKontakt = (kontakt) => {
        Axios.delete(`http://localhost:3001/api/kontakt/${kontakt}`);
    };
 
    return(
        <div className="faq">
            <h3>Seznam prispelih kontaktov s strani uporabnikov</h3>

            {sporocilaList.map((kontakt, index) => {
                return (
                    <div key={kontakt.elektronskaposta} className="novice-detail">
                        <p>{kontakt.elektronskaposta}</p>
                        <p>{kontakt.sporocilo}</p>
                        <button onClick={() => {deleteKontakt(kontakt.elektronskaposta)}}>Delete</button>
                    </div>
                );
            })};
        </div>
    );
};