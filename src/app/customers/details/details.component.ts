import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { SeoService } from 'src/app/services/seo.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  customerID: string;
  customer: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private seo: SeoService
  ) {}

  ngOnInit() {
    this.customerID = this.route.snapshot.paramMap.get('id');
    this.customer = this.db
      .collection('customers')
      .doc<any>(this.customerID)
      .valueChanges()
      .pipe(
        tap(cust =>
          this.seo.generateTags({
            title: cust.name,
            description: cust.bio,
            image: cust.image
          })
        )
      );
  }
}
