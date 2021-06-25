import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() { }

  public set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

}
