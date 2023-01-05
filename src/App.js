import './App.scss'
import Board from './components/Board'

function App () {
  return (
    <>
      <h1>Testing Hiiiii</h1>
      <Board />
    </>
  )
}

export default App

// create a 4x4 board of dots with equal space between
// allow clicking of space between 2 dots to create a line North South East & West
// alternate between 2 players
// whichever player places the 4th line creating a square gets a point and claims the created square
// player with the most points wins
