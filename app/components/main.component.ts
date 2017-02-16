import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit  {

  name: string;

  constructor(
        private route: ActivatedRoute,
        private router: Router) {

          this.name = "HOME";

        }

}
