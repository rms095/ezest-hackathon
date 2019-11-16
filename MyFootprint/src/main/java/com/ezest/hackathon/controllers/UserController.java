package com.ezest.hackathon.controllers;

import com.ezest.hackathon.entities.UserEntity;
import com.ezest.hackathon.services.UserService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Data
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/user")
    public UserEntity getUser(@RequestParam String emailId) {
        return userService.getUser(emailId);
    }
}
