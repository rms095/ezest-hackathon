package com.ezest.hackathon.controllers;

import com.ezest.hackathon.util.HttpClientUtil;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class PredictionController {

    @GetMapping("/")
    public String getData() throws IOException {
        return new HttpClientUtil().getData();
    }
}
