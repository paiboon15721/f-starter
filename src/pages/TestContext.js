import React, { useState, createContext, useContext } from 'react'

const globalTheme = ['danger', 'primary', 'success', 'warning']

const themeContext = createContext()

const Header = () => (
  <themeContext.Consumer>
    {v => (
      <div className={`alert alert-${v.theme}`} role="alert">
        Comment App!
      </div>
    )}
  </themeContext.Consumer>
)

const ChangeTheme = () => {
  const v = useContext(themeContext)

  return (
    <>
      <button className={`btn btn-${v.theme}`} onClick={v.changeTheme}>
        Change Theme
      </button>
      <Header />
      <Header />
      <Header />
    </>
  )
}

const App = () => {
  const [theme, setTheme] = useState('primary')

  const changeTheme = () => {
    setTheme(globalTheme[Math.floor(Math.random() * globalTheme.length)])
  }

  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      <ChangeTheme />
      <h1>hello</h1>
      <Header />
    </themeContext.Provider>
  )
}

export default App
