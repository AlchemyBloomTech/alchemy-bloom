package com.inbloom.blossom;

import org.junit.jupiter.api.Test;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})
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
