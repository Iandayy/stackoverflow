package com.codestates.stackoverflowclone.v1.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        @Email
        private String email;

        @NotBlank
        private String password;

        @NotBlank
        private String name;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        private int id;
        private String password;
        private String name;

        public void setId(int id) {
            this.id = id;
        }
    }

    @AllArgsConstructor
    @Getter
    public static class Response{
        private int memberId;
        private String email;
        private String name;
    }

    @AllArgsConstructor
    @Getter
    public static class Login{
        private String email;
        private String password;
    }
}
