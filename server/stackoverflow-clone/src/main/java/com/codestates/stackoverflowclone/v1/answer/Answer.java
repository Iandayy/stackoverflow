package com.codestates.stackoverflowclone.v1.answer;

import com.codestates.stackoverflowclone.v1.audit.Auditable;
import lombok.Getter;

import javax.persistence.Entity;

@Entity
@Getter
public class Answer extends Auditable {
}
