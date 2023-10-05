
function Modal({modalState, currentHog, closeModal}) {
    const {name, image, specialty, greased, weight, "highest medal achieved": highestMedal} = currentHog;
  
    return (
      <div onClick={closeModal} id="modal-container" className={modalState ? "hide" : ""}>
        <div id="modal">
          <h3>{name}</h3>
          <ul>
            <li>Specialty: <span>{specialty}</span></li>
            <li>Weight: <span>{weight}</span></li>
            <li>Greased: <span>{greased ? "Greased" : "Not Greased"}</span></li>
            <li>Highest Medal Achieved: <span>{highestMedal}</span></li>
          </ul>
          <hr />
          <img className="minPigTile" src={image} alt={name} />
        </div>
      </div>
    )
  }
  
  export default Modal