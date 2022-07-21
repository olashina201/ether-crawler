import axios from 'axios'
import moment from 'moment'
import { Router, useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'
import { fetchTransactions, getBlockForTime } from '../action'
// import run from '../action'
import { StateContext } from '../context'

type Props = {
  children: ReactNode
}

export function ContextProvider({ children }: Props) {
  const [txnData, setTxnData] = useState([])
  const [ethPrice, setEthPrice] = useState('')

  const router = useRouter()

  const transactions = async (
    address: string,
    startBlock: any,
    endBlock: any
  ) => {
    console.log('Starting')

    let start = Number(await getBlockForTime(moment(startBlock).unix()))
    let end = Number(await getBlockForTime(moment(endBlock).unix()))

    const txs = await fetchTransactions(address, start, end)
    // console.log(`Total: ${txs.length} transactions in period`)
    setTxnData(txs)
    console.log('TRANSACTIONS', txnData)
    router.push('/transactions')
  }

  const getEthPrice = async () => {
    const URL = "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=1GSYXTUR1NKU6PNPRUXEJUXPC98B4UCJB6";
    await axios.get(URL)
      .then((res) => {
        console.log(res.data.result.ethusd);
        setEthPrice(res.data.result.ethusd)
      }).catch(error => console.log({error}));
  }

  const value = {
    txnData,
    transactions,
    getEthPrice,
    ethPrice,
  }
  return (
    <>
      <StateContext.Provider value={value}>{children}</StateContext.Provider>
    </>
  )
}
