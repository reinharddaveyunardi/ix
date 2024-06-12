export const items = (function () {
  function shuffleImage(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const categories = [
    { name: "IXA", pic: 8 },
    { name: "IXB", pic: 8 },
    { name: "IXC", pic: 8 },
    { name: "Teacher", pic: 7 },
  ];

  const items = [];

  categories.forEach(({ name, pic }) => {
    const categoryItems = [];
    for (let i = 1; i <= pic; i++) {
      categoryItems.push({
        url: `/gallery/${name.toLowerCase()}${i}.JPG`,
        category: name,
        name: `${name} ${i}`,
      });
    }
    items.push(...shuffleImage(categoryItems));
  });

  return items;
})();
