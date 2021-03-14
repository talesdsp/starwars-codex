import Head from "next/head"
import Router from "next/router"
import { useEffect, useState } from "react"
import Audios from "~/components/Audios/Audios"
import Footer from "~/components/Footer/Footer"
import Stars from "~/components/Stars/Stars"
import "~/index.scss"
import { Spinner } from "./categories/[theme]/[page]"

type AppProps = { Component: React.FC; pageProps: {} }

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }

    const end = () => {
      setLoading(false)
    }

    if (Router.isFallback) {
      console.log("abaaaaaaaa")
    }

    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)

    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }
  }, [])


  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Stars Wars Codex</title>
      </Head>

      <Audios />

      <Stars />

      {loading ? <Spinner /> : <Component {...pageProps} />}

      <Footer />
    </>
  )
}

export default App
