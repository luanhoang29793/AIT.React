package com.ait.news.reposirtory;

import com.ait.news.model.Category;
import com.ait.news.model.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.transaction.annotation.Transactional;

public interface NewsRepository extends JpaRepository<News, Long> {
    Iterable<News> findAllByCategory_IdCategory(Long id);

    @Query(value="SELECT TOP 5 * FROM news order by id_news DESC",nativeQuery=true )
    Iterable<News> findAllTop5();



}
