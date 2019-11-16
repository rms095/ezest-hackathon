package com.hack.ezest.FeedApi;

import com.hack.ezest.FeedApi.service.FeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.BufferedReader;
import java.io.InputStreamReader;


@SpringBootApplication
public class FeedApiApplication implements CommandLineRunner {

	@Autowired FeedService feedService;

	public static void main(String[] args) {

		SpringApplication.run(FeedApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		feedService.saveFeedData("");
//		System.out.println(feedService.findAll());

//		String command = "python --version";
//		Process p = Runtime.getRuntime().exec(command );
//		BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
//		String ret = in.readLine();
//		System.out.println("value is : "+ret);

		String fetching = "python --version";
		String[] commandToExecute = new String[]{"cmd.exe", "/c", fetching};
				Process p = Runtime.getRuntime().exec(commandToExecute );
		BufferedReader in = new BufferedReader(new InputStreamReader(p.getInputStream()));
		String ret = in.readLine();
		System.out.println("value is : "+ret);
	}
}
