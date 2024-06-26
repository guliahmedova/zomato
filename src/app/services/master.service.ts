import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../pages/login/login.component';
import { Order } from '../pages/restaurant-items/restaurant-items.component';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  cartItems: any = {
    items: []
  };

  constructor(private http: HttpClient) { }

  getAllFoodCategory() {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory');
  };

  getItemsByCategoryName(name: string) {
    return this.http.get('https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory=' + name);
  };

  login(obj: Login) {
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/Login", obj);
  };

  placeOrder(orderObj: Order) {
    return this.http.post("url", orderObj);
  };
};