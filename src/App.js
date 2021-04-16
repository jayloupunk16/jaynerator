import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './App.css';
import {
  numbers,
   upperCaseLetter, 
   lowerCaseLetter, 
   specialCharacters,
  similarCharacters,} from './characters'

//import 'react-toastify/dist/ReactToastify.css'
//import {COPY_SUCESS} from './message'


function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(25)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [includeSimilar, setIncludeSimilar] = useState(false)

  const handleGeneratePassword = (e) => {
    let characterList = ''

    if(includeLowercase){
      characterList = characterList + lowerCaseLetter
    }
    if(includeUppercase){
      characterList = characterList + upperCaseLetter
    }
    if(includeNumbers){
      characterList = characterList + numbers
    }
    if(includeSymbols){
      characterList = characterList + specialCharacters
    }
    if(similarCharacters){
      characterList = characterList + similarCharacters
    }
   

    setPassword(createPassword(characterList))
  }

  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i=0; i <passwordLength; i++){
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  /* COPY TEXT */
  const copyToClipboard = () => {
    const newTextArea = document.createElement('textArea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select();
    document.execCommand('copy')
    newTextArea.remove()
  }

 /*  const notify = (message) => {
    toast(message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: underfined,
    })
  } */
  const handleCopyPassword = (e) => {
    copyToClipboard()
    
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='generator'>
          <h2 className='generator_header'>
            Password Generator
          </h2>
          <div className='generator_password'>
            <h3>{password}</h3>
            <button onClick={handleCopyPassword} className='copy_btn'>
              <i className='far fa-clipboard'></i>
            </button>
          </div>

          {/* password strength */}
          <div className='form-group'>
            <label htmlFor='password-strength'>Password length</label>
            <input 
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            type='number' 
            id='password-strength' 
            name='passwor-strength'
            max='25'
            min='15'
            />
          </div>
          
          {/* uppercase */}
          <div className='form-group'>
          <label htmlFor='uppercase-letters' className='spacing'>Include Uppercase Letters: (ABCDEFGHIJKLMNOPQRSTUVWXYZ)</label>
           <input 
           checked={includeUppercase}
           onChange={(e) => setIncludeUppercase(e.target.checked)}
            type='checkbox'
            id='uppercase-letters'
            name='uppercase-letters'
            />
          </div>

          {/* uppercase */}
          <div className='form-group'>
          <label htmlFor='lowercase-letters' className='spacing'>Include Lowercase Letters: (abcdefghijklmnopqrstuvwxyz)</label>
           <input 
           checked={includeLowercase}
           onChange={(e) => setIncludeLowercase(e.target.checked)}
            type='checkbox'
            id='lowercase-letters'
            name='lowercase-letters'
            />
          </div>

           {/* number */}
           <div className='form-group'>
          <label htmlFor='include-numbers' className='spacing'>Include Numbers: (0123456789)</label>
           <input 
           checked={includeNumbers}
           onChange={(e) => setIncludeNumbers(e.target.checked)}
            type='checkbox'
            id='include-numbers'
            name='include-numbers'
            />
          </div>

           {/* symbols */}
           <div className='form-group'>
          <label htmlFor='include-symbols' className='spacing'>Include Symbols: (!'^+%/()=?_#${[]}|;:`*-@)</label>
           <input 
           checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            type='checkbox'
            id='include-symbols'
            name='include-symbols'
            />
          </div>

           {/* similar character */}
           <div className='form-group'>
          <label htmlFor='include-similar' className='spacing'>Includea Similar: (egil1Lo0O)</label>
           <input 
           checked={includeSimilar}
           onChange={(e) => setIncludeSimilar(e.target.checked)}
            type='checkbox'
            id='include-similar'
            name='include-similar'
            />
          </div>

          {/* button generate */}

          <button onClick={handleGeneratePassword} className="generator_btn">asjkhdjkqhwkjehkahsd</button>

          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}

export default App;
