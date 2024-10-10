import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()

  public ondeleteIdEmitido: EventEmitter<number> = new EventEmitter();

  //  onDeleteId(index:number):void{

  //   console.log(index)

  // }
  onDeleteCharacter(index: number):void{
    this.ondeleteIdEmitido.emit(index);
    console.log(index)
  }

}
