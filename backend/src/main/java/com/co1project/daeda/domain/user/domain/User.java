package com.co1project.daeda.domain.user.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table(name = "Uesr")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String id;

    private String password;

    private String nickname;

    private String email;

    private String tel_number;

    @Builder
    public User(String id, String password, String nickname, String email, String tel_number) {
        this.id = id;
        this.password = password;
        this.nickname = nickname;
        this.email = email;
        this.tel_number = tel_number;
    }
}
