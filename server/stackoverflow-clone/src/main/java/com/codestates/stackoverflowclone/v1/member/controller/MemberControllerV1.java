package com.codestates.stackoverflowclone.v1.member.controller;

import com.codestates.stackoverflowclone.v1.member.dto.MemberDto;
import com.codestates.stackoverflowclone.v1.member.dto.response.MultiResponseDto;
import com.codestates.stackoverflowclone.v1.member.dto.response.SingleResponseDto;
import com.codestates.stackoverflowclone.v1.member.entity.Member;
import com.codestates.stackoverflowclone.v1.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.v1.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

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

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity patchMember(@PathVariable("id") @Positive int id,
                                      @Valid @RequestBody MemberDto.Patch requestBody){
        requestBody.setId(id);

        Member member = memberService.updateMember(memberMapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(memberMapper.memberPatchToMember(requestBody)), HttpStatus.OK);
    }



    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Page<Member> pageMembers = memberService.findMembers(page -1, size);
        List<Member> members = pageMembers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(memberMapper.memberToMemberResponses(members), pageMembers), HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity getMember(String username){
        Member member = memberService.searchMember(username);
        return new ResponseEntity(new SingleResponseDto<>(memberMapper.memberToMemberResponse(member)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteMember(@PathVariable("id")@Positive int id){
        memberService.deleteMember(id);

        return new ResponseEntity<>("회원탈퇴완료",HttpStatus.NO_CONTENT);
    }
}
