import '../styles/globals.scss'
import Layout from "../components/Layout"
import { DataGet } from '../context/DataContext'

function MyApp({ Component, pageProps }) {
  return <DataGet><Layout><Component {...pageProps} /></Layout></DataGet>
}

export default MyApp
