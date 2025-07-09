package com.inbloom.blossom;

import com.inbloom.blossom.mapper.GenericMapper;
import com.inbloom.blossom.model.Reflection;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

@SpringBootTest
//@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})
//@TestPropertySource(properties = {
//		"spring.datasource.url=jdbc:h2:mem:testdb",
//		"spring.datasource.driver-class-name=org.h2.Driver",
//		"spring.datasource.username=sa",
//		"spring.datasource.password=",
//		"spring.jpa.database-platform=org.hibernate.dialect.H2Dialect"
//})
class BlossomingServiceTests {
@Test
	void contextLoads() {
	}


}
