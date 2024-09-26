package com.trainingportal.onlinetraining.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trainingportal.onlinetraining.Models.ContactModels;
import com.trainingportal.onlinetraining.Repository.Contactrepo;

@Service
public class ContactService {
    
    @Autowired
    Contactrepo repo;

    public ContactService(Contactrepo repo){
        this.repo = repo;
    }

    public List<ContactModels> findAllByUserName(String userName){
        return repo.findAllByUserName(userName);
    }

    public ContactModels setcontact(ContactModels newContact){
         return repo.save(newContact);
    }

}
