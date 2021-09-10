import Score from "./Score"

export default function Student(props) {
    // we define props by passing props as a parameter
    // console.log(props)
    const scoreList = props.student.scores.map( (score) => <Score scoreData={score} />)
    return (
        <div>
            <h1>
                name: {props.student.name}
            </h1>
            <h2>
                bio: {props.student.bio}
            </h2>
           {scoreList}
        </div>
    )
}
