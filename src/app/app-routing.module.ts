import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticlesByTopicComponent } from './articles-by-topic/articles-by-topic.component';

const routes: Routes = [
  {
    component: HomeComponent, 
    path: ""
  },
  {
    component: HomeComponent, 
    path: "home"
  },
  {
    component: PageComponent, 
    path: "article/:articleId"
  },
  {
    component: AllArticlesComponent, 
    path: "allArticles"
  },
  {
    component: CategoriesComponent, 
    path: "categories/:categoryId"
  },
  {
    component: ArticlesByTopicComponent, 
    path: "articlesByTopic/:categoryId"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
