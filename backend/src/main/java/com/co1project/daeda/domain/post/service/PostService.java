package com.co1project.daeda.domain.post.service;

import com.co1project.daeda.domain.post.domain.Post;
import com.co1project.daeda.domain.post.domain.repository.PostRepository;
import com.co1project.daeda.domain.post.presentation.request.PostRegisterRequest;
import com.co1project.daeda.domain.post.presentation.response.PostResponse;
import com.co1project.daeda.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public Post register(PostRegisterRequest request, User user) {
        Post post = request.toEntity();
        post.injectUser(user);

        return post;
    }

    public PostResponse findPostByPostId(Long postId) {
        postRepository.
    }
}
