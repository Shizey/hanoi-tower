export default function deleteOccurence(array: string[][], value: string) {
    for (let i = 0; i < array.length; i++) {
      const index = array[i].indexOf(value);
      if (index > -1) {
        array[i].splice(index, 1);
      }
    }
  }