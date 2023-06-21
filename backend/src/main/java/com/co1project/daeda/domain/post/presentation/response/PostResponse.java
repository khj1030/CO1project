package com.co1project.daeda.domain.post.presentation.response;

import com.co1project.daeda.domain.post.domain.Post;
import com.co1project.daeda.global.jpa.Chrono;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostResponse {
    private Long postId;

    private String title;

    private String body;

    private String createDate;

    private String modifiedDate;

    @Builder
    public PostResponse(Post post) {
        this.postId = post.getPostId();
        this.title = post.getTitle();
        this.body = post.getBody();
        this.createDate = Chrono.timesAgo(post.getCreateDate());
        this.modifiedDate = Chrono.timesAgo(post.getModifiedDate());
    }
}
