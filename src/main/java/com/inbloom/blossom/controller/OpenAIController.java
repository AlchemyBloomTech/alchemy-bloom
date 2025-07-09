package com.inbloom.blossom.controller;


import com.inbloom.blossom.service.OpenAIService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
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
    public ResponseEntity<Map<String, String>> chat(@RequestBody Map<String, String> payload) {
        String prompt = payload.get("prompt");
        if (prompt == null || prompt.isEmpty()) {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Prompt is required");
            return ResponseEntity.badRequest().body(error);
        }

        String reply = openAIService.askAlchemy(prompt);

        Map<String, String> response = new HashMap<>();
        response.put("response", reply); // ✅ match frontend expectation

        return ResponseEntity.ok(response);

    }

}
