package com.ait.news.controller;

import com.ait.news.model.Category;
import com.ait.news.model.News;
import com.ait.news.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class CategoryController {
    @Autowired

    CategoryService categoryService;



    @GetMapping("/api/category")
    public Iterable<Category> productList() {
        return categoryService.findAll();
    }
    @GetMapping("/api/category/{id}")
    public Category news(@PathVariable long id){
        return  categoryService.findById(id);
    }
    @PostMapping("/api/category")
    public Category addNews(@RequestBody Category category){
        categoryService.save(category);
        return  category;
    }
    @DeleteMapping("api/category/remove/{id}")
    public ResponseEntity<Category> delete(@PathVariable long id){
        categoryService.remove(id);
        return  new ResponseEntity<Category>(HttpStatus.OK);
    }
}
