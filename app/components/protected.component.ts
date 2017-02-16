import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: 'protected.component.html'
})
export class ProtectedComponent {

  name: string;

  constructor(
        private route: ActivatedRoute,
        private router: Router) {

          this.name = "PROTECTED";

        }

}
