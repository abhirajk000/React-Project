// Import required hooks from React
import React, { useState, useCallback, useEffect, useRef } from 'react'
// useState → Store & Update Values  "const [value, method] = useState(initialValue)"

// useEffect → Run Side Effects -> runs extra code after rendering. 
// useEffect(() => { side effect code}, [dependencies])

// useCallback → Function Memory Optimization (remembers a function)
// const myFunction = useCallback(() => { logic }, [dependencies])

function App() {

  const [length, setLength] = useState(6)
  const [number, setAllowedNo] = useState(false)
  const [character, setAllowedChar] = useState(false)

  // Stores the generated password
  const [password, setPassword] = useState("")

  // Reference to input field (used for copy)
  const PasswordRef = useRef(null)

  // Refresh button handler → generates new password
  const refresh = () => {
    passwordGenerator()
  }

  // Password generation logic
  const passwordGenerator = useCallback(() => {

    let pas = "" 
    let str =
      "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyioplkjhgfdsazxcvbnm" 

    // If numbers checkbox is checked
    if (number) str += "1234567890"
    // If characters checkbox is checked
    if (character) str += "~!@#$%^&*()_+`-=[]\\;':{}|"

    // Loop based on password length
    for (let i = 0; i < length; i++) {
      // Generate random index
      let rand = Math.floor(Math.random() * str.length)
      // Pick random character and add to password
      pas += str.charAt(rand)
    }
    // Update password state
    setPassword(pas)

  }, [length, number, character]) // Re-run when these values change

  const copypswrd = useCallback(() => {
    // Select input text
    PasswordRef.current?.select()
    // Copy text to clipboard
    window.navigator.clipboard.writeText(password)
  }, [password])

  // Generate password on first load and when dependencies change
  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (

    // Main card container
    <div className="w-full max-w-2xl rounded-3xl p-10
      bg-gradient-to-br from-slate-800 via-slate-900 to-black
      shadow-[0_30px_80px_rgba(0,0,0,0.6)]
      border border-slate-700">

      {/* Title */}
      <h1 className="text-center text-3xl font-bold text-white mb-10">
        Password Generator
      </h1>

      {/* Password display row */}
      <div className="flex items-center gap-4 mb-10">

        {/* Password input */}
        <div className="flex-1 bg-slate-700/60 rounded-xl px-5 py-4 text-orange-400 text-xl font-medium">
          <input
            type="text"
            value={password}
            className="outline-none w-full bg-transparent"
            placeholder="................."
            readOnly
            ref={PasswordRef}
          />
        </div>

        {/* Copy button */}
        <button
          onClick={copypswrd}
          className="px-8 py-4 rounded-xl bg-blue-600 transition
          font-semibold text-white cursor-pointer hover:bg-blue-900 active:scale-95">
          Copy
        </button>
      </div>

      {/* Slider for password length */}
      <div className="flex items-center gap-6 mb-8">

        <input
          type="range"
          min={6}
          max={32}
          value={length}
          className="cursor-pointer flex-1 accent-blue-500"
          onChange={(e) => setLength(e.target.value)}
        />

        {/* Shows current length */}
        <span className="text-orange-400 font-semibold text-lg">
          Length: {length}
        </span>
      </div>

      {/* Options section */}
      <div className="flex gap-10 text-slate-300 text-lg">

        {/* Numbers checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={number}
            onChange={() => setAllowedNo(prev => !prev)}
            className="w-5 h-5 accent-green-500 cursor-pointer"
          />
          Numbers
        </div>

        {/* Characters checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            defaultChecked={character}
            onChange={() => setAllowedChar(prev => !prev)}
            className="w-5 h-5 accent-red-500 cursor-pointer"
          />
          Characters
        </div>

        {/* Refresh button */}
      <button
        onClick={refresh}
        className="mx-auto sm:ml-40 px-3 py-3 rounded-xl bg-purple-600
         text-white hover:bg-purple-700 active:scale-95 transition-all">
        Refresh ↻
      </button>

      </div>
    </div>
  )
}

export default App
