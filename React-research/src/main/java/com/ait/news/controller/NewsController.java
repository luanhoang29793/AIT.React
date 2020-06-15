package com.ait.news.controller;

import com.ait.news.model.News;
import com.ait.news.service.CategoryService;
import com.ait.news.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class NewsController {
    @Autowired
    NewsService newsService;
    @Autowired
    CategoryService categoryService;

    @GetMapping("/api/news")
    public Iterable<News> newsList() {
        return newsService.findAll();
    }

    @GetMapping("/api/news/top5")
    public Iterable<News> newsListDescTop5() {
        return newsService.findAllTop5();
    }

    @GetMapping("/api/news/listNews/{id}")
    public Iterable<News> newsListByIdCategory(@PathVariable ("id")Long id) {
        return newsService.findAllByCategory_IdCategory(id);
    }
    @GetMapping("/api/news/{id}")
    public News news(@PathVariable long id){
        return  newsService.findById(id);
    }
    @PostMapping("/api/news")
    public News addNews(@RequestBody News news){
        newsService.save(news);

        return  news;
    }
    @DeleteMapping("api/news/remove/{id}")
    public ResponseEntity<News> delete(@PathVariable long id){
        newsService.remove(id);
        return  new ResponseEntity<News>(HttpStatus.OK);
    }

}
