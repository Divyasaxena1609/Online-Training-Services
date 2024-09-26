package com.trainingportal.onlinetraining.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.trainingportal.onlinetraining.Models.ServiceModels;
import com.trainingportal.onlinetraining.Repository.Servicesrepo;

@Service
public class CourseService {

    @Autowired
    Servicesrepo repo;

    public CourseService(Servicesrepo repo){
        this.repo = repo;
    }

    public List<ServiceModels> getList(){
         return repo.findAll();
    }

    public void setList(ServiceModels newServices){
          repo.save(newServices);
    }

    public void addlist(List<ServiceModels> newmodellist){
        for(ServiceModels mod : newmodellist){
           repo.save(mod);
        }
   }

    public void updatelist(int id , ServiceModels updateService){
        ServiceModels existingservice  = repo.findById(id).
                                          orElseThrow(() -> new RuntimeException("Service not founf with id" + id));
           
        existingservice.setServiceName(updateService.getServiceName());
        existingservice.setPrice(updateService.getPrice());
        existingservice.setDescription(updateService.getDescription());
        existingservice.setProvider(updateService.getProvider());                       
        repo.save(updateService);
    }

    public void deletelist(int id){
         repo.deleteById(id);
    }
} 
