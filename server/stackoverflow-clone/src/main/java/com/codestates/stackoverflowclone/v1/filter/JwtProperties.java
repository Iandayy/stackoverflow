package com.codestates.stackoverflowclone.v1.filter;

public interface JwtProperties {
    String SECRET = "pre024";
    int EXPIRATION_TIME = 864000000;
    String TOKEN_PREFIX = "Bearer ";
    String HEADER_STRING = "Authorization";
}
