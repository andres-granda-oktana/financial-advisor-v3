export default function ActionButton (props){

    const {
        name,
        label,
        active=true,
        className="",
        onClick=undefined
    } = props

    let buttonClass = active ? "button primary" : "button primary disabled"

    return(
        <div className={className}>
            <button 
                name={name}
                className={buttonClass}
                onClick={ onClick ? (e)=>onClick(e) : null}
            >
                {label}
            </button>
        </div>
    )
}