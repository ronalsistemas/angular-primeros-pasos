import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter;

  onDeleteCharacter(id?: string):void {
    // TODO: Emitir el ID del personaje
    if ( !id ) return; // Si no tengo un id, nunca se va llamar

    this.onDelete.emit( id );
  }

 }
