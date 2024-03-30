import "../components/Pokecard.css"
const Pokecard = (props) =>{
    const {id, name, type, experience} = props
    const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return(
        <div className="Pokecard-card">
            <h4>{name}</h4>
            <img src={imgURL}/>
            <p>Type: {type}</p>
            <p>EXP: {experience}</p>
        </div>
    )
}

export default Pokecard;