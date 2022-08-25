package com.codestates.stackoverflowclone.v1.question.repository;

import com.codestates.stackoverflowclone.v1.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
