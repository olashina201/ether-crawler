import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useStateContext } from '../context'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const [startBlock, setStartBlock] = useState('')
  const [endBlock, setEndBlock] = useState('')
  const { transactions } = useStateContext();

  const handleSearch = (e: any) => {
    e.preventDefault()
    if (searchValue === '' || startBlock === '' || endBlock === '') {
      toast('All fields are required!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      transactions(searchValue, startBlock, endBlock)
    }
  }
  return (
    <form
      className="flex flex-col content-center items-center justify-center"
      onSubmit={handleSearch}
    >
      <ToastContainer />
      <div className="my-20 mb-0 flex w-3/5 content-center justify-center">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-400 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          type="button"
        >
          Filter by
          <svg
            className="ml-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {/* <div
          id="dropdown"
          className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
          data-popper-reference-hidden=""
          data-popper-escaped=""
          data-popper-placement="top"
          style={{
            position: 'absolute',
            inset: 'auto auto 0px 0px',
            margin: '0px',
            transform: 'translate(338px, 663px);',
          }}
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Txn Hash
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Blocks
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Address
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Token
              </button>
            </li>
          </ul>
        </div> */}
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
            placeholder="Enter Address"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="my-5 mb-4 flex content-center justify-center">
        <div className="m-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Start Block
          </label>
          <input
            type="date"
            className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="123-45-678"
            value={startBlock}
            onChange={(e) => setStartBlock(e.target.value)}
          />
        </div>
        <div className="m-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            End Block
          </label>
          <input
            type="date"
            className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="123-45-678"
            value={endBlock}
            onChange={(e) => setEndBlock(e.target.value)}
          />
        </div>
      </div>
      <button
        type="button"
        className="mb-20 mr-2 w-40 rounded-lg border-blue-700 bg-blue-700 bg-gradient-to-br px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        onClick={handleSearch}
      >
        Search
      </button>
    </form>
  )
}

export default Search
