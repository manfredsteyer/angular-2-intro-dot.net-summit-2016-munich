import {Http, URLSearchParams } from 'angular2/http';
import { Component } from 'angular2/core';

@Component({
    selector: 'flug-suchen', // <flug-suchen></flug-suchen>
    templateUrl: 'app/flug-suchen.html'
})
export class FlugSuchenComponent {
    
    public von: string;
    public nach: string;
    public fluege: Array<any> = [];
    public selectedFlug = null;
    
    public message: string = "";
    
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    
    public search(): any {
        
        var url = `http://www.angular.at/api/flug`; 
        var search = new URLSearchParams();
        search.set('abflugort', this.von);
        search.set('zielort', this.nach);
        this.http.get(url, {search})
                 .map(r => r.json())
                 .subscribe(
                     (fluege) => {
                         this.fluege = fluege;
                     },
                     (err) => {
                         console.debug(err);
                     }
                 );
        
    }
    
    public select(flug: any): void {
        this.selectedFlug = flug;
    }
    
    
    
}