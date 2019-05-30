package com.gobike.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "users")
@Getter
@Setter
public class User {
    @Id
    private String id;
    @Indexed
    private String phoneNum;
    private Double deposit;
    private Integer status;
    private Date regDate;
    private String nickName;
    private String name;
    private String idNum;
}
