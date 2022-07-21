import Decimal from 'decimal.js'
import Link from 'next/link'
import React from 'react'
import { useStateContext } from '../context'

const Transactions = () => {
  const { txnData }: any = useStateContext()
  console.log(txnData)
  const Num: any = new Decimal(10).pow(18)
  return (
    <div className="mt-36 flex flex-row content-center justify-center">
      <div className="max-w-2xl rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {`Showing ${txnData.length} Results`}
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {txnData.map((tx: any, index: number) => (
              <li className="py-3 sm:py-4" key={index}>
                <div className="flex items-center space-x-4">
                  <div className="w-96 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      from
                    </p>
                    <Link href={`/${tx.hash}`}>
                      <p className="w-40 truncate text-sm text-gray-500 dark:text-gray-400 cursor-pointer">
                        {tx.from}
                      </p>
                    </Link>
                  </div>
                  <div className="w-96 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      to
                    </p>
                    <Link href={`/${tx.hash}`}>
                      <p className="w-40 truncate text-sm text-gray-500 dark:text-gray-400 cursor-pointer">
                        {tx.to}
                      </p>
                    </Link>
                  </div>
                  <div className="flex-1 items-center text-gray-900 dark:text-white">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                      Amount
                    </p>
                    <p>{`${`${(tx.value/Num).toFixed(7)} ether  ($${(tx.value/Num * 1958.82).toFixed(2)}`})`}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Transactions
