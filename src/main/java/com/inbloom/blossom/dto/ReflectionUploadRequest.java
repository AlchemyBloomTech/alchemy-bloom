package com.inbloom.blossom.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ReflectionUploadRequest {

    @Schema(description = "Name of the reflection", example = "My Reflection")
    private String name;

    @Schema(description = "Description of the reflection", example = "This is a sample reflection description.")
    private String description;

    @Schema(description =  "Image file to upload")
    private MultipartFile image;
}
