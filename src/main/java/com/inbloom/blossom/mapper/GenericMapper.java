package com.inbloom.blossom.mapper;

import com.inbloom.blossom.model.Reflection;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface GenericMapper {
    @Insert("INSERT INTO reflections(name, description, image_path) VALUES(#{name}, #{description}, #{imageUrl})")
    void insert(Reflection reflection);

    @Select("SELECT * FROM reflections")
    List<Reflection> findAll();
}
