// Ciphertext and possible keys range
const ciphertext = [20, 24, 12]; // Split ciphertext into individual numbers
const keyRange = Array.from({ length: 26 }, (_, i) => i + 1); // Keys from 1 to 26

// Function to decrypt a single value using a given key
function decryptValue(value, key) {
    let decryptedValue = (value - key) % 26;
    if (decryptedValue <= 0) decryptedValue += 26; // Handle wrap-around for 1–26 range
    return String.fromCharCode(decryptedValue + 64); // Convert to a letter (A = 1, ..., Z = 26)
}

// Function to decrypt the entire ciphertext with a given key
function decrypt(ciphertext, key) {
    return ciphertext.map(value => decryptValue(value, key)).join("");
}

// Perform brute force decryption
function bruteForceDecrypt(ciphertext) {
    const results = [];
    for (let key of keyRange) {
        const decryptedMessage = decrypt(ciphertext, key);
        results.push({ key, decryptedMessage });
    }
    return results;
}

// Run the brute force decryption
const results = bruteForceDecrypt(ciphertext);

// Output results
console.log("Brute Force Decryption Results:");
results.forEach(({ key, decryptedMessage }) => {
    console.log(`Key: ${key}, Decrypted Message: ${decryptedMessage}`);
});