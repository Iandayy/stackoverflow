package com.codestates.stackoverflowclone.v1.question.entity;

import com.codestates.stackoverflowclone.v1.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.List;

import static javax.persistence.GenerationType.*;

@Getter
@NoArgsConstructor
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int id;
    private String title;
    private String content;

    private int memberId;    /////연관관계 매핑
    private List<QuestionTag> tags;  /////////

    private int viewCount;
    private int answerCount;    ////////
}
