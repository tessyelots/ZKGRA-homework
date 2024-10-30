# ZKGRA-homework Marek Smutný
Repo with homework files for ZKGRA subject.

## Second lab report
File krypto2.js

Input Information: My input is my surname "smutny".

Description of algorithm: Function move() adds K to the character (moves the character by K places in the alphabet. Function caesar() iterates over characters of the input and uses move() funtion to change the place of letters in the alphabet.

Ciphergram: For input "smutny" the output is "lfnmgr".
Execution time for this input was 4.26ms.

## Third Lab report
File krypto3.js

Input Information: 
  My inputs are ciphertexts from first two labs:
    ciphertext1A = "hnfgmb"
    ciphertext1B = "ubstzo"
    ciphertext2 = "lfnmgr"

Description of algorithms: First two decoding algorithms are actually the same as the encoding algorithms. Second decoding algorithm decodeCaesar() is also almost the same as encoding one, but now we are moving the characters by subtracting, not adding the K value. Also there is a function bruteforceCaesar, which can be used if we dont know the K value (shift) of our caesar ciphertext. It just tries all possible K values 0-25.

Output: 
Decoding ciphertext1A by first decoding alg.: smutny

Decoding ciphertext1A by second decoding alg.: gzihbm

Decoding ciphertext1A by caesar decoding, by moving 19 places: oumnti

Decoding ciphertext1B by first decoding alg.: fyhgal

Decoding ciphertext1B by second decoding alg.: smutny

Decoding ciphertext1B by caesar decoding, by moving 19 places: bizagv

Decoding ciphertext2 by first decoding alg.: oumnti

Decoding ciphertext2 by second decoding alg.: cizbhv

Decoding ciphertext2 by caesar decoding, by moving 19 places: smutny

Here in the output of the program we can see that, every decoding algorithm only works for decoding a ciphergram from the same assignment.

Execution time for this was 6.611ms.

## Fourth Lab Report
File krypto4.js

1. These messages are encoded using functions from file krypto4.js.

   Output of krypto4.js:

   ENCRYPT ME 2 DAY = 15321336513442 3115 55 141151

   smutny = 413143423251

3. first = 0100

   second = 1101

   third = 1010

4. Eight states: 𝑆 = log⁡2(8) = 3 bits

   128 states: 𝑆 = log2(128) = 7 bits

   256 states: 𝑆 = log2(256) = 8 bits

## Fifth Lab Report

1.
**For 2^x \mod 4:**
   - Transmitter key: 2^6 \mod 4 = 0
   - Receiver key: 2^3 \mod 4 = 0
   
   The common secret key for this function is **0**.

**For 78^x mod 33:**
   - Simplifying 78 = 12 mod 33, we get:
   - 12^6 mod 33 and 12^3 mod 33 = 12
   
   A common secret key **12** is possible.
1.2 No, it is not possible to use 2^{-1} mod 6 as a common function because 2 and 6 are not coprime. Thus, 2 does not have an inverse modulo 6.

2.
**For n = 8:** The primitive root modulo 8 is **3**.
**For n = 11:** The primitive root modulo 11 is **2**.

3.
| a | y | Calculation                | x |
|-------|-------|----------------------------|-------|
| 1     | 1     | 1 * x = 1 mod 7   | 1     |
| 3     | 1     | 3 * x = 1 mod 7   | 5     |
| 3     | 4     | 3 * x = 4 mod 7   | 6     |
| 4     | 2     | 4 * x = 2 mod 7   | 4     |
| 5     | 6     | 5 * x = 6 mod 7   | 5     |
| 6     | 6     | 6 * x = 6 mod 7   | 1     |

Values of a and x that lead to unique y values under modulo 7 are suitable for coding algorithms.

4.
First, reduce 34 modulo 27:
- 34 = 7 mod 27.

Now, we need to find a number x such that:

7 * x = 1 mod 27


Testing small values, we find that:
- When x = 4, 7 * 4 = 28.
- Since 28 = 1 mod 27, this satisfies the condition.

Therefore, the multiplicative inverse of 34 mod 27 is **4**.


## Sixth Lab Report

1. File krypto6.js

2.

| x86 | Initial | Final |
|-----|---------|-------|
| 6   | 58      | 40    |
| 14  | 50      | 32    |
| 23  | 42      | 24    |
| 61  | 34      | 16    |
| 6   | 26      | 8     |


3.

|  | S-Box |
|--|-------|
| A | 0    |
| B | 14   |
| C | 6    |
| D | 6    |

