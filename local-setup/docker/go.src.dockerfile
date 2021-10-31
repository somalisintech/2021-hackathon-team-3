FROM golang:1.16-alpine as builder
COPY . /shimbri/v1
WORKDIR /shimbri/v1/api/v1/go/cmd
RUN CGO_ENABLED=0 GOOS=linux go build -a  -o app .
RUN cp ./app /root/app

FROM alpine:3.10
WORKDIR /root
COPY --from=builder /root/app .
RUN apk add --no-cache ca-certificates
COPY ./ca-certificates.crt /etc/ssl/certs
RUN update-ca-certificates --fresh
CMD ["./app"]

