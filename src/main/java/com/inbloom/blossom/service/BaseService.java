package com.inbloom.blossom.service;

import com.inbloom.blossom.mapper.GenericMapper;
import com.inbloom.blossom.model.Reflection;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BaseService {

    private final GenericMapper genericMapper;

    public List<Reflection> getAllReflections() {
        return genericMapper.findAll();
    }

    public void saveReflection(Reflection reflection) {
        genericMapper.insert(reflection);
    }
}
