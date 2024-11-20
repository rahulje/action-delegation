import { BehaviorSubject, Observable } from 'rxjs';

export abstract class StateStoreService<T> {
  private state$: BehaviorSubject<T>;
  private defaultState: T;

  protected constructor(initialState: T) {
    this.defaultState = initialState;
    this.state$ = new BehaviorSubject(this.defaultState);
  }

  getStateObs(): Observable<T> {
    return this.state$.asObservable();
  }

  getState(): T {
    return this.state$.getValue();
  }

  updateState(newState: Partial<T>) {
    this.state$.next({
      ...this.getState(),
      ...newState,
    });
  }
}
