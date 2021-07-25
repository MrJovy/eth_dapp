const assert = require('assert');
// const ganache = require('ganache-cli');
const Web3 = require('web3');
// ? Using ganache-cli
// const web3 = new Web3(ganache.provider());

// ? Using ganache GUI
const web3 = new Web3('http://127.0.0.1:7545');

beforeEach(() => {
    // get a list of all accounts
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts);
        });

    // use one of those accounts to deploy the contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {});
})

// ? Example tests using MOCHA
// ? Don't forget to add the "test": "mocha" under package.json scripts
// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;
// beforeEach(() => {
//     car = new Car();
// })

// describe('Car', () => {
//     it('can park', () => {
//         // const car = new Car();
//         assert.strictEqual(car.park(), 'stopped');
//     });

//     it('can drive', () => {
//         // const car = new Car();
//         assert.strictEqual(car.drive(), 'vroom');
//     })
// })