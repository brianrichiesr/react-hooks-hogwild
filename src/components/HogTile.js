

function HogTile({name, image, toggleModal}) {
    return (
      <div className="ui seven wide column pigTile" onClick={toggleModal}>
        <h3>{name}</h3>
        <img className="maxPigTile" src={image} alt={name} />
      </div>
    )
  }
  
  
  
  
  
  
  
  export default HogTile;