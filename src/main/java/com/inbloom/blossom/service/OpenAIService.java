package com.inbloom.blossom.service;


import com.inbloom.blossom.dto.OpenAIRequest;
import com.inbloom.blossom.dto.OpenAIResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class OpenAIService {

    private static final String OPENAI_API_KEY = "https://api.openai.com/v1/chat/completions";

    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${openai.api.key}")
    private String openAIApiKey;

    public String askAlchemy(String userMessage) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(openAIApiKey);

        List<OpenAIRequest.Message> messages = List.of(
                new OpenAIRequest.Message("system" , "You are Alchemy, a spiritual AI that offers peaceful, God-inspired wisdom. Speak softly and calmly."),
                new OpenAIRequest.Message("user", userMessage)
        );

        OpenAIRequest requestBody = new OpenAIRequest("gpt-3.5-turbo", messages);
        HttpEntity<OpenAIRequest> requestEntity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<OpenAIResponse> response = restTemplate.exchange(
                    OPENAI_API_KEY,
                    HttpMethod.POST,
                    requestEntity,
                    OpenAIResponse.class
            );

            return response
                    .getBody()
                    .getChoices()
                    .get(0)
                    .getMessage()
                    .getContent();
        } catch (Exception e) {
            log.error("Error calling OpenAI API", e);
            return "An error occurred while processing your request. Please try again later.";

        }


    }
}
