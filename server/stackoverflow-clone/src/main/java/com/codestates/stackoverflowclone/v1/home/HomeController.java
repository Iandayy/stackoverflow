package com.codestates.stackoverflowclone.v1.home;

import com.codestates.stackoverflowclone.v1.question.dto.QuestionDto;
import com.codestates.stackoverflowclone.v1.question.dto.response.MultiResponseDto;
import com.codestates.stackoverflowclone.v1.question.entity.Question;
import com.codestates.stackoverflowclone.v1.question.mapper.QuestionMapper;
import com.codestates.stackoverflowclone.v1.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.HttpStatus.OK;

@RestController
@Slf4j
@RequiredArgsConstructor
public class HomeController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    //홈 화면 (질문 리스트 최신순)   //페이징 어떻게 할 지
    @GetMapping()
    public ResponseEntity findAll(@RequestParam int page,
                                  @RequestParam int size) {

        Page<Question> questionPage = questionService.findAll(page, size);
        List<Question> content = questionPage.getContent();

        List<QuestionDto.MultiQuestionDto> responses = mapper.questionsToResponses(content);
        return new ResponseEntity(new MultiResponseDto<>(responses, questionPage), OK);
    }
}