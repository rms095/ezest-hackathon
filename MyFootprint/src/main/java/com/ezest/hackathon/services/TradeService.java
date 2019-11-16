package com.ezest.hackathon.services;

import com.ezest.hackathon.entities.TradeEntity;
import com.ezest.hackathon.repos.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradeService {

    @Autowired
    TradeRepository repository;

    public void newTrade(TradeEntity tradeEntity) {
        repository.save(tradeEntity);
    }
}
