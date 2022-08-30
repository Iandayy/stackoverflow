package com.codestates.stackoverflowclone.v1.answer.repository;

import com.codestates.stackoverflowclone.v1.answer.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {
}
