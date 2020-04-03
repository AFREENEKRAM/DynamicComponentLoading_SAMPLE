import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HostDirective } from '../host.directive';
import { CompoForLoadingList } from '../CompoForLoadingList';
import { DynamicCompo1Component } from '../dynamic-compo1/dynamic-compo1.component';
import { DynamicCompo2Component } from '../dynamic-compo2/dynamic-compo2.component';

@Component({
  selector: 'app-loading-compo',
  templateUrl: './loading-compo.component.html',
  styleUrls: ['./loading-compo.component.css']
})
export class LoadingCompoComponent implements OnInit {

  @ViewChild(HostDirective,{ static: false }) dynamicCompoHost: HostDirective;

  lookupComponents: CompoForLoadingList[];

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {

    this.lookupComponents = [
      new CompoForLoadingList('compo1', DynamicCompo1Component),
      new CompoForLoadingList('compo2', DynamicCompo2Component)
    ]
  }

  showCompo = (lookupId: string) => {
    
    //this.store.dispatch<any>(this.commonActions.showLookup());
    const lookupIndex = this.lookupComponents.findIndex(element => {
      return element.componentId === lookupId;
    });

    this.loadLookupComponent(lookupIndex);
  };

  loadLookupComponent = (clickIndex) => {
    const componentItem = this.lookupComponents[clickIndex];
    const componentObject =
      componentItem.component = componentItem.component;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentObject
    );

    const viewContainerRef = this.dynamicCompoHost.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(componentFactory);

    }
}
