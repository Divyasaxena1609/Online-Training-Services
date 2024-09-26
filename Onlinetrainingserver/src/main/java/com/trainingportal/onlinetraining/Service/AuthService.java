package com.trainingportal.onlinetraining.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trainingportal.onlinetraining.Models.AuthModels;
import com.trainingportal.onlinetraining.Repository.Onlinetrainingrepo;

@Service
public class AuthService {
    
    @Autowired Onlinetrainingrepo repo;

    public AuthService(Onlinetrainingrepo repo){
        this.repo = repo;
    }
     

    // Register User
    
    public AuthModels findByUserName(String userName){
        return repo.findByUserName(userName);
    }

    public  boolean emailExists(String Email){
        return repo.findByEmail(Email) != null;
    }

    public AuthModels registerUser(AuthModels newregister){
        return repo.save(newregister);
    }

    // login User

    public AuthModels loginUser(String email , String password){

        AuthModels loginUser = repo.findByEmail(email);

        if(loginUser != null && loginUser.getPassword().equals(password)){
            return loginUser;  // User Authenticate
        }

        return null;
    }

}
