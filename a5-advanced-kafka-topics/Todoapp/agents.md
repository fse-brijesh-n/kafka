Complete Todo App with Kafka, ExecutorService & CompletableFuture

Copy each file to the exact path shown.

---

File 1: pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.5</version>
        <relativePath/>
    </parent>

    <groupId>com.example</groupId>
    <artifactId>todo-kafka-app</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>todo-kafka-app</name>
    <description>Todo app with Kafka, ExecutorService, CompletableFuture and Subscriptions</description>

    <properties>
        <java.version>17</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.kafka</groupId>
            <artifactId>spring-kafka</artifactId>
        </dependency>

        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.projectlombok</groupId>
                            <artifactId>lombok</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

---

File 2: src/main/resources/application.properties

```properties
# ==================== KAFKA CONFIGURATION ====================
spring.kafka.bootstrap-servers=localhost:9092

# ==================== PRODUCER ====================
spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
spring.kafka.producer.value-serializer=org.springframework.kafka.support.serializer.JsonSerializer

# ==================== CONSUMER ====================
spring.kafka.consumer.group-id=notification-group
spring.kafka.consumer.auto-offset-reset=earliest
spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
spring.kafka.consumer.value-deserializer=org.springframework.kafka.support.serializer.JsonDeserializer
spring.kafka.consumer.properties.spring.json.trusted.packages=com.example.todokafkaapp.model
```

---

File 3: src/main/java/com/example/todokafkaapp/TodoKafkaAppApplication.java

```java
package com.example.todokafkaapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoKafkaAppApplication {
    public static void main(String[] args) {
        SpringApplication.run(TodoKafkaAppApplication.class, args);
    }
}
```

---

File 4: src/main/java/com/example/todokafkaapp/model/Todo.java

```java
package com.example.todokafkaapp.model;

import java.time.LocalDateTime;
import java.util.UUID;

public class Todo {

    private String id;
    private String title;
    private boolean completed;
    private LocalDateTime createdAt;

    public Todo() {
    }

    public Todo(String title) {
        this.id = UUID.randomUUID().toString();
        this.title = title;
        this.completed = false;
        this.createdAt = LocalDateTime.now();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", completed=" + completed +
                ", createdAt=" + createdAt +
                '}';
    }
}
```

---

File 5: src/main/java/com/example/todokafkaapp/model/EventType.java

```java
package com.example.todokafkaapp.model;

public enum EventType {
    CREATED,
    UPDATED
}
```

---

File 6: src/main/java/com/example/todokafkaapp/model/TodoEvent.java

```java
package com.example.todokafkaapp.model;

import java.time.LocalDateTime;
import java.util.UUID;

public class TodoEvent {

    private String eventId;
    private String type;
    private Todo todo;
    private LocalDateTime timestamp;

    public TodoEvent() {
    }

    public TodoEvent(String type, Todo todo) {
        this.eventId = UUID.randomUUID().toString();
        this.type = type;
        this.todo = todo;
        this.timestamp = LocalDateTime.now();
    }

    public String getEventId() {
        return eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Todo getTodo() {
        return todo;
    }

    public void setTodo(Todo todo) {
        this.todo = todo;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "TodoEvent{" +
                "eventId='" + eventId + '\'' +
                ", type='" + type + '\'' +
                ", todo=" + todo +
                ", timestamp=" + timestamp +
                '}';
    }
}
```

---

File 7: src/main/java/com/example/todokafkaapp/model/Subscriber.java

```java
package com.example.todokafkaapp.model;

import java.time.LocalDateTime;
import java.util.UUID;

public class Subscriber {

    private String id;
    private String email;
    private String name;
    private boolean active;
    private LocalDateTime subscribedAt;

    public Subscriber() {
    }

    public Subscriber(String email, String name) {
        this.id = UUID.randomUUID().toString();
        this.email = email;
        this.name = name;
        this.active = true;
        this.subscribedAt = LocalDateTime.now();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public LocalDateTime getSubscribedAt() {
        return subscribedAt;
    }

    public void setSubscribedAt(LocalDateTime subscribedAt) {
        this.subscribedAt = subscribedAt;
    }

    @Override
    public String toString() {
        return "Subscriber{" +
                "id='" + id + '\'' +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", active=" + active +
                '}';
    }
}
```

