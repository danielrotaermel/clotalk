FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/clotalk.jar /clotalk/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/clotalk/app.jar"]
