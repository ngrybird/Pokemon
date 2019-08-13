export default async (id) => {
    var data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        method : 'GET'
    }).then(response => response.json()).then((data) => data);
    return data;
}