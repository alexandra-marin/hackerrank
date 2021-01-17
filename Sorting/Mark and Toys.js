// # 1
function maximumToys(prices, k) {
    let amount = 0;
    let sortedPrices = prices.sort((a, b) => a - b);

    sortedPrices.reduce((acc, curr) => {
        if (acc + curr <= k) {
            acc += curr;
            amount++;
        }
        return acc;
    }, 0);
    return amount;
}



// # 2
function maximumToys(prices, k) {
    let amount = 0;
    let currSum = 0;
    // bubble sort but fix pos from the start of the array
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] > prices[j]) {
                let t = prices[j]
                prices[j] = prices[i]
                prices[i] = t
            }
        }
        if (prices[i] + currSum <= k) {
            currSum += prices[i];
            amount++
        } else {
            break;
        }
    }

    return amount;
}