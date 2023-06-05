import { Form, redirect, useActionData } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from 'axios';


export default function Novica() {
    const data = useActionData();

    // Inicializacija.
    const noviceArray = []

    const [stevilkaNovice, setStevilkaNovice] = useState('');
    const [nazivnovice, setNazivNovice] = useState('');
    const [opisnovice, setOpisNovice] = useState('');
    const [oznakakategorije, setOznakaKategorije] = useState('');
    const [noviceList, setNoviceList] = useState(noviceArray);

    const submitNovica = () => {
        Axios.post('http://localhost:3001/api/novica', {stevilkanovice: stevilkaNovice, nazivnovice: nazivnovice, opisnovice: opisnovice, oznakakategorije: oznakakategorije});
        
        // Ne vem točno ali to rabim ... (List).
        setNoviceList([...noviceList, {stevilkanovice: stevilkaNovice, nazivnovice: nazivnovice, opisNovice: opisnovice, oznakakategorije: oznakakategorije}]);
    };

    return(
        <div className="novica">
            <h3>Nova novica</h3>
            <Form method="post" action="/admin/novica">
                <label>
                    <span>Številka novice</span>
                    <input type="number" name="stevilkanovice" required onChange={(e) => {
                        setStevilkaNovice(e.target.value)
                    }} />
                </label>
                <label>
                    <span>Naziv novice (maks. 40 znakov)</span>
                    <input type="text" name="nazivnovice" required onChange={(e) => {
                        setNazivNovice(e.target.value)
                    }} />
                </label>
                <label>
                    <span>Novica (maks. 250 znakov)</span>
                    <textarea name="opisnovice" required onChange={(e) => {
                        setOpisNovice(e.target.value)
                    }} />
                </label>
                <label for="cat">
                    <span>Izberi kategorijo</span>
                    <select id="kategorija" name="kategorija" required onChange={(e) => {
                        setOznakaKategorije(e.target.value)
                    }}>
                        <option value="Novica" selected>Novica</option>
                        <option value="Kultura">Kultura</option>
                        <option value="Šport">Šport</option>
                        <option value="Vreme">Vreme</option>
                        <option value="Hobi">Hobi</option>
                    </select>
                </label>
                <button onClick={submitNovica}>Submit</button>

                {data && data.error && <p>{data.error}</p>}
            </Form>
        </div>
    )
};

export const novicaAction = async ({ request }) => {
    const data = await request.formData();

    const submission = {
        stevilkanovice: data.get('stevilkanovice'),
        nazivnovice: data.get('nazivnovice'),
        opisnovice: data.get('opisnovice'),
        oznakakategorije: data.get('oznakakategorije')
    };

    // Preveri vrednosti.
    if (submission.nazivnovice.length > 40) {
        return {error: 'Naziv ne sme biti daljši od 40 znakov.'}
    };
    if (submission.opisnovice.length > 250) {
        return {error: 'Novica ne sme biti daljša od 250 znakov.'}
    };
    
    return redirect('/admin');
};