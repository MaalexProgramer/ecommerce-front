import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {CookieLawModule} from 'angular2-cookie-law';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TimeagoModule, TimeagoIntl, TimeagoFormatter, TimeagoCustomFormatter} from 'ngx-timeago';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './module/home/pages/home/home.component';
import {HeaderComponent} from './module/home/components/header/header.component';
import {FooterComponent} from './module/home/components/footer/footer.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgxStarsModule} from 'ngx-stars';
import {NgxPrettyCheckboxModule} from 'ngx-pretty-checkbox';
import {OwlModule} from 'ngx-owl-carousel';
import {RestService} from './shared/services/rest.service';
import {UtilsService} from './shared/services/util.service';
import {LoginComponent} from './module/auth/pages/login/login.component';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {NgxEpicVideoPlayerModule} from 'ngx-epic-video-player';
import {ChartModule} from 'angular-highcharts';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {CountdownModule} from 'ngx-countdown';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BannerComponent} from './module/home/pages/home/banner/banner.component';
import {BoxCategoriesComponent} from './module/home/pages/home/box-categories/box-categories.component';
import {BoxFeaturedProductComponent} from './module/home/pages/home/box-featured-product/box-featured-product.component';
import {BoxShopsComponent} from './module/home/pages/home/box-shops/box-shops.component';
import {ZipLocationComponent} from './module/home/components/zip-location/zip-location.component';
import {BoxInfoComponent} from './module/home/pages/home/box-info/box-info.component';
import {BoxBlogComponent} from './module/home/pages/home/box-blog/box-blog.component';
import {BoxNewsComponent} from './module/home/pages/home/box-news/box-news.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {MiniGalleryProductComponent} from './module/home/pages/home/mini-gallery-product/mini-gallery-product.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgOptionHighlightModule} from '@ng-select/ng-option-highlight';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {CookieService} from 'ngx-cookie-service';
import {ProfileComponent} from './module/home/pages/profile/profile.component';
import {DashboardComponent} from './module/home/pages/dashboard/dashboard.component';
import {SidebarComponent} from './module/home/pages/dashboard/sidebar/sidebar.component';
import {ChartsResumenComponent} from './module/home/pages/dashboard/charts-resumen/charts-resumen.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {LastSellComponent} from './module/home/pages/dashboard/last-sell/last-sell.component';
import {LastOrderComponent} from './module/home/pages/dashboard/last-order/last-order.component';
import {LastTicketsComponent} from './module/home/pages/dashboard/last-tickets/last-tickets.component';
import {AuthGuard} from './module/auth/guards/auth.guard';
import {ShoppingCartComponent} from './module/home/components/shopping-cart/shopping-cart.component';
import {InfoProfileComponent} from './module/home/pages/profile/info-profile/info-profile.component';
import {InfoAccountComponent} from './module/home/pages/profile/info-account/info-account.component';
import {InfoAddressComponent} from './module/home/pages/profile/info-address/info-address.component';
import {InfoBankComponent} from './module/home/pages/profile/info-bank/info-bank.component';
import {ModalBankComponent} from './module/home/pages/profile/modal-bank/modal-bank.component';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {DropTargetOptions, MineTypeEnum, NgxUploadModule} from '@wkoza/ngx-upload';
import {AvatarUploadComponent} from './module/home/pages/profile/avatar-upload/avatar-upload.component';
import {NgxFlagIconCssModule} from 'ngx-flag-icon-css';
import {ModalShippingComponent} from './module/home/pages/profile/modal-shipping/modal-shipping.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {WizardOverlayComponent} from './wizard-overlay/wizard-overlay.component';
import {TabsModule} from 'ngx-bootstrap';
import {NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import {ShopCifComponent} from './module/home/pages/shop/shop-cif/shop-cif.component';
import {ShopComponent} from './module/home/pages/shop/shop.component';
import {InfoShopComponent} from './module/home/pages/shop/info-shop/info-shop.component';
import {InfoShopsComponent} from './module/home/pages/shop/info-shops/info-shops.component';
import {CreateShopComponent} from './module/home/pages/shop/create-shop/create-shop.component';
import {DashboardTotalComponent} from './module/home/pages/shop/dashboard-total/dashboard-total.component';
import {DashboardReviewsComponent} from './module/home/pages/shop/dashboard-reviews/dashboard-reviews.component';
import {ShipmentsComponent} from './module/home/pages/shipments/shipments.component';
import {TransactionsComponent} from './module/home/pages/transactions/transactions.component';
import {PurchaseComponent} from './module/home/pages/purchase/purchase.component';
import {SinglePurchaseComponent} from './module/home/pages/single-purchase/single-purchase.component';
import {ShippingBoxComponent} from './module/home/pages/single-purchase/shipping-box/shipping-box.component';
import {SingleSaleComponent} from './module/home/pages/single-sale/single-sale.component';
import {WelcomeComponent} from './module/home/components/welcome/welcome.component';
import {SalesComponent} from './module/home/pages/sales/sales.component';
import {ProductsComponent} from './module/home/pages/products/products.component';
import {CreateProductComponent} from './module/home/pages/products/create-product/create-product.component';
import {DataProductComponent} from './module/home/pages/products/create-product/data-product/data-product.component';
import {DataCategoriesProductComponent} from './module/home/pages/products/create-product/data-categories-product/data-categories-product.component';
import {DataVariationsProductComponent} from './module/home/pages/products/create-product/data-variations-product/data-variations-product.component';
import {ListProductsComponent} from './module/home/pages/products/list-products/list-products.component';
import {SingleComponent} from './module/home/pages/single/single.component';
import {SearchComponent} from './module/home/components/search/search.component';
import {StoreprofileComponent} from './module/home/pages/store/storeprofile/storeprofile.component';
import {ListProductStoreComponent} from './module/home/pages/store/listproduct/listproduct.component';
import {CarComponent} from './module/home/pages/car/car.component';
import {CheckoutComponent} from './module/home/pages/checkout/checkout.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {DataGalleryProductComponent} from './module/home/pages/products/create-product/data-gallery-product/data-gallery-product.component';
import {DataGalleryProductVariationComponent} from './module/home/pages/products/create-product/data-gallery-product-variation/data-gallery-product-variation.component';
import {LoadingApatxeeComponent} from './module/home/components/loading-apatxee/loading-apatxee.component';
import {TruncateModule} from 'ng2-truncate';
import {GallerySingleComponent} from './module/home/pages/single/gallery-single/gallery-single.component';
import {LogoutComponent} from './module/auth/pages/logout/logout.component';
import {NgxContentLoadingModule} from 'ngx-content-loading';
import {NgxImageZoomModule} from 'ngx-image-zoom';
import {DiscountNumberComponent} from './module/home/components/discount-number/discount-number.component';
import {SideBarCartComponent} from './module/home/components/side-bar-cart/side-bar-cart.component';
import {NgxStripeModule} from 'ngx-stripe';
import {PaymentComponent} from './module/home/pages/payment/payment.component';
import {ThankYouComponent} from './module/home/pages/thank-you/thank-you.component';
import {ErrorPaymentComponent} from './module/home/pages/error-payment/error-payment.component';
import {SchedulesShopComponent} from './module/home/pages/shop/schedules-shop/schedules-shop.component';
import {DateTimePickerModule} from 'ngx-datetime-picker';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import {UiSwitchModule} from 'ngx-ui-switch';
import {TabDayComponent} from './module/home/pages/shop/tab-day/tab-day.component';
import {MediaImageShopComponent} from './module/home/pages/shop/media-image-shop/media-image-shop.component';
import {ModalImageComponent} from './module/home/pages/products/create-product/modal-image/modal-image.component';
import {ModalShoppingComponent} from './module/home/components/modal-shopping/modal-shopping.component';
import {BlockLoginComponent} from './module/auth/pages/login/block-login/block-login.component';
import {ModalVariationsProductComponent} from './module/home/pages/products/create-product/modal-variations-product/modal-variations-product.component';
import {ModalProductBankComponent} from './module/home/pages/products/create-product/modal-product-bank/modal-product-bank.component';
import {SingleBlogComponent} from './module/home/pages/single-blog/single-blog.component';
import {AddressShoppingCartComponent} from './module/home/components/address-shopping-cart/address-shopping-cart.component';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {ModalWarningComponent} from './module/home/components/modal-warning/modal-warning.component';
import {CommonModule} from '@angular/common';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {NgtUniversalModule} from '@ng-toolkit/universal';
import {DetailProductSaleComponent} from './module/home/pages/single-sale/detail-product-sale/detail-product-sale.component';
import {ShotCodeShopComponent} from './module/home/components/shot-code-shop/shot-code-shop.component';
import {InsideFilterNavComponent} from './module/home/components/inside-filter-nav/inside-filter-nav.component';
import {PreviewProductComponent} from './module/home/components/preview-product/preview-product.component';
import {FilterAttributesComponent} from './module/home/pages/store/filter-attributes/filter-attributes.component';
import {SearchPageComponent} from './module/home/pages/search-page/search-page.component';
import {ListProductGlobalComponent} from './module/home/components/list-product-global/list-product-global.component';
import {SearchPageCategoryComponent} from './module/home/pages/search-page-category/search-page-category.component';
import {SideCategoriesComponent} from './module/home/components/side-categories/side-categories.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {ClickOutsideModule} from 'ng-click-outside';
import {LightboxModule} from 'ngx-lightbox';
import {PreventWizardComponent} from './module/home/components/prevent-wizard/prevent-wizard.component';
import {ModalFilterAttributesComponent} from './module/home/components/modal-filter-attributes/modal-filter-attributes.component';
import {PickupAddressComponent} from './module/home/components/pickup-address/pickup-address.component';
import {BoxListProductComponent} from './module/home/pages/home/box-list-product/box-list-product.component';
import {environment} from '../environments/environment';
import {ReferredComponent} from './module/home/components/referred/referred.component';
import {ReviewComponent} from './module/home/pages/single/review/review.component';
import {PricePipePipe} from './shared/pricePipe/price-pipe.pipe';

export const ngxDropTargetOptions: DropTargetOptions = {
  color: 'dropZoneColor',
  colorDrag: 'dropZoneColorDrag',
  colorDrop: 'dropZoneColorDrop',
  multiple: false,
  accept: [MineTypeEnum.Image]
};

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.google_provider)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider(environment.fb_provider)
  }
]);

