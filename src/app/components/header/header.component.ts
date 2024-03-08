import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
  ) {}
    
  ngOnInit() {
    this.render();
  }
    
  render() {
    const btnMobile = this.elRef.nativeElement.querySelector('#btn-mobile');

    this.renderer.listen(btnMobile, 'click', this.toggleMenu.bind(this));
  }
  
  toggleMenu() {
    const nav = this.elRef.nativeElement.querySelector('#nav');

    if (nav.classList.contains('active')) {
      this.renderer.removeClass(nav, 'active');
    } else {
      this.renderer.addClass(nav, 'active');
    }
  }
  
  redirecionar() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' || event.url === '/home') {
          window.scrollTo(0, 0);
        }
      }
    });
  }
}