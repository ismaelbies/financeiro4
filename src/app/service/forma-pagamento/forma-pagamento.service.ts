import { FormaPagamento } from './../../models/forma-pagamento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FormaPagamentoService {

  private formaPagamentoArray:Array<FormaPagamento> = [];
  private url2 = "http://localhost:3000/formaPagamento";
  private url = "http://localhost:8083/api/financeiro/tipo/formapagamento";
  private token: string = "eyJjb2RpZ28iOjQzNzYsIm5vbWUiOiJMb2dpbiAiLCJsb2dpbiI6ImVhc3kuZXN0YW5jaWEiLCJwZXJmaWwiOiIwIiwiZW1wcmVzYSI6eyJjb2RpZ28iOjExMTUsIm5vbWUiOiJKUyBFTVBSRUVORElNRU5UT1MgSU1PQklMSUFSSU9TIExUREEiLCJmYW50YXNpYSI6IkpTIEVNUFJFRU5ESU1FTlRPUyBJTU9CSUxJQVJJT1MgTFREQSIsImNucGoiOiIxMC43NTcuNjg2LzAwMDEtMTMiLCJ0ZWxlZm9uZSI6Iig2NykgOTk5NjUtMDEwMiIsImVuZGVyZWNvIjoiQVZFTklEQSBKQU1JTCBKT1JHRSBTQUxPTUFPLCA5OTkiLCJiYWlycm8iOiJQT1JUQUwgREFTIEFSQVJBUyIsImNpZGFkZSI6IlRSRVMgTEFHT0FTIiwiY2VwIjoiNzk2NDQtMDAwIiwiZW1haWwiOiJqb2FxdWltQG5vdmFlc3RyZWxhLm5ldCIsInVmIjoiTVMiLCJ0aXBvU2lzdGVtYSI6IlBPUlRBTFBPU1RBTCJ9LCJiYW5jb0RhZG9zIjoiNzc3Nzc3Nzc3Nzc3NzcifQ";


  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {
   }

   insertHeaders() {
    return new HttpHeaders({'Authorization':'Basic ' .concat(this.token)});
   }

  findFormaPagamento(): Observable<FormaPagamento[]> {
    const headers = this.insertHeaders();
    return this.httpClient.get<FormaPagamento[]>(this.url, {headers: headers});
  }

  findFormaPagamentoById(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
    const headers = this.insertHeaders();
    const urlWithId = this.url.concat(`/${formaPagamento.idTipoFormaPagamento}`);
    return this.httpClient.get<FormaPagamento>(urlWithId, {headers: headers});
  }

  save(formaPagamento: FormaPagamento): Observable<FormaPagamento> {
    const headers = this.insertHeaders();
    return this.httpClient.post<FormaPagamento>(this.url, formaPagamento, {headers: headers});
  }

  update(formaPagamento: any): Observable<FormaPagamento> {
    const headers = this.insertHeaders();
    const urlUpdate = this.url.concat(`/${formaPagamento.idTipoFormaPagamento}`);
    return this.httpClient.put<FormaPagamento>(urlUpdate, formaPagamento, {headers: headers});
  }

  delete(formaPagamento: FormaPagamento): Observable<any> {
    const headers = this.insertHeaders();
    const urlDelete = this.url.concat(`/${formaPagamento.idTipoFormaPagamento}`);
    return this.httpClient.delete<FormaPagamento>(urlDelete, {headers: headers});
  }
}
