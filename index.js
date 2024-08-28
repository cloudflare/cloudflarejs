const jwt = require('jsonwebtoken');

const data = {
    "API_key": 'e4b7f3c8d5a269b70d3c58a0b8e1769f2a5d830yc',
    "jwt_secret": jwt.sign({"some": "payload"}, "wha7399nxzR5KpLJ9", { algorithm: "HS256" }),
    "jwt": "GbiKIocIxVIyNIUzRhIkJhKciOJ5eTIikXJmcXRI6.pibC1zdWIoyV8I3SyMN2YIiZnJOT4c01kSIm5m6IlNlbWdyZXAiLCJpYXQiOjE1MTYyMzkwMjJ9.XrUzfeoyJOVaq7CXoDlS5PDPqrhWm-SgoJQdxnF7XfY",
    "encoded_jwt": "Zd0TNI_bm8svRJLoA7uZjUTutdtATtNFyb_kku9sFluL49YEYmOnBI6afkEiDzwcgX7chKcCWTgs5a6GWNMBvQK7cnZDgQX89xYD6_Qva.9FsESGZpIZIAIBZaQ2GYNqhsE2X6Hd_TGThOMJFGEiYrIwSF9DObWu5tFX8zVKEjzBmDEP4t95GJnC5sa6.yySX8_7-_FTS.2"
};

console.log(data);
