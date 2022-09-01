package com.codestates.stackoverflowclone.v1.tag.dto.response;

import com.codestates.stackoverflowclone.v1.tag.Tag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class TagDto {

    @Getter @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ResponseDto {

        private String tagName;
        private int usageCount;

        public static List<ResponseDto> tagToResponseDto(List<Tag> tags) {
            return tags.stream()
                    .map(tag -> new ResponseDto(tag.getName(), tag.getUsageCount()))
                    .collect(Collectors.toList());
        }
    }
}
