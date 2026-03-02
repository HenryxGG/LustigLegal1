/**
 * API Service for Lustig & Asociados
 * Handles communication with the secure backend for consultations.
 */

const API_ENDPOINT = '/api/contact-handler'; // Relative path for serverless deployment

export const sendConsultation = async (data) => {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Error al enviar la consulta');
        }

        return result;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};
