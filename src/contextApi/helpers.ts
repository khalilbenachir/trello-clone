export const reorderArray = <T>(
  array: T[],
  destinationIndex: number,
  sourceIndex: number
) => {
  const temp = array[sourceIndex];
  array[sourceIndex] = array[destinationIndex];
  array[destinationIndex] = temp;

  return array;
};
