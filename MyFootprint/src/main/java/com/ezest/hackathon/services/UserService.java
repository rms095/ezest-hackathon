package com.ezest.hackathon.services;

import com.ezest.hackathon.entities.UserEntity;
import com.ezest.hackathon.repos.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired UserRepository userRepository;

    public UserEntity getUser(String emailId) {
        return userRepository.findByEmailId(emailId);
    }
}
