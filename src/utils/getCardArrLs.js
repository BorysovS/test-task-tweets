export const getCardArrayFromLocalStorage = () => {
  const cardArrayFilter = localStorage.getItem('cardArray');
  return cardArrayFilter ? JSON.parse(cardArrayFilter) : [];
};
