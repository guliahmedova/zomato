import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})

export class CategoriesComponent implements OnInit {
  categoryList: Category[] = [
    {
      "categoryId": 14,
      "categoryName": "pizza",
      "photoUrl": "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
      "categoryId": 15,
      "categoryName": "Burger",
      "photoUrl": "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
      "categoryId": 18,
      "categoryName": "Sandwich",
      "photoUrl": "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    },
    {
      "categoryId": 23,
      "categoryName": "Dosa",
      "photoUrl": "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
      "categoryId": 24,
      "categoryName": "panner",
      "photoUrl": "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png"
    },
    {
      "categoryId": 25,
      "categoryName": "chicken",
      "photoUrl": "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
      "categoryId": 26,
      "categoryName": "biryani",
      "photoUrl": "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
      "categoryId": 27,
      "categoryName": "momos",
      "photoUrl": "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
    },
    {
      "categoryId": 28,
      "categoryName": "Dosa",
      "photoUrl": "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
      "categoryId": 29,
      "categoryName": "Rolls",
      "photoUrl": "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
      "categoryId": 30,
      "categoryName": "Cake",
      "photoUrl": "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
      "categoryId": 31,
      "categoryName": "North Indian",
      "photoUrl": "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },
    {
      "categoryId": 33,
      "categoryName": "samosa",
      "photoUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnVgCV-6sbWMQ-OaALcEztviIakZJgzo5Jg&s"
    },
    {
      "categoryId": 37,
      "categoryName": "Egg Noodles",
      "photoUrl": "https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg"
    },
    {
      "categoryId": 42,
      "categoryName": "Shawarma",
      "photoUrl": "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    }
  ];

  constructor(private masterService: MasterService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllFoodCategories();
  };

  loadAllFoodCategories(): void {
    this.masterService.getAllFoodCategory().subscribe((res: any) => {
      this.categoryList = res?.data;
    });
  };

  navigate(item: Category) {
    this.router.navigate(['restaurant-items', item.categoryName]);
  };
};

interface Category {
  categoryId: number;
  categoryName: string;
  photoUrl: string;
};