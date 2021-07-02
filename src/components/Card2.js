function Card(props)
{
    function MouseOver(event) {
        console.log("dfssdf")
      }
      function MouseOut(event){
        console.log("çıktı")

      }
    return (
        <div className="col-md-3">
            <div className="card" 
            onMouseOver={MouseOver} 
            onMouseOut={MouseOut}>
               <img className="img-fluid" src={`${process.env.PUBLIC_URL + props.img}`}></img>
               <div className="text">
               <h3>{props.text}</h3>
               <br></br>
               <p>{props.description}</p>
               </div>
            </div>
        </div>
    )
}
export default Card