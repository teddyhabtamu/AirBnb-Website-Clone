function Card(props){
  let className
  let badgeText
  if (props.openSpot === 0) {
    badgeText = "SOLD OUT";
    className = "sold-badge";
  }
  else{
    badgeText = "Online";
    className = "online-badge"
  }
  return(
    <div className="card">
      <div className={className}>{badgeText}</div>
      <img className="profile" src={props.profileImg} alt="" />
      <div className="rating">
        <img className="star-img" src="./img/star.png" alt="" />
        <p> {props.rating} <span className="gray">({Math.round(props.rating)}).{props.country}</span></p>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
      <div>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
      


    </div>
  )
}

export default Card