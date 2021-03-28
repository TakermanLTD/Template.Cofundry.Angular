import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShopComponent } from './shop/shop.component';
import { AccountComponent } from './_components/account/account.component';
import { BrandsComponent } from './_components/brands/brands.component';
import { CartComponent } from './_components/cart/cart.component';
import { DateComponent } from './_components/date/date.component';
import { DatesComponent } from './_components/dates/dates.component';
import { ErrorComponent } from './_components/error/error.component';
import { NewsletterComponent } from './_components/newsletter/newsletter.component';
import { TeamComponent } from './_components/team/team.component';
import { WatchedComponent } from './_components/watched/watched.component';
import { AuthGuard } from './_store/guards/auth.guard';

export const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
  { path: 'blog', component: BlogComponent },
  { path: 'blogpost', component: BlogpostComponent },
  { path: 'brands', component: BrandsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'date', component: DateComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'history', component: History },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsletterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'team', component: TeamComponent },
  { path: 'watched', component: WatchedComponent },
  { path: '', component: ShopComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
