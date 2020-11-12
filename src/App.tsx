import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Footer, Stars } from "./components"
import Audios from "./components/Audios/Audios"
import store from "./pages/Subject/store"
import { Spinner } from "./pages/Subject/styled"

const Categories = React.lazy(() => import("./pages/Categories/Categories"))
const Home = React.lazy(() => import("./pages/Home/Home"))
const Subject = React.lazy(() => import("./pages/Subject/Subject"))

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Audios />

      <Stars />

      <Switch>
        <React.Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Categories} />
          <Provider store={store}>
            <Route exact path="/categories/:theme" component={Subject} />
          </Provider>
        </React.Suspense>
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

export default App
