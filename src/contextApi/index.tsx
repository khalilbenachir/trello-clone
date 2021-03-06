import React, { createContext, useCallback, useState } from "react";
import { DropResult, ResponderProvided } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

import { data, TCard, TData } from "../data";
import { reorderArray } from "./helpers";

type TTrelloProvider = {
  children: React.ReactNode;
};

export type TTrelloContext = {
  lists: TData;
  addCard?: (id: string, content: string) => void;
  addColumn?: (id: string, content: string) => void;
  onDragEnd: (result: DropResult, provided: ResponderProvided) => void;
};

export const TrelloContext = createContext<TTrelloContext | null>(null);

const TrelloProvider = ({ children }: TTrelloProvider) => {
  const [lists, setLists] = useState<TData>(data);
  const addCard = useCallback(
    (idColumn: string, content: string) => {
      setLists((prev) => {
        const column = prev.columns[idColumn];
        return {
          ...prev,
          columns: {
            ...prev.columns,
            [idColumn]: {
              ...column,
              cards: [...column.cards, { id: `card-${uuidv4()}`, content }],
            },
          },
        };
      });
    },
    [setLists]
  );
  const addColumn = useCallback(
    (id: string, title: string) => {
      return setLists((prev) => {
        const id = uuidv4();
        const columnId = `column-${id}`;

        return {
          ...prev,
          columnsIds: [...prev.columnsIds, columnId],
          columns: {
            ...prev.columns,
            [columnId]: {
              id: columnId,
              title,
              cards: [],
            },
          },
        };
      });
    },
    [setLists]
  );

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId } = result;
      const isCard = draggableId.includes("card-");
      const isColumn = draggableId.includes("column-");

      if (!destination) {
        return;
      }

      if (isCard) {
        const column = lists.columns[source.droppableId];
        const cards = reorderArray<TCard>(
          column.cards,
          destination.index,
          source.index
        );
        return setLists((prev) => {
          return {
            ...prev,
            columns: {
              ...prev.columns,
              [source.droppableId]: {
                ...prev.columns[source.droppableId],
                cards,
              },
            },
          };
        });
      }

      if (isColumn) {
        const columnsIds = reorderArray<string>(
          lists.columnsIds,
          destination.index,
          source.index
        );

        return setLists((prev) => {
          return {
            ...prev,
            columnsIds,
          };
        });
      }

      return;
    },
    [setLists, lists]
  );
  return (
    <TrelloContext.Provider value={{ lists, addCard, addColumn, onDragEnd }}>
      {children}
    </TrelloContext.Provider>
  );
};

export default TrelloProvider;
