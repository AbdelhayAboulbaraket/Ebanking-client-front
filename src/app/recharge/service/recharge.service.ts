import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recharge } from '../model/recharge';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RechargeService {
  private rechargeUrl: string;
  constructor(private http: HttpClient) {
    this.rechargeUrl = 'https://ebanking-banking.herokuapp.com/recharge';
  }
  public findAll(code: string): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(
      'https://ebanking-banking.herokuapp.com/compte/' + code + '/recharges'
    );
  }
  public findAlll(): Observable<Recharge[]> {
    return this.http.get<Recharge[]>(this.rechargeUrl + 's');
  }

  public save(recharge: Recharge) {
    return this.http.post<Recharge>(this.rechargeUrl + 's', recharge);
  }
}
