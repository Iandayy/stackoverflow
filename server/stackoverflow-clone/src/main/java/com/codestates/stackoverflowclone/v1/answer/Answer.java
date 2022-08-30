package com.codestates.stackoverflowclone.v1.answer;

import com.codestates.stackoverflowclone.v1.audit.Auditable;

import com.codestates.stackoverflowclone.v1.question.entity.Question;
import lombok.Getter;

import javax.persistence.*;

import static javax.persistence.FetchType.*;
import static javax.persistence.GenerationType.*;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;


@Entity
@Getter
@NoArgsConstructor
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int id;
    private String content;
    private int likeCount;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

    public Answer(String content) {
        this.content = content;
    }

    //===============

    public void setQuestion(Question question) {
        this.question = question;
        question.getAnswers().add(this);
    }

    public void addLikeCount() {
        this.likeCount++;
    }

    public void update(String content) {
        this.content = content;
    }
}
