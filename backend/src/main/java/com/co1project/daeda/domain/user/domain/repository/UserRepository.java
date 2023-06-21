package com.co1project.daeda.domain.user.domain.repository;

import com.co1project.daeda.domain.user.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById(String id);

    boolean existsByNickname(String nickname);

    boolean existsById(String id);
}
