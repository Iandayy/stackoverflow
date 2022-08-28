//package com.codestates.stackoverflowclone.v1.question.controller;
//
//import com.codestates.stackoverflowclone.v1.question.service.QuestionService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import static com.codestates.stackoverflowclone.v1.question.dto.QuestionDto.*;
//import static org.springframework.http.HttpStatus.*;
//
//@RequiredArgsConstructor
//@Slf4j
//@RestController
//@RequestMapping("/v1/questions")
//public class QuestionControllerV1 {
//
//    private QuestionService questionService;
//
//    //질문 등록
//    @PostMapping
//    public ResponseEntity register(@RequestBody RegisterDto registerDto) {
//
//
//
//        return new ResponseEntity(CREATED);
//    }
//
//    //질문 수정
//    @PatchMapping("/{question_id}")
//    public ResponseEntity update(@PathVariable("question_id") int question_id,
//                                 @RequestBody UpdateDto updateDto) {
//
//
//
//        return new ResponseEntity(OK);
//    }
//
//    //질문 읽기
//    @GetMapping("/{question_id}")
//    public ResponseEntity findOne(@PathVariable("question_id") int question_id) {
//
//
//        return new ResponseEntity(OK);
//    }
//
//    //질문 전체조회 (Bar의 Questions, 최신 순)
//    @GetMapping()
//    public ResponseEntity findAll() {  //페이징 처리. 어떻게 받고 어떻게 내려줄 것인지
//
//
//        return new ResponseEntity(OK);
//    }
//
//    //질문 검색
//    @GetMapping("/search")  // 페이징
//    public ResponseEntity search(@RequestParam String content) {
//
//
//        return new ResponseEntity(OK);
//    }
//
//    //질문 삭제
//    @DeleteMapping("/{question_id}")
//    public ResponseEntity delete() {
//
//
//        return new ResponseEntity(OK);
//    }
//
//
//
//
//
//
//
//}
