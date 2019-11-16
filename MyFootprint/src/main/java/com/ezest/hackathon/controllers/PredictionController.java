package com.ezest.hackathon.controllers;

import com.ezest.hackathon.util.EmailUtil;
import com.ezest.hackathon.util.HttpClientUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class PredictionController {

    @Autowired
    EmailUtil emailUtil;

    @GetMapping("/")
    public String getData() throws IOException {
        emailUtil.sendEmail("priti.sava@gmail.com", "My Subject", "Text Messge");
        return new HttpClientUtil().getData();
    }
}
