import { Component } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl:"./article.component.html",
  styleUrls: ["./article.component.css"]
})

export class ArticleComponent
{
  title ="Whatever you want";
  content="some content goes here";
  isTechRelated=true;

}
