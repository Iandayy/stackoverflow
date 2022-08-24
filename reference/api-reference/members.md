# Members

{% hint style="info" %}
**Good to know:** All the methods shown below are synced to an example Swagger file URL and are kept up to date automatically with changes to the API.
{% endhint %}

## User actions

 swagger method="post" path="/v1/members" baseUrl="https://localhost:8080" summary="회원가입" 
{% swagger-description %}
POST /v1/members&#x20;

HTTP/1.1 Content-Type: application/json;charset=UTF-8&#x20;

Accept: application/json Content-Length: 88&#x20;

Host: localhost:8080

{

&#x20;   "email" : "kcd@gmail.com",&#x20;

&#x20;   "password" : "1q2w3e4r!",&#x20;

&#x20;   "name" : "kimcoding"   &#x20;

}
{% endswagger-description %}

{% swagger-parameter in="body" name="email" required="true" %}
member_email
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
password
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" required="true" %}
member_name
{% endswagger-parameter %}

{% swagger-response status="201: Created" description="" %}
```javascript
{
    "회원가입완료"
}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/v1/members/login" baseUrl="https://localhost:8080" summary="회원로그인" %}
{% swagger-description %}
POST /v1/members/login&#x20;

HTTP/1.1 Content-Type: application/json;charset=UTF-8&#x20;

Accept: application/json Content-Length: 88&#x20;

Host: localhost:8080

{

&#x20;   "email" : "kcd@gmail.com",&#x20;

&#x20;   "password" : "1q2w3e4r!"&#x20;

}
{% endswagger-description %}

{% swagger-parameter in="body" name="email" required="true" %}
member_email
{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}
password
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/v1/members/logout" baseUrl="https://localhost:8080" summary="회원로그아웃*" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="patch" path="/v1/members/{member_id}" baseUrl="https://localhost:8080" summary="회원정보수정" %}
{% swagger-description %}
PATCH /v1/members/{member\_id}&#x20;

HTTP/1.1 Content-Type: application/json;charset=UTF-8&#x20;

Accept: application/json Content-Length: 88&#x20;

Host: localhost:8080

{

&#x20;   "password" : "1q2w3e4r!",&#x20;

&#x20;   "name" : "kimcoding"   &#x20;

}
{% endswagger-description %}

{% swagger-parameter in="body" name="password" %}
password
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" %}
member_name
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="patch" path="/v1/members/{member_id}" baseUrl="htts://localhost:8080" summary="회원프로필수정 *" %}
{% swagger-description %}
PATCH /v1/members/{member\_id}&#x20;

HTTP/1.1 Content-Type: application/json;charset=UTF-8&#x20;

Accept: application/json Content-Length: 88&#x20;

Host: localhost:8080

{  &#x20;

}
{% endswagger-description %}
{% endswagger %}

{% swagger method="delete" path="/v1/members/{member_id}" baseUrl="https://localhost:8080" summary="회원탈퇴" %}
{% swagger-description %}
DELETE /v1/members/{member\_id}

HTTP/1.1 Content-Type: application/json;charset=UTF-8&#x20;

Accept: application/json Content-Length: 88&#x20;

Host: localhost:8080

{

&#x20;   "password" : "1q2w3e4r!"

}
{% endswagger-description %}

{% swagger-parameter in="body" required="true" name="password" %}
password
{% endswagger-parameter %}
{% endswagger %}
