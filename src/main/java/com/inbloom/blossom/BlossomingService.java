package com.inbloom.blossom;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@MapperScan("com.inbloom.blossom.mapper")
public class BlossomingService {

	public static void main(String[] args) {
		SpringApplication.run(BlossomingService.class, args);
	}

}
