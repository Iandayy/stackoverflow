package com.codestates.stackoverflowclone.v1.tag;

import com.codestates.stackoverflowclone.v1.tag.dto.response.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;
import java.util.List;

import static com.codestates.stackoverflowclone.v1.tag.dto.response.TagDto.*;
import static com.codestates.stackoverflowclone.v1.tag.dto.response.TagDto.ResponseDto.*;
import static org.springframework.http.HttpStatus.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/tags")
public class TagController {

    private final TagService tagService;

    //태그 전체조회
    @GetMapping
    public ResponseEntity findAll(@Positive @RequestParam int page,
                                  @Positive @RequestParam int size) {
        Page<Tag> tagPage = tagService.findAll(page, size);
        List<Tag> content = tagPage.getContent();

        List<ResponseDto> response = tagToResponseDto(content);
        return new ResponseEntity(new MultiResponseDto<>(response, tagPage), OK);
    }

    //태그 검색
    @GetMapping("/search")
    public ResponseEntity search(@RequestParam String name,
                                 @Positive @RequestParam int page,
                                 @Positive @RequestParam int size) {
        Page<Tag> tagPage = tagService.search(name, page, size);
        List<Tag> content = tagPage.getContent();

        List<ResponseDto> response = tagToResponseDto(content);
        return new ResponseEntity(new MultiResponseDto<>(response, tagPage), OK);
    }
}
