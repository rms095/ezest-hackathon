package com.hack.ezest.FeedApi;

import com.hack.ezest.FeedApi.service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class FeedApiApplication implements CommandLineRunner {

	@Autowired FeedService feedService;

	public static void main(String[] args) {

		SpringApplication.run(FeedApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		feedService.saveFeedData("");
		System.out.println(feedService.findAll());
	}
}
