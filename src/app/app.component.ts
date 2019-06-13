import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ZipLocationComponent} from './module/home/components/zip-location/zip-location.component';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apatxee';

  modalRef: BsModalRef;
  config = {
    ignoreBackdropClick: true
  };
  cookie_zip_code = null;
  loading = false;
  public activeLang = 'es';
  constructor(private modalService: BsModalService, private router: Router, private translate: TranslateService,
    private cookieService: CookieService) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    this.cookie_zip_code = this.cookieService.get('_location_zip_code');
    this.translate.setDefaultLang(this.activeLang);
  }

  emitBack = () => this.ngOnInit();

  open() {
    const initialState = {
      ignoreBackdropClick: true,
      emitBack: this.emitBack,
    };

    this.modalRef = this.modalService.show(
      ZipLocationComponent,
      Object.assign({initialState}, {
          class: 'gray modal-md top-modal box-shadow-modal'
        },
        this.config)
    );
    this.modalRef.content.closeBtnName = 'Cerrar';
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false;
    }
    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }


  ngOnInit() {
    const _location = localStorage.getItem('_location');
    if (!_location) {
      window.scrollTo(0, 0);
      if(!this.cookie_zip_code){
        this.open();
      }
    }
  }
}
