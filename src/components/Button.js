import { Link } from 'react-router-dom';
function Button(props)
{
    return(
        <Link to={props.to} className={props.class}>{props.text}</Link>
    )
}
export default Button