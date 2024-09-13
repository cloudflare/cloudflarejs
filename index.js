const jwt = require('jsonwebtoken');

const data = {
    "API_key": 'b8dec9a39c5672687a0e734bb0a87a3d867583bxd',
    "jwt_secret": jwt.sign({"some": "payload"}, "cA2nM8vTzR5KpLJ9", { algorithm: "HS256" }),
    "jwt": "xKihbGciOiJIUzI1NiIsInR5cCI6Ikp.XVCJ8eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNlbWdyZXAiLCJpYXQiOjE1MTYyMzkwMjJ9.XrUzfeoyJOVaq7CXoDlS5PDPqrhWm-SgoJQdxnF7XfY",
    "encoded_jwt": "Zd0TNI_bm8svRJLoA7uZjUTutdtATtNFyb_kku9sFluL49YEYmOnBI6afkEiDzwcgX7chKcCWTgs5a6GWNMBvQK7cnZDgQX89xYD6_Qva.9FsESGZpIZIAIBZaQ2GYNqhsE2X6Hd_TGThOMJFGEiYrIwSF9DObWu5tFX8zVKEjzBmDEP4t95GJnC5sa6.yySX8_7-_FTS.2"
};

console.log(data);
