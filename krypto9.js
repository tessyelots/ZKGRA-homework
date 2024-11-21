// Schnorr's Digital Signature Algorithm in JavaScript
const crypto = require("crypto");

// Generate large prime numbers for p and q
function generatePrimes() {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let q = Math.floor(Math.random() * 900 + 100); // Generate a 3-digit prime for q
    while (!isPrime(q)) q++;

    let p = 2 * q + 1; // Ensure p = 2q + 1
    while (!isPrime(p)) {
        q++;
        while (!isPrime(q)) q++;
        p = 2 * q + 1;
    }

    return { p: BigInt(p), q: BigInt(q) };
}

// Generate Schnorr parameters
function schnorrParameters() {
    const { p, q } = generatePrimes();
    const g = BigInt(Math.floor(Math.random() * (Number(p) - 2)) + 2); // Random generator in Z_p
    const x = BigInt(Math.floor(Math.random() * (Number(q) - 1)) + 1); // Private key
    const y = modExp(g, x, p); // Public key y = g^x mod p
    return { p, q, g, x, y };
}

// Modular exponentiation
function modExp(base, exp, mod) {
    base = BigInt(base);
    exp = BigInt(exp);
    mod = BigInt(mod);

    let result = BigInt(1);
    base = base % mod;
    while (exp > 0) {
        if (exp % BigInt(2) === BigInt(1)) result = (result * base) % mod;
        exp = exp / BigInt(2);
        base = (base * base) % mod;
    }
    return result;
}

// Hash function using SHA-256
function hashFunction(data) {
    return BigInt("0x" + crypto.createHash("sha256").update(data).digest("hex"));
}

// Schnorr signature generation
function schnorrSign(p, q, g, x, message) {
    const k = BigInt(Math.floor(Math.random() * (Number(q) - 1)) + 1); // Random value
    const r = modExp(g, k, p); // r = g^k mod p
    const e = hashFunction(r.toString() + message) % q; // e = H(r, message)
    const s = (k + x * e) % q; // s = k + x * e mod q
    return { r, s, e };
}

// Schnorr signature verification
function schnorrVerify(p, q, g, y, message, signature) {
    const { r, s } = signature;
    const e = hashFunction(r.toString() + message) % q; // e = H(r, message)
    const rPrime = (modExp(g, s, p) * modExp(y, q - e, p)) % p; // r' = g^s * y^(-e) mod p
    const ePrime = hashFunction(rPrime.toString() + message) % q; // e' = H(r', message)
    return e === ePrime;
}

const { p, q, g, x, y } = schnorrParameters();
const message = "This is a test message.";

// Generate signature
const signature = schnorrSign(p, q, g, x, message);
console.log("Parameters:");
console.log(`p = ${p}`);
console.log(`q = ${q}`);
console.log(`g = ${g}`);
console.log(`Private Key (x) = ${x}`);
console.log(`Public Key (y) = ${y}`);
console.log(`Message = "${message}"`);
console.log("\nSignature:");
console.log(`r = ${signature.r}`);
console.log(`s = ${signature.s}`);
console.log(`Hash (e) = ${signature.e}`);

// Verify signature
const verificationResult = schnorrVerify(p, q, g, y, message, signature);
console.log("\nVerification Result:");
console.log(verificationResult ? "Passed" : "Failed")