package com.codestates.stackoverflowclone.v1.answer.dto;

import com.codestates.stackoverflowclone.v1.answer.Answer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class RegisterDto {

        private int question_id;
        @NotBlank
        private String content;
    }

    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class UpdateDto {

        @Nullable
        private int answer_id;
        @NotBlank
        private String content;
        @Positive
        private int member_id;
    }

    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class ResponseDto {

        private int answer_id;
        private String content;
        private int likeCount;
        private LocalDateTime createdAt;

        public static ResponseDto answerToResponseDto(Answer answer) {
            return new ResponseDto(answer.getId(), answer.getContent(), answer.getLikeCount(), answer.getCreatedAt());
        }
    }

}
