
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'

function App() {

  const [themeMode , setThemeMode] = useState("Light")


  const lightTheme=()=>{
    setThemeMode("Light");
  }

  const darkTheme =()=>{
    setThemeMode("dark")
  }

useEffect(()=>{
  document.querySelector("html").classList.remove("Light","dark")
  document.querySelector("html").classList.add(themeMode)
},[themeMode])


  return (
    <>
      <ThemeProvider value={{themeMODE,darkTheme,lightTheme}}>
             <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
            </ThemeProvider>

    </>
  )
}

export default App
