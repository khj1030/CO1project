package com.co1project.daeda.domain.user.presentation.dto.request;

import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.domain.user.enums.Type;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserSignupRequestDto {
    private String id;

    private String password;

    private String nickname;

    private String email;

    private String tel_number;

    private Type type;

    public User toEntity() {
        return User.builder()
                .id(id)
                .password(password)
                .nickname(nickname)
                .email(email)
                .tel_number(tel_number)
                .type(type)
                .build();
    }
}
