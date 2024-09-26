package com.trainingportal.onlinetraining.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.trainingportal.onlinetraining.CustomResponse.ResponseApi;
import com.trainingportal.onlinetraining.Models.AuthModels;
import com.trainingportal.onlinetraining.Service.AuthService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@CrossOrigin(origins = "http://localhost:5173")

@RestController
@RequestMapping("/api/users")
public class AuthController {
    
    @Autowired
    AuthService authservice;

    @GetMapping("/register/{userName}")
    public ResponseEntity<ResponseApi<AuthModels>> getuser(@PathVariable String userName) {
        AuthModels registeruser = authservice.findByUserName(userName);
        if(registeruser != null){
            ResponseApi<AuthModels> response = new ResponseApi<>("User found", registeruser);
            return ResponseEntity.ok(response);
        }
        else{
            ResponseApi<AuthModels> response = new ResponseApi<>("User Not Found" , null);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    @PostMapping("/postuser")
    public ResponseEntity<ResponseApi<String>> registeruser(@RequestBody AuthModels postdata){
        if(authservice.emailExists(postdata.getEmail())){
          ResponseApi<String> response = new ResponseApi<>("Email Already Exists" , null);
          return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
        else{
            authservice.registerUser(postdata);
            ResponseApi<String> response = new ResponseApi<String>("Registration Successful", null);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        }
    }

    // loginUser
   // @CrossOrigin(origins = "http://localhost:5173/login")

    @PostMapping("/loginUser")
    public ResponseEntity<ResponseApi<String>> loginuser(@RequestBody AuthModels loginrequest){
        AuthModels loginuser = authservice.loginUser(loginrequest.getEmail(), loginrequest.getPassword());

        if(loginuser != null){
            ResponseApi<String> response = new ResponseApi<>("Login Successful", null);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        }
        else{
            ResponseApi<String> response = new ResponseApi<>("Invalid Email Or Password", null);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
 