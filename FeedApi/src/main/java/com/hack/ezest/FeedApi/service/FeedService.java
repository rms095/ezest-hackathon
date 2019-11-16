package com.hack.ezest.FeedApi.service;

import com.hack.ezest.FeedApi.entities.FeedEntity;
import com.hack.ezest.FeedApi.repos.FeedRepository;
import com.hack.ezest.FeedApi.util.CsvUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

@Service
public class FeedService {

    @Autowired FeedRepository repository;

    public void saveFeedData(String filePath) throws IOException {
        if(filePath.isEmpty())
            filePath = "C:\\Users\\Rohit\\Documents\\FeedData.csv";
            repository.saveAll(CsvUtils.read(FeedEntity.class, new FileInputStream(new File(filePath))));
    }

    public List<FeedEntity> findAll() {
        return repository.findAll();
    }
}
