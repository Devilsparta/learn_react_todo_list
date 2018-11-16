interface ITodoData {
  todo: string;
  time: number;
  complete: boolean;
}
class TodoListModel {
  private _todoList: ITodoData[] = [];
  public constructor() {
    // init db connection
  }

  public getList() {
    return this._todoList;
  }

  public async push(todo: string) {
    const todoItem = this._genFormatData(todo);

    // TODO: push todo to server
    return this._todoList.push(todoItem);
  }

  public async get(idx: number) {
    return this._todoList[idx];
  }

  public async insert(todo: string, idx: number) {
    this._todoList = [
      ...this._todoList.slice(0, idx - 1),
      this._genFormatData(todo),
      ...this._todoList.slice(idx, this._todoList.length - 1)
    ];
  }

  public async change(todo: string, idx: number) {
    this._todoList[idx].todo = todo;
  }

  public async remove(idx: number) {
    return this._todoList.splice(idx, 1);
  }

  private _genFormatData(todo: string): ITodoData {
    return {
      todo,
      time: Date.now(),
      complete: false
    };
  }
}
