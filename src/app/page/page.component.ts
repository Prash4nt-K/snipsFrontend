import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { baseUrl, appName } from '../services/baseUrl';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import { ArticleData } from '../models/ArticleData';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private articleService : ArticleService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.articleId = this.route.snapshot.paramMap.get("articleId");
    console.log(this.articleId);

    this.articleService.getArticleById(baseUrl+appName+"/article/"+this.articleId)
          .subscribe((data) =>{
            this.articleData = data;

            console.log(this.articleData);

            this.varComponent = this.sanitizer.bypassSecurityTrustHtml(data.component);
            this.varIntro = this.sanitizer.bypassSecurityTrustHtml(data.intro);

            this.varHtml = this.sanitizer.bypassSecurityTrustHtml(data.html);
            this.varCss = this.sanitizer.bypassSecurityTrustHtml(data.css);
            this.vartTs = this.sanitizer.bypassSecurityTrustHtml(data.ts);

            this.varHtmlComment = this.sanitizer.bypassSecurityTrustHtml(data.htmlComment);
            this.varCssComment = this.sanitizer.bypassSecurityTrustHtml(data.cssComment);
            this.varTsComment = this.sanitizer.bypassSecurityTrustHtml(data.tsComment);

            this.varClosure = this.sanitizer.bypassSecurityTrustHtml(data.closure);
          });

  }

  articleId: string | null = "";


  articleData : ArticleData = {
    articleId : "65",
    articleName : "Messi",
    category : "Sports",
    categoryId : "3",

    component : "Welcome to the article",
    html : "string",
    css : "string",
    ts : "string",

    intro : "string",
    htmlComment : "string",
    cssComment : "string",
    tsComment : "string",
    closure : "string",
  };

  varComponent : SafeHtml = this.articleData.component;
  varIntro : SafeHtml = this.articleData.intro;

  varHtml : SafeHtml = this.articleData.html;
  varCss : SafeHtml = this.articleData.css;
  vartTs : SafeHtml = this.articleData.ts;

  varHtmlComment : SafeHtml = this.articleData.htmlComment;
  varCssComment : SafeHtml = this.articleData.cssComment;
  varTsComment : SafeHtml = this.articleData.tsComment;

  varClosure : SafeHtml = this.articleData.closure;
  
}
