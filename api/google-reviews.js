export default async function handler(req, res) {
    try {
        const apiKey = process.env.GOOGLE_PLACES_API_KEY;
        const placeId = process.env.GOOGLE_PLACE_ID;

        if (!apiKey || !placeId) {
            return res.status(500).json({
                error: 'Variáveis do Google Places não configuradas.'
            });
        }

        const url = `https://places.googleapis.com/v1/places/${placeId}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Goog-Api-Key': apiKey,
                'X-Goog-FieldMask':
                    'rating,userRatingCount,reviews'
            }
        });

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: 'Erro retornado pelo Google Places',
                details: data
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            error: 'Erro de execução no servidor',
            message: error.message
        });
    }
}