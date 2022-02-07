export default function LevelButton (props) {

    const {
        riskLevel,
        setRiskLevel,
        value
    } = props

    let buttonActive = riskLevel===value ? "riskProfilerLevelButton button primary" : "riskProfilerLevelButton button hollow secondary"
    
    return (
        <button 
            className={buttonActive} 
            name={value}
            onClick={(e)=>setRiskLevel(e.target.name)}
        >
            {value}
        </button>
    )
}