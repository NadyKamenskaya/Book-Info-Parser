const formatTree = (tree) => {
  const values = Object.values(tree).flat();
  const result = values.reduce((acc, row, index) => {
    const info = `Заголовок: ${row.title}, Цена: ${row.price}, Рейтинг: ${row.rating}, Доступность: ${row.availability}`;
    return (index === 0)
      ? `${acc}${info}`
      : `${acc}\n${info}`;
  }, '');

  return result;
};

export default formatTree;
