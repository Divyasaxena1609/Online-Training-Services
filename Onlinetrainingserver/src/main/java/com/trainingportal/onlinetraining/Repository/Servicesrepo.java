package com.trainingportal.onlinetraining.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trainingportal.onlinetraining.Models.ServiceModels;

@Repository
public interface Servicesrepo extends JpaRepository<ServiceModels , Integer>{
    //
}
