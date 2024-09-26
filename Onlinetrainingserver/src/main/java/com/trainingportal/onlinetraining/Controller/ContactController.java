package com.trainingportal.onlinetraining.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trainingportal.onlinetraining.CustomResponse.ResponseApi;
import com.trainingportal.onlinetraining.Models.ContactModels;
import com.trainingportal.onlinetraining.Service.ContactService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class ContactController {
    
    @Autowired
    ContactService contactservice;
    
    @GetMapping("/contact/{userName}")
    public ResponseEntity<ResponseApi<List<ContactModels>>> getmessage(@PathVariable String userName){

        List<ContactModels> getcontact = contactservice.findAllByUserName(userName);

      if(!getcontact.isEmpty()){

        ResponseApi<List<ContactModels>> response = new ResponseApi<>("User Message found", getcontact);
        return ResponseEntity.ok(response);

      }
      else{

        ResponseApi<List<ContactModels>> response = new ResponseApi<>("User Not found", null);
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);

      }

    }

    @PostMapping("/contactus")
    public ResponseEntity<ResponseApi<String>> postmessage(@RequestBody ContactModels message) {

        contactservice.setcontact(message); // Call the set contact method from ContactService

        ResponseApi<String> response = new ResponseApi<String>("Message Sent Successfully", null);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
}
