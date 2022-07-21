# ethereum transaction crawler


## Getting started
## Ethereum transactions crawler task
An application that allow a user to view transaction data from the Ethereum blockchain associated with a specific wallet address W that the user inputs, starting with block B. The application should get information on:

- wallets (addresses) and 

- amounts of ETH associated with transactions made to and from the given wallet W and

- show them in a simple human-readable way (ideally, through a web page). 

The application should collect and display ALL transaction data starting from the given block B. 

### Example: 

If a user requests to view transactions associated with the address 0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f from block 9000000 to the current block, your application should be able to crawl and visualize all transaction data (addresses that have sent and received tokens from the address 0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f, and how much ETH was used for a given transaction) in that period of time.

### For bonus points:

Given a date in YYYY-MM-DD format, the program should return the exact value of ETH that was available on the given address at YYYY-MM-DD 00:00 UTC time.

Do the same task above to include tokens amounts (other than ETH)



## Using the App
Create an account on [etherscan](https://etherscan.io/) and generate an api Key.

Create an environment variable and Add the API_KEY.

enter an address in the address field and select a the date range you want to crawl transaction from using the startBlock and endBlock date picker.
This will convert the date from the default format YYYY-MM-DD to the appropriate timestamp using moment and the unix function.
The timestamp is the use to get the block for both the start and end Block using the api: 
[](https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=7867436743)

The start Block, endBlock and the address is then used to crawl all transactions occured to and fro the address given using the etherscan api as follow:
[](https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=ApiKey)