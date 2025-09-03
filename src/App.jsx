import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'
export const ApiContext = createContext()
export const ThemeContext = createContext()

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const intialTheme = localStorage.getItem("theme")
    const [theme, setTheme] = useState(intialTheme ? intialTheme : "light");

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <ThemeContext.Provider value = {{setTheme, theme}}>
        <ApiContext.Provider value = {{setTweets, user, tweets}}>
            <div className="container">
                <Header />
                <Tweets />
                <RightSide />
            </div>
        </ApiContext.Provider>
        </ThemeContext.Provider>
    )
}

export { App };
