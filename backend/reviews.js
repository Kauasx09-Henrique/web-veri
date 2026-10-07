export default async function handler(req, res) {
    const apiKey = process.env.VITE_GOOGLE_PLACES_API_KEY;
    const placeId = process.env.VITE_GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        return res.status(500).json({ error: 'Chaves de API ausentes no servidor.' });
    }

    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&key=${apiKey}&languageCode=pt-BR`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {
            return res.status(response.status).json(data);
        }
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro de comunicação com o Google.' });
    }
}