package com.ezest.hackathon.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailUtil {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String receiver, String subject, String message) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(receiver);

        msg.setSubject(subject);
        msg.setFrom("rms095@gmail.com");
        msg.setText(message);

        javaMailSender.send(msg);
    }
}
