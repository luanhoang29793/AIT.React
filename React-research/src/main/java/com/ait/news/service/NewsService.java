package com.ait.news.service;

import com.ait.news.model.News;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
@Component

public interface NewsService{
    Iterable<News> findAll();
    void save (News news);
    News findById(Long id);
    void upLoadFile (MultipartFile file) throws IOException;
    void remove (Long id);
    Iterable<News> findAllByCategory_IdCategory(Long id);
    Iterable<News> findAllTop5();

}
