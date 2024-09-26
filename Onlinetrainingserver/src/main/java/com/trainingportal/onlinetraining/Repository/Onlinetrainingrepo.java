package com.trainingportal.onlinetraining.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trainingportal.onlinetraining.Models.AuthModels;


@Repository
public interface Onlinetrainingrepo extends JpaRepository<AuthModels ,  Integer>{
    AuthModels findByUserName(String userName);
    AuthModels findByEmail(String email);
    boolean existsByEmail(String email);
}
