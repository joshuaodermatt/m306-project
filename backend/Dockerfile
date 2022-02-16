FROM maven:3.8.4-openjdk-11

EXPOSE 10001

COPY . .

RUN mvn clean

RUN mvn install

RUN mvn package

ENTRYPOINT ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=prod"]
