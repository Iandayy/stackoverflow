package com.codestates.stackoverflowclone.v1.member.service;

import com.codestates.stackoverflowclone.v1.member.entity.Member;
import com.codestates.stackoverflowclone.v1.exception.BusinessLogicException;
import com.codestates.stackoverflowclone.v1.exception.ExceptionCode;
import com.codestates.stackoverflowclone.v1.member.helper.event.MemberRegistrationApplicationEvent;
import com.codestates.stackoverflowclone.v1.member.repository.MemberRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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

    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public MemberService(MemberRepository memberRepository, ApplicationEventPublisher publisher, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.memberRepository = memberRepository;
        this.publisher = publisher;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public Member createMember(Member member){
        verifiedExistsEmail(member.getEmail());
        Member savedMember = memberRepository.save(member);
        member.setPassword(bCryptPasswordEncoder.encode(member.getPassword()));
        member.setRoles("ROLE_USER");

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

    public Page<Member> findMembers(int page, int size){
        return memberRepository.findAll(PageRequest.of(page,size,
                Sort.by("createdAt").descending()));
    }

    @Transactional(readOnly = true)
    public Member searchMember(String userName){
        return findMember(userName);
    }

    @Transactional(readOnly = true)
    private Member findMember(String userName) {
        Optional<Member> optionalMember = memberRepository.findByName(userName);
        Member findMember = optionalMember.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    private void verifiedExistsEmail(String email){
        Optional<Member> member = Optional.ofNullable(memberRepository.findByEmail(email));
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
