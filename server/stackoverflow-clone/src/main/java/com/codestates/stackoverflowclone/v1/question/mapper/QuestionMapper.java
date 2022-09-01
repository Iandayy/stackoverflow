package com.codestates.stackoverflowclone.v1.question.mapper;


import com.codestates.stackoverflowclone.v1.answer.dto.AnswerDto;
import com.codestates.stackoverflowclone.v1.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

import static com.codestates.stackoverflowclone.v1.answer.dto.AnswerDto.*;
import static com.codestates.stackoverflowclone.v1.question.dto.QuestionDto.*;
import static java.time.LocalDateTime.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {

//    Question registerToQuestion(RegisterDto registerDto);
//    Question updateToQuestion(UpdateDto registerDto);

    //등록/수정에 대한 응답
    default SimpleResponseDto questionToSimpleResponse(Question question) {  ////////
        List<String> tags = question.getQuestionTags().stream()
                .map(questionTag -> (questionTag.getTag().getName()))
                .collect(Collectors.toList());

        return new SimpleResponseDto(
                question.getId(), question.getTitle(), question.getContent(), tags, question.getCreatedAt()
        );
    }

    //단일 조회 응답
    default SingleQuestionDto questionToResponse(Question question) {

        List<String> tags = question.getQuestionTags().stream()
                .map(questionTag -> (questionTag.getTag().getName()))
                .collect(Collectors.toList());

        List<ResponseDto> answers = question.getAnswers().stream()
                .map(ResponseDto::answerToResponseDto)
                .collect(Collectors.toList());

        return new SingleQuestionDto(
                question.getId(), question.getTitle(), question.getContent(), tags, answers,
                question.getCreatedAt(), question.getAnswerCount(), question.getViewCount()
        );
    }

    //전체 조회 응답
    default List<MultiQuestionDto> questionsToResponses(List<Question> questions) {

        return questions.stream()
                .map(question -> new MultiQuestionDto(
                        question.getId(),
                        question.getTitle(),
                        question.getContent(),
                        question.getMember().getName(),
                        question.getQuestionTags().stream()
                                .map(questionTag -> (questionTag.getTag().getName()))
                                .collect(Collectors.toList()),
                        question.getCreatedAt(),
                        question.getViewCount(),
                        question.getAnswerCount()))
                .collect(Collectors.toList());
    }

}