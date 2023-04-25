const items = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "apple" },
  { id: 4, name: "orange" },
  { id: 5, name: "banana" },
];

interface item {
  id: number;
  name: string;
}

type ItemPropertyName = keyof item;

const getUniqueItemsByProperty = (
  itemsToCheck: item[],
  prop: ItemPropertyName
): item[] => {
  const uniqueItems: item[] = [];

  for (let i = 0; i < itemsToCheck.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueItems.length; j++) {
      if (itemsToCheck[i][prop] === uniqueItems[j][prop]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueItems.push(itemsToCheck[i]);
    }
  }

  return uniqueItems;
};

const uniqueItems = getUniqueItemsByProperty(items, "name");

console.log(uniqueItems);

