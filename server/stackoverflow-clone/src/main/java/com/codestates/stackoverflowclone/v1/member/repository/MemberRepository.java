package com.codestates.stackoverflowclone.v1.member.repository;

import com.codestates.stackoverflowclone.v1.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {
//
//    Optional<Member> findByTag(String tag);
    Optional<Member> findByName(String name);
    Member findByEmail(String email);
}
