package com.trainingportal.onlinetraining.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trainingportal.onlinetraining.Models.ContactModels;

@Repository
public interface Contactrepo extends JpaRepository < ContactModels , Integer >{

    List <ContactModels> findAllByUserName(String userName);
} 