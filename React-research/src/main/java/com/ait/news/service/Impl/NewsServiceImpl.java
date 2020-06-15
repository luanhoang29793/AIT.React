package com.ait.news.service.Impl;

import com.ait.news.model.News;
import com.ait.news.reposirtory.NewsRepository;
import com.ait.news.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import java.io.File;
import java.io.IOException;
@Repository
@Transactional
public class NewsServiceImpl implements NewsService {
    @PersistenceContext
    EntityManager em;

    @Autowired
    private NewsRepository newsRepository;
    @Override
    public Iterable<News> findAll() {
        return newsRepository.findAll();
    }

    @Override
    public void save(News news) {
        newsRepository.save(news);
    }

    @Override
    public News findById(Long id) {
        return newsRepository.findById(id).get();
    }

    @Override
    public void upLoadFile(MultipartFile file) throws IOException {
        file.transferTo(new File("D:\\React-research\\uploads" + file.getOriginalFilename()));

    }

    @Override
    public void remove(Long id) {
        newsRepository.deleteById(id);
    }

    @Override
    public Iterable<News> findAllByCategory_IdCategory(Long id) {
        return newsRepository.findAllByCategory_IdCategory(id);
    }

    @Override

    public Iterable<News> findAllTop5() {
        return newsRepository.findAllTop5();

    }


}
