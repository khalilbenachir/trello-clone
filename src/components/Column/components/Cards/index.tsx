import { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";

import { TrelloContext, TTrelloContext } from "../../../../contextApi";
import { TCard } from "../../../../data";
import FormInput from "./components/FormInput";
import Card from "./components/Item";
import "./styles.scss";

type TCards = {
  cards: TCard[];
  columnId: string;
};

const Cards = ({ cards, columnId }: TCards) => {
  const { addCard } = useContext(TrelloContext) as TTrelloContext;

  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div
          className="cards"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {cards.map((card, index) => (
            <Card
              key={card.id}
              content={card?.content}
              id={card.id}
              index={index}
            />
          ))}
          {provided.placeholder}
          <FormInput label="Add card" onAdd={addCard} id={columnId} />
        </div>
      )}
    </Droppable>
  );
};

export default Cards;
