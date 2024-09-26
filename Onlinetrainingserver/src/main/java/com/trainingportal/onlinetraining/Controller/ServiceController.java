package com.trainingportal.onlinetraining.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trainingportal.onlinetraining.CustomResponse.ResponseApi;
import com.trainingportal.onlinetraining.Models.ServiceModels;
import com.trainingportal.onlinetraining.Service.CourseService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class ServiceController {
    
    @Autowired
    CourseService service ;

    @GetMapping("/services")
    public ResponseEntity<ResponseApi<List<ServiceModels>>> getServices(){
        List<ServiceModels> servicelist = service.getList();
        if(!servicelist.isEmpty()){
            ResponseApi<List<ServiceModels>> response = new ResponseApi<>("Service found", servicelist);
            return ResponseEntity.ok(response);
        }
        else{
             ResponseApi<List<ServiceModels>> response = new ResponseApi<>("Service Not found" , null);
             return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @PostMapping("/postservices")
    public ResponseEntity<ResponseApi<String>> postservice(@RequestBody List<ServiceModels> models) {
        service.addlist(models);
        ResponseApi<String> response = new ResponseApi<>("Data Saved Successfully", null);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @PutMapping("/updateservices/{id}")
    public ResponseEntity<ResponseApi<String>> updateservice(@PathVariable int id , @RequestBody ServiceModels updatemodels){
        service.updatelist(id , updatemodels);
        ResponseApi<String> response = new ResponseApi<>("Service updated Sucessfully", null);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/deleteservice/{id}")
    public ResponseEntity<ResponseApi<String>> deleteservice(@PathVariable int id){
        
        service.deletelist(id);
        ResponseApi<String> response = new ResponseApi<String>("Service deleted Sucessfully", null);
        return ResponseEntity.ok(response);
        
    }
}
