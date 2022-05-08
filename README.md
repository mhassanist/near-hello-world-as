# `near-hello-world-as`

Basic smart contract using [NEAR Protocol](https://near.org) and assembly script.

It works as a simple starting point for your assembly script smart contracts.

## How to use?

1. Clone the repository
2. Run `yarn` in the command line interface to install dependencies
3. To build , run `yarn build:release`
4. To deploy , run `near dev-deploy .\build\release\helloworld.wasm`
5. To call a method
   `near call dev-1643380555927-18139425398700 sayHello '{}' --accountId=EXAMPLE.testnet`
   `near view dev-1643380555927-18139425398700 sayHello`
