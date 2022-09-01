package com.codestates.stackoverflowclone.v1.question.dto;

import com.codestates.stackoverflowclone.v1.answer.dto.AnswerDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.lang.Nullable;

import javax.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.List;

@Getter
public class QuestionDto {

    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class RegisterDto {

        @NotBlank
        private String title;
        @NotBlank
        private String content;
        private List<String> tags;
        @Positive
        private int member_id;  ////
    }

    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class UpdateDto {

        @Nullable
        private int id;
        @NotBlank
        private String title;
        @NotBlank
        private String content;
        private List<String> tags;
        @Positive
        private int member_id;
    }

    //등록/수정에 대한 응답
    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class SimpleResponseDto {
        private int question_id;
        private String title;
        private String content;
        private List<String> tags;
        private LocalDateTime createdAt;
    }

    //단일 조회 응답
    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class SingleQuestionDto {

        private int question_id;
        private int member_id;
        private String title;
        private String content;
        private List<String> tags;
        private List<AnswerDto.ResponseDto> answers;
        private LocalDateTime createdAt;
        private int answerCount;
        private int viewCount;
    }

    //전체 조회 응답
    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class MultiQuestionDto {

        private int question_id;
        private String title;
        private String content;
        private String memberName;
        private List<String> tags;
        private LocalDateTime createdAt;
        private int viewCount;
        private int answerCount;
    }

    //삭제 요청 필드
    @Getter @Setter
    @AllArgsConstructor @NoArgsConstructor
    public static class DeleteDto {

        private int member_id;
    }
}
