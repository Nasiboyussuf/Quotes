import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [  ];
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date (quote.completeDate);
    this.quotes.unshift(quote);
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm('Do you want to delete this quote?');
// tslint:disable-next-line: align
        if (toDelete) {
          this.quotes.splice(index, 1);
      }
    }
  }
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }
}

