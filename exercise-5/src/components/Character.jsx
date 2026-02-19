

export function Character(props){
    return(
        <div className="actor">
            <div>
                <img {...props.image}/>
                <h1>{props.name}</h1>
                <h3>Status: {props.status}</h3>
                <p>Occupation: {props.occupation}</p>
            </div>
        </div>
    );
}