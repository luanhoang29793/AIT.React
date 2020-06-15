package com.ait.news.service;

import com.ait.news.model.Category;
import org.springframework.stereotype.Component;

@Component
public interface CategoryService {
    Iterable<Category> findAll();
    void save (Category category);
    Category findById(Long id);
    void remove (Long id);
}
