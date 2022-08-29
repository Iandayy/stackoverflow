package com.codestates.stackoverflowclone.v1.member.mapper;

import com.codestates.stackoverflowclone.v1.member.dto.MemberDto;
import com.codestates.stackoverflowclone.v1.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {

    Member memberPostToMember(MemberDto.Post requestBody);

    Member memberPatchToMember(MemberDto.Patch requestBody);

    MemberDto.Response memberToMemberResponse(Member member);
}
