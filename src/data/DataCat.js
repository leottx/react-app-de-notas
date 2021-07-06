export default class DataCat {
  constructor() {
    this.catList = ['Categoria'];
  }

  addNewCategory(category) {
    console.log(this.catList);
  }

  removeCategory(index) {
    this.catList.splice(index, 1);
  }
}