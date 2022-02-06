FROM openjdk:11

EXPOSE 8080

ADD target/backend-executable.jar backend-executable.jar

ENTRYPOINT ["java", "-jar", "backend-executable.jar"]
