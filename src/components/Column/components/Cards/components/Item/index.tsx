import { Draggable } from "react-beautiful-dnd";
import "./styles.scss";

type TCard = {
  content: string;
  id: string;
  index: number;
};

const Card = ({ content, id, index }: TCard) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className="card-item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {content}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
