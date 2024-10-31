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

## Seventh Lab Report

1. "smutny" -> HEX 73 6D 75 74 6E 79 -> sub 8f 3C 9D 92 9F B6

2. A) 01 -> 7C -> 124
   
      AC -> 4B -> 75
   
      03 -> 7B -> 123
   
      04 -> F2 -> 242
   
      64 -> 43 -> 67
   
      06 -> 6F -> 111
   
      0D -> D7 -> 215
   
      10 -> CA -> 202

   B) F1 -> 2B -> 43
   
      F3 -> 7E -> 126
   
      F4 -> BA -> 186
   
      F6 -> D6 -> 214
   
      F8 -> E1 -> 225
   
      FF -> 7D -> 125
   
      10 -> 7C -> 124

3. |      | Column 1 | Column 2 | Column 3 | Column 4 |
   |------|----------|----------|----------|----------|
   | Row 1 | 63       | 7c       | 77       | 7b       |
   | Row 2 | 82       | c9       | 7d       | ca       |
   | Row 3 | 93       | 26       | b7       | fd       |
   | Row 4 | c3       | 04       | c7       | 23       |

4.    |      | Column 1 | Column 2 | Column 3 | Column 4 |
      |------|----------|----------|----------|----------|
      | Row 1 | 63       | ca       | b7       | 04       |
      | Row 2 | 82       | fd       | c7       | 7c       |
      | Row 3 | 93       | 23       | 77       | c9       |
      | Row 4 | c3       | 7b       | 7d       | 26       |

5.
  | Column 1  | Column 2  | Column 3  | Column 4  |
  |-----------|-----------|-----------|-----------|
  | Byte 0    | Byte 1    | Byte 2    | Byte 3    |
  | Byte 4    | Byte 5    | Byte 6    | Byte 7    |
  | Byte 8    | Byte 9    | Byte 10   | Byte 11   |
  | Byte 12   | Byte 13   | Byte 14   | Byte 15   |
  | Byte 16   | Byte 17   | Byte 18   | Byte 19   |
  | Byte 20   | Byte 21   | Byte 22   | Byte 23   |
  | Byte 24   | Byte 25   | Byte 26   | Byte 27   |
  | Byte 28   | Byte 29   | Byte 30   | Byte 31   |
  | Byte 32   | Byte 33   | Byte 34   | Byte 35   |
  | Byte 36   | Byte 37   | Byte 38   | Byte 39   |
  | Byte 40   | Byte 41   | Byte 42   | Byte 43   |
  | Byte 44   | Byte 45   | Byte 46   | Byte 47   |
  | Byte 48   | Byte 49   | Byte 50   | Byte 51   |
  | Byte 52   | Byte 53   | Byte 54   | Byte 55   |
  | Byte 56   | Byte 57   | Byte 58   | Byte 59   |
  | Byte 60   | Byte 61   | Byte 62   | Byte 63   |
  | Byte 64   | Byte 65   | Byte 66   | Byte 67   |
  | Byte 68   | Byte 69   | Byte 70   | Byte 71   |
  | Byte 72   | Byte 73   | Byte 74   | Byte 75   |
  | Byte 76   | Byte 77   | Byte 78   | Byte 79   |
  | Byte 80   | Byte 81   | Byte 82   | Byte 83   |
  | Byte 84   | Byte 85   | Byte 86   | Byte 87   |
  | Byte 88   | Byte 89   | Byte 90   | Byte 91   |
  | Byte 92   | Byte 93   | Byte 94   | Byte 95   |
  | Byte 96   | Byte 97   | Byte 98   | Byte 99   |
  | Byte 100  | Byte 101  | Byte 102  | Byte 103  |
  | Byte 104  | Byte 105  | Byte 106  | Byte 107  |
  | Byte 108  | Byte 109  | Byte 110  | Byte 111  |
  | Byte 112  | Byte 113  | Byte 114  | Byte 115  |
  | Byte 116  | Byte 117  | Byte 118  | Byte 119  |
  | Byte 120  | Byte 121  | Byte 122  | Byte 123  |
  | Byte 124  | Byte 125  | Byte 126  | Byte 127  |
  | Byte 128  | Byte 129  | Byte 130  | Byte 131  |
  | Byte 132  | Byte 133  | Byte 134  | Byte 135  |
  | Byte 136  | Byte 137  | Byte 138  | Byte 139  |
  | Byte 140  | Byte 141  | Byte 142  | Byte 143  |
  | Byte 144  | Byte 145  | Byte 146  | Byte 147  |
  | Byte 148  | Byte 149  | Byte 150  | Byte 151  |
  | Byte 152  | Byte 153  | Byte 154  | Byte 155  |
  | Byte 156  | Byte 157  | Byte 158  | Byte 159  |
