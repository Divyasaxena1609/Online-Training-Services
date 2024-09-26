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
@Table(name = "Contact")
public class ContactModels {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "User_Id" , nullable = false , unique = true)
    private int id;

    @Column(name = "User_Name" , nullable = false)
    private String userName;

    @Column(name = "User_Email" , nullable = false)
    private String email;

    @Column(name = "User_Message" , nullable = false)
    private String message; 

    public ContactModels(){
        //
    }

    public ContactModels(int id , String userName , String email , String message){
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.message = message;
    }

    public int getid(){
        return id;
    }

    public void setid(int id){
        this.id = id;
    }

    public String getuserName(){
        return userName;
    }

    public void setuserName(String userName){
        this.userName = userName;
    }

    public String getemail(){
        return email;
    }

    public void setemail(String email){
        this.email = email;
    }

    public String getmessage(){
        return message;
    }

    public void setmessage(String message){
        this.message = message;
    }
}
