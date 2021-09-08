FROM openjdk:8-alpine

COPY target/uberjar/clj-app.jar /clj-app/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/clj-app/app.jar"]
