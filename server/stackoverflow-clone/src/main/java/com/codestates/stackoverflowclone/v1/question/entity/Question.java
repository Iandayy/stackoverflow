package com.codestates.stackoverflowclone.v1.question.entity;

import com.codestates.stackoverflowclone.v1.answer.Answer;
import com.codestates.stackoverflowclone.v1.audit.Auditable;
import com.codestates.stackoverflowclone.v1.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;
import static javax.persistence.CascadeType.*;
import static javax.persistence.FetchType.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int id;

    private String title;
    private String content;
    private int viewCount;
    private int answerCount; ///


    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")  
    private Member member;

    @JsonIgnore
    @OneToMany(mappedBy = "question", orphanRemoval = true)
    private List<Answer> answers = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "question", cascade = PERSIST, orphanRemoval = true)
    private List<QuestionTag> questionTags = new ArrayList<>();


    //========메서드==========


    //질문 생성
    public Question(String title, String content) {
        this.title = title;
        this.content = content;
    }

    //수정
    public void update(String title, String content) {  /////
        this.title = title;
        this.content = content;
    }

    public void addViewCount() {
        this.viewCount++;
    }
    public void addAnswerCount() {
        this.answerCount++;
    }


    //=======양방향 매핑=========

    public void setMember(Member member) {
        this.member = member;
        member.getQuestions().add(this);
    }
    public void addQuestionTag(QuestionTag questionTag) {
        questionTags.add(questionTag);
        questionTag.setQuestion(this);
    }


}

