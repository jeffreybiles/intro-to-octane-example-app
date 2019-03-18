import Controller from '@ember/controller';
import { computed, action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BooksController extends Controller {
  @tracked sortProperty = 'publicationYear'
  @tracked reversed = false

  get sortedBooks(){
    let sortedBooks = this.books.sortBy(this.sortProperty)
    if(this.reversed) {
      return sortedBooks.reverse();
    } else {
      return sortedBooks;
    }
  }

  @tracked selectedBookIds = [1, 4]
  @tracked hiddenBookIds = [1, 3]

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
  @action sortBooks(property, reversed){
    this.set('reversed', reversed);
    this.set('sortProperty', property);
  }
  @action hideBook(book){ this.hiddenBookIds.pushObject(book.id); this.notifyPropertyChange('hiddenBookIds') }
  @action hideAllSelected(){ this.hiddenBookIds.pushObjects(this.selectedBookIds); this.notifyPropertyChange('hiddenBookIds') }
  @action showBook(book){ this.hiddenBookIds.removeObject(book.id); this.notifyPropertyChange('hiddenBookIds') }
  @action showAllSelected(){ this.hiddenBookIds.removeObjects(this.selectedBookIds); this.notifyPropertyChange('hiddenBookIds')}
  @action selectAll(){ this.set('selectedBookIds', this.sortedBooks.mapBy('id')); }
  @action unselectAll(){ this.set('selectedBookIds', []); }

  get books() { return this.model }
}
