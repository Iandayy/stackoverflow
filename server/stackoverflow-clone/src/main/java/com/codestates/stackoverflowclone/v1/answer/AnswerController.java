package com.codestates.stackoverflowclone.v1.answer;

import com.codestates.stackoverflowclone.v1.question.dto.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

import static com.codestates.stackoverflowclone.v1.answer.dto.AnswerDto.*;
import static com.codestates.stackoverflowclone.v1.answer.dto.AnswerDto.ResponseDto.*;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/questions")
public class AnswerController {

    private final AnswerService answerService;

    //답변 등록
    @PostMapping("/{question_id}/answers")   ///endpoint
    public ResponseEntity update(@Positive @PathVariable("question_id") int question_id,
                                 @Validated @RequestBody RegisterDto registerDto) {

        registerDto.setQuestion_id(question_id);
        Answer answer = answerService.register(registerDto);

        ResponseDto response = answerToResponseDto(answer);
        return new ResponseEntity(new SingleResponseDto<>(response), CREATED);
    }

    //답변 수정
    @PatchMapping("/{question_id}/answers/{answer_id}")   ///endpoint
    public ResponseEntity update(@PathVariable("question_id") int question_id,
                                 @Positive @PathVariable("answer_id") int answer_id,
                                 @Validated @RequestBody UpdateDto updateDto) {

        updateDto.setAnswer_id(answer_id);
        Answer answer = answerService.update(updateDto);

        ResponseDto response = answerToResponseDto(answer);
        return new ResponseEntity(new SingleResponseDto<>(response), CREATED);
    }

    //답변 삭제
    @DeleteMapping("/{question_id}/answers/{answer_id}")
    public ResponseEntity delete(@Positive @PathVariable int question_id,
                                 @Positive @PathVariable int answer_id) {

        answerService.delete(answer_id);
        return new ResponseEntity(OK);
    }

    //답변 좋아요 기능
    @GetMapping("/{question_id}/answers/{answer_id}")
    public ResponseEntity like(@Positive @PathVariable int question_id,
                               @Positive @PathVariable int answer_id) {

        int likeCount = answerService.addLikeCount(answer_id);
        return new ResponseEntity<>(likeCount, OK);
    }
}

