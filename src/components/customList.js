import DraggableItem from "./draggable"
import DroppableArea from "./dropable"

const CustomList=({label,arr,type})=>{
    return(
        <DroppableArea id={`${type}`}>
        {label}
        <div className='fullWidth'>
        {
          arr.map((item)=>{
            return   <DraggableItem key={item.id} id={item.id+"^"+type} name={item.name} />
          })
        }
        </div>
        </DroppableArea>
    )
}


export default CustomList