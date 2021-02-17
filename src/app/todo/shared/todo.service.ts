import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFirelist } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getToDoList() {
    this.toDoList = this.firebasedb.list('title');
    return this.toDoList;
  }
  addTitle(title: string) {
    this.toDoList.push({
      title: title,
      isChecked: false
    });
  }

  checkOruncheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
  }
  removeTitle($key: string) {
    this.toDoList.remove($key);

  }
}
