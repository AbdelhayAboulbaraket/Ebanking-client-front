import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/account/model/account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clientUrl: string;
  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8081/client';
  }

  public findClientAccounts(id: string): Observable<Account[]> {
    return this.http.get<Account[]>(this.clientUrl + '/' + id + '/comptes');
  }
}
