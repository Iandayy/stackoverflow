package com.codestates.stackoverflowclone.v1.question.service;

import com.codestates.stackoverflowclone.v1.member.entity.Member;
import com.codestates.stackoverflowclone.v1.member.repository.MemberRepository;
import com.codestates.stackoverflowclone.v1.member.service.MemberService;
import com.codestates.stackoverflowclone.v1.question.dto.QuestionDto;
import com.codestates.stackoverflowclone.v1.question.entity.Question;
import com.codestates.stackoverflowclone.v1.question.entity.QuestionTag;
import com.codestates.stackoverflowclone.v1.question.repository.QuestionCustomRepositoryImpl;
import com.codestates.stackoverflowclone.v1.question.repository.QuestionRepository;
import com.codestates.stackoverflowclone.v1.tag.Tag;
import com.codestates.stackoverflowclone.v1.tag.TagService;
import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Literal;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.codestates.stackoverflowclone.v1.question.dto.QuestionDto.*;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
//    private MemberService memberService;
    private final MemberRepository memberRepository;
    private final TagService tagService;

    //질문 등록
    @Transactional
    public Question register(RegisterDto registerDto) {

        int member_id = registerDto.getMember_id();
//        Member member = memberService.findById(member_id).get();
        Member member = memberRepository.findById(member_id).orElseThrow();

        Question question = new Question(registerDto.getTitle(), registerDto.getContent());
        question.setMember(member);
        registerTag(registerDto, question);

        return questionRepository.save(question);
    }

    //질문 수정
    @Transactional
    public void update(UpdateDto updateDto) {   ///////////
        int id = updateDto.getId();
        Question question = findById(id);

        question.update(updateDto.getTitle(), updateDto.getContent());

        question.getQuestionTags().clear();     /////
        for (String tag : updateDto.getTags()) {  /////

            //태그 등록 (존재하는 태그일 경우 사용 횟수만 증가)
            Tag newTag = tagService.register(tag);

            //QuestionTag 생성
            QuestionTag questionTag = new QuestionTag();
            newTag.addQuestionTag(questionTag);

            question.addQuestionTag(questionTag);
        }
    }

    //질문 단일조회
    public Question findOne(int question_id) {
        Question findQuestion = findOne(question_id);
        findQuestion.addViewCount();

        return findQuestion;
    }

    //질문 전체조회
    public Page<Question> findAll(int page, int size) {   //페이징


        return questionRepository.findAll(
                PageRequest.of(page - 1, size, Sort.by("id").descending())); ///id?
    }

    //질문 검색
    public Page<Question> search(String content, int page, int size) {   //////페이징
        List<Question> questions = questionRepository.findByContentContains(content);

        return new PageImpl(questions,
                            PageRequest.of(page, size, Sort.by("id").descending()),
                            questions.size());

    }


    //질문 삭제
    @Transactional
    public void delete(int question_id) {
        Question question = findById(question_id);
        questionRepository.delete(question);
    }



    //==============


    //id로 질문 조회
    public Question findById(int id) {
        return questionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("존재하지 않는 글입니다."));  ///////
    }


    //태그 등록 + QuestionTag 생성 + 매핑 메서드
    private void registerTag(RegisterDto registerDto, Question question) {
        for (String tag : registerDto.getTags()) {

            //태그 등록 (존재하는 태그일 경우 사용 횟수만 증가)
            Tag newTag = tagService.register(tag);

            //Question 에 QuestionTag 추가
            QuestionTag questionTag = new QuestionTag(newTag);
            newTag.addQuestionTag(questionTag);  //////////////연관관계 정의 중복

            question.addQuestionTag(questionTag);
        }
    }

}
