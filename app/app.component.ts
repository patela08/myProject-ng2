import { Component } from '@angular/core';

export class Hero{
  id : number;
  name :  string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },

];




@Component({
  selector: 'my-app',
//   template: `<h1 style="color:red">Hello {{name}}</h1>
// <div>
//   <h1> {{title}} </h1>
//   <h2>My Heroes</h2>
//   <ul class="heroes">
//     <li *ngFor = "let heroi of heroes"
//         [class.selected]="heroi === selectedHero" (click)="onSelect(heroi)">
//       <span class="badge">{{heroi.id}}</span> {{heroi.name}}
//     </li>
//   </ul>
//   <div *ngIf="selectedHero">
//     <h2>{{selectedHero.name}} details!</h2>
//     <div><label>id: </label>{{selectedHero.id}}</div>
//     <div>
//       <label>name: </label>
//       <input [(ngModel)]="selectedHero.name" placeholder="name"/>
//     </div>
//   </div>
//   <h2> {{myHero.name}} Details!</h2>
//   <div>
//     <label>Id : </label>
//     {{myHero.id}}
//   </div>
//   <div>
//     <label>Name : </label>
//     <input [(ngModel)]="myHero.name" placeholder="Name"/>
//   </div>
// </div>`,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
  templateUrl: './app/app.component.html'
})

export class AppComponent  {
  name = 'Axar';
  title = 'Tour of Heroes';
  heroes = HEROES;
  myHero : Hero = {
    id : 1,
    name:  "Windstrom"
  } ;
  selectedHero: Hero;

  onSelect(hero: Hero):void{
    this.selectedHero = hero;
  }
}
export class myApp { }




