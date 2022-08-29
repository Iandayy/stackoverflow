package com.codestates.stackoverflowclone.v1.member.entity;

import com.codestates.stackoverflowclone.v1.audit.Auditable;
import com.codestates.stackoverflowclone.v1.question.entity.Question;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends Auditable {
    // audit pull 이후 extends 예정
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToMany(mappedBy = "member")
    @JsonIgnore
    private List<Question> questions = new ArrayList<>();

    @Email
    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    private String password;

    @Column(length = 100, nullable = false)
    private String name;


}
