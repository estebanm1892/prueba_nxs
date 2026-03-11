import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicPost } from '../models/public-post.model';

@Injectable({
    providedIn: 'root'
})
export class PublicApiService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<PublicPost[]> {
        return this.http.get<PublicPost[]>(this.apiUrl);
    }
}