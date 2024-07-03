const favorites = ['id-2', 'id-4'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    { id: 'id-2', name: 'Food', nodes: [] },
    { id: 'id-12', name: 'Meat', nodes: [{ id: 'id-4', name: 'Milk', nodes: [] }] },
  ],
};

export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

console.log(markFavorites(tree, favorites));
