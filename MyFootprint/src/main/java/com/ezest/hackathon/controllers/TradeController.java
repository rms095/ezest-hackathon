package com.ezest.hackathon.controllers;

import com.ezest.hackathon.entities.TradeEntity;
import com.ezest.hackathon.services.TradeService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Data
public class TradeController {

    @Autowired
    TradeService tradeService;

    @PostMapping()
    public void newTrade(@RequestBody TradeEntity tradeEntity) {
        tradeService.newTrade(tradeEntity);

    }

}
