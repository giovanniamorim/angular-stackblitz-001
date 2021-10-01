import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  router: Router;
  constructor(private route: ActivatedRoute) {}

  goToSecond(): void {
    this.router.navigate(['second-component'], { relativeTo: this.route });
  }
}
