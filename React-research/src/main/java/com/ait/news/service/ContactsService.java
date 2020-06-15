package com.ait.news.service;

import com.ait.news.model.Contacts;
import org.springframework.stereotype.Component;

@Component

public interface ContactsService {
    Iterable<Contacts> findAll();
    void save (Contacts contacts);
    Contacts findById(Long id);
    void remove (Long id);

}
