import Component from '@glimmer/component';

export default class SortableHeaderComponent extends Component {
  get isSort(){
    return this.args.sortBy && this.args.sortBy === this.args.sortedBy;
  }
}
