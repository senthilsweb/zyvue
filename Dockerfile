#
# First stage: 
# Build and generate nuxt.js static website
#
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm run generate

#
# Second stage: 
# Build golang binary with embeded SPA Web application genetated from previous stage @ ./dist folder
#
FROM golang:1.16-alpine AS backend
# Move to a working directory (/build).
WORKDIR /build

COPY --from=build-stage /app/dist ./dist

COPY --from=build-stage /app/go.mod /app/go.sum ./
RUN go mod download
COPY --from=build-stage /app/main.go .

# Set necessary environmet variables needed for the image and build the server.
ENV CGO_ENABLED=0 GOOS=linux GOARCH=amd64

# Run go build (with ldflags to reduce binary size).
RUN go build -ldflags="-s -w" -o zyvue .


#
# Third stage: 
# Creating and running a new scratch container with the backend binary.
#

FROM alpine

# Copy binary from /build to the root folder of the scratch container.
RUN mkdir -p /app
COPY --from=backend ["/build/zyvue", "/app/zyvue"]

EXPOSE 3000

# Command to run when starting the container.
CMD ["/app/zyvue", "-p", "3000"]