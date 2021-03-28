import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, RouterState, UrlSerializer } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StoreModule } from '@ngrx/store';
import { BlogComponent } from './blog/blog.component';
import { AccountComponent } from './_components/account/account.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BrandsComponent } from './_components/brands/brands.component';
import { BreadcrumbComponent } from './_components/breadcrumb/breadcrumb.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DateComponent } from './_components/date/date.component';
import { DatesComponent } from './_components/dates/dates.component';
import { ErrorComponent } from './_components/error/error.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HeaderComponent } from './_components/header/header.component';
import { HistoryComponent } from './_components/history/history.component';
import { ModalComponent } from './_components/modal/modal.component';
import { NewsletterComponent } from './_components/newsletter/newsletter.component';
import { PreloaderComponent } from './_components/preloader/preloader.component';
import { RegisterComponent } from './register/register.component';
import { ScrollToTopComponent } from './_components/scroll-to-top/scroll-to-top.component';
import { ShopComponent } from './shop/shop.component';
import { TeamComponent } from './_components/team/team.component';
import { WatchedComponent } from './_components/watched/watched.component';
import { CartComponent } from './_components/cart/cart.component';
import { ValidationSummaryComponent } from './_components/validation-summary/validation-summary.component';
import { LowerCaseUrlSerializer } from './_interceptors/LowerCaseUrlSerializer';
import { XsrfInterceptor } from './_interceptors/XsrInterceptor';
import { WebHelper } from './_interceptors/WebHelper';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MenuItemsComponent } from './_components/menu-items/menu-items.component';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './_store/effects/auth.effects';
import { reducers } from './_store/reducers/app.reducer';
import { AuthGuard } from './_store/guards/auth.guard';
import { ErrorHandlerService } from './_services/ErrorHandler.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AboutUsComponent,
    AccountComponent,
    BlogpostComponent,
    BrandsComponent,
    BreadcrumbComponent,
    CheckoutComponent,
    ContactUsComponent,
    DateComponent,
    DatesComponent,
    ErrorComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent,
    HistoryComponent,
    ModalComponent,
    NewsletterComponent,
    PreloaderComponent,
    RegisterComponent,
    ScrollToTopComponent,
    ShopComponent,
    TeamComponent,
    WatchedComponent,
    CartComponent,
    ValidationSummaryComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AppRoutingModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {}),
    // StoreModule.forFeature('auth', authReducer),
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true,
    //     strictActionSerializability: true,
    //     strictStateSerializability: true
    //   }
    // }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AuthEffects])
    // EntityDataModule.forRoot({}),
    // StoreRouterConnectingModule.forRoot({
    //   stateKey: 'router',
    //   routerState: RouterState.Minimal
    // })
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer,
    },
    XsrfInterceptor,
    WebHelper,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService, multi: true
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR'
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
