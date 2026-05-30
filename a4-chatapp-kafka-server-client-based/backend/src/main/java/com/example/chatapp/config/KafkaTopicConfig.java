package com.example.chatapp.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;

@Configuration
public class KafkaTopicConfig {

    @Bean
    @ConditionalOnProperty(name = "app.kafka.create-topic", havingValue = "true")
    public NewTopic chatMessagesTopic() {
        return new NewTopic("chat-messages", 3, (short) 1);
    }
}