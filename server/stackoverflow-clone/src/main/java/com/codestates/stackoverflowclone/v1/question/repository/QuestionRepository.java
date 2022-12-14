package com.codestates.stackoverflowclone.v1.question.repository;

import com.codestates.stackoverflowclone.v1.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Integer> {

    //    List<Question> findByContentContains(String content);
    Page<Question> findByContentContains(String content, Pageable pageable);

}

