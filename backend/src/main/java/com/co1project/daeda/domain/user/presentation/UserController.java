package com.co1project.daeda.domain.user.presentation;

import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.domain.user.presentation.dto.request.UserLoginRequestDto;
import com.co1project.daeda.domain.user.presentation.dto.request.UserSignupRequestDto;
import com.co1project.daeda.domain.user.presentation.dto.response.UserTokenResponseDto;
import com.co1project.daeda.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public User signup(@RequestBody UserSignupRequestDto request) {
        return userService.signup(request);
    }

    @PostMapping("/login")
    public UserTokenResponseDto login(@RequestBody UserLoginRequestDto request) {
        return userService.login(request);
    }

}
