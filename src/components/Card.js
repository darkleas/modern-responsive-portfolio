function Card(props)
{
    return (
        <div className="col-md-3">
            <div className="service">
               <i className={props.img}></i>
               <h3>{props.text}</h3>
               <br></br>
               <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card