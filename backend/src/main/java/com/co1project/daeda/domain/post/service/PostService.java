package com.co1project.daeda.domain.post.service;

import com.co1project.daeda.domain.post.domain.Comment;
import com.co1project.daeda.domain.post.domain.Post;
import com.co1project.daeda.domain.post.domain.repository.CommentRepository;
import com.co1project.daeda.domain.post.domain.repository.PostRepository;
import com.co1project.daeda.domain.post.exception.PostNotFoundException;
import com.co1project.daeda.domain.post.presentation.request.PostRegisterRequest;
import com.co1project.daeda.domain.post.presentation.response.PostCommentResponse;
import com.co1project.daeda.domain.post.presentation.response.PostListResponse;
import com.co1project.daeda.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    public Post register(PostRegisterRequest request, User user) {
        Post post = request.toEntity();
        post.injectUser(user);

        return post;
    }

    public PostListResponse findPostByAll() {
        Pageable pageable = PageRequest.of(0, 10, Sort.Direction.DESC, "postId");

        Page<Post> responses = postRepository.findAll(pageable);

        return new PostListResponse(responses.getContent());
    }

    public PostCommentResponse findPostByPostId(Long postId) {
        Post post = postRepository.findByPostId(postId)
                .orElseThrow(() -> PostNotFoundException.EXCEPTION);

        List<Comment> comments =  commentRepository.findAllByPostPostId(postId);

        return new PostCommentResponse(post, comments);
    }
}
