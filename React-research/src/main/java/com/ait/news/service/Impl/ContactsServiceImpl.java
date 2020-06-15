package com.ait.news.service.Impl;

import com.ait.news.model.Contacts;
import com.ait.news.reposirtory.ContactRepository;
import com.ait.news.service.ContactsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class ContactsServiceImpl implements ContactsService {
    @Autowired
    ContactRepository contactRepository;
    @Override
    public Iterable<Contacts> findAll() {
        return contactRepository.findAll();
    }

    @Override
    public void save(Contacts contacts) {
                contactRepository.save(contacts);
    }

    @Override
    public Contacts findById(Long id) {
        return contactRepository.findById(id).get();
    }

    @Override
    public void remove(Long id) {
        contactRepository.deleteById(id);
    }
}
