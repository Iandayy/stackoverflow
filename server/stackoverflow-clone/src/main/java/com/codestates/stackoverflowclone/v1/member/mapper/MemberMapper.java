package com.codestates.stackoverflowclone.v1.member.mapper;

import com.codestates.stackoverflowclone.v1.member.dto.MemberDto;
import com.codestates.stackoverflowclone.v1.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {

    Member memberPostToMember(MemberDto.Post requestBody);

    Member memberPatchToMember(MemberDto.Patch requestBody);


    default MemberDto.Response memberToMemberResponse(Member member){
        if( member == null){
            return null;
        }

        String email = null;
        String name = null;
        int memberId = 0;

        email = member.getEmail();
        name = member.getName();
        memberId = member.getId();

        int memberID = 0;

        MemberDto.Response response = new MemberDto.Response(memberId, email, name);
        return response;
    }

    List<MemberDto.Response> memberToMemberResponses(List<Member> members);
}
