import React, { createContext, useContext } from 'react'

type stateContextType = {
  txnData: any,
  transactions: (address: string, startBlock: string, endBlock: string) => void,
  getEthPrice: () => void,
  ethPrice: any
}

const ContextDefaultValues: stateContextType = {
  txnData: [],
  transactions: () => {},
  getEthPrice: () => {},
  ethPrice: null,
}

export const StateContext =
  createContext<stateContextType>(ContextDefaultValues)

export function useStateContext() {
  return useContext(StateContext)
}
