import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Import IonicModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorate',
  templateUrl: './favorate.page.html',
  styleUrls: ['./favorate.page.scss'],
   standalone: true, // Standalone component
   imports: [IonicModule, CommonModule],
})
export class FavoratePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
