package com.co1project.daeda.domain.post.presentation.response;

import com.co1project.daeda.domain.user.domain.User;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CommentResponse {
    private String body;

    private User user;

    @Builder
    public CommentResponse(String body, User user) {
        this.body = body;
        this.user = user;
    }
}
