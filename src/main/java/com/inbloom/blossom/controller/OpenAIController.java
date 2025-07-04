package com.inbloom.blossom.controller;


import com.inbloom.blossom.service.OpenAIService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/openai")
public class OpenAIController {

    private OpenAIService openAIService;

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return ResponseEntity.ok("OpenAI Service is running");
    }


    @PostMapping("/chat")
    public ResponseEntity<String> chat(@RequestBody Map<String, String> payload) {
        String prompt = payload.get("prompt");
        if (prompt == null || prompt.isEmpty()) {
            return ResponseEntity.badRequest().body("Prompt is required");
        }
        String response = openAIService.askAlchemy(prompt);
        return ResponseEntity.ok(response);
    }

}
