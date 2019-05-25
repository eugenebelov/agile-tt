import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatamuseService {
  constructor(private http: HttpClient) {}

  getSynonym(word: string): Observable<any> {
    //https://api.datamuse.com/words?ml=ocean&syn&max=10

    const params = new HttpParams({
      fromString: `ml=${word}&syn&max=10`
    });

    return this.http.get('https://api.datamuse.com/words', { params: params });
  }

}
