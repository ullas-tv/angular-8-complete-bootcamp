import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  password:String = '';
  length:Number = 0;
  changedLetter:Boolean = false;
  changedNumber:Boolean = false;
  changedChars:Boolean = false;
 
  constructor() {}
  
  ngOnInit() {}
  generatePassword() {

   const num = '1234567890';
   const letters = 'asdfghjklzxcvbnmqwrtyuiop';
   const splchars ='!@#$%^&*()';
    let validChars = '';
    if(this.changedLetter){
      validChars += letters;
    }
    if(this.changedChars){
      validChars += splchars;
    }
    if(this.changedNumber){
      validChars += num;
    }
   let genertaedPwd = '';
    for(let i=0;i<this.length;i++){
      const index = Math.floor(Math.random() * validChars.length);
      genertaedPwd += validChars[index];
    }
    this.password =genertaedPwd;

  }
  onChangeUseLetters(){
    this.changedLetter = !this.changedLetter;
  }
  onChangeUseSymbols(){
    this.changedChars = !this.changedChars;
  }

  onChangeUseNumbers(){
    this.changedNumber = !this.changedNumber;
  }
    
  onChangeLength(eventValue){
    const inplength = parseInt(eventValue);
    console.log(inplength);
    if(!isNaN(inplength)){
      this.length = inplength;
    }
    
  }
}
