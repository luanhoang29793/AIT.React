package com.ait.news.model;


import javax.persistence.*;

@Entity
@Table(name ="contacts")
public class Contacts {
    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private Long idContact;
    private String nameContacts;
    private String message;
    private boolean isDelete;

    public Contacts(){}

    public Long getIdContact() {
        return idContact;
    }

    public void setIdContact(Long idContact) {
        this.idContact = idContact;
    }

    public String getNameContacts() {
        return nameContacts;
    }

    public void setNameContacts(String nameContacts) {
        this.nameContacts = nameContacts;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }
}
