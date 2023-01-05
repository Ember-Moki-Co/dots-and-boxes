const initialGameState = {
  dots: [
    { id: 'dot-1', claimedBy: null },
    { id: 'dot-2', claimedBy: null },
    { id: 'dot-3', claimedBy: null },
    { id: 'dot-4', claimedBy: null },
    { id: 'dot-5', claimedBy: null },
    { id: 'dot-6', claimedBy: null },
    { id: 'dot-7', claimedBy: null },
    { id: 'dot-8', claimedBy: null },
    { id: 'dot-9', claimedBy: null },
    { id: 'dot-10', claimedBy: null },
    { id: 'dot-11', claimedBy: null },
    { id: 'dot-12', claimedBy: null },
    { id: 'dot-13', claimedBy: null },
    { id: 'dot-14', claimedBy: null },
    { id: 'dot-15', claimedBy: null },
    { id: 'dot-16', claimedBy: null }
  ],
  lines: [
    { id: 'line-1-2', fromDot: 'dot-1', toDot: 'dot-2', claimedBy: null },
    { id: 'line-2-3', fromDot: 'dot-2', toDot: 'dot-3', claimedBy: null }
  ],
  boxes: [
    { id: 'box-1', dots: ['dot-1', 'dot-2', 'dot-5', 'dot-6'], claimedBy: null },
    { id: 'box-2', dots: ['dot-2', 'dot-3', 'dot-6', 'dot-7'], claimedBy: null },
    { id: 'box-3', dots: ['dot-3', 'dot-4', 'dot-7', 'dot-8'], claimedBy: null },
    { id: 'box-4', dots: ['dot-5', 'dot-6', 'dot-9', 'dot-10'], claimedBy: null },
    { id: 'box-5', dots: ['dot-6', 'dot-7', 'dot-10', 'dot-11'], claimedBy: null },
    { id: 'box-6', dots: ['dot-7', 'dot-8', 'dot-11', 'dot-12'], claimedBy: null },
    { id: 'box-7', dots: ['dot-1', 'dot-2', 'dot-3', 'dot-4'], claimedBy: null },
    { id: 'box-8', dots: ['dot-1', 'dot-2', 'dot-3', 'dot-4'], claimedBy: null },
    { id: 'box-9', dots: ['dot-1', 'dot-2', 'dot-3', 'dot-4'], claimedBy: null }
  ],
  player1Score: 0,
  player2Score: 0,
  currentPlayer: 'player1',
  gameOver: false
}
export default initialGameState
