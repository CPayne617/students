export default function Score(props) {
    console.log(props)
    
    return (
        <div>
            <h1>
                score: {props.scoreData.score} date: {props.scoreData.date}
            </h1>            
        </div>
    )
}
