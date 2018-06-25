import { observable } from 'mobx';
import Section from './models/section';
import HistoryItem from './models/history-item';

class Store {
  @observable sections: Section[] = [];

  @observable selectedItems: HistoryItem[] = [];
}

export default new Store();