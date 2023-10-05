import HogTile from "./HogTile"

function HogList({hogs, toggleModal}) {
  const mapped = hogs.map((hog, idx) => {
    return <HogTile toggleModal={() => toggleModal(idx)} name={hog.name} image={hog.image} key={`hog-${idx}`}/>
  })

  return (
    <div className="ui grid container">{mapped}</div>
  )
}

export default HogList