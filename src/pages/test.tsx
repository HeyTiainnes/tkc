import React, { useState, useEffect } from 'react';

// On définit le type d'un élément de la liste
interface Item {
    id: number;
    name: string;
}

// On définit le composant MyComponent qui retourne un élément JSX
function MyComponent(): JSX.Element {
    // On utilise useState pour définir l'état "data" à un tableau vide d'éléments de type Item
    const [data, setData] = useState<Item[]>([]);

    // On utilise useEffect pour effectuer une requête API avec fetch lors du montage initial du composant
    useEffect(() => {
        // Effect de l'API
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    // On retourne le rendu du composant, avec une liste d'éléments générée à partir des éléments de "data"
    return (
        <div>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
