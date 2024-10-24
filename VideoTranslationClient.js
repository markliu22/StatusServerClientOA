const axios = require('axios');

class VideoTranslationClient {
    constructor() {
        this.url = 'http://localhost:3000';
        this.maxRetries = 10;
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async getStatus() {
        try {
            const response = await axios.get(`${this.url}/status`);
            return response.data.result;
        } catch (error) {
            console.error('Failed to get status:', error.message);
            throw new Error('Failed to get status');
        }
    }

    async waitForCompletion() {
        let retries = 0;
        let delay = 1000;

        while (retries < this.maxRetries) {
            const status = await this.getStatus();

            console.log(`Status: ${status}`);

            if (status === 'completed' || status === 'error') {
                return status;
            }

            await this.sleep(delay);
            retries++;
            // EXPONENTIAL BACKOFF
            delay *= 2;
        }

        throw new Error('Reached max retries !');
    }
}

module.exports = VideoTranslationClient;
