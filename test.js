const VideoTranslationClient = require('./VideoTranslationClient');
const app = require('./server');

(async function runTest() {
    const server = app.listen(3000, () => console.log('Test server running on port 3000'));

    const client = new VideoTranslationClient('http://localhost:3000');
    try {
        const result = await client.waitForCompletion();
        console.log(`Final result: ${result}`);
    } catch (error) {
        console.error('Error during test:', error.message);
    } finally {
        server.close();
    }
})();
