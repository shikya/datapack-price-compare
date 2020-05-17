function generate(price, validity, maxUsagePerDay) {
    return {price, validity, maxUsagePerDay};
}

const data = [];

// 2 GB
data.push(generate(2399,365,2));
data.push(generate(599,84,2));
data.push(generate(444,56,2));
data.push(generate(249,28,2));

// 1.5 GB
data.push(generate(2121,336,1.5));
data.push(generate(555,84,1.5));
data.push(generate(399,56,1.5));
data.push(generate(199,28,1.5));

// 1 GB
data.push(generate(149,24,1));

// 3 GB
data.push(generate(999,84,3));
data.push(generate(349,28,3));

// Long term
// data.push(generate(4999,360,0));

console.log(JSON.stringify(data));