import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BooksController extends Controller {
  @tracked sortProperty = 'publicationYear'
  @tracked reversed = false
  @tracked selectedBookIds = []
  @tracked hiddenBookIds = [1, 3]

  get books() { return this.model }
  get sortedBooks(){
    let sortedBooks = this.books.sortBy(this.sortProperty)
    if(this.reversed) {
      return sortedBooks.reverse();
    } else {
      return sortedBooks;
    }
  }

  get selectedBooks(){ return this.booksFromIds(this.selectedBookIds) }
  get shownBooks(){ return this.sortedBooks.filter(book => !this.hiddenBookIds.includes(book.id)) }
  get hiddenBooks(){ return this.booksFromIds(this.hiddenBookIds) }
  booksFromIds(idSet){
    return this.sortedBooks.filter(book => idSet.includes(book.id));
  }

  @action toggleSelection(book, isSelected){
    if(isSelected) {
      this.selectedBookIds.removeObject(book.id)
    } else {
      this.selectedBookIds.pushObject(book.id)
    }
    this.notifyPropertyChange('selectedBookIds')
  }
  @action sortBooks(property){
    if(property == this.sortProperty) {
      this.reversed = !this.reversed;
    } else {
      this.reversed = false;
    }
    this.sortProperty = property;
  }
  @action hideBook(book){ this.hiddenBookIds.pushObject(book.id); this.notifyPropertyChange('hiddenBookIds') }
  @action hideAllSelected(){ this.hiddenBookIds.pushObjects(this.selectedBookIds); this.notifyPropertyChange('hiddenBookIds') }
  @action showBook(book){ this.hiddenBookIds.removeObject(book.id); this.notifyPropertyChange('hiddenBookIds') }
  @action showAllSelected(){ this.hiddenBookIds.removeObjects(this.selectedBookIds); this.notifyPropertyChange('hiddenBookIds')}
  @action selectAll(){ this.selectedBookIds = this.sortedBooks.mapBy('id'); }
  @action unselectAll(){ this.selectedBookIds = []; }

  headerInfo = [
    {name: 'Name', property: 'name'},
    {name: 'Author', property: 'author'},
    {name: 'Publication Year', property: 'publicationYear'},
    {name: 'Pages', property: 'pages'},
    {name: 'Actions', property: null}
  ]
}
