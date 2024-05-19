import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticlesByTopicComponent } from './articles-by-topic/articles-by-topic.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageComponent,
    AllArticlesComponent,
    CategoriesComponent,
    ArticlesByTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
