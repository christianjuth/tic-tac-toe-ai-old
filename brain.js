const fs = require('fs');
const brain = require('brain.js');

const data = JSON.parse(fs.readFileSync("data-1637283188239.json"))

let trainingData = Object.entries(data).map(([game, val]) => ({
  input: game.split(',').map(c => +c), 
  output: [val]
}))
console.log(trainingData.length)
// const testData = trainingData.splice(Math.round(trainingData.length * 0.2))

// // provide optional config object (or undefined). Defaults shown.
const config = {
  // inputSize: 9,
  // inputRange: 1,
  // hiddenLayers: [20, 20],
  // outputSize: 1,
  // binaryThresh: 0.5,
  // hiddenLayers: [16,16], // array of ints for the sizes of the hidden layers in the network
  // activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  // debug
  binaryThresh: 0.5,
    hiddenLayers: [8],
    activation: 'sigmoid',
  log: true,
  logPeriod: 100,
  iterations: 100000
};

// // create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);

net.train(trainingData);

// const tests = []

// testData.forEach(({input,output}) => {
//   tests.push(Math.abs(output[0] - net.run(input))); 
// })

// const average = (array) => array.reduce((a, b) => a + b) / array.length;

// console.log('avg error', average(tests))

fs.writeFileSync('trained-net.js', `${ net.toFunction().toString() };`);