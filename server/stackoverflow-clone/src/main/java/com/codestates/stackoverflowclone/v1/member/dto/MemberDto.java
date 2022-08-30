package com.codestates.stackoverflowclone.v1.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
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
    @NoArgsConstructor
    public static class Patch{
        private int id;
        private String password;
        private String name;

        public void setId(int id) {
            this.id = id;
        }
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    public static class Response{
        private int memberId;
        private String email;
        private String name;
    }

    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    public static class Login{
        private String email;
        private String password;
    }
}
