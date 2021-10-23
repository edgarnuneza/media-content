import { Component, OnInit, Renderer2, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  @ViewChild('menubtn', { static: false }) btnMenu!: ElementRef;
  @ViewChild('options', { static: false }) options!: ElementRef;

  @Output() notify = new EventEmitter();

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private authService: AuthServiceService) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.renderer.listen(this.btnMenu.nativeElement, "click", () => {
      this.options.nativeElement.classList.toggle("show");

    });

  }

  changeOption(e: Event) {
    const options = this.elementRef.nativeElement.querySelectorAll(".navbar-option");
  }

  closeSesion() {
    this.authService.closeSesion();
  }

}
