package com.ezest.hackathon.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
@Data
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name="pan_number")
    private String panNumber;

    @Column(name="email_id")
    private String emailId;

    @Column(name="name")
    private String name;

    @Column(name="password")
    private String password;

    @Column(name="available_credits")
    private Long availableCredits;

    @Column(name="penalties")
    private Long penalties;
}