---

File 8: src/main/java/com/example/todokafkaapp/repository/TodoRepository.java

```java
package com.example.todokafkaapp.repository;

import com.example.todokafkaapp.model.Todo;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class TodoRepository {

    private final ConcurrentHashMap<String, Todo> store = new ConcurrentHashMap<>();

    public Todo save(Todo todo) {
        store.put(todo.getId(), todo);
        return todo;
    }

    public Optional<Todo> findById(String id) {
        return Optional.ofNullable(store.get(id));
    }

    public Collection<Todo> findAll() {
        return store.values();
    }

    public Todo update(Todo todo) {
        store.put(todo.getId(), todo);
        return todo;
    }

    public void deleteById(String id) {
        store.remove(id);
    }
}
```

---

File 9: src/main/java/com/example/todokafkaapp/repository/SubscriptionRepository.java

```java
package com.example.todokafkaapp.repository;

import com.example.todokafkaapp.model.Subscriber;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Repository
public class SubscriptionRepository {

    private final ConcurrentHashMap<String, Subscriber> store = new ConcurrentHashMap<>();

    public Subscriber save(Subscriber subscriber) {
        store.put(subscriber.getId(), subscriber);
        return subscriber;
    }

    public Optional<Subscriber> findById(String id) {
        return Optional.ofNullable(store.get(id));
    }

    public Optional<Subscriber> findByEmail(String email) {
        return store.values().stream()
                .filter(s -> s.getEmail().equalsIgnoreCase(email))
                .findFirst();
    }

    public Collection<Subscriber> findAll() {
        return store.values();
    }

    public Collection<Subscriber> findAllActive() {
        return store.values().stream()
                .filter(Subscriber::isActive)
                .collect(Collectors.toList());
    }

    public void deleteById(String id) {
        store.remove(id);
    }

    public Subscriber update(Subscriber subscriber) {
        store.put(subscriber.getId(), subscriber);
        return subscriber;
    }
}
```

---

File 10: src/main/java/com/example/todokafkaapp/config/AsyncConfig.java

```java
package com.example.todokafkaapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Configuration
public class AsyncConfig {

    @Bean("notificationExecutor")
    public ExecutorService notificationExecutor() {
        return Executors.newFixedThreadPool(4, r -> {
            Thread t = new Thread(r, "notification-worker");
            t.setDaemon(true);
            return t;
        });
    }
}
```

---

File 11: src/main/java/com/example/todokafkaapp/service/TodoEventProducer.java

```java
package com.example.todokafkaapp.service;

import com.example.todokafkaapp.model.TodoEvent;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class TodoEventProducer {

    private static final String TOPIC = "todo-events";
    private final KafkaTemplate<String, TodoEvent> kafkaTemplate;

    public TodoEventProducer(KafkaTemplate<String, TodoEvent> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void publish(TodoEvent event) {
        kafkaTemplate.send(TOPIC, event.getTodo().getId(), event)
                .thenAccept(result -> {
                    System.out.println("Published event: " + event.getEventId() +
                            " offset=" + result.getRecordMetadata().offset());
                })
                .exceptionally(ex -> {
                    System.err.println("Failed to publish event: " + ex.getMessage());
                    return null;
                });
    }
}
```

---

File 12: src/main/java/com/example/todokafkaapp/service/TodoService.java

