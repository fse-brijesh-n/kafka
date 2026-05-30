package com.example.chatapp.service;

import com.example.chatapp.dto.ChatMessage;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class KafkaProducerService {

    private static final Logger log = LoggerFactory.getLogger(KafkaProducerService.class);
    private static final String TOPIC = "chat-messages";

    private final KafkaTemplate<String, ChatMessage> kafkaTemplate;

    public KafkaProducerService(KafkaTemplate<String, ChatMessage> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(ChatMessage message) {
        try {
            kafkaTemplate.send(TOPIC, message.getRoomId(), message);
        } catch (Exception exception) {
            log.warn("Kafka send skipped because broker is unavailable: {}", exception.getMessage());
        }
    }
}