export function provideConfig() {
  return config;
}

export class MyIntl extends TimeagoIntl {
  // do extra stuff here...
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BannerComponent,
    BoxCategoriesComponent,
    BoxFeaturedProductComponent,
    BoxShopsComponent,
    ZipLocationComponent,
    BoxInfoComponent,
    BoxBlogComponent,
    BoxNewsComponent,
    MiniGalleryProductComponent,
    ProfileComponent,
    DashboardComponent,
    SidebarComponent,
    ChartsResumenComponent,
    LastSellComponent,
    LastOrderComponent,
    ListProductGlobalComponent,
    LastTicketsComponent,
    ShoppingCartComponent,
    InfoProfileComponent,
    InfoAccountComponent,
    InfoAddressComponent,
    InfoBankComponent,
    ModalBankComponent,
    AvatarUploadComponent,
    ModalShippingComponent,
    WizardOverlayComponent,
    ShopCifComponent,
    ShopComponent,
    InfoShopComponent,
    InfoShopsComponent,
    CreateShopComponent,
    DashboardTotalComponent,
    DashboardReviewsComponent,
    ShipmentsComponent,
    TransactionsComponent,
    PurchaseComponent,
    SinglePurchaseComponent,
    ShippingBoxComponent,
    SingleSaleComponent,
    WelcomeComponent,
    SalesComponent,
    ProductsComponent,
    CreateProductComponent,
    DataProductComponent,
    DataCategoriesProductComponent,
    DataVariationsProductComponent,
    ListProductsComponent,
    SingleComponent,
    SearchComponent,
    StoreprofileComponent,
    ListProductStoreComponent,
    CarComponent,
    CheckoutComponent,
    DataGalleryProductComponent,
    DataGalleryProductVariationComponent,
    LoadingApatxeeComponent,
    GallerySingleComponent,
    LogoutComponent,
    DiscountNumberComponent,
    SideBarCartComponent,
    PaymentComponent,
    ThankYouComponent,
    ErrorPaymentComponent,
    SchedulesShopComponent,
    TabDayComponent,
    MediaImageShopComponent,
    ModalImageComponent,
    ModalShoppingComponent,
    BlockLoginComponent,
    ModalVariationsProductComponent,
    ModalProductBankComponent,
    SingleBlogComponent,
    AddressShoppingCartComponent,
    ModalWarningComponent,
    DetailProductSaleComponent,
    ShotCodeShopComponent,
    InsideFilterNavComponent,
    PreviewProductComponent,
    FilterAttributesComponent,
    SearchPageComponent,
    SearchPageCategoryComponent,
    SideCategoriesComponent,
    PreventWizardComponent,
    ModalFilterAttributesComponent,
    PickupAddressComponent,
    BoxListProductComponent,
    ReferredComponent,
    ReviewComponent,
    PricePipePipe,
  ],
  imports: [
    LoadingBarHttpClientModule,
    CookieLawModule,
    CountdownModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    NgxGalleryModule,
    AngularFontAwesomeModule,
    OwlModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    HttpClientModule,
    GooglePlaceModule,
    NgxDropzoneModule,
    NgxContentLoadingModule,
    NgxStarsModule,
    NgxFlagIconCssModule,
    ChartModule,
    VgCoreModule,
    TruncateModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    UiSwitchModule,
    NgxEpicVideoPlayerModule,
    NgxPrettyCheckboxModule,
    DateTimePickerModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ClickOutsideModule,
    Ng2TelInputModule,
    LightboxModule,
    QuillModule.forRoot(),
    DeviceDetectorModule.forRoot(),
    NgxDaterangepickerMd.forRoot(),
    PaginationModule.forRoot(),
    AccordionModule.forRoot(),
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxStripeModule.forRoot(environment.stripe_public_key),
    TabsModule.forRoot(),
    NgxImageZoomModule.forRoot(),
    NgxUploadModule.forRoot(ngxDropTargetOptions),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    TimeagoModule.forRoot({
      intl: {provide: TimeagoIntl, useClass: MyIntl},
      formatter: {provide: TimeagoFormatter, useClass: TimeagoCustomFormatter},
    }),
    NgxPageScrollCoreModule.forRoot({duration: 2500}),
    NgxChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    CommonModule,
    TransferHttpCacheModule,
    NgtUniversalModule
  ],

  providers: [
    RestService,
    UtilsService,
    AuthGuard,
    BsModalService,
    BsModalRef,
    BoxFeaturedProductComponent,
    ZipLocationComponent,
    ShoppingCartComponent,
    ModalBankComponent,
    SidebarComponent,
    CookieService,
    ListProductStoreComponent,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  entryComponents: [
    ZipLocationComponent,
    ModalBankComponent,
    ModalShippingComponent,
    WelcomeComponent,
    ModalImageComponent,
    ModalShoppingComponent,
    ModalVariationsProductComponent,
    ModalProductBankComponent,
    PreventWizardComponent,
    ModalWarningComponent,
    SideCategoriesComponent,
    ModalFilterAttributesComponent,
    ReferredComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
