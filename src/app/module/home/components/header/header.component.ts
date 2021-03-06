import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { UtilsService } from '../../../../shared/services/util.service';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { AuthshopService } from '../../../auth/authshop.service';
import { AppComponent } from '../../../../app.component';
import { TranslateService } from '@ngx-translate/core';
import { animate, state, style, transition, trigger, group, query, animateChild } from '@angular/animations';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ZipLocationComponent } from '../zip-location/zip-location.component';
import { SideCategoriesComponent } from '../side-categories/side-categories.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TimeagoIntl } from 'ngx-timeago';
import { strings as englishStrings } from 'ngx-timeago/language-strings/en';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
import { Number } from 'core-js';


declare var $: any;
enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('tijl', [
      transition(':enter', [
        style({ transform: 'translateY(-20%)', opacity: '0' }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.2s ease-out', style({ transform: 'translateY(20%)', opacity: '1' }))
      ])
    ]),
    trigger('animationOption2', [
      transition(':enter', [
        style({ transform: 'translateY(-20%)', opacity: '.1' }),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({ transform: 'translateY(-20%)', opacity: '1' }))
      ])
    ])
  ]
})

export class HeaderComponent implements OnInit, AfterViewInit {
  public location: any = null;
  public computer: any;
  public mobile: any;
  public tablet: any;
  public header = false;
  public subMenu = false;
  public fullMenu = false;
  public user_data: any = null;
  public number_items = 0;
  private lat: any = null;
  private lng: any = null;
  public modeOffset: any = false;
  public modeFocus: any = false;
  public animationBell: any = false;
  public menuResponsive = false;
  modalRef: BsModalRef;
  public form: any = FormGroup;
  public time_exp_promo = null;
  config = {};

  constructor(private util: UtilsService, private route: ActivatedRoute, private router: Router,
    private cart: ShoppingCartComponent,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private cookieService: CookieService,
    private intl: TimeagoIntl,
    private deviceService: DeviceDetectorService,
    private auth: AuthshopService, private app: AppComponent,
    private translate: TranslateService) {

    intl.strings = englishStrings;
    intl.changes.next();

    util.getLocation.subscribe(data => {
      this.location = data['zip_code'][0];
      this.lat = data['customer_lat'];
      this.lng = data['customer_lng'];
    });

    // util.modeFocusProduct.subscribe(a => this.modeFocus = a);
    this.form = fb.group({
      'src': '',
    });

    util.modeVideo.subscribe(data => {
      this.modeOffset = data;
    });

    util.numberShopping.subscribe(data => {
      if (data) {
        // tslint:disable-next-line:radix
        this.number_items = this.number_items + parseInt(data);
        this.animationBell = true;
        setTimeout(() => {
          this.animationBell = false;
        }, 1500);
      }
    });

    util.setNumberShopping.subscribe(a => {
      this.number_items = a;
    });

    auth.getLoggedInData.subscribe(data => {
      this.user_data = data;
    });

    util.updateProfile.subscribe(data => {
      this.user_data = this.auth.getCurrentUser();
    });

    this.computer = this.deviceService.isDesktop();
    this.mobile = this.deviceService.isMobile();
    this.tablet = this.deviceService.isTablet();

  }
  public isVisible = true;

  /*@HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }*/

  ngAfterViewInit() {
    /* const scroll$ = fromEvent(window, 'scroll').pipe(
       throttleTime(10),
       map(() => window.pageYOffset),
       pairwise(),
       map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
       distinctUntilChanged(),
       share()
     );
 
     const scrollUp$ = scroll$.pipe(
       filter(direction => direction === Direction.Up)
     );
 
     const scrollDown = scroll$.pipe(
       filter(direction => direction === Direction.Down)
     );
 
     scrollUp$.subscribe(() => (this.isVisible = true));
     scrollDown.subscribe(() => (this.isVisible = false));*/
  }

  searchMobile = (e) => {
    e.stopPropagation();
    this.router.navigateByUrl(`/search/${encodeURI(this.form.value['src'])}`);
  };

  scrollTop = (aid) => {
    const aTag = $(`#${aid}`);
    $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');

  };

  searchFocus = () => {
    console.log('here');
  };

  openZip = () => this.app.open();

  emitBack = () => this.ngOnInit();

  openCategory() {
    const initialState = {
      ignoreBackdropClick: true,
      emitBack: this.emitBack,
    };

    this.modalRef = this.modalService.show(
      SideCategoriesComponent,
      Object.assign({ initialState }, {
        class: 'gray modal-lg top-modal box-shadow-modal side-categories'
      },
        this.config)
    );
    this.modalRef.content.closeBtnName = 'Cerrar';
  }

  ngOnInit() {
    this.user_data = this.auth.getCurrentUser();
    this.location = this.util.getZipCookie();
    const promo_cookie = this.cookieService.get('_p_cookie');
    if (promo_cookie) {
 
      const _time = (JSON.parse(promo_cookie))
        ? JSON.parse(promo_cookie) : null;

      this.time_exp_promo = parseInt(moment(_time['_t']).format('x'))

    }

    if (this.user_data) {
      this.cart.loadData();
    }

    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        const _data = data.state.root.firstChild.data;
        this.header = (_data['header']);
        this.subMenu = (_data['subMenu']);
        this.fullMenu = (_data['fullMenu']);
      }
    });
  }

}