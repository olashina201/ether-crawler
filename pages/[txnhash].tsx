import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Decimal from 'decimal.js'

interface ITransaction {
  hash: string
  blockHash: string
  blockNumber: string
  chainId: string
  from: string
  gas: string
  gasPrice: string
  input: string
  nonce: string
  r: string
  s: string
  to: string
  transactionIndex: string
  v: string
  value: string
}
const transaction = () => {
  const [transaction, setTransaction] = useState({})

  const router = useRouter()
  const transactionByHash = (txnHash: string) => {
    axios
      .post(
        `https://eth-mainnet.alchemyapi.io/v2/PuDSDV7QX4e1LiNyrmIyq17ChWBb6KYC`,
        {
          jsonrpc: '2.0',
          method: 'eth_getTransactionByHash',
          params: [txnHash],
          id: 0,
        }
      )
      .then((res: any) => {
        setTransaction(res.data.result)
        router.push('/transaction')
      })
      .catch((error: any) => console.log({ error }))
  }

  const { txnhash }: any = router.query
  useEffect(() => {
    transactionByHash(txnhash)
  }, [])

  const {
    hash,
    blockHash,
    blockNumber,
    chainId,
    from,
    gas,
    gasPrice,
    input,
    nonce,
    r,
    s,
    to,
    transactionIndex,
    v,
    value,
  }: any = transaction

  const Num: any = new Decimal(10).pow(18)
  // {`${gas/Num} ether ($${(gas/Num * 1958.82).toFixed(2)})`}
  console.log("GAS", parseInt(gas, 16));
  console.log("DIVIDE GAS", (parseFloat(gas)/Num).toFixed(20))
  return (
    <>
      <NavBar />
      <div className="relative flex justify-center overflow-x-auto shadow-md sm:rounded-lg m-10">
        <table className="w-3/4 text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Key
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Transaction Hash
              </th>
              <td className="px-6 py-4">{hash}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Block Hash
              </th>
              <td className="px-6 py-4">{blockHash}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Block Number
              </th>
              <td className="px-6 py-4">{parseInt(blockNumber, 16)}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                ChainId
              </th>
              <td className="px-6 py-4">{chainId}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                From
              </th>
              <td className="px-6 py-4">{from}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Gas
              </th>
              <td className="px-6 py-4">{`${(gas/Num).toFixed(15)} ether ($${(gas/Num * 1958.82).toFixed(5)})`}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Gas Price
              </th>
              <td className="px-6 py-4">{`${(gasPrice/Num).toFixed(15)} ether ($${(gasPrice/Num * 1958.82).toFixed(5)})`}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Input
              </th>
              <td className="px-6 py-4">{input}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Nonce
              </th>
              <td className="px-6 py-4">{parseInt(nonce, 16)}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                R
              </th>
              <td className="px-6 py-4">{r}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                S
              </th>
              <td className="px-6 py-4">{s}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                to
              </th>
              <td className="px-6 py-4">{to}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Transaction Index
              </th>
              <td className="px-6 py-4">{parseInt(transactionIndex, 16)}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                V
              </th>
              <td className="px-6 py-4">{parseInt(v, 16)}</td>
            </tr>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Value
              </th>
              <td className="px-6 py-4">{`${parseInt(value, 16)/Num} ether ($${(parseInt(value, 16)/Num * 1958.82).toFixed(2)})`}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default transaction
