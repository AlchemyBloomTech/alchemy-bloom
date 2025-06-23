package com.inbloom.blossom.controller;

import com.inbloom.blossom.dto.ReflectionUploadRequest;
import com.inbloom.blossom.model.Reflection;
import com.inbloom.blossom.service.BaseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/reflections")
@Slf4j
public class ReflectionController {
    private final BaseService homeEntryService;

    @GetMapping("/")
    public String home() {
        log.info("Home endpoint accessed");
        return "Welcome to the InBloom Backend Service!";
    }

    @GetMapping
    public List<Reflection> getAllReflections() {
        log.info("Fetching all reflections");
        return homeEntryService.getAllReflections();
    }

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadReflection(@ModelAttribute ReflectionUploadRequest request) {
        try {
            String uploadDir = "uploads/images/";
            Files.createDirectories(Paths.get(uploadDir));

            MultipartFile image = request.getImage();
            String filename = UUID.randomUUID() + "_" + image.getOriginalFilename();
            Path filepath = Paths.get(uploadDir, filename);
            Files.write(filepath, image.getBytes());

            log.info("Uploading reflection with name: {}", request.getName());
            Reflection reflection = new Reflection();
            reflection.setName(request.getName());
            reflection.setDescription(request.getDescription());
            reflection.setImagePath("/images/" + filename); // Assuming imageUrl is a file path or URL
            homeEntryService.saveReflection(reflection); // Assuming a save method exists in the service
            return ResponseEntity.ok("Reflection uploaded successfully");
        } catch (IOException e) {
            log.error("Failed to upload reflection", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save reflection.");
        }
    }
}
