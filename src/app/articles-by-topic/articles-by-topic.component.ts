import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesByTopic } from '../models/ArticlesByTopic';
import { ArticleService } from '../services/article.service';
import { baseUrl,appName } from '../services/baseUrl';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-by-topic',
  templateUrl: './articles-by-topic.component.html',
  styleUrls: ['./articles-by-topic.component.css']
})
export class ArticlesByTopicComponent implements OnInit {

  constructor(private articleService : ArticleService, private route: ActivatedRoute, private sharedService: SharedService) { 
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe((newCategoryId)=>{
    this.getNewCategoryData(newCategoryId);
    })
}

  ngOnInit(): void {

    this.categoryId = this.route.snapshot.paramMap.get("categoryId");

    this.articleService.getAllArticlesByCategory(baseUrl+appName+"/allArticlesByCategory/"+this.categoryId)
          .subscribe((data) =>{
            this.articlesByTopic = data;
            console.log(this.articlesByTopic);
          });

  }

  clickEventsubscription:Subscription;

  categoryId: string | null = "";

  articlesByTopic : ArticlesByTopic = {
    categoryName : "Sports",
    categoryId : "54",
    articles : [
      {articleName : "Dhoni", articleId : 9},
      {articleName : "Sachin", articleId : 5},
      {articleName : "Messi", articleId : 10},
    ]
  };

  getNewCategoryData(newCategoryId:string) {
    this.categoryId = this.route.snapshot.paramMap.get("categoryId");
    console.log(this.categoryId);

    this.articleService.getAllArticlesByCategory(baseUrl+appName+"/allArticlesByCategory/"+newCategoryId)
                .subscribe((data) =>{
                  this.articlesByTopic = data;
                  console.log(this.articlesByTopic);
            });

  }


}
