package com.ezest.hackathon.entities;

import lombok.Data;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "feed")
@Data
public class FeedEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long feedId;

    @Column(name = "pan_number")
    private String panNumber;

    @Column(name = "regional_code")
    private String regionalCode;

    @Column(name = "state_code")
    private String stateCode;

    @Column(name = "geographical_scope")
    private String geographicalScope;

    @Column(name = "gas_consumption")
    private Long gasConsumption;

    @Column(name = "air_transport_consumption")
    private Long airTransportConsumption;

    @Column(name = "road_transport_consumption")
    private Long roadTransportConsumption;

    @Column(name = "electricity_consumption")
    private Long electricityConsumption;

    @Column(name = "updated_date")
    private Date updatedDate;
}
