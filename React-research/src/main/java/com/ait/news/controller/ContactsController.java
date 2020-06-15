package com.ait.news.controller;

import com.ait.news.model.Contacts;
import com.ait.news.model.News;
import com.ait.news.service.ContactsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class ContactsController {

    @Autowired
    ContactsService contactsService;
    @GetMapping("/api/contact")
    public Iterable<Contacts> contactList() {
        return contactsService.findAll();
    }
    @GetMapping("/api/contact/{id}")
    public Contacts contacts(@PathVariable long id){
        return  contactsService.findById(id);
    }
    @PostMapping("/api/contact")
    public Contacts addContacts(@RequestBody Contacts contacts){
        contactsService.save(contacts);
        return  contacts;
    }
    @DeleteMapping("api/contact/remove/{id}")
    public ResponseEntity<Contacts> delete(@PathVariable long id){
        contactsService.remove(id);
        return  new ResponseEntity<Contacts>(HttpStatus.OK);
    }
}
