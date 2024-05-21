# React `key` prop demo

The checkbox state is stored in component state. Because the `key` prop is set to each item's array index, there is a bug where different items will become checked if you delete items earlier in the list.

## Steps

1. Clone repo
2. `npm install`
3. `npm run dev`

## "Bug" Reproduction Steps

1. Refresh page: The list will have 2 items, "hello" and "world"
2. Click the "Add" button: A third item appears
3. Click on the checkbox for the "world" item
4. Click on the "Delete" button for the "hello" item

The "world" item is no longer checked, instead the item after it is checked.
