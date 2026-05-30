package com.example.chatapp.service;

import com.example.chatapp.dto.ChatMessage;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    private final SimpMessagingTemplate messagingTemplate;

    public KafkaConsumerService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @KafkaListener(topics = "chat-messages", groupId = "chat-group")
    public void consume(ChatMessage message) {
        String roomId = message.getRoomId() == null || message.getRoomId().isBlank() ? "lobby" : message.getRoomId();
        messagingTemplate.convertAndSend("/topic/chat." + roomId, message);
    }
}