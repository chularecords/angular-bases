
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  public characters: Character[] = [{
    name: 'Krilin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 9000

  }

];



onNewCharacter2( character: Character): void{

  this.characters.push(character);
  console.log('Main');
  console.log(character)
}
ondeleteCharacter(index:number){
  this.characters.splice(index, 1);
}

}
