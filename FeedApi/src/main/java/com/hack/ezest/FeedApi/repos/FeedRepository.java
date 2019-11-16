package com.hack.ezest.FeedApi.repos;


import com.hack.ezest.FeedApi.entities.FeedEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedRepository extends JpaRepository<FeedEntity, Long> {
}
