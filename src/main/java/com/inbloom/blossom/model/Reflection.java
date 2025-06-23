package com.inbloom.blossom.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
    private String imageUrl;
    private String description;
}
