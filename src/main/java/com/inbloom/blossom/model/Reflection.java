package com.inbloom.blossom.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reflection {
    @Id
    private Long id;
    private String name;
    // Stores only the relative path like "/images/filename.jpg"
    @Column(name = "image_path")
    private String imagePath;

    private String description;

    // Dynamically returns full URL
    @Transient
    private String imageUrl;

    public String getImageUrl() {
        if (imagePath == null) return null;
        return "http://localhost:8080" + imagePath;
    }
}
