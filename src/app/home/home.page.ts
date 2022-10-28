import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // data: any[] = [];
  data: any= {};

  constructor(public http: HttpClient) {
    this.getData();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDark.addListener((mediaQuery) =>{
      console.log(mediaQuery);
    this.toggleDarkTheme(mediaQuery.matches);

  });
}

  getData(){
    // this.http.get<any>('https://jsonplaceholder.typicode.com/todos').subscribe(data => {   // fetch all data
      this.http.get<any>('https://jsonplaceholder.typicode.com/todos/2').subscribe(data => {
      console.log(data);
      this.data= data;
    },e=>{
      console.log(e);
    });
  }

  postData(){
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // this.http.post<any>('https://jsonplaceholder.typicode.com/todos',
    // {
    //   title: 'ABCD',
    //   completed: true,
    //   userId: 40
    // }).subscribe(data =>{
    //   console.log(data);
    //   this.data = data;
    // },e =>{
    //   console.log(e);
    // });

    this.http.put<any>('https://jsonplaceholder.typicode.com/todos',
    {
      title: 'ABCD',
      completed: true,
      userId: 40
    }).subscribe(data =>{
      console.log(data);
      this.data = data;
    },e =>{
      console.log(e);
    });
  }

  toggleDarkTheme(dark){
    document.body.classList.toggle('dark', dark);
  }

  toggle(event){
    const check = event.detail.checked;
    console.log(check);
    this.toggleDarkTheme(check);

  }

}
