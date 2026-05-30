package com.example.chatapp.controller;

import com.example.chatapp.dto.ChatMessage;
import com.example.chatapp.service.KafkaProducerService;
import java.security.Principal;
import java.time.LocalDateTime;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    private final KafkaProducerService producerService;
    private final SimpMessagingTemplate messagingTemplate;

    public ChatController(KafkaProducerService producerService,
                          SimpMessagingTemplate messagingTemplate) {
        this.producerService = producerService;
        this.messagingTemplate = messagingTemplate;
    }

    @MessageMapping("/chat.send")
    public void sendMessage(@Payload ChatMessage message, Principal principal) {
        if (principal != null) {
            message.setSender(principal.getName());
        }
        if (message.getTimestamp() == null) {
            message.setTimestamp(LocalDateTime.now());
        }

        String roomId = message.getRoomId() == null || message.getRoomId().isBlank() ? "lobby" : message.getRoomId();
        messagingTemplate.convertAndSend("/topic/chat." + roomId, message);
        producerService.sendMessage(message);
    }
}