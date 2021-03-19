const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList); // [...ratingItemsList]

// console.log(ratingItemsList);
// console.log(ratingItemsArray);

ratingItemsArray.forEach(element => {
  element.addEventListener('click', () =>{
    const { itemValue } = element.dataset;
    element.parentNode.dataset.totalValue = itemValue;
    // element.parentNode.dataset.totalValue = element.dataset.itemValue
  })
});