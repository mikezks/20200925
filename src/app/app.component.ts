import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello Angular!';
  myNgMsg = 'Yeah, we are using Bindings! :)';

  handleTitleChange(): void {
    this.title = 'Hello World!';
  }
}
