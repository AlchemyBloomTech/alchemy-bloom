package com.inbloom.blossom;


import com.inbloom.blossom.mapper.GenericMapper;
import com.inbloom.blossom.model.Reflection;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class BlossomingRunner implements CommandLineRunner {
    private final GenericMapper genericMapper;

    @Override
    public void run(String... args) {
        System.out.println("Blossoming service is running!");
        List<Reflection> all = genericMapper.findAll();
        System.out.println("Reflections count: " + all.size());
    }

}
