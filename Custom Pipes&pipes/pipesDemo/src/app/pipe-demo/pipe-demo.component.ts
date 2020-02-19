import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipe-demo",
  templateUrl: "./pipe-demo.component.html",
  styleUrls: ["./pipe-demo.component.css"]
})
export class PipeDemoComponent implements OnInit {
  text = "hello welcome in custome pipe demosdfghjklkjhgfdsdfghjklkjhgfdfghjkl";
  course = {
    id: 1,
    name: "mosh",
    rating: 4.9,
    price: 3000,
    releaseDate: new Date(2020, 3, 2)
  };

  constructor() {}

  ngOnInit() {}
}
