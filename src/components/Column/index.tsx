import { Draggable } from "react-beautiful-dnd";
import { TCard } from "../../data";
import Cards from "./components/Cards";
import Title from "./components/Title";
import "./styles.scss";

type TColumn = {
  title: string;
  cards: TCard[];
  columnId: string;
  index: number;
};

const Column = ({ title, cards, columnId, index }: TColumn) => {
  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <div
          className="column"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Title title={title} />
          <Cards cards={cards} columnId={columnId} />
        </div>
      )}
    </Draggable>
  );
};

export default Column;
