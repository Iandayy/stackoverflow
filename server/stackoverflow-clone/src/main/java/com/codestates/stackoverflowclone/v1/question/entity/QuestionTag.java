package com.codestates.stackoverflowclone.v1.question.entity;

import com.codestates.stackoverflowclone.v1.tag.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import static javax.persistence.FetchType.*;
import static javax.persistence.GenerationType.*;

@Entity
@Getter
@Setter  
@NoArgsConstructor
public class QuestionTag {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "tag_name")
    private Tag tag;


    public QuestionTag(Tag tag) {
        this.tag = tag;
    }
    public QuestionTag(Question question, Tag tag) {
        this.question = question;
        this.tag = tag;
    }
}



