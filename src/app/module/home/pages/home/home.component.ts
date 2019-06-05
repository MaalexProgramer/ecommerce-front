import {Component, OnInit, ViewChild} from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import {RestService} from '../../../../shared/services/rest.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images: any;
  public data: any;
  public optionsGallery: any;

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.optionsGallery = {items: 1, dots: false, navigation: true, autoplay: true};
    this.images = ['1', '2', '3'];

    this.rest.get('/rest/banners')
      .then((response: any) => {
        if (response['status'] === 'success') {
          response = response['data'];
          this.data = response['data'];
          console.log('----->', this.data);
        }
      });
  }

}
