package com.gobike.service;

import com.gobike.model.User;

public interface UserService {
    boolean sendMsg(String countryCode, String phoneNum);
    boolean verify(String phoneNum, String verifyCode);
    void register(User user);
    void update(User user);
}
