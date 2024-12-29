import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Import IonicModule
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, // Standalone component
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  
    quote: string = ''; // Variable to store the quote
    author: string = '';  // Variable to store the author's name

    constructor(private http: HttpClient) {}
  
    generateQuote() {
      const url = 'https://qapi.vercel.app/api/random'; // API URL
  
      this.http.get<any>(url).subscribe(
        (response) => {
        
          if (response && response.quote) {
            this.quote = response.quote;
            this.author = response.author; 
          }
        },
        (error) => {
          console.error('Error fetching quote:', error);
        }
      );
    }
}
