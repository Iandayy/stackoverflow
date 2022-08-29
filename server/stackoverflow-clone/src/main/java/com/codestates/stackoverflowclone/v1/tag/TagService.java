package com.codestates.stackoverflowclone.v1.tag;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TagService {

    private final TagRepository tagRepository;

    //태그 등록
    @Transactional
    public Tag register(String name) {

        Optional<Tag> findTag = tagRepository.findByName(name);

        //동일한 태그가 존재할 경우 사용횟수만 증가
        if (findTag.isPresent()) {
            findTag.get().addUsageCount();
            return findTag.get();
        }
        //새로운 태그일 경우 저장
        else {
            Tag newTag = new Tag(name, 1);
            return tagRepository.save(newTag);
        }
    }

    //태그 삭제
//    @Transactional
//    public void delete(String name) {
//        tagRepository.delete(
//                tagRepository.findByName(name).
//                        orElseThrow(() -> new RuntimeException("존재하지 않는 태그입니다.")));
//    }


    //태그 전체조회
    public List<Tag> findAll() {   ///////페이징 여부
        return tagRepository.findAll();
    }

    //태그 검색

}
