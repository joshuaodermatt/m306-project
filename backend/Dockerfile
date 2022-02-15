FROM maven:3.8.4-openjdk-11

EXPOSE 10001

COPY . .

RUN mvn package

ENTRYPOINT ["java", "-jar", "target/backend-executable.jar -Dspring-boot.run.arguments=--spring.profiles.active=prod"]
