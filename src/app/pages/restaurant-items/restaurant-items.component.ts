import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-restaurant-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restaurant-items.component.html',
  styleUrls: ['./restaurant-items.component.css']
})

export class RestaurantItemsComponent implements OnInit {
  items: Item[] = [
    {
      "restaurantID": 1,
      "price": 0,
      "menuItemName": "Thatte Idli",
      "itemID": 56,
      "description": "Thatte Idli, Mixed Uttapam, Pineapple Sheera, Mysore Masala Dosa, Filtered Coffee, Panneer Butter Masala",
      "restaurantName": "McDonald's",
      "availability": true,
      "photoUrl": "https://b.zmtcdn.com/data/dish_photos/0c8/7703dc100ab1861693504bc37b0550c8.jpg"
    }
  ];

  quantity: number = 1;
  order: Order = {
    "vendorId": 0,
    "restaurantID": 0,
    "vendorName": "string",
    "contactNo": "string",
    "altContactNo": "string",
    "emailId": "string",
    "gstNo": "string",
    "isShopAvailable": true,
    "personalPanNo": "string",
    "businessPanNo": "string",
    "shopAddess": "string",
    "homeAddress": "string",
    "shopTalukaId": 0,
    "homeTalukaId": 0,
    "createdDate": new Date(),
    "isOwnTransporation": true,
    "isVerified": true,
    "verifiedBy": 0,
    "orderItems": []
  };

  selectedFoodItem: Item | null = null;

  constructor(private activate: ActivatedRoute, private master: MasterService, private router: Router) {
    this.activate.params.subscribe((res: any) => {
      this.loadFoodItemsByCategory(res.categoryName);
    });

    const loggedData = localStorage.getItem('user_id');
    if (loggedData != null) {
      const userId = JSON.parse(loggedData);
      this.order.vendorId = userId;
    }
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadFoodItemsByCategory(name: string) {
    this.master.getItemsByCategoryName(name).subscribe((res: any) => {
      this.items = res.data;
    });
  }

  navigate(item: Item) {
    this.router.navigate(['restaurant-items', item.menuItemName]);
  }

  openModal(item: Item) {
    const modal = document.getElementById("myModal");
    if (modal != null) {
      modal.style.display = "block";
    }
    this.selectedFoodItem = item;
  }

  closeModal() {
    const modal = document.getElementById("myModal");
    if (modal != null) {
      modal.style.display = "none";
    }
  }

  placeOrder() {
    if (this.selectedFoodItem) {
      const itemObj = {
        "orderItemId": 0,
        "orderId": 0,
        "itemId": this.selectedFoodItem.itemID,
        "quantity": this.quantity
      };

      this.order.restaurantID = this.selectedFoodItem.restaurantID;
      this.order.orderItems.push(itemObj);
      this.saveCart();
      this.closeModal();
    }
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.order.orderItems));
    alert("Item added successfully!");
  }

  loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.order.orderItems = JSON.parse(savedCart);
    }
  }
}

interface Item {
  restaurantID: number;
  price: number;
  menuItemName: string;
  itemID: number;
  description: string;
  restaurantName: string;
  availability: boolean;
  photoUrl: string;
}

export interface Order {
  vendorId: number;
  vendorName: string;
  contactNo: string;
  altContactNo: string;
  emailId: string;
  gstNo: string;
  isShopAvailable: boolean;
  personalPanNo: string;
  businessPanNo: string;
  shopAddess: string;
  homeAddress: string;
  shopTalukaId: number;
  homeTalukaId: number;
  createdDate: Date;
  isOwnTransporation: boolean;
  isVerified: boolean;
  verifiedBy: number;
  restaurantID: number;
  orderItems: OrderItem[];
}

interface OrderItem {
  orderItemId: number;
  orderId: number;
  itemId: number;
  quantity: number;
}
