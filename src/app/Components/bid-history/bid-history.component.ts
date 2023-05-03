import { Component } from '@angular/core';

@Component({
  selector: 'app-bid-history',
  templateUrl: './bid-history.component.html',
  styleUrls: ['./bid-history.component.css'],
})
export class BidHistoryComponent {
  bids = {
    productName: 'Lorem ipsum dolor sit amet consectetur',
    productImg: 'https://placehold.co/100x100',
    currentBid: 'EUR 181.00',
    itemNumber: '256054407683',
    numberOfBids: 53,
    numberOfBidders: 17,
    retractions: 0,
    timeLeft: '3 hours 17 mins 12 secs',
    duration: '7 days',
    historyOfBids: [
      ['3**9', 'EUR 181.00', '2 May 2023 at 5:03:24am PDT'],
      ['6***u', 'EUR 180.00', '1 May 2023 at 9:20:10pm PDT'],
      ['3***0', 'EUR 180.00', '2 May 2023 at 5:03:20am PDT'],
    ],
  };

  placeBid() {
    console.log('place bid');
  }
}
