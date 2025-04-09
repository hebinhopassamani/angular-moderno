import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  //inicio da aplicacao rota vazia
  {
    path: '', pathMatch: 'full', redirectTo: 'products'
  },
  //Lazy Load para products com n components
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then(r => r.APP_ROUTES)
  },
  //Lazy Load para cart com apenas 1 component
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart/cart.component').then(c => c.CartComponent)
  },
]
