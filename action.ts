const axios = require('axios').default
import Decimal from 'decimal.js'

export const BONE = new Decimal(10).pow(18)

// Returns all transactions for block range
export async function fetchTransactions(
  address: string,
  startBlock: any,
  endBlock: any
) {
  console.log(
    `Fetching Txs For ${address} for blocks: ${startBlock}-${endBlock}`
  )

  // https://etherscan.io/apis#accounts
  const URL = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=${startBlock}&endblock=${endBlock}&sort=asc&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  const response = await axios.get(URL)
  const data = await response.data.result
  return data
}

// Uses API to retrieve block number for timestamp
export async function getBlockForTime(timestamp: any) {
  const URL = `https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  const response = await axios.get(URL)
  const data = await response.data.result
  return data
}

