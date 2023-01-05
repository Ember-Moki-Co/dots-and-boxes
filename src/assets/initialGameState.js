const gameDots = [
  { id: 'dot-1', x: 50, y: 50 },
  { id: 'dot-2', x: 100, y: 50 },
  { id: 'dot-3', x: 150, y: 50 },
  { id: 'dot-4', x: 200, y: 50 },
  { id: 'dot-5', x: 50, y: 100 },
  { id: 'dot-6', x: 100, y: 100 },
  { id: 'dot-7', x: 150, y: 100 },
  { id: 'dot-8', x: 200, y: 100 },
  { id: 'dot-9', x: 50, y: 150 },
  { id: 'dot-10', x: 100, y: 150 },
  { id: 'dot-11', x: 150, y: 150 },
  { id: 'dot-12', x: 200, y: 150 },
  { id: 'dot-13', x: 50, y: 200 },
  { id: 'dot-14', x: 100, y: 200 },
  { id: 'dot-15', x: 150, y: 200 },
  { id: 'dot-16', x: 200, y: 200 }
]

const gameLines = [
  { id: 'line-1-2', fromDot: gameDots[0], toDot: gameDots[1], claimedBy: null, vertical: false },
  { id: 'line-2-3', fromDot: gameDots[1], toDot: gameDots[2], claimedBy: null, vertical: false },
  { id: 'line-3-4', fromDot: gameDots[2], toDot: gameDots[3], claimedBy: null, vertical: false },
  { id: 'line-5-6', fromDot: gameDots[4], toDot: gameDots[5], claimedBy: null, vertical: false },
  { id: 'line-6-7', fromDot: gameDots[5], toDot: gameDots[6], claimedBy: null, vertical: false },
  { id: 'line-7-8', fromDot: gameDots[6], toDot: gameDots[7], claimedBy: null, vertical: false },
  { id: 'line-9-10', fromDot: gameDots[8], toDot: gameDots[9], claimedBy: null, vertical: false },
  { id: 'line-10-11', fromDot: gameDots[9], toDot: gameDots[10], claimedBy: null, vertical: false },
  { id: 'line-11-12', fromDot: gameDots[10], toDot: gameDots[11], claimedBy: null, vertical: false },
  { id: 'line-13-14', fromDot: gameDots[12], toDot: gameDots[13], claimedBy: null, vertical: false },
  { id: 'line-14-15', fromDot: gameDots[13], toDot: gameDots[14], claimedBy: null, vertical: false },
  { id: 'line-15-16', fromDot: gameDots[14], toDot: gameDots[15], claimedBy: null, vertical: false },
  { id: 'line-1-5', fromDot: gameDots[0], toDot: gameDots[4], claimedBy: null, vertical: true },
  { id: 'line-5-9', fromDot: gameDots[4], toDot: gameDots[8], claimedBy: null, vertical: true },
  { id: 'line-9-13', fromDot: gameDots[8], toDot: gameDots[13], claimedBy: null, vertical: true },
  { id: 'line-2-6', fromDot: gameDots[1], toDot: gameDots[5], claimedBy: null, vertical: true },
  { id: 'line-6-10', fromDot: gameDots[5], toDot: gameDots[9], claimedBy: null, vertical: true },
  { id: 'line-10-14', fromDot: gameDots[9], toDot: gameDots[13], claimedBy: null, vertical: true },
  { id: 'line-3-7', fromDot: gameDots[2], toDot: gameDots[6], claimedBy: null, vertical: true },
  { id: 'line-7-11', fromDot: gameDots[6], toDot: gameDots[10], claimedBy: null, vertical: true },
  { id: 'line-11-15', fromDot: gameDots[10], toDot: gameDots[14], claimedBy: null, vertical: true },
  { id: 'line-4-8', fromDot: gameDots[3], toDot: gameDots[7], claimedBy: null, vertical: true },
  { id: 'line-8-12', fromDot: gameDots[7], toDot: gameDots[11], claimedBy: null, vertical: true },
  { id: 'line-12-16', fromDot: gameDots[11], toDot: gameDots[15], claimedBy: null, vertical: true }
]
const gameBoxes = [
  { id: 'box-1', dots: [gameDots[0], gameDots[1], gameDots[4], gameDots[5]], lines: [gameLines[13], gameLines[0], gameLines[3], gameLines[15]], claimedBy: null },
  { id: 'box-2', dots: [gameDots[1], gameDots[2], gameDots[5], gameDots[6]], lines: [gameLines[15], gameLines[1], gameLines[4], gameLines[18]], claimedBy: null },
  { id: 'box-3', dots: [gameDots[2], gameDots[3], gameDots[6], gameDots[7]], lines: [gameLines[18], gameLines[2], gameLines[5], gameLines[21]], claimedBy: null },
  { id: 'box-4', dots: [gameDots[4], gameDots[5], gameDots[8], gameDots[9]], lines: [gameLines[13], gameLines[3], gameLines[6], gameLines[16]], claimedBy: null },
  { id: 'box-5', dots: [gameDots[5], gameDots[6], gameDots[9], gameDots[10]], lines: [gameLines[16], gameLines[4], gameLines[7], gameLines[19]], claimedBy: null },
  { id: 'box-6', dots: [gameDots[6], gameDots[7], gameDots[10], gameDots[11]], lines: [gameLines[19], gameLines[5], gameLines[8], gameLines[22]], claimedBy: null },
  { id: 'box-7', dots: [gameDots[8], gameDots[9], gameDots[12], gameDots[13]], lines: [gameLines[14], gameLines[6], gameLines[9], gameLines[17]], claimedBy: null },
  { id: 'box-8', dots: [gameDots[9], gameDots[10], gameDots[13], gameDots[14]], lines: [gameLines[17], gameLines[7], gameLines[10], gameLines[20]], claimedBy: null },
  { id: 'box-9', dots: [gameDots[10], gameDots[11], gameDots[14], gameDots[15]], lines: [gameLines[20], gameLines[8], gameLines[11], gameLines[23]], claimedBy: null }
]

const initialGameState = {
  dots: gameDots,
  lines: gameLines,
  boxes: gameBoxes,
  player1Score: 0,
  player2Score: 0,
  currentPlayer: 'player1',
  gameOver: false
}
export default initialGameState
