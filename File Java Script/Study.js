const container = document.querySelector('#container');

function chord(chord)
{
    const options = {
        method: 'GET',
        headers: 
        {
            'X-RapidAPI-Key': 'cde7706fb9msh7440d8fae09334fp1fcb12jsnb7a998dff7b2',
            'X-RapidAPI-Host': 'cde7706fb9msh7440d8fae09334fp1fcb12jsnb7a998dff7b2'
        }
    };

        const hasil = document.querySelector(".hasil");
    
        hasil.textContent = "Loading...";
        
        fetch("https://guitar-chords.p.rapidapi.com/select/all", options)
        .then(response => response.json())
        .then(json => 
        {
            hasil.innerHTML = "";

            console.log(json)
            const a = document.createElement('h1');

            a.textContent = `Kumpulan Chord ${chord} & Posisi Jarinya`;
            hasil.appendChild(a);

            const filteredChords = json.filter((c) => c.Chord_Name[0] === chord);

            for (let i = 0; i < 5; i++) {
                const tamp = document.createElement ('p');
                tamp.textContent = filteredChords[i].Chord_Name;
                hasil.appendChild(tamp);

                const gambar = document.createElement ('img');
                gambar.src = filteredChords[i].Position1;
                hasil.appendChild(gambar);
            }
        })
        .catch(err => console.error(err));
}