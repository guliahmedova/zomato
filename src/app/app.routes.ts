import { Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';

export const routes: Routes = [
    {
        path: "",
        component: CategoriesComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "foodCategory",
        component: CategoriesComponent
    },
    {
        path: "restaurant-items/:categoryName",
        component: RestaurantItemsComponent
    },
    {
        path: "create-order",
        component: CreateOrderComponent
    }
];