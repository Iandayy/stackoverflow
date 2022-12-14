package com.codestates.stackoverflowclone.v1.member.helper.event;

import com.codestates.stackoverflowclone.v1.member.entity.Member;
import org.springframework.context.ApplicationEvent;

public class MemberRegistrationApplicationEvent extends ApplicationEvent {

    private Member member;
    public MemberRegistrationApplicationEvent(Object source, Member member){
        super(source);
        this.member = member;
    }
}
