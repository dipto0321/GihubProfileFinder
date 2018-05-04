import { Component } from '@angular/core';
import {GithubServices} from '../services/github.services';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [GithubServices]
})
export class ProfileComponent{
    userData:any;
    repos:any[];
    username:string;

    constructor(private _githubService: GithubServices){
        this.userData = false;

    }

    searchUser(){
        this._githubService.updateUsername(this.username);
        this._githubService.getUser().subscribe(user=>{
            this.userData = user as any;
        });
        this._githubService.getRepos().subscribe(repos=>{
            this.repos = repos as any;
        });
    }

}
