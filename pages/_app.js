import '../styles/globals.css'
import AuthContext from '../context/AuthContext'
import {AuthContextProvider} from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
    
  )
}

export default MyApp
