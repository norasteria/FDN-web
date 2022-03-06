export const grouppedArray = <T>(array: Array<T>, lengthPerItem: number) => {
  let sliceStartAt = 0;
  const newArrayLength = Math.ceil(array.length / lengthPerItem);

  return [...Array(newArrayLength)].map(() => {
    const result = array.slice(sliceStartAt, sliceStartAt + lengthPerItem);
    sliceStartAt += lengthPerItem;

    return result;
  });
};
