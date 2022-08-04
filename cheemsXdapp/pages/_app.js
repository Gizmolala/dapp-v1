import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId='qhOJXIKBcktFPCtAyXubgv7EB6HZ3Kgh4IU1ftc8' serverUrl='https://w46zogvc5mmr.usemoralis.com:2053/server'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  )
}

export default MyApp
