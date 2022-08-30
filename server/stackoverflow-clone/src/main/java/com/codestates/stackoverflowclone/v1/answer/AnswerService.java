package com.codestates.stackoverflowclone.v1.answer;

import com.codestates.stackoverflowclone.v1.answer.repository.AnswerRepository;
import com.codestates.stackoverflowclone.v1.exception.BusinessLogicException;
import com.codestates.stackoverflowclone.v1.question.entity.Question;
import com.codestates.stackoverflowclone.v1.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static com.codestates.stackoverflowclone.v1.answer.dto.AnswerDto.*;
import static com.codestates.stackoverflowclone.v1.exception.ExceptionCode.*;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionService questionService;

    //답변 등록
    public Answer register(RegisterDto registerDto) {
        Question question = questionService.findById(registerDto.getQuestion_id());
        question.addAnswerCount();

        Answer answer = new Answer(registerDto.getContent());
        answer.setQuestion(question);

        return answerRepository.save(answer);
    }

    //답변 수정
    public Answer update(UpdateDto updateDto) {
        Answer answer = answerRepository.findById(updateDto.getAnswer_id())
                .orElseThrow(() -> new BusinessLogicException(ANSWER_NOT_FOUND));

        answer.update(updateDto.getContent());
        return answer;
    }

    //답변 삭제
    public void delete(int answer_id) {
        Answer answer = answerRepository.findById(answer_id)
                .orElseThrow(() -> new BusinessLogicException(ANSWER_NOT_FOUND));

        answerRepository.delete(answer);
    }

    //따봉
    public int addLikeCount(int answer_id) {
        Answer answer = answerRepository.findById(answer_id)
                .orElseThrow(() -> new BusinessLogicException(ANSWER_NOT_FOUND));
        answer.addLikeCount();
        log.info("좋아요 개수 : " + answer.getLikeCount());

        return answer.getLikeCount();
    }
}
