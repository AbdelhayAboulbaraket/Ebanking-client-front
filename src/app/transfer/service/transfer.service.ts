import { Injectable } from '@angular/core';
import { Transfer } from '../model/transfer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transferUrl: string;
  constructor(private http: HttpClient) {
    this.transferUrl = 'http://localhost:8081/virement';
  }
  public findAll(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(this.transferUrl + 's');
  }

  public save(transfer: Transfer) {
    return this.http.post<Transfer>(this.transferUrl + 's', transfer);
  }
}
