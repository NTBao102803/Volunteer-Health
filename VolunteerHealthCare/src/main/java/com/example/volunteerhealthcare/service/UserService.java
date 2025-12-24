package com.example.volunteerhealthcare.service;

import com.example.volunteerhealthcare.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    Optional<User> findByEmail(String email);
    List<User> findAll();
    Optional<User> findById(long id);
    User save(User user);
    User update(User user);
    void delete(long id);
}
