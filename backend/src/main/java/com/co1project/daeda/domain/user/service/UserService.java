package com.co1project.daeda.domain.user.service;

import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.domain.user.domain.repository.UserRepository;
import com.co1project.daeda.domain.user.exception.UserIdExistsException;
import com.co1project.daeda.domain.user.exception.UserIdNotFoundAndPasswordNotFoundException;
import com.co1project.daeda.domain.user.exception.UserNicknameExistsException;
import com.co1project.daeda.domain.user.presentation.dto.request.UserLoginRequestDto;
import com.co1project.daeda.domain.user.presentation.dto.request.UserSignupRequestDto;
import com.co1project.daeda.domain.user.presentation.dto.response.UserTokenResponseDto;
import com.co1project.daeda.global.lib.jwt.JwtProvider;
import com.co1project.daeda.global.lib.jwt.TokenType;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final JwtProvider jwtProvider;
    private final UserRepository userRepository;

    public User signup(UserSignupRequestDto request) {
        User user = request.toEntity();

        if (userRepository.existsById(request.getId())) {
            throw UserIdExistsException.EXCEPTION;
        }

        if (userRepository.existsByNickname(request.getNickname())) {
            throw UserNicknameExistsException.EXCEPTION;
        }

        userRepository.save(user);
        return user;
    }

    public UserTokenResponseDto login(UserLoginRequestDto request) {

        User user = userRepository.findById(request.getId())
                .orElseThrow(() -> UserIdNotFoundAndPasswordNotFoundException.EXCEPTION);

        if(!request.getPassword().equals(user.getPassword())) {
            throw UserIdNotFoundAndPasswordNotFoundException.EXCEPTION;
        }

        return new UserTokenResponseDto(
                jwtProvider.createToken(user, TokenType.ACCESS),
                jwtProvider.createToken(user, TokenType.REFRESH)
        );
    }

}
