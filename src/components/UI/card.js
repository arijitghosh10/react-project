import './Card.css';

function Card(props){
    const cardDiv = 'card ' + props.className;
    return <div className={cardDiv}>{props.children}</div>
}

export default Card;