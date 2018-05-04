import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';
@Injectable()
export class GithubServices {
    private username:string;
    private client_id = 'Iv1.1ec5275ce5f1e79f';
    private client_secret = '91d5d44c3cbcf9d76e760773defd48e9e05e8ff6';

    constructor(private _http: HttpClient){
        console.log("Gihub Service Connected.")
        this.username = 'dipto0321';
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret);
    }

    updateUsername(username:string){
        this.username = username;
    }
}