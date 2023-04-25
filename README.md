## Unique Items by Property

This function `getUniqueItemsByProperty` takes an array of items and a property name, and returns an array of unique items based on that property.

**Explanation:**

We need to provide an array of objects and a property name. The function will return an array of objects where the specified property has unique values.

The `getUniqueItemsByProperty` function takes two arguments: an array of items (itemsToCheck) and a property name (prop). It returns an array of items that have a unique value for the specified property.

The function works by iterating through each item in the `itemsToCheck` array and checking if it has a unique value for the specified property. If it has a unique value, the item is added to the `uniqueItems array`. If not, the item is skipped.
