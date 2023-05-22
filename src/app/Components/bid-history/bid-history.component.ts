import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BidsService } from 'src/app/Service/bids.service';

@Component({
  selector: 'app-bid-history',
  templateUrl: './bid-history.component.html',
  styleUrls: ['./bid-history.component.css'],
})
export class BidHistoryComponent {
  public constructor(
    private myService: BidsService,
    private route: ActivatedRoute
  ) {
    this.id = route.snapshot.params['id'];
  }
  bids: any = {};
  id: any;

  placeBid() {
    console.log('place bid');
  }

  ngOnInit(): void {
    let itemId = this.route.snapshot.params['id'];
    this.myService.GetBidHistoryById(itemId).subscribe((data: any) => {
      data = data.data;
      this.bids.title = data.title;
      this.bids.image = data.image;
      this.bids.currentBid = data.currentBid;
      this.bids.itemNumber = data.itemNumber;
      this.bids.numberOfBids = data.numberOfBids;
      this.bids.numberOfBidders = data.numberOfBidders;
      this.bids.timeLeft = data.timeLeft;
      this.bids.duration = data.duration;
      this.bids.historyOfBids = data.historyOfBids;
    });
  }
}
