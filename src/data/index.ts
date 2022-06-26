export const data: TData = {
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      cards: [
        { id: "card-1", content: "Card 1" },
        { id: "card-2", content: "Card 2" },
        { id: "card-3", content: "Card 3" },
      ],
    },
  },
  columnsIds: ["column-1"],
};

export type TData = {
  columns: {
    [name: string]: {
      id: string;
      title: string;
      cards: TCard[];
    };
  };
  columnsIds: string[];
};

export type TCard = {
  id: string;
  content: string;
};
