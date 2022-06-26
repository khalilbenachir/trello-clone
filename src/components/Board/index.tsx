import { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { TrelloContext, TTrelloContext } from "../../contextApi";
import Column from "../Column";
import FormInput from "../Column/components/Cards/components/FormInput";
import "./styles.scss";

const Board = () => {
  const { lists, addColumn, onDragEnd } = useContext(TrelloContext) as TTrelloContext;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board-1" direction="horizontal" type="list">
        {(provided) => (
          <div
            className="board"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {lists.columnsIds.map((id, index) => {
              const column = lists.columns[id];
              return (
                <Column
                  key={id}
                  title={column.title}
                  cards={column.cards}
                  columnId={column.id}
                  index={index}
                />
              );
            })}
            {provided.placeholder}
            <div className="add-column">
              <FormInput label="Add Column" onAdd={addColumn} />
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
