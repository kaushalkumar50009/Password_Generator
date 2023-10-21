import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // State variables to manage password generation and options
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copyButton, setCopyButton] = useState("Copy")

  // Ref to store a reference to the password input field
  const passRef = useRef(null)

  // Function to generate a random password based on user options
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]?<>_-~'+/"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length) // Fixed index out of range issue
      pass += str.charAt(char)
      setPassword(pass)
    }
  }, [length, numberAllowed, charAllowed, setPassword])

  // Function to copy the generated password to the clipboard
  const copyPassToClipBoard = useCallback(() => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 99) // Select the entire text
    window.navigator.clipboard.writeText(password)
    setCopyButton("Text Copied !")

    setTimeout(() => setCopyButton("Copy"), 2000)
  }, [password])

  // useEffect to trigger password generation when options change
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-8 py-4 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-center text-white text-5xl my-6'>
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className='outline-none w-full h-14 py-1 px-3'
            readOnly
            placeholder='password'
            ref={passRef}
          />

          <button
            className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink'
            onClick={copyPassToClipBoard}
          >
            {copyButton}
          </button>
        </div>

        <div className="flex text-sm gap-x-2 justify-around">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="length" className='text-white text-lg'>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              value={numberAllowed}
              id='numberInput'
              defaultChecked={numberAllowed}
              onChange={() => { setNumberAllowed(prev => !prev) }}
            />
            <label htmlFor="numberInput" className='text-white text-lg'>Number</label>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              value={charAllowed}
              id='charInput'
              defaultChecked={charAllowed}
              onChange={() => { setCharAllowed(prev => !prev) }}
            />
            <label htmlFor="charInput" className='text-white text-lg'>Special_Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
