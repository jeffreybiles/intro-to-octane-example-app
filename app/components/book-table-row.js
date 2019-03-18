import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookTableRowComponent extends Component {
  @tracked index;
  @tracked selectedBookIds;
  @tracked book;

  get isSelected(){
    return this.args.selectedBookIds.includes(this.args.book.id);
  }

  get isStriped() {
    return this.args.index % 2 === 0
  }
}
