import './App.css'
import CustomNavbar from './Component/Navbar'
import Header from './Component/Header'
import RowOfMovies from './Component/RowOfMovies'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowDetail from './Component/ShowDetail'

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Header />
      <Route path="/" exact render={(routerProps) => <RowOfMovies {...routerProps} title="Star Wars" />} />
      <Route path="/" exact render={(routerProps) => <RowOfMovies {...routerProps} title="Harry Potter" />} />
      <Route path="/" exact render={(routerProps) => <RowOfMovies {...routerProps} title="The lord of the rings" />} />
      <Route path="/details/:movieID" render={(routerProps) => <ShowDetail {...routerProps} title="hello" />} />
    </Router>
  )
}

export default App