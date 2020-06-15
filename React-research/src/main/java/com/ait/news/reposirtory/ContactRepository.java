package com.ait.news.reposirtory;

import com.ait.news.model.Contacts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contacts,Long> {
}
