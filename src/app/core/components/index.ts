export * from './auth-failed.component';
export * from './header-bar.component';
export * from './header-bar-brand.component';
export * from './header-bar-links.component';
export * from './nav.component';
export * from './not-found.component';
export * from './sign-in.component';

import { AuthFailedComponent } from './auth-failed.component';
import { AuthLoginComponent } from './auth-login.component';
import { AuthLogoutComponent } from './auth-logout.component';
import { HeaderBarBrandComponent } from './header-bar-brand.component';
import { HeaderBarLinksComponent } from './header-bar-links.component';
import { HeaderBarComponent } from './header-bar.component';
import { NavComponent } from './nav.component';
import { NotFoundComponent } from './not-found.component';
import { SignInComponent } from './sign-in.component';

export const declarations = [
  AuthFailedComponent,
  AuthLoginComponent,
  AuthLogoutComponent,
  NavComponent,
  HeaderBarComponent,
  HeaderBarBrandComponent,
  HeaderBarLinksComponent,
  NotFoundComponent,
  SignInComponent,
];
