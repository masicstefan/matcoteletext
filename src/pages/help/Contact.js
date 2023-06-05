import { useState, useEffect } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import Axios from 'axios';

export default function Contact() {

    // Inicializacija.
    const sporocilaArray = []

    const data = useActionData();
    const [elektronskaposta, setElektronskaPosta] = useState('');
    const [sporocilo, setSporocilo] = useState('');
    const [sporocilaList, setSporocilaList] = useState(sporocilaArray);
    const [newSporocilo, setNewSporocilo] = useState('');

    // Vrne  vse kontakte.
    useEffect(() => {
        Axios.get('http://localhost:3001/api/kontakti').then((response) => {
            setSporocilaList(response.data); 
        }).catch(err => console.log(err))
    }, []);

    // Shranjevanje kontakta. Glej Backend.
    const submitKontakt = () => {
        Axios.post('http://localhost:3001/api/kontakt', {elektronskaposta: elektronskaposta, sporocilo: sporocilo});
        
        setSporocilaList([...sporocilaList, {elektronskaposta: elektronskaposta, sporocilo: sporocilo}]);
    };

    // Brisanje kontakta. Glej Backend.
    const updateKontakt = (kontakt) => {
        Axios.put('http://localhost:3001/api/kontakt', {elektronskaposta: kontakt, sporocilo: newSporocilo});
        // Brisemo polje za vnos spremembe vsebine sporocila.
        setNewSporocilo("");
    };
    
    // Brisanje kontakta. Glej Backend.
    const deleteKontakt = (kontakt) => {
        Axios.delete(`http://localhost:3001/api/kontakt/${kontakt}`);
    };

    return(
        <div className="faq">
            <div className="contact">
                <h3>Sporočite nam</h3>

                <Form method="post" action="/help/contact">
                     <label>
                        <span>Vaš elektronski naslov</span>
                        <input type="email" name="elektronskaposta" required onChange={(e) => {
                            setElektronskaPosta(e.target.value)
                        }} />
                    </label>
                    <label>
                        <span>Vaše sporočilo</span>
                        <textarea name="sporocilo" required onChange={(e) => {
                            setSporocilo(e.target.value)
                        }} />
                    </label>
                    <button onClick={submitKontakt}>Submit</button>

                    {data && data.error && <p>{data.error}</p>}
               </Form>
            </div>
        </div>
    )
};

// Funkcija je povezana z formo in polji: elektronskaposta, sporocilo.
// V primeru spremembe v formi, spremeni tudi tu.
export const contactAction = async ({ request }) => {
    const data = await request.formData()
    const minDolzinaSporocila = 10;

    const submission = {
        elektronskaposta: data.get('elektronskaposta'),
        sporocilo: data.get('sporocilo')
    };

    // Send POST requrest.
    if (submission.sporocilo.length < minDolzinaSporocila) {
        return {error: `Sporočilo mora vsebovati vsaj ${minDolzinaSporocila} znakov!`}
    }
    
    // Vrnitev na glavno stran.
    return redirect('/');
};