```java
package com.example.todokafkaapp.service;

import com.example.todokafkaapp.model.EventType;
import com.example.todokafkaapp.model.Todo;
import com.example.todokafkaapp.model.TodoEvent;
import com.example.todokafkaapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository repository;
    private final TodoEventProducer eventProducer;

    public TodoService(TodoRepository repository, TodoEventProducer eventProducer) {
        this.repository = repository;
        this.eventProducer = eventProducer;
    }

    public Todo create(String title) {
        Todo todo = new Todo(title);
        repository.save(todo);

        TodoEvent event = new TodoEvent(EventType.CREATED.name(), todo);
        eventProducer.publish(event);

        return todo;
    }

    public Collection<Todo> getAll() {
        return repository.findAll();
    }

    public Optional<Todo> getById(String id) {
        return repository.findById(id);
    }

    public Optional<Todo> toggleCompleted(String id) {
        Optional<Todo> optionalTodo = repository.findById(id);
        if (optionalTodo.isPresent()) {
            Todo todo = optionalTodo.get();
            todo.setCompleted(!todo.isCompleted());
            repository.update(todo);

            TodoEvent event = new TodoEvent(EventType.UPDATED.name(), todo);
            eventProducer.publish(event);

            return Optional.of(todo);
        }
        return Optional.empty();
    }

    public boolean delete(String id) {
        Optional<Todo> optionalTodo = repository.findById(id);
        if (optionalTodo.isPresent()) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
```

---

File 13: src/main/java/com/example/todokafkaapp/service/SubscriptionService.java

```java
package com.example.todokafkaapp.service;

import com.example.todokafkaapp.model.Subscriber;
import com.example.todokafkaapp.repository.SubscriptionRepository;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class SubscriptionService {

    private final SubscriptionRepository repository;

    public SubscriptionService(SubscriptionRepository repository) {
        this.repository = repository;
    }

    public Subscriber subscribe(String email, String name) {
        Optional<Subscriber> existing = repository.findByEmail(email);
        if (existing.isPresent()) {
            throw new RuntimeException("Email already subscribed: " + email);
        }

        Subscriber subscriber = new Subscriber(email, name);
        return repository.save(subscriber);
    }

    public Collection<Subscriber> getAll() {
        return repository.findAll();
    }

    public Collection<Subscriber> getAllActive() {
        return repository.findAllActive();
    }

    public Optional<Subscriber> getById(String id) {
        return repository.findById(id);
    }

    public Optional<Subscriber> toggleActive(String id) {
        Optional<Subscriber> optional = repository.findById(id);
        if (optional.isPresent()) {
            Subscriber subscriber = optional.get();
            subscriber.setActive(!subscriber.isActive());
            repository.update(subscriber);
            return Optional.of(subscriber);
        }
        return Optional.empty();
    }

    public boolean unsubscribe(String id) {
        Optional<Subscriber> optional = repository.findById(id);
        if (optional.isPresent()) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
```

---

File 14: src/main/java/com/example/todokafkaapp/service/NotificationService.java

```java
package com.example.todokafkaapp.service;

import com.example.todokafkaapp.model.Subscriber;
import com.example.todokafkaapp.model.TodoEvent;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Service
public class NotificationService {

    private final ExecutorService executor;
    private final SubscriptionService subscriptionService;

    public NotificationService(@Qualifier("notificationExecutor") ExecutorService executor,
                               SubscriptionService subscriptionService) {
        this.executor = executor;
        this.subscriptionService = subscriptionService;
    }

    @KafkaListener(topics = "todo-events", groupId = "notification-group")
    public void onTodoEvent(TodoEvent event) {
        System.out.println("Received event: " + event.getEventId() +
                " on thread " + Thread.currentThread().getName());

        Collection<Subscriber> activeSubscribers = subscriptionService.getAllActive();

        if (activeSubscribers.isEmpty()) {
            System.out.println("No active subscribers to notify for event: " + event.getEventId());
            return;
        }

        System.out.println("Notifying " + activeSubscribers.size() + " active subscribers...");

        List<CompletableFuture<String>> notificationFutures = activeSubscribers.stream()
                .map(subscriber -> CompletableFuture
                        .supplyAsync(() -> sendNotification(subscriber, event), executor)
                        .orTimeout(3, TimeUnit.SECONDS)
                        .exceptionally(ex -> "FAILED for " + subscriber.getEmail() + ": " + ex.getMessage())
                )
                .collect(Collectors.toList());

        CompletableFuture<Void> allNotifications = CompletableFuture.allOf(
                notificationFutures.toArray(new CompletableFuture[0])
        );

        allNotifications.thenRunAsync(() -> {
            long successCount = notificationFutures.stream()
                    .filter(f -> {
                        try {
                            return f.get().startsWith("Sent");
                        } catch (Exception e) {
                            return false;
                        }
                    })
                    .count();
            System.out.println("Notification summary: " + successCount + "/" +
                    notificationFutures.size() + " sent successfully for event " + event.getEventId());
        }, executor);
    }

    private String sendNotification(Subscriber subscriber, TodoEvent event) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        String action = event.getType().equals("CREATED") ? "created" : "updated";
        String message = "Sent to " + subscriber.getEmail() +
                ": Todo '" + event.getTodo().getTitle() + "' was " + action +
                " (thread: " + Thread.currentThread().getName() + ")";

        System.out.println(message);
        return message;
    }
}
```

