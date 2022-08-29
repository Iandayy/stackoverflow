package com.codestates.stackoverflowclone.v1.member.service;

import com.codestates.stackoverflowclone.v1.member.entity.Member;
import com.codestates.stackoverflowclone.v1.member.exception.BusinessLogicException;
import com.codestates.stackoverflowclone.v1.member.exception.ExceptionCode;
import com.codestates.stackoverflowclone.v1.member.helper.event.MemberRegistrationApplicationEvent;
import com.codestates.stackoverflowclone.v1.member.repository.MemberRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class MemberService {

    private final MemberRepository memberRepository;

    private final ApplicationEventPublisher publisher;

    public MemberService(MemberRepository memberRepository, ApplicationEventPublisher publisher) {
        this.memberRepository = memberRepository;
        this.publisher = publisher;
    }

    public Member createMember(Member member){
        verifiedExistsEmail(member.getEmail());
        Member savedMember = memberRepository.save(member);

        publisher.publishEvent(new MemberRegistrationApplicationEvent(this, savedMember));
        return savedMember;
    }

    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Member updateMember(Member member){
        Member findMember = findVerifiedMember(member.getId());

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));
        return memberRepository.save(findMember);
    }

    public void deleteMember(int id){
        Member findMember = findVerifiedMember(id);
        memberRepository.delete(findMember);

    }

    private void verifiedExistsEmail(String email){
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent()){
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
        }
    }
    @Transactional(readOnly = true)
    public Member findVerifiedMember(int id){
        Optional<Member> optionalMember = memberRepository.findById(id);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }
}
