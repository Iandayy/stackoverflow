package com.codestates.stackoverflowclone.v1.question.controller;

import com.codestates.stackoverflowclone.v1.question.dto.response.MultiResponseDto;
import com.codestates.stackoverflowclone.v1.question.dto.response.SingleResponseDto;
import com.codestates.stackoverflowclone.v1.question.entity.Question;
import com.codestates.stackoverflowclone.v1.question.mapper.QuestionMapper;
import com.codestates.stackoverflowclone.v1.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

import com.codestates.stackoverflowclone.v1.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import static com.codestates.stackoverflowclone.v1.question.dto.QuestionDto.*;
import static org.springframework.http.HttpStatus.*;

@RequiredArgsConstructor
@Slf4j
@RestController
@RequestMapping("/v1/questions")
public class QuestionControllerV1 {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    //질문 등록
    @PostMapping
    public ResponseEntity register(@RequestBody RegisterDto registerDto) {

        Question registered = questionService.register(registerDto);

        SimpleResponseDto response = mapper.questionToSimpleResponse(registered);
        return new ResponseEntity(new SingleResponseDto(response), CREATED);
    }

    //질문 수정화면
    @GetMapping("/{question_id}/edit")    ////
    public ResponseEntity update(@PathVariable("question_id") int question_id) {

        Question findQuestion = questionService.findOne(question_id);

        SimpleResponseDto response = mapper.questionToSimpleResponse(findQuestion);
        return new ResponseEntity(new SingleResponseDto<>(response), OK);
    }

    //질문 수정
    @PatchMapping("/{question_id}/edit")   ///

    public ResponseEntity updateQue(@PathVariable("question_id") int question_id,
                                 @RequestBody UpdateDto updateDto) {

        updateDto.setId(question_id);
        Question updated = questionService.update(updateDto);
        SimpleResponseDto response = mapper.questionToSimpleResponse(updated);
        return new ResponseEntity(new SingleResponseDto<>(response), CREATED);
    }

    //질문 읽기
    @GetMapping("/{question_id}")
    public ResponseEntity findOne(@PathVariable("question_id") int question_id) {


        Question findQuestion = questionService.findOne(question_id);

        SingleQuestionDto response = mapper.questionToResponse(findQuestion);
        return new ResponseEntity(new SingleResponseDto<>(response), OK);

    }

    //질문 전체조회 (Bar의 Questions, 최신 순)
    @GetMapping()

    public ResponseEntity findAll(@RequestParam int page,
                                  @RequestParam int size) {  //페이징 처리

        Page<Question> questionPage = questionService.findAll(page, size);
        List<Question> content = questionPage.getContent();

        List<MultiQuestionDto> responses = mapper.questionsToResponses(content);
        return new ResponseEntity(new MultiResponseDto<>(responses, questionPage), OK);
    }

    //질문 검색
    @GetMapping("/search")  // 페이징
    public ResponseEntity search (@RequestParam String content,
                                    @RequestParam int page,
                                    @RequestParam int size) {
        Page<Question> questionPage = questionService.search(content, page, size);
        List<Question> questionList = questionPage.getContent();

        List<MultiQuestionDto> response = mapper.questionsToResponses(questionList);
        return new ResponseEntity(new MultiResponseDto<>(response, questionPage), OK);
    }

    //질문 삭제
    @DeleteMapping("/{question_id}")

    public ResponseEntity delete(@PathVariable int question_id) {

        questionService.delete(question_id);
 
        return new ResponseEntity(OK);
    }


}
