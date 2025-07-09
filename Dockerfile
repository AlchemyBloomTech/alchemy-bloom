# Stage 1: Build React frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /app/webapp

COPY webapp/package*.json ./
RUN npm install

COPY webapp/ ./
RUN npm run build

# Stage 2: Build Spring Boot backend
FROM maven:3.9.6-eclipse-temurin-17-alpine AS backend-builder

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

# Stage 3: Final image
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy Spring Boot jar
COPY --from=backend-builder /app/target/*.jar app.jar

# Copy React build
COPY --from=frontend-builder /app/webapp/build /app/static

USER root

RUN apt-get update && apt-get install -y sqlite3 && rm -rf /var/lib/apt/lists/*

USER 1000


# COPY your SQLite database file into the image
COPY src/main/resources/db/mydatabase.db /data/mydatabase.db


EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]

RUN mkdir -p /data

