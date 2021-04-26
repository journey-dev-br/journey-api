import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Component({
    selector: 'app-article-show',
    templateUrl: './article-show.component.html',
    styleUrls: ['./article-show.component.css']
})
export class ArticleShowComponent implements OnInit {
    @ViewChild('HTMLArticleContent', { static: true }) articleContent
    public errorMsg: string
    public recoverAPI: boolean = false
    public recoverError: boolean = false

    constructor(
        private httpClient: HttpClient
    ) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'text/html' })
    }       

    ngOnInit(): void {
        const URL = 'assets/desenv/a0300200001.html'  
        const response = this.httpClient.get(URL, {responseType: 'text'})
            .pipe( retry(2) )     
            .subscribe(response => {
                this.articleContent.nativeElement.innerHTML = response
            })
    }

}
