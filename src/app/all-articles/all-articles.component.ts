import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesByTopic } from '../models/ArticlesByTopic';
import { ArticleService } from '../services/article.service';
import { baseUrl, appName } from '../services/baseUrl';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {

    this.articleService.getAllArticles(baseUrl+appName+"/allArticles")
          .subscribe((data) =>{
            this.allArticlesData = data;
            console.log(this.allArticlesData);
          });
  }

  allArticlesData : ArticlesByTopic []  = [
    {
      categoryName : "Sports",
      categoryId : "53",
      articles : [
        {articleName : "Dhoni", articleId : 9},
        {articleName : "Sachin", articleId : 5},
        {articleName : "Messi", articleId : 10},
      ]
    },
    {
      categoryName : "Health",
      categoryId : "54",
      articles : [
        {articleName : "Diet", articleId : 69},
        {articleName : "Water", articleId : 65},
        {articleName : "Sleep", articleId : 61},
      ]
    },
    {
      categoryName : "Tech",
      categoryId : "55",
      articles : [
        {articleName : "ChatGpt", articleId : 92},
        {articleName : "AI", articleId : 52},
        {articleName : "ML", articleId : 102},
      ]
    },
  ]


}
