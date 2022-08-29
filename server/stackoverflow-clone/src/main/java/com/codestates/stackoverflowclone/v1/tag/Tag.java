package com.codestates.stackoverflowclone.v1.tag;


import com.codestates.stackoverflowclone.v1.question.entity.QuestionTag;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.*;

@Entity
@Getter
@NoArgsConstructor
public class Tag {

    @Id
    private String name;

    private int usageCount;

    @OneToMany(mappedBy = "tag", orphanRemoval = true)
    private List<QuestionTag> questionTags = new ArrayList<>();


    public Tag(String name) {
        this.name = name;
    }
    public Tag(String name, int usageCount) {
        this.name = name;
        this.usageCount = usageCount;
    }


    //================

    public void addQuestionTag(QuestionTag questionTag) {
        questionTags.add(questionTag);
        questionTag.setTag(this);
    }
    public void addUsageCount() {
        this.usageCount++;
    }

}
