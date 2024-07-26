const form = document.querySelector('form');
const serverSeedInput = document.querySelector('#serverSeed');
const clientSeedInput = document.querySelector('#clientSeed');
const outputDiv = document.querySelector('#output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const serverSeed = serverSeedInput.value;
    const clientSeed = clientSeedInput.value;
    const output = calculateOutput(serverSeed, clientSeed);
    outputDiv.innerText = `Output: ${output}`;
});

function calculateOutput(serverSeed, clientSeed) {
    const crypto = require('crypto');

    // Combine server seed and client seed
    const combinedSeed = serverSeed + clientSeed;

    // Calculate the hash
    const hash = crypto.createHash('sha256');
    hash.update(combinedSeed);
    const hashHex = hash.digest('hex');

    // Take a subset of the hash (e.g., first 4 characters)
    const output = parseInt(hashHex.substring(0, 4), 16) % 100;

    return output;
}
