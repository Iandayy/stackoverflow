package com.codestates.stackoverflowclone.v1.tag.repository;


import com.codestates.stackoverflowclone.v1.tag.Tag;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Integer> {

    Page<Tag> findByNameContains(String name, Pageable pageable);
    Optional<Tag> findByName(String name);
}
