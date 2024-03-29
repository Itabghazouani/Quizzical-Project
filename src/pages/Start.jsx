export default function Start(props) {
  return (
    <div className="start--container">
      <h2>Quizzical</h2>
      <h3>It&apos;s time to play a game</h3>
      <button className='start-btn' onClick={props.startGame}>Start Quiz</button>
    </div>
  )
}
