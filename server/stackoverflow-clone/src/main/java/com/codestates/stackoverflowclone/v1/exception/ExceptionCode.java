package com.codestates.stackoverflowclone.v1.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_EXISTS(409, "Member exists"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    QUESTION_NOT_FOUND(404, "question not found"),
    MEMBER_NOT_AUTHORIZED(403, "member not authorized"),
    ANSWER_NOT_FOUND(404, "answer not found");

    @Getter
    private int status;

    @Getter
    private String message;
    ExceptionCode(int code, String message){
        this.status = code;
        this.message = message;
    }
}
