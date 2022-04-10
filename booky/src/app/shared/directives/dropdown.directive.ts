import { Directive, ElementRef, Host, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective
{
  dropDownList: Element;
  @HostBinding("class.show") willShow = false;

  constructor(private element: ElementRef, private render:Renderer2)
  {
  }

  ngOnInit()
  {
    this.dropDownList = this.element.nativeElement.querySelector(".dropdown-menu");
  }

  @HostListener("click") onClickDropdown()
  {
    this.willShow=!this.willShow;

    if (this.willShow){
      this.render.addClass(this.dropDownList,"show");
    }
    else{
      this.render.removeClass(this.dropDownList, "show");
    }
  }

}
