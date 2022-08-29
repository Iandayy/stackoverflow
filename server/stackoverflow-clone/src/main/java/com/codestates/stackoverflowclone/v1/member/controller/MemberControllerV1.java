package com.codestates.stackoverflowclone.v1.member.controller;

import com.codestates.stackoverflowclone.v1.member.dto.MemberDto;
import com.codestates.stackoverflowclone.v1.member.entity.Member;
import com.codestates.stackoverflowclone.v1.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.v1.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/v1/members")
@Slf4j
public class MemberControllerV1 {

    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberControllerV1(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody){
        Member member = memberMapper.memberPostToMember(requestBody);

        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = memberMapper.memberToMemberResponse(createdMember);

        return new ResponseEntity<>("회원가입완료", HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity patchMember(@PathVariable("id") @Positive int id,
                                      @Valid @RequestBody MemberDto.Patch requestBody){
        requestBody.setId(id);

        Member member = memberService.updateMember(memberMapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>("수정완료", HttpStatus.OK);
    }

    @GetMapping("/login")
    public ResponseEntity loginMember(@Valid @RequestBody MemberDto.Login requestBody){

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteMember(@PathVariable("id")@Positive int id){
        memberService.deleteMember(id);

        return new ResponseEntity<>("회원탈퇴완료",HttpStatus.NO_CONTENT);
    }
}
