import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Cesar'
  age = 32
  image = 'https://www.motriz.info/wp-content/uploads/2015/06/Corolla-VS-Fluence-DSC_4550-1040x520.jpg'

  btnDisabled = true

  person = {
    name: 'Astrid',
    age: 29
  }

  toggleButton(){
    this.btnDisabled = !this.btnDisabled
  }

  increaseAge(){
    this.person.age += 1
  }

  decreaseAge(){
    this.person.age -= 1
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

}
