package com.trainingportal.onlinetraining.Models;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Component
@Entity
@Table(name = "register")
public class AuthModels {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(name = "User_Id" , nullable = false , unique = true)
    private int userId;

    @Column(name = "User_name" , nullable = false)
    private String userName;

    @Column(name = "Email_Id" , nullable = false)
    private String email;

    @Column(name = "User_Contact" , nullable = false)
    private String contact;

    @Column(name = "User_Password" , nullable = false)
    private String password ;

    public AuthModels(){
        //
    }

    public AuthModels(int userId , String userName , String email , String contact , String password ){
          this.userId = userId;
          this.userName = userName;
          this.email = email;
          this.contact = contact;
          this.password  = password ;
    }

    public int getuserId(){
        return userId;
    }

    public void setUserId(int userId){
         this.userId = userId;
    }
    
    public String getUsername(){
        return userName;
    }

    public void setUserName(String userName){
         this.userName = userName;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
         this.email = email;
    }

    public String getContact(){
        return contact;
    }

    public void setContact(String contact){
         this.contact = contact;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
         this.password = password;
    }

}
