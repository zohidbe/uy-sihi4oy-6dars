//while 1 //////////

// let a = 17;
// let b = 5;
// let i = 0;
// while (a >= b ){
//     a-= b;
//     i++;
// }
// console.log(i);


//while 2 /////

// let n = 10;
// let i = 0;
// let s = 1;
// while (s < n) {
//     s = s * 3;
//     i++;
// }
// if (s === n ) {
//     console.log ("uchning darajasi ")
// }else {
//     console.log ("uchning darajasi emas")
// }

// while 3 ///////////

            

function inverseNumber(N) {
    if (N < 0) {
        return -1; // Manfiy sonlar uchun -1 qaytarib, hatolikni belgilash
    }

    const reversedDigits = parseInt(N.toString().split('').reverse().join(''));
    
    return reversedDigits;
}

// Misol
console.log(inverseNumber(12345)); // 54321
// hom workd /////

// function getDividersNumberAndSum(N) {
//     let dividersCount = 0;
//     let dividersSum = 0;

//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             dividersCount++;
//             dividersSum += i;
//         }
//     }
//     console.log(dividersCount, dividersSum);
// }
// getDividersNumberAndSum(12); // misol uchun

/// homworkd-2 ///////////

// function isSquare(K) {
//     if (K <= 0) {
//         return false;
//     }
//     let sqrtK = Math.sqrt(K);
//     return Number.isInteger(sqrtK);
// }
// console.log(isSquare(10)); 
// console.log(isSquare(25)); 


/// homwork ./// -3 

// function sumRange(A, B) {
//     if (A > B) {
//         return 0;
//     }

//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumRange(8, 10)); 



///// hom works ///////// 4-

// function inverseNumber(N) {
//     if (N < 0) {
//         return -1; // Manfiy sonlar uchun -1 qaytarib, hatolikni belgilash
//     }

//     const reversedDigits = parseInt(N.toString().split('').reverse().join(''));
    
//     return reversedDigits;
// }

// console.log(inverseNumber(12345)); // 54321



///////////// hom workd 5

// function incTime(H, M, S) {
//     S++;
//     if (S === 60) {
//         S = 0;
//         M++;
//     }
//     if (M === 60) {
//         M = 0;
//         H++;
//     }

//     H = H % 24;
//     const formattedTime = `${String(H).padStart(2, '0')}:${String(M).padStart(2, '0')}:${String(S).padStart(2, '0')}`;
    
//     return formattedTime;
// }
// console.log(incTime(0, 6, 40));
// console.log(incTime(0, 6, 59)); 
// console.log(incTime(1, 59, 59)); 

//////////// hom work 6//////

function sign(n) {
    if (n > 0) {
        return 1;
    } else if (n < 0) {
        return -1;
    } else {
        return 0;
    }
}
console.log(sign(10)); 
console.log(sign(-5)); 
console.log(sign(0)); 
