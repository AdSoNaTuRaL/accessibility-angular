import { ComponentRef, EmbeddedViewRef } from '@angular/core';
import { ApplicationRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BodyInjectorService {
  constructor(private appRef: ApplicationRef) {}

  stackBeforeAppRoot(componentRef: ComponentRef<any>): void {
    const DOMElement = this.createDOMElement(componentRef);
    const appRoot = document.body.querySelector('app-root');
    document.body.insertBefore(DOMElement, appRoot);
  }

  private createDOMElement(componentRef: ComponentRef<any>): HTMLElement {
    this.appRef.attachView(componentRef.hostView);
    const DOMElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    return DOMElement;
  }
}
