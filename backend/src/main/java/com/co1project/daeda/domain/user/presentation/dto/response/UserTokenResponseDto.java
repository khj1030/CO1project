package com.co1project.daeda.domain.user.presentation.dto.response;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor @AllArgsConstructor
public class UserTokenResponseDto {
    private String accessToken;
    private String refreshToken;
}
