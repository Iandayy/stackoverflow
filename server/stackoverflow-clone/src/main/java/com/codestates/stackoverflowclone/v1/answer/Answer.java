package com.codestates.stackoverflowclone.v1.answer;

import com.codestates.stackoverflowclone.v1.audit.Auditable;

import com.codestates.stackoverflowclone.v1.question.entity.Question;
import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.*;
import static javax.persistence.GenerationType.*;
import lombok.Getter;

import javax.persistence.Entity;



@Entity
@Getter
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "question_id")  //////
    private Question question;

    private int answerCount;
}
