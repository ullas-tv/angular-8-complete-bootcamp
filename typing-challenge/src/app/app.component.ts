import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'typing-challenge';
  enteredText:string = '';
  randomText : string = '';
  
  ngOnInit(){
    this.randomText = this.generateRandomText();
  }

  onUserInput(userInputString: string){
    this.enteredText = userInputString;
  }
  generateRandomText(){
    return lorem.sentence();
  }

  compareText(originalText, currentInputText){
    if(!currentInputText){
      return 'pending';
    }
    return originalText===currentInputText ? 'correct':'incorrect';
  }
}
