import { useDraggable } from "@dnd-kit/core";
import {CSS} from '@dnd-kit/utilities';

function DraggableItem({ id, name }) {
  const { attributes, listeners, setNodeRef,transform } = useDraggable({ id });
  
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <span className='task'>{name} </span>
    </div>
  );
}

export default DraggableItem