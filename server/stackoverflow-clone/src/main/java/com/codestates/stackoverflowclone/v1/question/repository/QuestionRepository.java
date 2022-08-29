package com.codestates.stackoverflowclone.v1.question.repository;

import com.codestates.stackoverflowclone.v1.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Integer>, QuestionCustomRepository {

    List<Question> findByContentContains(String content);
//    List<Question> findAllByOrderByIdDesc();
}
