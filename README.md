<!-- # 4-oy-6dars

# Mantiqiy Funksiyalar

Bu repositoriyada JavaScript mantiqiy funksiyalari mavjud. Har bir funksiya alohida va ishonchli amallarni bajaradi.

## Funksiyalar

### 1. `isSquare(A)`

```javascript
function isSquare(K) {
    if (K <= 0) {
        return false;
    }

    // Sonni ildizini hisoblash
    let sqrtK = Math.sqrt(K);

    // Agar ildiz butun son bo'lsa, true qaytariladi
    return Number.isInteger(sqrtK);
}
console.log(isSquare(10)); // false
console.log(isSquare(25)); // true

function numberOfRoots(A, B, C) {
    // Diskriminantni hisoblash
    let D = B * B - 4 * A * C;

    if (D > 0) {
        return 2;
    } else if (D === 0) {
        return 1;
    } else {
        return 0;
    }
}

console.log(numberOfRoots(1, -6, 9)); // 1


function sumRange(A, B) {
    if (A > B) {
        return 0;
    }

    let sum = 0;
    for (let i = A; i <= B; i++) {
        sum += i;
    }

    return sum;
}


incTime(H, M, S)

function incTime(H, M, S) {
    // Vaqtga 1 sekund qo'shamiz
    S++;

    // Agar sekundlar 60 ga teng bo'lsa, minutlarni o'zgartiramiz
    if (S === 60) {
        S = 0;
        M++;
    }

    // Agar minutlar 60 ga teng bo'lsa, soatlarni o'zgartiramiz
    if (M === 60) {
        M = 0;
        H++;
    }

    // Soatlarni 24 ga tortib, o'tqazib yuboramiz
    H = H % 24;

    // Natijani string ko'rinishga o'tkazamiz
    const formattedTime = `${String(H).padStart(2, '0')}:${String(M).padStart(2, '0')}:${String(S).padStart(2, '0')}`;
    
    return formattedTime;
} -->
# uy-sihi4oy-6dars
# uy-sihi4oy-6dars
