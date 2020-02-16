import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-direct",
  templateUrl: "./direct.component.html",
  styleUrls: ["./direct.component.css"]
})
export class DirectComponent implements OnInit {
  course = [1, 2, 3];
  ViewMode = "map";

  tasks = [
    { id: 1, name: "java" },

    { id: 2, name: "php" },
    { id: 3, name: "Node js" }
  ];
  add() {
    this.tasks.push({ id: 4, name: "Mean" });
  }
  remove(task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }
  constructor() {}

  ngOnInit() {}
}
