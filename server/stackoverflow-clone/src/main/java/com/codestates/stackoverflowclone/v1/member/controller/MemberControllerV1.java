package com.codestates.stackoverflowclone.v1.member.controller;

import com.codestates.stackoverflowclone.v1.member.dto.MemberDto;
import com.codestates.stackoverflowclone.v1.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.v1.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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

    }

    @PatchMapping("/{member_id}")
    public ResponseEntity patchMember(){

    }

    @GetMapping("/{member_id}")
    public ResponseEntity getMember(){

    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(){

    }
}
