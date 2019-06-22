import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, ContentChildren, QueryList, AfterViewInit, ViewChild, ViewChildren, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { UserService } from '../user.service';
import { BannerComponent } from '../banner/banner.component';
import { Banner2Component } from '../banner2/banner2.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  mybanner: any;

  @ContentChild(ChildComponent, { static: false } ) element: ElementRef;
  @ContentChildren(ChildComponent, { read: ChildComponent } ) elements: QueryList<ChildComponent|ElementRef>;

  @ContentChild(UserService, { read: ChildComponent, static: false  } ) element3: ChildComponent;
  // @ViewChild(ChildComponent, { static: false } ) element2: ElementRef;
  // @ViewChildren(ChildComponent) elements2: QueryList<ChildComponent>;

  constructor(private cfr: ComponentFactoryResolver,
    private view: ViewContainerRef) { }

  ngOnInit() {
    console.log('ngOnInit'); //n

    const bannerFactory = this.cfr.resolveComponentFactory(BannerComponent);
    const bannerComponent = this.view.createComponent(bannerFactory);
    bannerComponent.instance.type = 'bigbanner';

    this.mybanner = BannerComponent;

    setTimeout(_ => {
      this.mybanner = Banner2Component;
    }, 2000); 
  }

  ngAfterContentInit() {
    console.log(this.element);
    console.log('ngAfterContentInit'); //c
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit'); //v
  }
}
