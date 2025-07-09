export const askOpenAI = async (prompt: string): Promise<string> => {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
            });

        const data = await response.json();
        return data.message || 'The anfel is silent...';
        } catch (err) {
        console.error('Error communicating with OpenAI:', err);
        return 'The angel is silent...';
        }
};