---

File 15: src/main/java/com/example/todokafkaapp/controller/TodoController.java

```java
package com.example.todokafkaapp.controller;

import com.example.todokafkaapp.model.Todo;
import com.example.todokafkaapp.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @PostMapping
    public ResponseEntity<Todo> create(@RequestParam String title) {
        Todo todo = todoService.create(title);
        return ResponseEntity.ok(todo);
    }

    @GetMapping
    public ResponseEntity<Collection<Todo>> getAll() {
        return ResponseEntity.ok(todoService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> getById(@PathVariable String id) {
        Optional<Todo> todo = todoService.getById(id);
        return todo.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/{id}/toggle")
    public ResponseEntity<Todo> toggleCompleted(@PathVariable String id) {
        Optional<Todo> todo = todoService.toggleCompleted(id);
        return todo.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        boolean deleted = todoService.delete(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
```

---

File 16: src/main/java/com/example/todokafkaapp/controller/SubscriptionController.java

```java
package com.example.todokafkaapp.controller;

import com.example.todokafkaapp.model.Subscriber;
import com.example.todokafkaapp.service.SubscriptionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/subscriptions")
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    public SubscriptionController(SubscriptionService subscriptionService) {
        this.subscriptionService = subscriptionService;
    }

    @PostMapping
    public ResponseEntity<?> subscribe(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String name = body.getOrDefault("name", "User");

        if (email == null || email.isBlank()) {
            return ResponseEntity.badRequest().body("Email is required");
        }

        try {
            Subscriber subscriber = subscriptionService.subscribe(email, name);
            return ResponseEntity.ok(subscriber);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<Collection<Subscriber>> getAll() {
        return ResponseEntity.ok(subscriptionService.getAll());
    }

    @GetMapping("/active")
    public ResponseEntity<Collection<Subscriber>> getActive() {
        return ResponseEntity.ok(subscriptionService.getAllActive());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Subscriber> getById(@PathVariable String id) {
        Optional<Subscriber> subscriber = subscriptionService.getById(id);
        return subscriber.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/{id}/toggle")
    public ResponseEntity<Subscriber> toggleActive(@PathVariable String id) {
        Optional<Subscriber> subscriber = subscriptionService.toggleActive(id);
        return subscriber.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> unsubscribe(@PathVariable String id) {
        boolean deleted = subscriptionService.unsubscribe(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
```

---

How to Run

1. Start Kafka:

```bash
docker run -d --name kafka -p 9092:9092 apache/kafka:3.7.0
```

2. Run the app:

```bash
mvn spring-boot:run
```

3. Test the flow:

```bash
# Subscribe two users
curl -X POST http://localhost:8080/api/subscriptions -H "Content-Type: application/json" -d '{"email":"alice@example.com","name":"Alice"}'
curl -X POST http://localhost:8080/api/subscriptions -H "Content-Type: application/json" -d '{"email":"bob@example.com","name":"Bob"}'

# Create a Todo (triggers notification to both)
curl -X POST "http://localhost:8080/api/todos?title=Buy%20groceries"

# List Todos
curl -X GET http://localhost:8080/api/todos

# Toggle a Todo
curl -X PATCH http://localhost:8080/api/todos/{id}/toggle

# Pause a subscription
curl -X PATCH http://localhost:8080/api/subscriptions/{id}/toggle

# Unsubscribe
curl -X DELETE http://localhost:8080/api/subscriptions/{id}
```

---

