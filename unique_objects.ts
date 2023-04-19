const items = [
  { id: 1, name: "Mango" },
  { id: 2, name: "Mango" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Cherry" },
  { id: 5, name: "Cherry" },
  { id: 6, name: "Guava" },
];

function getUnique(
  items: { id: number; name: string }[]
): { id: number; name: string }[] {
  const mymap = new Map();

  const unique = items.filter((ele) => {
    const val = mymap.get(ele.name);
    if (val !== undefined) {
      if (ele.id < val) {
        mymap.delete(ele.name);
        mymap.set(ele.name, ele.id);
      } else {
        return false;
      }
    }
    mymap.set(ele.name, ele.id);
    return true;
  });

  return unique;
}

const uniqueItems = getUnique(items);
console.log(uniqueItems);

